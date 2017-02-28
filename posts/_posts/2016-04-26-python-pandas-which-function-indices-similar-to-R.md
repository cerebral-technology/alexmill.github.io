---
layout: post
title: "An R-like 'which' Function for Python Pandas"
categories: ["noshow"]
author: "Alex Miller"
meta: ""
source: default
syntax: true
---

```python
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
