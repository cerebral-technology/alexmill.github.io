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




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
      <th>B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>4.4</td>
      <td>99</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.5</td>
      <td>200</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
      <td>65</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3.2</td>
      <td>140</td>
    </tr>
  </tbody>
</table>
</div>




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




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>4.4</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.loc[df.B < 100, ['A']]
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>4.4</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
    </tr>
  </tbody>
</table>
</div>




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

