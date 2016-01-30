---
layout: post
title: Using rel="canonical" Tag on Medium for SEO
categories: ["blog"]
author: "Alex Miller"
meta: Should you cross-post your blog content to Medium? YES! But do it the right way using rel="canonical" to maximize your content's SEO value.
description: Should you cross-post your blog content to Medium? YES! But do it the right way using rel="canonical" to maximize your content's SEO value.
source: default
syntax: true
hero_image: /img/medium-seo.jpg
---

While [Medium](https://medium.com) is a fantastic platform for readers, the jury is still out on whether it's good for writers and publishers &mdash; especially as it relates to SEO and marketing. This topic has been covered at length (both [long](https://moz.com/blog/use-hosted-blog-platforms-seo-content-distribution) and [short](https://twitter.com/randfish/status/668674305065025536)) by the Wizard of Moz, Rand Fishkin, and he makes some important points. The most important things you give up by cross-posting to Medium are:

- Don't underestimate the value of building brand affinity through content on your own website
- The possibility of retargeting ads, capturing emails, or building custom calls-to-action on syndication platforms
- The ability to get any SEO value from the links to Medium posts

## ... Or can you?

For a while, I was under the impression that you can't use `rel="canonical"` tags on Medium. It turns out that you can, albeit through a somewhat indirect mechanism. (Don't know what a `rel="canonical"` tag is? Check out Yoast's [great post](https://yoast.com/rel-canonical/).)

I recently came across [this post by Saul Carlin](https://medium.com/@saul/creating-medium-stories-via-rss-c2ac93d08288#.x7n4uvdd2) of Medium, in which he describes the process of automatically syndicating content from your blog via [IFTTT](https://ifttt.com/) and RSS. At the very bottom of the post are two sentences that mention how to configure the canonical URL for your syndicated posts. 

I had never heard of a way to set a canonical URL on Medium posts, so this naturally piqued my interest. After testing out the process (Blog → RSS → IFTTT → Medium), I was pleasantly surprised by the results. The post you're reading right now was originally posted on my blog and syndicated to Medium via IFTTT. If you'll look at the source code of the post on Medium, you'll see a canonical link tag pointing to my personal domain. 

<div style="width: 100%; text-align: center;">
<img title="rel='canonical' tags on Medium for SEO" alt="rel='canonical' tags on Medium for SEO" src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png">
</div>

## Cross-Posting Syndication and SEO Can Work Together
So what's the takeaway from this? If you're building a brand and are considering cross-posting your content on Medium, make sure you do your research and consider *all* the pros and cons of this strategy. On the other hand, if you're a lone blogger who wants to take advantage of Medium's great audience and discovery engine but don't want to sacrifice the SEO benefits of posting on your own domain &mdash; fear no longer! For people who just want to grow their potential audience without the need for any sophisticated tracking and advertising tools, the canonical link solution is exactly what you need. T