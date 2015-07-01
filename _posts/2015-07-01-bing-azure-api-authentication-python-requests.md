---
layout: post
title: "Bing Azure API Authentication with Python 3 Requests Module"
categories: blog
author: "Alex Miller"
meta:
source: default
---

I recently had the misfortune of needing to use the [Bing Search API](https://datamarket.azure.com/dataset/bing/search). I say "misfortune" because of how poorly the API is documented. I'm still not sure if there exists an official, publicly accessible documentation that detials the spec on how to use the API (neither Google nor Bing returned one). I had to piece together my solution from severl different websites, so I wanted to consolidate this information here and give fellow Python users a SEO-friendly, easily findable way of getting started with Bing's Search API.

If you're on this page, you've probably seen this error about 10 times by now:

## "The authorization type you provided is not supported.  Only Basic and OAuth are supported"

Well, below is the code snippet that will solve all your problems (using Python 3.3):

```python
# Gist available at:
# From article hosted at: 

from urllib.parse import quote_plus
import json
import requests
import base64

def bing_search(query):
    # Your primary account key can be found here: https://datamarket.azure.com/account
    credentials = base64.b64encode(b":YOUR_AZURE_API_PRIMARY_ACCOUNT_KEY").decode()
    auth = 'Basic {}'.format(credentials)
    
    # Don't try using urlencode here. Don't ask why, but Bing needs the "$" in front of its parameters.
    # The '$top' parameter limits the number of search results.
    url = "https://api.datamarket.azure.com/Bing/Search/v1/Web?$format=json&$top=10&Query=%27{}%27".format(quote_plus(query))
    
    # Again, don't try doing this the normal way you might try, i.e., auth=(key,key).
    # It just doesn't work!
    r = requests.get(url, headers={"Authorization": auth})
    
    # If you're using '$format=json' like me...
    resp = json.loads(r.text)
    return(resp)
```

And there you have it. Hope that helps!
