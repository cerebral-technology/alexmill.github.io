---
layout: post
title: "Python 3 Feedfinder: Detecting Feeds on Websites in Python 3"
categories: blog
author: "Alex Miller"
meta:
tags: template
source: default
---

I recently built an RSS feed reader that plugs into [Yo](http://justyo.co) called [YOFEED](http://www.yofeed.rocks). After monitoring my usage logs, I noticed several people tried to submit links of plain websites, rather than specifying a valid RSS feed for me to parse. Rather than losing my potential customers, I decided to write a script to detect RSS feeds given a plain web URL.

### The Problem: feedfinder.py was not written for Python 3

It turns out I wasn't the first person to come across this problem. Aaron Swartz (RIP) wrote his own script called [feedfinder.py](http://www.aaronsw.com/2002/feedfinder/) which does this exact same thing. Problem is: this was written for Python 2.

After fighting a losing battle trying to deal with Python's 2to3 conversion tool, I realized I'd already wasted more time trying to port this old script than it would take me to write a new one. So, lo and behold, here it is.

### The Solution: Write my own script!

I wanted my script to be pretty thorough, which means
    1. I wouldn't miss any legitimate feeds that were on a website and
    2. I wouldn't include any links that were not valid RSS feeds.

This script does have some non-standard dependencies, both of which you are probably already using if you're doing anything related to web scraping or feed reading: [feedparser](https://pypi.python.org/pypi/feedparser) and [beautifulsoup4](https://pypi.python.org/pypi/beautifulsoup4).

Here's the solution I came up with:

```python
#!/usr/local/bin/python3.3
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
    if len(feed_urls) > 1:
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

Feel free to [fork this gist on GitHub](https://gist.github.com/alexpmil/9bc634240531d81c3abe) or [download the raw file](https://gist.githubusercontent.com/alexpmil/9bc634240531d81c3abe/raw/f247bf31265b7b19e7939549cafce34efacdd324/python3feedfinder).