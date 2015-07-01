---
layout: post
title: "Bing Azure API Authentication with Python 3 Requests Module"
categories: blog
author: "Alex Miller"
meta:
source: default
---

Since Bing's documentation is essentially non-existent, I wanted to give my Python users an SEO-friendly, easily findable way of getting started with [Bing's Search API](https://datamarket.azure.com/dataset/bing/search).

If you're on this page, you've probably seen this error about 10 times by now:

## "The authorization type you provided is not supported.  Only Basic and OAuth are supported"

Below is a code snippet that should help (using Python 3.3):

```python
#!/usr/local/bin/python3.3
# Gist available at: https://gist.github.com/alexmill/cd6ec9ebf1e5ee5fd314
# From article hosted at: http://alex.miller.im/posts/bing-azure-api-authentication-python-requests/

from urllib.parse import quote_plus
import json
import requests

def bing_search(query):
    # Your base API URL
    url = "https://api.datamarket.azure.com/Bing/Search/v1/Web"
    
    # Query parameters. Don't try using urlencode here.
    # Don't ask why, but Bing needs the "$" in front of its parameters.
    # The '$top' parameter limits the number of search results.
    url += "?$format=json&$top=10&Query=%27{}%27".format(quote_plus(query))
    
    r = requests.get(url, auth=("","YOUR_AZURE_API_PRIMARY_ACCOUNT_KEY"))
    resp = json.loads(r.text)
    return(resp)
```

And there you have it. Hope that helps!
