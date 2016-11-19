---
layout: post
title: "How to do (semi) supervised learning with principal component analysis (PCA)"
categories: ["blog"]
author: "Alex Miller"
meta: "A short explainer on how to make the connection between unsupervised and supervised machin learninng methods using PCA."
description: "A short explainer on how to make the connection between unsupervised and supervised machine learninng methods using PCA."
source: default
hero_image: "http://alex.miller.im/img/boogeyman.png"
script: '<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default">
</script>'
---

By itself, principal component analysis (PCA) is an _unsupervised_ learning method, meaning that does not take into account any labels or prediction variables of your data. PCA is simply a common method for dimensionality reduction of your $$X$$'s, without worrying about the $$Y$$'s.

Most people intuitively understand this and nod their heads when they say they understand PCA. But the real power of PCA comes from using it in some supervised prediction task. However, it's not immediately obvious how to go from the task of reducing the dimensions of $$X$$ to making predictions about $$Y$$. This post is a quick explainer on how to use PCA in supervised learning.

## PCA on Training Data
The goal of PCA is to represent your data $$X$$ in an orthonormal basis $$W$$; the coordinates of your data in this new basis will be represented as $$Z$$:

$$X_{n\times p} = Z_{n \times p}(W_{p \times p})^\top$$

Because of $$W$$ is orthonormal, we can invert W simply by taking its transpose: $$(W^\top)^{-1} = W$$. This allows us to transform our raw data $$X$$ into the orthnormal basis simply by multiplying by $$W$$:

$$X_{n\times p}(W_{p \times p}) = Z_{n \times p}$$


Now to reduce dimensionality, let's pick some number of components k < p. Assuming our basis vectors in W are ordered from largest to smallest (i.e., eigenvector corresponding to the largest eigenvalue is first, etc.), this amounts to simply keeping the first k columns of W.

Now we have a k dimensional representation of our training data X. Now you run some classifier using the new features in Z. 

The key is to realize that W is in some sense a canonical transformation from our space of p features down to a space of k features (or at least the best transformation we could find using our training data). Thus, we can hit our _test_ data with the same W transformation, resulting in a k-dimensional set of test features:

We can now use the classifier trained on the k-dimensional representation of our training data to make predictions on the k-dimensional representation of our test data:


