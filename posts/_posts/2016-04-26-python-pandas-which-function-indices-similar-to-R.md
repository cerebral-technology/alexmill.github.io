---
layout: post
title: "An R-like 'which' Function for Python Pandas"
categories: ["blog"]
author: "Alex Miller"
meta: ""
source: default
syntax: true
css: ".prompt { display: none; }"
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


<div tabindex="-1" id="notebook" class="border-box-sizing">
    <div class="container" id="notebook-container">

<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[1]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>

<span class="k">def</span> <span class="nf">which</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
    <span class="k">try</span><span class="p">:</span>
        <span class="bp">self</span> <span class="o">=</span> <span class="nb">list</span><span class="p">(</span><span class="nb">iter</span><span class="p">(</span><span class="bp">self</span><span class="p">))</span>
    <span class="k">except</span> <span class="ne">Exception</span> <span class="k">as</span> <span class="n">e</span><span class="p">:</span>
        <span class="k">raise</span> <span class="ne">Exception</span><span class="p">(</span><span class="s2">&quot;&#39;which&#39; method can only be applied to iterables.</span><span class="se">\n</span><span class="si">{}</span><span class="s2">&quot;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="nb">str</span><span class="p">(</span><span class="n">e</span><span class="p">)))</span> 
    <span class="n">indices</span> <span class="o">=</span> <span class="p">[</span><span class="n">i</span> <span class="k">for</span> <span class="n">i</span><span class="p">,</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">enumerate</span><span class="p">(</span><span class="bp">self</span><span class="p">)</span> <span class="k">if</span> <span class="nb">bool</span><span class="p">(</span><span class="n">x</span><span class="p">)</span> <span class="o">==</span> <span class="kc">True</span><span class="p">]</span>
    <span class="k">return</span><span class="p">(</span><span class="n">indices</span><span class="p">)</span>

<span class="c1"># If you want to apply it as a class method to </span>
<span class="n">pd</span><span class="o">.</span><span class="n">Series</span><span class="o">.</span><span class="n">which</span> <span class="o">=</span> <span class="n">which</span>
</pre></div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[2]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">from</span> <span class="nn">io</span> <span class="k">import</span> <span class="n">StringIO</span>

<span class="n">toy_data</span> <span class="o">=</span> <span class="n">StringIO</span><span class="p">(</span>
    <span class="sd">&quot;&quot;&quot;A;B</span>
<span class="sd">    4.4;99</span>
<span class="sd">    4.5;200</span>
<span class="sd">    4.7;65</span>
<span class="sd">    3.2;140</span>
<span class="sd">&quot;&quot;&quot;</span><span class="p">)</span>
<span class="n">df</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">toy_data</span><span class="p">,</span> <span class="n">sep</span><span class="o">=</span><span class="s2">&quot;;&quot;</span><span class="p">)</span>
<span class="n">df</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt output_prompt">Out[2]:</div>

<div class="output_html rendered_html output_subarea output_execute_result">
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
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[3]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">which</span><span class="p">(</span><span class="n">df</span><span class="o">.</span><span class="n">A</span> <span class="o">&gt;</span> <span class="mi">4</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt output_prompt">Out[3]:</div>


<div class="output_text output_subarea output_execute_result">
<pre>[0, 1, 2]</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[4]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="p">(</span><span class="n">df</span><span class="o">.</span><span class="n">B</span> <span class="o">==</span> <span class="mi">200</span><span class="p">)</span><span class="o">.</span><span class="n">which</span><span class="p">()</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt output_prompt">Out[4]:</div>


<div class="output_text output_subarea output_execute_result">
<pre>[1]</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[5]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">df</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">which</span><span class="p">(</span><span class="n">df</span><span class="o">.</span><span class="n">B</span> <span class="o">&lt;</span> <span class="mi">100</span><span class="p">),</span> <span class="p">[</span><span class="s1">&#39;A&#39;</span><span class="p">]]</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt output_prompt">Out[5]:</div>

<div class="output_html rendered_html output_subarea output_execute_result">
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
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[6]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">df</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">df</span><span class="o">.</span><span class="n">B</span> <span class="o">&lt;</span> <span class="mi">100</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;A&#39;</span><span class="p">]]</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt output_prompt">Out[6]:</div>

<div class="output_html rendered_html output_subarea output_execute_result">
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
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[&nbsp;]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span> 
</pre></div>

</div>
</div>
</div>

</div>
    </div>
  </div>
