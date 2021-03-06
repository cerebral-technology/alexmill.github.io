---
layout: post
title: "Python 3 Feedfinder: Detecting RSS Feeds on Websites"
categories: blog
author: "Alex Miller"
meta:
description: "Alternative to Aaron Swartz's great feedfinder.py script for finding RSS/Atom feeds on websites given a plain URL—updated for a Python 3 world."
tags: template
thumbnail: /img/feedfinder-thumb.png
source: default
syntax: true
---

I have been working on a project where I need to extract RSS feeds from various blogs and news websites. Essentially, I want to pass a URL to my API and have it return the RSS feed associated with that domain. 

As with most things, I wasn't the first person to come across this problem. Aaron Swartz (RIP) wrote his own script called [feedfinder.py](http://www.aaronsw.com/2002/feedfinder/) which does this exact same thing. However, a major shortcoming of this script is that it's fairly dated and written for Python 2. After fighting a losing battle trying to deal with Python's 2to3 conversion tool, I realized I'd already wasted more time trying to port this old script than it would take me to write a new one.

## My Solution: Python 3 function for extracting RSS feeds from URLs

I wanted my function to be *accruate* and *thorough*, which (for me) means:

1. I wouldn't miss any legitimate feeds that were on a website and
2. I wouldn't include any links that were not valid RSS feeds.

This script does have some non-standard dependencies, both of which you are probably already using if you're doing anything related to web scraping or feed reading: [feedparser](https://pypi.python.org/pypi/feedparser) and [beautifulsoup4](https://pypi.python.org/pypi/beautifulsoup4).

I've copied my solution below, which you should be able to interpret fairly easily. I start by looking for `<link>` tags pointing to RSS feeds, then parse the page looking for any `a href`s pointing to links with "xml", "rss", or "feed" in the URL. Finally, I use `feedparser` to go through the list of possible RSS feeds and validate them to ensure that the links point to valid feeds.

```python
#!/usr/local/bin/python3.3
# python3feedfinder.py / Alex Miller / @alexpmil

import urllib.parse
import requests
import feedparser
from bs4 import BeautifulSoup as bs4


def findfeed(site):
    raw = requests.get(site).text
    result = []
    possible_feeds = []
    html = bs4(raw)
    feed_urls = html.findAll("link", rel="alternate")
    for f in feed_urls:
        t = f.get("type",None)
        if t:
            if "rss" in t or "xml" in t:
                href = f.get("href",None)
                if href:
                    possible_feeds.append(href)
    parsed_url = urllib.parse.urlparse(site)
    base = parsed.scheme+"://"+parsed_url.hostname
    atags = html.findAll("a")
    for a in atags:
        href = a.get("href",None)
        if href:
            if "xml" in href or "rss" in href or "feed" in href:
                possible_feeds.append(base+href)
    for url in list(set(possible_feeds)):
        f = feedparser.parse(url)
        if len(f.entries) > 0:
            if url not in result:
                result.append(url)
    return(result)
```

Feel free to [fork this gist on GitHub](https://gist.github.com/alexmill/9bc634240531d81c3abe) or [download the raw file](https://gist.githubusercontent.com/alexpmil/9bc634240531d81c3abe/raw/f247bf31265b7b19e7939549cafce34efacdd324/python3feedfinder).
