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



