---
layout: post
title: When to use fixed effects vs. clustered standard errors for linear regression on panel data?
categories: ["blog", "medium"]
author: "Alex Miller"
meta: A short note on fixed effects and clustered SEs, and some examples of when they might be appropriate.
source: default
syntax: false
date: 2017-08-10
---

I found myself writing a long-winded answer to [this question](https://stats.stackexchange.com/q/185378/89253) on StatsExchange, so I wanted to repost here for future reference.

### Fixed effects are for removing unobserved heterogeneity BETWEEN different groups in your data.

If your dependent variable is affected by unobservable variables that systematically vary across groups in your panel, then the coefficient on any variable that is correlated with this variation will be biased. Unless your X variables have been randomly assigned (which will always be the case with observation data), it is usually fairly easy to make the argument for omitted variables bias. In these cases, it is usually a good idea to use a fixed-effects model. 


### Clustered standard errors are for accounting for situations where observations WITHIN each group are not i.i.d. (independently and identically distributed).

A classic example is if you have many observations for a panel of firms across time. You can account for firm-level fixed effects, but there still may be some unexplained variation in your dependent variable that is correlated across time. In general, when working with time-series data, it is usually safe to assume temporal serial correlation in the error terms within your groups. These situations are the most obvious use-cases for clustered SEs.

**Some illustrative examples:**

If you have experimental data where you assign treatments randomly, but make repeated observations for each individual/group over time, you would be justified in omitting fixed effects, but would want to cluster your SEs.

Alternatively, if you have many observations per group for non-experimental data, but each within-group observation can be considered as an i.i.d. draw from their larger group (e.g., you have observations from many schools, but each group is a randomly drawn subset of students from their school), you would want to include fixed effects but would not need clustered SEs.