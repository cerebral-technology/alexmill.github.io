---
layout: post
title: "PubsubHubbub Authentication with Python SHA1 Signature"
categories: blog
author: "Alex Miller"
meta:
description: "Tips for how to authenticate your PubsubHubbub content using Python. I use Flask in the examples, but they are helpful for Django users as well."
tags: template
thumbnail: /img/pubsub.jpg
source: default
syntax: true
---

This post will describe my solution for authenticating content according to the [PubsubHubub spec](https://superfeedr-misc.s3.amazonaws.com/pubsubhubbub-core-0.4.html). I use Python Flask and [Superfeedr](https://superfeedr.com) as my PubsubHubbub RSS feed hub, but this should be useful even if you use another web app framework or a different hub.

When I first read the spec for "Authenticated Content Distribution", it sounded simple enough:

> If the subscriber supplied a value for hub.secret in their subscription request, the hub MUST generate an HMAC signature of the payload and include that signature in the request headers of the content distribution request. The X-Hub-Signature header's value MUST be in the form sha1=signature where signature is a 40-byte, hexadecimal representation of a SHA1 signature [RFC3174]. The signature MUST be computed using the HMAC algorithm [RFC2104] with the request body as the data and the hub.secret as the key.

> When subscribers receive a content distribution request with the X-Hub-Signature header specified, they SHOULD recompute the SHA1 signature with the shared secret using the same method as the hub. If the signature does not match, subscribers MUST still return a 2xx success response to acknowledge receipt, but locally ignore the message as invalid. Using this technique along with HTTPS [RFC2818] for subscription requests enables simple subscribers to receive authenticated notifications from hubs without the need for subscribers to run an HTTPS [RFC2818] server.

However, when I got down to actually implementing it, I didn't find a ton of links out there dealing with this specific issue in Python. I wanted to put my solution out there so no one has to re-invent the wheel. Let's not get any further without some code. Here are some imports you may not already have included in your app that I'll be using below:

```python
import requests
from requests.auth import HTTPBasicAuth
import hashlib
import json
import hmac
from urllib.parse import urlencode

# Just a random, hard-to-guess string of characters (I use http://passwordsgenerator.net/)
hub_secret_salt = "pFuG54jE9bWqGb2rxSPk7Zcfc4tBVe"
```

In my app, whenever I add a feed through Superfeedr's API, I include `hub.secret` header that is specific to each feed. There are probably a number of ways to generate this secret, but the most important thing is that *can recreate this secret when the hub notifies your server*. For me, each feed in my database gets an ID (`feed_id` below) which determines this secret, as well as the endpoint where I get notifed of a feed update.

I first generate a secret key that is dependent on my `feed_id` and my `hub_secret_salt` from above.

```python
feed_secret_key = hashlib.sha224((feed_id + hub_secret_salt).encode("utf-8")).hexdigest()
```

Then I make the subscription request, using this `feed_secret_key` as my `hub.secret` header.

```python
headers = {
    "Accept": "application/json"
}
parameters = {
    "hub.mode": "subscribe",
    "hub.topic": feed_url,
    # I use my feed_id in the callback URL so I can
    # identify and authenticate the callback later.
    "hub.callback": "http://www.myserverdomain.com/notify?feed_id=" + feed_id,
    "hub.secret": feed_secret_key,
    "format": "json",
    "retrieve": "true"
}
r = requests.post(
    "https://push.superfeedr.com?" + urlencode(parameters),
    headers = headers,
    auth = HTTPBasicAuth(<username>, <key>)
)

JSON = json.loads(r.text)
if JSON["status"]["code"] != 200:
    ## ERROR HANLDING

## Success! Do stuff with the response
...
```

The next step is to set up your endpoint where the hub will ping your server when your feed updates. The authentication method depends on basic public-private key cryptography where both parties calculate a `X-Hub-Signature` and confirm they match. Quoting from the spec:

> The signature MUST be computed using the HMAC algorithm [RFC2104] with the request body as the data and the hub.secret as the key.

Thus the "public" key here is the request body, and the "private" key is the `hub.secret` you provided when you subscribed (`feed_secret_key` above).

You may not have this issue if you don't use Python Flask, but I had trouble getting the raw request body data. Fortunately, [this answer](http://stackoverflow.com/a/11163649/2628402) on Stack Overflow gave me a solution that worked for me. After I define my `app = Flask(__name__)` variable, I use the following code:

```python
class WSGICopyBody(object):
    def __init__(self, application):
        self.application = application

    def __call__(self, environ, start_response):

        from io import BytesIO
        length = environ.get('CONTENT_LENGTH', '0')
        length = 0 if length == '' else int(length)

        body = environ['wsgi.input'].read(length)
        environ['body_copy'] = body
        environ['wsgi.input'] = BytesIO(body)

        # Call the wrapped application
        app_iter = self.application(environ,self._sr_callback(start_response))

        # Return modified response
        return app_iter

    def _sr_callback(self, start_response):
        def callback(status, headers, exc_info=None):

            # Call upstream start_response
            start_response(status, headers, exc_info)
        return(callback)

app.wsgi_app = WSGICopyBody(app.wsgi_app)
```

You can then access a request's raw content by calling `request.environ["body_copy"]`. Now on to the actual authentication methods.

```python

# This is the hub.callback header you provided when you subscribed.
@app.route('/notify', methods=['POST'])
def feed_notify():

    # Reading my feed_id from URL parameters
    if "feed_id" not in request.args.keys():
        return(jsonify({"status":"error", "message":"Missing required URL parameters: 'feed_id'"}), 400)
    feed_id = request.args["feed_id"]

    # Validate push according to PubsubHubbub spec
    if "X-Hub-Signature" not in request.headers.keys():
        return(jsonify({"status":"AUTHORIZATION FAILURE: missing headers"}), 422)
    superfeedr_signature = request.headers["X-Hub-Signature"]

    # I recalculate my hub.secret based on the feed_id
    feed_secret_key = hashlib.sha224((feed_id + hub_secret_salt).encode("utf-8")).hexdigest().encode("utf-8")

    # Get the raw request body
    request_body = request.environ["body_copy"]

    # Calculate my version of what to expect as the "X-Hub-Signature"
    # using the HMAC algorithm
    my_signature = hmac.new(feed_secret_key, request_body, hashlib.sha1).hexdigest()

    # According to spec, you are to return a 202 if authentication fails
    if "sha1="+my_signature != superfeedr_signature:
        return(jsonify({"status":"AUTHORIZATION FAILURE"}), 202)

    # Success! Do stuff with response
    ...
```

If all went well, `"sha1="+my_signature` should equal `request.headers["X-Hub-Signature"]`. I hope this will help out some of my fellow Pythonistas.
