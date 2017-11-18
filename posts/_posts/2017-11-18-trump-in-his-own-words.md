---
layout: post
title: "Trump, in his own words"
meta: "A data-driven look at Trump’s changing priorities over the course of his 2016 presidential campaign"
categories: ["blog", "medium"]
author: "Alex Miller"
source: default
syntax: false
date: 2017-11-17
---

How did Donald Trump’s priorities change over the course of his 2016 presidential campaign? Did he get stronger on immigration as the campaign drew on? Or did he shift his focus to the economy? When did he start talking about Hillary’s emails?
These are all questions that data can help us answer. The American Presidency Project at UC Santa Barbara has a huge catalogue of transcripts from dozens political figures dating back several decades. Among these are 60 campaign speeches from Donald Trump, from the announcement of his candidacy on June 16, 2015 through his acceptance speech on November 9, 2016. They also have transcripts of the 11 Republican primary and 3 general election debates. 
I’ve taken the liberty of scraping these transcripts and putting them in a semi-structured database that can be used for text analysis (GitHub repo). For the debates, I’ve done some light processing to include only the portions of the transcript attributed to Trump himself. I then set out to plot how Trump’s use of language evolved over the course of the campaign. To do this, I used fairly simple language analysis techniques to determine the frequency with which Trump referred to certain topics over time. I could plot just the number of times that Trump mentions certain words, but both the number and length of Trump’s speeches vary over time. 
[chart here]
As expected, Trump started giving many more speeches in the last few months of the campaign. So rather than plotting raw word counts, I’m going to show you plots of how often Trump used certain words, as a proportion of all the words I observe in my dataset.
