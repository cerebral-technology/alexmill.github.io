---
layout: post
title: "An R-like 'which' Function for Python Pandas"
categories: ["blog"]
author: "Alex Miller"
meta: ""
source: default
syntax: true
css: ""
---


If you're coming from R to Python Pandas, you might have some habits that are hard to kick. For me, it was using the `which` function, which is something I use fairly frequently in R. I find at least two uses for `which`: one is for indexing and selecting data, though I can't particuarly recommend this as a good practice. You'll almost certainly have better performance using Python Pandas' built-in logical indexing. When working with small data though, using `which` vs. logical indexing probably won't have any noticeable effect.

The second reason I like using `which` is simply to figure out precisely where in my dataframe the rows I'm interested in are located. Especially when working with big data(frames), it's hard to understand where the data you're looking for is located. You can count how many rows match your condition, but maybe you're missing out on a useful insight (that they all come from consecutive rows, or that it's more common later in the dataframe rather than earlier, etc.). These are situations where it'd be nice to use an R-like `which` function.

That's why I've come up with the following little Python function, that behaves just like the `which` you're used to in R, except now you can apply to Python Pandas dataframes:

```python
import pandas as pd

def which(self):
    try:
        self = list(iter(self))
    except Exception as e:
        raise Exception("'which' method can only be applied to iterables.\n{}".format(str(e))) 
    indices = [i for i, x in enumerate(self) if bool(x) == True]
    return(indices)

# If you want to apply it as a class method to 
pd.Series.which = which
```


```python
from io import StringIO
toy_data = StringIO(
    """A;B
    4.4;99
    4.5;200
    4.7;65
    3.2;140
""")
df = pd.read_csv(toy_data, sep=";")
df
```




         A    B
    0  4.4   99
    1  4.5  200
    2  4.7   65
    3  3.2  140




```python
which(df.A > 4)
```




    [0, 1, 2]




```python
(df.B == 200).which()
```




    [1]




```python
df.loc[which(df.B < 100), ['A']]
```




         A
    0  4.4
    2  4.7




```python
df.loc[df.B < 100, ['A']]
```




         A
    0  4.4
    2  4.7




```python
%load_ext rpy2.ipython
```


```python
%%R
Sys.Date()
if(2 %in% c(1,2,3)) print('hi')
```


    [1] "hi"




```python

```



