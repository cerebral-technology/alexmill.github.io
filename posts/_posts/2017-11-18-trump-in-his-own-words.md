---
layout: post
title: "Trump, in his own words"
meta: "A data-driven look at Trump’s changing priorities over the course of his 2016 presidential campaign"
hero: https://cdn-images-1.medium.com/max/1100/1*knlHwv0Vxg5SDZaQyurp-Q.jpeg
categories: ["blog", "medium"]
author: "Alex Miller"
source: https://towardsdatascience.com/trump-in-his-own-words-62af05ad76d4
syntax: false
date: 2017-11-17
---

**[This article is cross-posted on Medium](https://towardsdatascience.com/trump-in-his-own-words-62af05ad76d4).**

How did Donald Trump’s priorities change over the course of his 2016
presidential campaign? Did he get stronger on immigration as the campaign drew
on? Or did he shift his focus to the economy? When did he start talking about
Hillary’s emails?

These are all questions that data can help us answer. The [American Presidency
Project at UC Santa Barbara](http://www.presidency.ucsb.edu/index.php) has a
huge catalogue of transcripts from dozens political figures dating back several
decades. Among these are [60 campaign
speeches](http://www.presidency.ucsb.edu/2016_election_speeches.php?candidate=45&campaign=2016TRUMP&doctype=5000)
from Donald Trump, from the announcement of his candidacy on June 16, 2015
through his acceptance speech on November 9, 2016. They also have transcripts of
[the 11 Republican primary and 3 general election
debates](http://www.presidency.ucsb.edu/debates.php).

I’ve taken the liberty of scraping these transcripts and putting them in a
semi-structured database that can be used for text analysis ([GitHub
repo](https://github.com/alexmill/trump_transcript.)). For the debates, I’ve
done some light processing to include only the portions of the transcript
attributed to Trump himself. I then set out to plot how Trump’s use of language
evolved over the course of the campaign. To do this, I used fairly simple
language analysis techniques to determine the frequency with which Trump
referred to certain topics over time. I could plot just the number of times that
Trump mentions certain words, but both the number and length of Trump’s speeches
vary over time.

As expected, Trump started giving many more speeches in the last few months of
the campaign. So rather than plotting raw word counts, I’m going to show you
plots of how often Trump used certain words, *as a proportion* of all the words
in my transcripts, aggregated at the monthly level.

*****

#### Data Speaks

We’ll start by looking at words related to some common policy-related themes
from the 2016 campaign.

<span class="figcaption_hack">Words counted (including variants): “economy”, “tax”, “GDP”, “jobs”,
“employment”</span>

There doesn’t seem to be any discernible, time-varying trend in how often Trump
mentioned economic topics in the campaign. However, when we turn to immigration,
it appears there may be a slightly negative trend as the campaign wore on.

<span class="figcaption_hack">Words counted (including variants): “wall”, “mexico”, “immigration”, “illegals”</span>

Terrorism was also a big topic in the 2016 campaign, with the horrific Pulse
nightclub shooting occurring in early June 2016. Trump gave an [address in New
Hampshire](http://www.presidency.ucsb.edu/ws/index.php?pid=117775) the day after
that event, in which he focused heavily on the topic of terrorism, exhibited by
the large spike observed in the chart below.

<span class="figcaption_hack">Words counted (including variants): “terror”, “terrorist”</span>

We can also look at how often Trump mentioned certain people or entities
throughout his campaign. We’ll start with mentions of “Obama”, by looking at the
chart below. Trump gave a speech on foreign policy in April 2016, where he spent
a lot of his time criticizing Barack Obama. Other than that, it seems there is a
week upward trend in mentions of Obama over time.

I’ve also plotted how often Trump discussed the topics of “Russia” and “Putin”
below. The first two spikes are from primary debates, in which the subject of
Russia and foreign policy were discussed. We do also see a spike in mentions of
Russia in September and October of 2016, near the time when Wikileaks released
the Podesta emails.

Finally, let’s see how often Trump mentioned his Democratic opponent, Hillary
Clinton.

As would be expected, Trump mentioned Hillary much more in the general election
than the primary election (in which his main opponents would have been other
Republicans). Trump clinched his party’s primary nomination on May 26th, 2016
and Hillary clinched the Democratic nomination on June 6th, 2016, which is
consistent with the clear turning point in the trend observed above.

We can also zero-in on when (and at what intensity) Trump started discussing
Hillary’s emails. In the chart below, we see a very stark and consistent upward
trend from June through November. Trump referenced Hillary’s emails only one
time before June, but consistently increased his focus on the topic of emails as
the campaign wore on.

These are all interesting trends, particularly this last one given the dramatic
increase in the intensity of focus on Hillary Clinton’s emails. While we usually
can’t say for sure what caused one spike vs. another, going directly to the
source material and applying some simple data analysis techniques allows us to
gain some empirical insight into how Trump’s priorities appeared to have evolved
in his campaign.

*****

#### Open Code

[Want to try your own analysis? You can find a version of the code I used to
generate these plots in a Jupyter notebook here on
GitHub](https://github.com/alexmill/trump_speech_analysis/blob/master/TrumpSpeechAnalsysis.ipynb).
