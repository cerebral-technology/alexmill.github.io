---
layout: post
title: "How to do (semi) supervised learning with principal component analysis (PCA)"
categories: ["blog"]
author: "Alex Miller"
meta: "A short explainer on how to make the connection between unsupervised and supervised machine learning methods using PCA."
description: "A short explainer on how to make the connection between unsupervised and supervised machine learning methods using PCA."
source: default
hero_image: "http://alex.miller.im/img/pca_fig.png"
script: '<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default">
</script>'
---

By itself, principal component analysis (PCA) is an _unsupervised_ learning method, meaning that does not take into account any labels or prediction variables of your data. PCA is simply a common method for dimensionality reduction of your $$X$$'s, without worrying about the $$Y$$'s.

Most people intuitively understand this and nod their heads when they hear "PCA". But the real power of PCA comes from using it in some supervised prediction task. However, it's not immediately obvious how to go from the task of reducing the dimensions of $$X$$ to making predictions about $$Y$$. This post is a quick explainer on how to use PCA in supervised learning.

---

## 1. PCA your training data
The goal of PCA is to represent your data $$X$$ in an orthonormal basis $$W$$; the coordinates of your data in this new basis will be represented as $$Z$$:

$$X_{n\times p} = Z_{n \times p}(W_{p \times p})^\top$$

Because of $$W$$ is orthonormal, we can invert $$W$$ simply by taking its transpose: $$(W^\top)^{-1} = W$$. This allows us to transform our raw data $$X$$ into the orthonormal basis simply by multiplying by $$W$$:

$$X_{n\times p}(W_{p \times p}) = Z_{n \times p}$$


To reduce dimensionality, let's pick some number of components $$k < p$$. Assuming our basis vectors in W are ordered from largest to smallest (i.e., eigenvector corresponding to the largest eigenvalue is first, etc.), this amounts to simply keeping the first $$k$$ columns of $$W$$. This results in an "approxmiated" version of $$Z$$, which I'll call $$\hat{Z}$$:

$$X_{n\times p}(W_{p \times k}) = \hat{Z}_{n \times k}$$

## 2. Train a classifier on your transformed training data

Now that we have a $$k$$-dimensional representation of our training data $$X$$, you can train your favorite classifier (SVM, kNN, logistic regression, etc.) on the _transformed_ features in $$Z$$. This amounts to finding the "best" fit for some model $$f( \dot; \theta)$$. Denoted the best-fit parameters of this model by $$\hat{\theta}$$. For example, if your goal was to minimize the squared error between the data and your model prediction, $$\hat{\theta}$$ would simply be:

$$ \hat{\theta} = \arg\min_\theta  |Y - f(\hat{Z}_{n \times k}; \theta)|^2$$

The purpose of going through all this trouble is when $$p$$ is very large. If you have 100,000 features, running your favorite classifier  may take a very long time. However, if you can pick a much smaller number of principle components (i.e., $$k=1000$$) which accurately capture the covariance structure of your data, you can dramatically improve the efficiency of your classifier. This can also be thought of as a form of regularization, since it's unlikely that all 100,000 features of your dataset have a meaningful effect on your outcome variable.

## 3. Project your test data into the same $$k$$-dimensional subspace

Where do you go once you've perfomed PCA on your training data and built a classifier on your transformed data $$\hat{Z}$$? The key is to realize that $$W$$ is in some sense a canonical transformation from our space of $$p$$ features down to a space of $$k$$ features (or at least the best transformation we could find using our training data). Thus, we can hit our _test_ data with the same $$W$$ transformation, resulting in a $$k$$-dimensional representation of our test features:

$$X^{\text{test}}_{n\times p}(W_{p \times k}) = \hat{Z}^{\text{test}}_{n \times k}$$

## 4. Run your classifier on your transformed test data

We can now use the classifier trained on the $$k$$-dimensional representation of our training data (with the corresponding weights $$\hat{\theta}$$) to make predictions on the $$k$$-dimensional representation of our test data:

$$\hat{Y}^{\text{test}} = f(\hat{Z}^{\text{test}}_{n \times k}; \hat{\theta})$$

And that's how you use PCA to make predictions on test data. Again, the key is to think of $$W$$ as a rotating transformation, which _projects_ your raw features into a $$k$$-dimensional subspace. The entire goal of PCA is essentially to learn this projection operator. This projection works on both training data and test data, allowing you to build a classifier on your new $$k$$ features and use that same classifier to make predictions on your test data.


