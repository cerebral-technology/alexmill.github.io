---
layout: post
title: "Are Machines Biased, or Are We Biased Against Machines?"
categories: ["blog", "medium"]
author: "Alex Miller"
meta: "A data scientist’s take on ProPublica’s research on bias in crime prediction algorithms."
description: "A data scientist’s take on ProPublica’s research on bias in crime prediction algorithms."
source: default
hero_image: "http://alex.miller.im/img/boogeyman.png"
---

Earlier this week, ProPublica published a [damning article on the use of algorithms in the criminal justice system](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing). In the article, titled "Machine Bias", they studied how a widely used algorithm differs in how accurately it predicts the recidivism of white and black criminals. And their findings are troubling: the algorithm systematically under-predicts the recidivism of white criminals and over-predicts the recidivism of black criminals. This has important consequences, since recidivism — a criminal’s propensity to commit a future crime — is a large factor in determining sentencing and rehabilitation requirements.


As with all things statistical, it is important to get the nuances correct. ProPublica does a decent job of getting the data science right and even published a detailed description of their methods [here](https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm). I think there are some methodological and rhetorical bones to pick, but I’m going to take their findings at face value (for now).

As could be predicted (without any algorithms), the reaction to this piece has been overwhelmingly critical of the use of data science in criminal justice. And while this piece is an important piece of journalism, its chilling effect on the use of algorithms in the criminal justice system could potentially have the exact *opposite* effect of mitigating racial bias. ProPublica’s piece itself plays on many of our cognitive biases, which may ultimately exacerbate the very problem they hope to fix.

## Quantification and Salience Bias

It is no doubt important to understand how prediction algorithms affect races differently. However, the more important question — especially in the context of public policy — is **how the performance of algorithms compares to other alternatives** (the current baseline being idiosyncratic human judgment). The headline, "Algorithms Are Biased" has a much different implication than, "Algorithms are Much Less Biased and Way More Accurate Than Human Judges".

Algorithms suffer from the fact that they actually quantify their predictions, which is what allows us to make post hoc evaluations of their bias in the first place. Humans make predictions in many domains, but rarely do they put pen to paper and formalize their predictions for anyone to analyze after the fact. When scientists have actually analyzed data on the accuracy of human forecasts, it turns out they are pretty terrible. (See [Philip Tetlock’s work](http://www.amazon.com/Superforecasting-Science-Prediction-Philip-Tetlock/dp/0804136696) on how bad supposed "experts" are at making predictions.)


The availability of ex ante algorithmic prediction data means that we are simply more likely to be aware of algorithmic bias than other (perhaps more pernicious) types of bias. Thus our judgment of algorithms are subject to a salience bias which has the potential to distort our ability to make fully rational decisions.

I would be much more interested in a comparison between the racial bias of the recidivism algorithm and the racial bias of human judges. (Fortunately, criminal justice is a domain in which data and outcomes are actually recorded, so such a comparison could be done — I’m looking at you criminology graduate students.) A comparison between all options available would allow us to make much more informed decisions than an article that causes hysteria about how algorithms are the boogeyman.

## Algorithm Aversion

[Recent research](https://hbr.org/2015/02/heres-why-people-trust-human-judgment-over-algorithms) by Berkeley Dietvorst of the Wharton School also shows that we judge the failures of algorithms more harshly than if the same failures are made by humans. In his paper, "[Algorithm Aversion: People Erroneously Avoid Algorithms After Seeing Them Err](https://marketing.wharton.upenn.edu/mktg/assets/File/Dietvorst%20Simmons%20&%20Massey%202014.pdf)", Dietvorst and co-authors describe how even when algorithms are objectively better at making decisions than humans, we avoid using them after seeing them fail. However, when we see humans fail in the same way, we are more likely to rationalize their shortcomings and forgive their mistakes.

Algorithm aversion is likely at the heart of the reaction to ProPublica’s article. People are very harsh when algorithms make mistakes (in this case, when algorithms get the recidivism rates between blacks and whites wrong). Even if someone did conduct the comparison study I suggested above, and it turns out that algorithms are more accurate and less biased than human judges, we are still likely to avoid using them and judge their mistakes more harshly.

We should certainly be aware of the shortcomings of algorithms, but we should also be aware of our inherent bias against algorithms. **If it turns out that algorithms are actually less biased than alternative methods of making predictions, then avoiding them has the potential to actually increase racism in the criminal justice system.** This is why placing irrational and undue blame on algorithms when they (inevitably) make mistakes has significant consequences. Policy-makers must ask themselves what the objectives of our criminal justice system are — and we should use tools and practices that most efficiently help us achieve those objectives. Since algorithms frequently are the best tool for the job, averting our algorithm aversion will be an important step in this process.

## Understanding the Trade-offs

Algorithms are nothing more than glorified optimization problems. In this case, statisticians took the objective, "maximize how accurately we can predict recidivism", and built a program that does *exactly* that. It’s important to recognize that minimizing racial bias is a different objective than the goal of maximizing predictive accuracy. Reducing bias is certainly a laudable goal, but when dealing in the world of statistics and uncertainty, there are always trade-offs between different objectives.

If statisticians do take racial bias into account, the predictive validity of their model will almost certainly go down. It’s not a question of whether we should reduce racial bias, but rather a question of how we want to trade-off between the different goals of public policy. Is it better to reduce racial bias or to reduce the number of years that we keep individuals needlessly locked away in prison? I don’t know the answer, but it’s critical that we realize that there is a trade-off to be made.

## Ignorance is Not Bliss

Unlike traditional practices in the criminal justice system, the application of algorithms and data science make the trade-offs between our policy objectives very salient — even if we don’t like what they show us. But demonizing data science is like getting upset at your bathroom mirror because it allowed you see the zit on your forehead.

ProPublica did a great job of emphasizing that algorithms can be biased, but they did nothing to answer the question of how algorithms compare with humans in this domain. This, in turn, makes it impossible to know whether we should use algorithms more or less. They also did not address the fundamental trade-offs that need to be made between bias mitigation and predictive accuracy.

The only way to improve on the work of ProPublica is to *increase* the role of data science in criminology, not reduce it. There is much work to be done before drawing conclusions about the utility of algorithms in criminal justice. That’s why those of us who want to improve the system would be better of trading in our pitchforks for spreadsheets.

---

This essay is [cross-posted on Medium](http://alex.miller.im/posts/medium-seo-rel-canonical-tag-cross-posting-via-rss/) [here](https://medium.com/@alexpmiller/are-machines-biased-or-are-we-biased-against-machines-17982310152b).
