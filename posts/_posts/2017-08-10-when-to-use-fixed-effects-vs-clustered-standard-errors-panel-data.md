---
layout: post
short_title: When to use fixed effects vs. clustered standard errors?
title: When to use fixed effects vs. clustered standard errors for linear regression on panel data?
categories: ["blog", "medium"]
author: "Alex Miller"
source: default
syntax: false
date: 2017-08-10
---

I found myself writing a long-winded answer to [a question on StatsExchange](https://stats.stackexchange.com/q/185378/89253) about the difference between using *fixed effects* and *clustered* errors when running linear regressions on panel-data. I'll describe the high-level distinction between the two strategies by first explaining what it is they seek to accomplish. Then I'll use an explicit example to provide some context of when you might use one vs. the other. 

It's important to realize that these methods are neither mutually exclusive nor mutually reinforcing. It is perfectly acceptable to use fixed effects and clustered errors at the same time or independently from each other. Which approach you use should be dictated by the structure of your data and how they were gathered.

**Fixed effects are for removing unobserved heterogeneity BETWEEN different groups in your data.**

If your dependent variable is affected by unobservable variables that systematically vary across groups in your panel, then the coefficient on any variable that is correlated with this variation will be biased. Unless your X variables have been randomly assigned (which will always be the case with observation data), it is usually fairly easy to make the argument for omitted variables bias. In these cases, it is usually a good idea to use a fixed-effects model. 


**Clustered standard errors are for accounting for situations where observations WITHIN each group are not i.i.d. (independently and identically distributed).**

A classic example is if you have many observations for a panel of firms across time. You can account for firm-level fixed effects, but there still may be some unexplained variation in your dependent variable that is correlated across time. In general, when working with time-series data, it is usually safe to assume temporal serial correlation in the error terms within your groups. These situations are the most obvious use-cases for clustered SEs.

**Some illustrative examples:**

- If you have experimental data where you assign treatments randomly, but make repeated observations for each individual/group over time, you would be justified in omitting fixed effects, but would want to cluster your SEs.

- Alternatively, if you have many observations per group for non-experimental data, but each within-group observation can be considered as an i.i.d. draw from their larger group (e.g., you have observations from many schools, but each group is a randomly drawn subset of students from their school), you would want to include fixed effects but would not need clustered SEs.
