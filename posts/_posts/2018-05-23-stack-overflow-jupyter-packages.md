---
title: "Get locally imported modules from Jupyter notebook"
categories: [blog, technical]
author: "Alex Miller"
source: default
---

I wrote an answer to [this Stack Overflow](https://stackoverflow.com/a/49199019/2628402) question about getting a printed list of locally imported (in the current session) packages in a Jupyter Python computing environment. I wanted to briefly expand on my solution.

To start with, why would this be a useful thing to do? Jupyter notebooks have become something like the "word document for data scientists". This is to say, when data scientists and statisticians want to review or build on other people's work, the file that changes hands is almost always an Notebook file with file extension ".ipynb". However, one pesky aspect of scientific computing environments is that they are difficult to replicate across machines and operating systems.

This ends up being a problem because while an entire machine might have dozens or hundreds of third party Python packages in its $PATH, a given Jupyter notebook session might have only imported a handful. As it stood before I wrote this answer, there didn't seem to be a satisfactory plug-and-play solution to this problem.


