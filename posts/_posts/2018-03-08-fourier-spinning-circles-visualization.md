---
layout: post
title: "A Tale of Math &amp; Art: Creating the Fourier Series Spinning Circles Visualization"
meta: "I decided to take a stab at recreating a popular Fourier visualization in Python/Matplotlib."
hero: /img/fourier-hero.png
categories: ["blog"]
author: "Alex Miller"
source: default
mathjax: true
syntax: false
date: 2018-03-08
---

The venerable [3Blue1Brown YouTube channel](https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw) came out with a [fantastic video on Fourier transforms](https://www.youtube.com/watch?v=spUNpyF58BY) 
a few weeks ago. Not long after, I came across this very cool gif of Vermeer's "Girl with
the Pearl Earring", which uses a clever visualization of Fourier approximations to "draw" 
the image with a series of animated, concatenated circles. 

<div style="margin: 0 auto;">
  <div style="margin: 0;">
<blockquote class="twitter-tweet" data-lang="en">
<p lang="en" dir="ltr">Generative Art. <a href="https://t.co/5dW7uvDqHR">pic.twitter.com/5dW7uvDqHR</a></p>&mdash; じゃがりきん (@jagarikin) <a href="https://twitter.com/jagarikin/status/962449509782495232?ref_src=twsrc%5Etfw">February 10, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>
</div>

I could not track the source of the image down, but&mdash;with the 3Blue1Brown video fresh in my mind&mdash;
I was thoroughly determined to understand the math behind this visualization. I took Fourier Analysis as a 
sophomore in college, but it has been quite a while since I really grokked the math behind it all. 

This led me on down the foolhardy path of recreating this visualization myself. It turns out, the math
behind it all isn't completely incomprehensible. The animation/visualization, on the other hand, is an
entirely different story (to be revisted shortly). As opposed to taking an engineer's approach to the 
problem (which may be more intuitive), I like to motivate Fourier analysis using linear algebra (which,
as would be expected from a math major, is more elegant). 

## A Crash Course in Fourier Analysis 
Starting with a simplistic example, note how vectors in 3-dimensional euclidean space can be represented as the sum of
three basis vectors: the point $$ (3,7,1) $$ can be written as $$ 3e_1 + 7e_2 + 1e_3 $$, where $$ e_k $$ represent the
"canonical" basis vectors of $$\mathbb{R}^3$$: 

$$e_1 = (1,0,0)$$

$$e_2 = (0,1,0)$$

$$e_3 = (0,0,1)$$

The key idea behind Fourier approximations is to think of *functions themselves as vectors* in some infinite-dimensional
vector space. This seems weird at first, but if you've taken a college calculus course, you may already have some intuition
for how this might work. The key to understanding a vector space is to identify a basis of that space (this is 
essentially what linear algebra is all about). So what would a basis for the infinite-dimensional vector space of functions look like? If you've ever seen Taylor series expansions, then you've essentially already solved this problem. 

Note how the Taylor series of a function allows us to represent any function as an infinite sum of some set of coefficients
$$a_n$$ times the monomials $$x^n$$

$$f(t) = \sum_{n=0}^\infty \frac{f^{(n)}(0)}{n!} t^n$$

In terms of linear algebra, this means that the set of monomial powers $$\{ t^n : n \in \mathbb{N} \}$$ forms a basis over the
infinite-dimensional space of continuous single-variable functions. 

This brings us to one of the main ideas behind Fourier series: **the set of functions $$\sin(nt)$$ and $$\cos(nt)$$ (for $$n \in \mathbb{N}$$) forms an orthonormal basis for periodic functions** (with respect to the inner-product defined by integration over $$[-\pi, \pi]$$). I won't get too far afield by discussing inner-product spaces and orthogonal functions ([this seems to be a decent overview](http://ms.mcmaster.ca/courses/20102011/term4/math2zz3/Lecture1.pdf)), but I just want to point out the fundamental similarities between thinking of functions as linear expansions over the monomial basis and the Fourier basis. 

The unintuitive and surprising aspect of Fourier series is that the set of sine and cosine functions with integer frequencies actually can span the whole space of arbitrary single-variable functions, but&mdash;if we can take this for granted&mdash;the fact that we can express an arbitrary function as an infinite sum in some basis for this space actually isn't that far out. In terms of math, this can be restated by saying there exists a set of coefficients $$a_n$$ and $$b_n$$ for which the following equation resolves:

$$ f(t) = \sum_{n=0}^\infty a_n \cos(nt) + b_n \sin(nt) $$



## Crazy Math to Pretty Circles

I won't get into the full relationship between Fourier series and Fourier transforms ([that's what Wikipedia is for after all](https://en.wikipedia.org/wiki/Fourier_transform#Introduction)), but whenever you see sines and cosines in analysis, you can expect to find some relationship to Euler's formula lurking around the corner. And whenever you see Euler's formula, you should expect a very close connection to circles in the complex plane. This is indeed the case with Fourier series and is at the heart of the visualization above. In short, the Fourier expansion of a single-variable real-valued function can be thought of as the real component of a more generalized expansion that makes use of Euler's formula:

$$ f(t)=\sum_{n=-\infty}^\infty c_n\, e^{2\pi i\left(\frac{n}{T}\right) t} $$

$$ = \sum_{n=-\infty}^\infty  \left( a_n - i b_n \right) \left( \cos(2\pi nt/T) + i \sin(2\pi nt/T) \right) $$

$$ = \sum_{n=-\infty}^\infty  {\Large[} a_n \cos( \frac{2\pi nt}{T} ) + b_n \sin( \frac{2\pi nt}{T} ) {\Large]} + i {\Large[} a_n \sin( \frac{2\pi nt}{T} ) - b_n \cos( \frac{2\pi nt}{T} ) {\Large]}  $$

In this last formula, you can see the similarity between the real component of the function and the Fourier series expansion mentioned above. If you click through to the [Wikipedia article](https://en.wikipedia.org/wiki/Fourier_transform#Introduction), you'll see that the $$c_n$$ coefficients are directly computable from the Fourier transform of the given function $$f$$. 

Once we have these pieces in place, it's not too much of a jump to generate the spinning circles visualization. Euler's formula is the real star here, which allows us to think of point in the complex plane as being represented by an angle (the argument to the exponential function) and an amplitude (the $$c_n$$ coefficients). If you think about how to visualize the sum of many points in the language of angles/amplitudes for long enough, you'll find a direct connection to imagining each term in the infinite series above as representing a point on a circle with radius $$c_n$$, offset by $$2\pi nt/T$$ radians. 

The image below demonstrates how a simple sum of complex numbers in terms of phases/amplitudes can be nicely visualized as a set of concatenated circles in the complex plane.
<figure>
<img src="/img/phase-amplitude.png"/>
</figure>

## Pretty Circles to Animated Drawing

With all the abstract mathematical pieces in place, it's not too more work to arrive at a full animated visualization. If you have a line drawing in 2-dimensional (x-y) space, you can describe this path mathematically as a parametric function, which is essentially just two separate single variable functions:

$$ f(t) = ( x(t), y(t) ) $$

Below, I've taken a simple line drawing of a horse, found a (crudely-derived) parametric path through the black pixels in that image, and seperated that path into its X and Y components.

<figure>
  <img src="/img/parametric-plot.png"/>
</figure>

At this point, we need to calculate the Fourier approximations of these two paths, and use coefficients from this approximation to determine the phase and amplitudes of the circles needed for the final visualization. For any more of the specific implementation details on how to derive this visualization, I am agoing defer to the corresponding Jupyter notebook for this post. You can find the [static (browsable and downloadable) notebook here on GitHub](). I've also configured that repository to work on the new [Binder platform](https://mybinder.org), that allows you one-click (free!) access to interactive notebooks posted in public repositories. ([Direct link to launch the notebook here.](https://mybinder.org/v2/gh/alexmill/website_notebooks/master?filepath=fourier-spinning-circles.ipynb))

My version of the visualization is made with pure Python and I've done my best to provide comments throughout the notebook. After spending more time than I am willing to admit (10% of which was related to all the preceding math and 90% of which was spent wrangling my matplotlib animations!), I was able to recreate a pretty good replica of the original visualization that inspired all of this.

<figure>
  <video>
    <source src="https://github.com/alexmill/alexmill.github.io/blob/master/img/fourier-spinning-circles-visualization.mp4?raw=true"/>
  </video>
</figure>

There are obviously a lot of steps I left out in this derivation, but hopefully I've provided some intuition (and some free source code) on how to generate the cool spinning circles visualization. If you play around with the notebook, you can try creating animations of your own images. I will warn you, however, that I did not spend any time on speeding up the rendering process (so creating an animation can take around 10 minutes of compute time). 