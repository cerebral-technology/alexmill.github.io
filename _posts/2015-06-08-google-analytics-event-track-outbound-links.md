---
layout: post
title: "Track Outbound Links with Google Analytics Event Tracking"
categories: blog
author: "Alex Miller"
meta:
description: "A super easy-to-install copy-paste script that will track all outbound links on your website as a Google Analytics event. Click to read more >>"
tags: template
source: default
---

Below is a super easy-to-install script that will track clicks on outbound links from your website using Google Analytics event tracking.

<script src="https://gist.github.com/alexpmil/f4d668cb398ae83d78db.js"></script>

You can access this data in your Google Analytics event tracking dashboard (Behavior > Events). This script will send data to GA in the following format (though you can easily change it):

| GA Field    | Category       | Action                       | Label                                                                              |
| ----------- | -------------- | ---------------------------- | ---------------------------------------------------------------------------------- |
| Description | Cateogry title | URL of outbound link         | URL of page on which link was clicked                                              |
| Code        | 'Outbound Link'| $(this).attr("href")         | 'From page: '.concat(document.URL)                                                 |
| Example     | Outbound Link  | https://github.com/alexpmil  |  From page: http://alex.miller.im/posts/google-analytics-event-track-outbound-links |
