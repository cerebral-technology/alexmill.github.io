---
layout: post
title: "Fitting Linear Models with Custom Loss Functions and Regularization in Python"
short_title: "Fitting Linear Models with Custom Loss Functions in Python"
meta: "When SciKit-Learn doesn't have the model you want, you may have to improvise."
categories: ["blog", "technical"]
author: "Alex Miller"
source: default
jupyter: true
---


As part of a [predictive model competition I participated in earlier this month](https://alex.miller.im/posts/applied-machine-learning-conference-best-predictive-model/), I found myself trying to accomplish a peculiar task. The challenge organizers were going to use "mean absolute percentage error" (MAPE) as their criterion for model evaluation. Since this is not a standard loss function built into most software, I decided to write my own code to train a model that would use the MAPE in its objective function. 

I started by searching through the SciKit-Learn documentation on [linear models](http://scikit-learn.org/stable/modules/classes.html#module-sklearn.linear_model) to see if the model I needed has already been developed somewhere. I thought that the `sklearn.linear_model.RidgeCV` class would accomplish what I wanted (MAPE minimization with L2 regularization), but I could not get the `scoring` argument (which supposedly lets you pass a custom loss function to the model class) to behave as I expected it to.

While I highly recommend searching through existing packages to see if the model you want already exists, you should (in theory) be able to use this notebook as a template for a building linear models with an arbitrary loss function and regularization scheme.

## Python Code

I'll be using a Jupyter Notebook (running Python 3) to build my model. If you're reading this on my website, you can find [the raw .ipynb file linked here](https://github.com/alexmill/website_notebooks/blob/master/custom-loss-function-regularization-python.ipynb); you can also run a fully-exectuable version of the notebook on Binder by [clicking here](https://mybinder.org/v2/gh/alexmill/website_notebooks/master?filepath=custom-loss-function-regularization-python.ipynb)

We'll start with some basic imports:


```python
%matplotlib inline
import numpy as np
import pandas as pd
from matplotlib import pyplot as plt
from sklearn.preprocessing import StandardScaler
```

## Load Your Data

For the purposes of this walkthrough, I'll need to generate some raw data. Presumably, if you've found yourself here, you will want to substitute this step with one where you load your own data. 

I am simulating a scenario where I have 100 observations on 10 features (9 features and an intercept). The "true" function will simply be a linear function of these features: $y=X\beta$. However, we want to simulate observing these data with noise. Because I'm mostly going to be focusing on the MAPE loss function, I want my noise to be on an exponential scale, which is why I am taking exponents/logs below:

$$y = e^{log(X\beta) + \varepsilon}, \; \varepsilon \sim \mathcal{N}(0, 0.2)$$


```python
# Generate predictors
X_raw = np.random.random(100*9)
X_raw = np.reshape(X_raw, (100, 9))

# Standardize the predictors
scaler = StandardScaler().fit(X_raw)
X = scaler.transform(X_raw)

# Add an intercept column to the model.
X = np.abs(np.concatenate((np.ones((X.shape[0],1)), X), axis=1))

# Define my "true" beta coefficients
beta = np.array([2,6,7,3,5,7,1,2,2,8])

# Y = Xb
Y_true = np.matmul(X,beta)

# Observed data with noise
Y = Y_true*np.exp(np.random.normal(loc=0.0, scale=0.2, size=100))
```

## Define your custom loss function

I am mainly going to focus on the MAPE loss function in this notebook, but this is where you would substitute in your own loss function (if applicable). MAPE is defined as follows:

### Mean Absolute Percentage Error (MAPE)

$$ \text{error}(\beta) = \frac{100}{n} \sum_{i=1}^{n}\left| \frac{y_i - X_i\beta}{y_i} \right|$$

While I won't go to into too much detail here, I ended up using a *weighted* MAPE criteria to fit the model I used in the data science competition. Given a set of sample weights $w_i$, you can define the weighted MAPE loss function using the following formula:

### Weighted MAPE

$$\text{error}(\beta) =  100 \left( \sum_{i=1}^N w_i \right)^{-1} \sum_{i=1}^N w_i \left| \frac{y_i - X_i\beta}{y_i} \right|$$

In Python, the MAPE can be calculated with the function below:


```python
def mean_absolute_percentage_error(y_true, y_pred, sample_weights=None):
    y_true = np.array(y_true)
    y_pred = np.array(y_pred)
    assert len(y_true) == len(y_pred)
    
    if np.any(y_true==0):
        print("Found zeroes in y_true. MAPE undefined. Removing from set...")
        idx = np.where(y_true==0)
        y_true = np.delete(y_true, idx)
        y_pred = np.delete(y_pred, idx)
        if type(sample_weights) != type(None):
            sample_weights = np.array(sample_weights)
            sample_weights = np.delete(sample_weights, idx)
        
    if type(sample_weights) == type(None):
        return(np.mean(np.abs((y_true - y_pred) / y_true)) * 100)
    else:
        sample_weights = np.array(sample_weights)
        assert len(sample_weights) == len(y_true)
        return(100/sum(sample_weights)*np.dot(
                sample_weights, (np.abs((y_true - y_pred) / y_true))
        ))
    
loss_function = mean_absolute_percentage_error
```

## Fitting a simple linear model with custom loss function

You may know that the traditional method for fitting linear models, ordinary least squares, has a nice analytic solution. This means that the "optimal" model parameters that minimize the squared error of the model, can be calculated directly from the input data:

$$ \hat\beta = \arg\min_\beta \frac{1}{n} \sum_{i=1}^n (y_i - X_i\beta)^2 =  (X^\mathrm{T}X)^{-1}X^\mathrm{T}y $$

However, with an arbitrary loss function, there is no guarantee that finding the optimal parameters can be done so easily. To keep this notebook as generalizable as possible, I'm going to be minimizing our custom loss functions using numerical optimization techniques (similar to the "solver" functionality in Excel). In general terms, the $\beta$ we want to fit can be found as the solution to the following equation (where I've subsituted in the MAPE for the error function in the last line):

$$ \hat\beta = \arg\min_\beta \; \text{error}(\beta) = \arg\min_\beta \frac{100}{n} \sum_{i=1}^{n}\left| \frac{y_i - X_i\beta}{y_i} \right| $$

Essentially we want to search over the space of all $\beta$ values and find the value that minimizes our chosen error function. To get a flavor for what this looks like in Python, I'll fit a simple MAPE model below, using the `minimize` function from SciPy. 


```python
from scipy.optimize import minimize

def objective_function(beta, X, Y):
    error = loss_function(np.matmul(X,beta), Y)
    return(error)

# You must provide a starting point at which to initialize
# the parameter search space
beta_init = np.array([1]*X.shape[1])
result = minimize(objective_function, beta_init, args=(X,Y),
                  method='BFGS', options={'maxiter': 500})

# The optimal values for the input parameters are stored
# in result.x
beta_hat = result.x
print(beta_hat)
```

    [ 4.92186402  3.90670026  9.47581284  4.24438793  3.61750887  7.94615776
     -0.07480217  1.57636552  0.88414542  6.0017085 ]


We can compare the esimated betas to the true model betas that we initialized at the beginning of this notebook:


```python
pd.DataFrame({
    "true_beta": beta, 
    "estimated_beta": beta_hat,
    "error": beta-beta_hat
})[["true_beta", "estimated_beta", "error"]]
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>true_beta</th>
      <th>estimated_beta</th>
      <th>error</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2</td>
      <td>4.921864</td>
      <td>-2.921864</td>
    </tr>
    <tr>
      <th>1</th>
      <td>6</td>
      <td>3.906700</td>
      <td>2.093300</td>
    </tr>
    <tr>
      <th>2</th>
      <td>7</td>
      <td>9.475813</td>
      <td>-2.475813</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3</td>
      <td>4.244388</td>
      <td>-1.244388</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>3.617509</td>
      <td>1.382491</td>
    </tr>
    <tr>
      <th>5</th>
      <td>7</td>
      <td>7.946158</td>
      <td>-0.946158</td>
    </tr>
    <tr>
      <th>6</th>
      <td>1</td>
      <td>-0.074802</td>
      <td>1.074802</td>
    </tr>
    <tr>
      <th>7</th>
      <td>2</td>
      <td>1.576366</td>
      <td>0.423634</td>
    </tr>
    <tr>
      <th>8</th>
      <td>2</td>
      <td>0.884145</td>
      <td>1.115855</td>
    </tr>
    <tr>
      <th>9</th>
      <td>8</td>
      <td>6.001709</td>
      <td>1.998291</td>
    </tr>
  </tbody>
</table>
</div>



It's obviously not perfect, but we can see that our estimated values are at least in the ballpark from the true values. We can also calculate the final MAPE of our estimated model using our loss function:


```python
loss_function(np.matmul(X,beta_hat), Y)
```




    14.990329757449365



## Incorporating Regularization into Model Fitting

The process described above fits a simple linear model to the data provided by directly minimizing the a custom loss function (MAPE, in this case). However, in many machine learning problems, you will want to [regularize](https://en.wikipedia.org/wiki/Regularization_(mathematics)) your model parameters to prevent overfitting. In this notebook, I'm going to walk through the process of incorporating L2 regularization, which amounts to penalizing your model's parameters by the square of their magnitude. 

In precise terms, rather than minimizing our loss function directly, we will augment our loss function by adding a squared penalty term on our model's coefficients. With L2 regularization, our new loss function becomes:

$$ L(\beta) = \frac{100}{N} \sum_{i=1}^N \left| \frac{y_i - X_i\beta}{y_i} \right| + \lambda \sum_{k=1}^K \beta_k^2 $$

Or, in the case that sample weights are provided:

$$ L(\beta) = 100 \left( \sum_{i=1}^N w_i \right)^{-1} \sum_{i=1}^N w_i \left| \frac{y_i - X_i\beta}{y_i} \right| + \lambda \sum_{k=1}^K \beta_k^2 $$

For now, we will assume that the $\lambda$ coefficient (the regularization parameter) is already known. However, later we will use cross validation to find the optimal $\lambda$ value for our data.


Since our  model is getting a little more complicated, I'm going to define a Python class with a very similar attribute and method scheme as those found in SciKit-Learn (e.g., `sklearn.linear_model.Lasso` or `sklearn.ensemble.RandomForestRegressor`).


```python
class CustomLinearModel:
    """
    Linear model: Y = XB, fit by minimizing the provided loss_function
    with L2 regularization
    """
    def __init__(self, loss_function=mean_absolute_percentage_error, 
                 X=None, Y=None, sample_weights=None, beta_init=None, 
                 regularization=0.00012):
        self.regularization = regularization
        self.beta = None
        self.loss_function = loss_function
        self.sample_weights = sample_weights
        self.beta_init = beta_init
        
        self.X = X
        self.Y = Y
            
    
    def predict(self, X):
        prediction = np.matmul(X, self.beta)
        return(prediction)

    def model_error(self):
        error = self.loss_function(
            self.predict(self.X), self.Y, sample_weights=self.sample_weights
        )
        return(error)
    
    def l2_regularized_loss(self, beta):
        self.beta = beta
        return(self.model_error() + \
               sum(self.regularization*np.array(self.beta)**2))
    
    def fit(self, maxiter=250):        
        # Initialize beta estimates (you may need to normalize
        # your data and choose smarter initialization values
        # depending on the shape of your loss function)
        if type(self.beta_init)==type(None):
            # set beta_init = 1 for every feature
            self.beta_init = np.array([1]*self.X.shape[1])
        else: 
            # Use provided initial values
            pass
            
        if self.beta!=None and all(self.beta_init == self.beta):
            print("Model already fit once; continuing fit with more itrations.")
            
        res = minimize(self.l2_regularized_loss, self.beta_init,
                       method='BFGS', options={'maxiter': 500})
        self.beta = res.x
        self.beta_init = self.beta
```


```python
l2_mape_model = CustomLinearModel(
    loss_function=mean_absolute_percentage_error,
    X=X, Y=Y, regularization=0.00012
)
l2_mape_model.fit()
l2_mape_model.beta
```




    array([ 5.03662025,  3.87655611,  9.4728106 ,  4.21411826,  3.59855275,
            7.92518638, -0.13274225,  1.6209291 ,  0.91295936,  5.94200503])



Just to confirm that our regularization did work, let's make sure that the estimated betas found with regularization are different from those found without regularization (which we calculated earlier):


```python
pd.DataFrame({
    "true_beta": beta, 
    "estimated_beta": beta_hat,
    "regularized_beta": l2_mape_model.beta
})[["true_beta", "estimated_beta", "regularized_beta"]]
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>true_beta</th>
      <th>estimated_beta</th>
      <th>regularized_beta</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2</td>
      <td>4.921864</td>
      <td>5.036620</td>
    </tr>
    <tr>
      <th>1</th>
      <td>6</td>
      <td>3.906700</td>
      <td>3.876556</td>
    </tr>
    <tr>
      <th>2</th>
      <td>7</td>
      <td>9.475813</td>
      <td>9.472811</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3</td>
      <td>4.244388</td>
      <td>4.214118</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>3.617509</td>
      <td>3.598553</td>
    </tr>
    <tr>
      <th>5</th>
      <td>7</td>
      <td>7.946158</td>
      <td>7.925186</td>
    </tr>
    <tr>
      <th>6</th>
      <td>1</td>
      <td>-0.074802</td>
      <td>-0.132742</td>
    </tr>
    <tr>
      <th>7</th>
      <td>2</td>
      <td>1.576366</td>
      <td>1.620929</td>
    </tr>
    <tr>
      <th>8</th>
      <td>2</td>
      <td>0.884145</td>
      <td>0.912959</td>
    </tr>
    <tr>
      <th>9</th>
      <td>8</td>
      <td>6.001709</td>
      <td>5.942005</td>
    </tr>
  </tbody>
</table>
</div>



Since our regularization parameter is so small, we can see that it didn't affect our coefficient estimates dramatically. But the fact that the betas are different between the two models indicates that our regularization does seem to be working.

Just to make sure things are in the realm of common sense, it's never a bad idea to plot your predicted Y against our observed Y.


```python
# Predicted Y vs. observed Y
plt.scatter(l2_mape_model.predict(X), Y)
```


<figure>
    <img src="data:image/png;base64,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
">
</figure>


## Important Caveat: Standardize Your Predictors

<br/>

> In most applications, your features will be measured on many different scales; however you'll notice in the loss function described above, each $\beta_k$ parameter is being penalized by the same amount ($\lambda$). Best practice when using L2 regularization is to **standardize your feature matrix** (subtract the mean off of each column and divide the result by the column standard deviation). This will ensure that all features are on approximately the same scale and that the regularization parameter has an equal impact on all $\beta_k$ coefficients.
> I standardized my data at the very beginning of this notebook, but typically you will need to work standardization into your data pipeline. Use `sklearn.preprocessing.StandardScaler` and keep track of your intercept when going through this process!

## Cross Validation to Identify Optimal Regularization Parameter

At this point, we have a model class that will find the optimal beta coefficients to minimize the loss function described above with a given regularization parameter. Of course, your regularization parameter $\lambda$ will not typically fall from the sky. Below I've included some code that uses cross validation to find the optimal $\lambda$, among the set of candidates provided by the user.


```python
from sklearn.model_selection import KFold

# Used to cross-validate models and identify optimal lambda
class CustomCrossValidator:
    
    """
    Cross validates arbitrary model using MAPE criterion on
    list of lambdas.
    """
    def __init__(self, X, Y, ModelClass,
                 sample_weights=None,
                 loss_function=mean_absolute_percentage_error):
        
        self.X = X
        self.Y = Y
        self.ModelClass = ModelClass
        self.loss_function = loss_function
        self.sample_weights = sample_weights
    
    def cross_validate(self, lambdas, num_folds=10):
        """
        lambdas: set of regularization parameters to try
        num_folds: number of folds to cross-validate against
        """
        
        self.lambdas = lambdas
        self.cv_scores = []
        X = self.X
        Y = self.Y 
        
        # Beta values are not likely to differ dramatically
        # between differnt folds. Keeping track of the estimated
        # beta coefficients and passing them as starting values
        # to the .fit() operator on our model class can significantly
        # lower the time it takes for the minimize() function to run
        beta_init = None
        
        for lam in self.lambdas:
            print("Lambda: {}".format(lam))
            
            # Split data into training/holdout sets
            kf = KFold(n_splits=num_folds, shuffle=True)
            kf.get_n_splits(X)
            
            # Keep track of the error for each holdout fold
            k_fold_scores = []
            
            # Iterate over folds, using k-1 folds for training
            # and the k-th fold for validation
            f = 1
            for train_index, test_index in kf.split(X):
                # Training data
                CV_X = X[train_index,:]
                CV_Y = Y[train_index]
                CV_weights = None
                if type(self.sample_weights) != type(None):
                    CV_weights = self.sample_weights[train_index]
                
                # Holdout data
                holdout_X = X[test_index,:]
                holdout_Y = Y[test_index]
                holdout_weights = None
                if type(self.sample_weights) != type(None):
                    holdout_weights = self.sample_weights[test_index]
                
                # Fit model to training sample
                lambda_fold_model = self.ModelClass(
                    regularization=lam,
                    X=CV_X,
                    Y=CV_Y,
                    sample_weights=CV_weights,
                    beta_init=beta_init,
                    loss_function=self.loss_function
                )
                lambda_fold_model.fit()
                
                # Extract beta values to pass as beta_init 
                # to speed up estimation of the next fold
                beta_init = lambda_fold_model.beta
                
                # Calculate holdout error
                fold_preds = lambda_fold_model.predict(holdout_X)
                fold_mape = mean_absolute_percentage_error(
                    holdout_Y, fold_preds, sample_weights=holdout_weights
                )
                k_fold_scores.append(fold_mape)
                print("Fold: {}. Error: {}".format( f, fold_mape))
                f += 1
            
            # Error associated with each lambda is the average
            # of the errors across the k folds
            lambda_scores = np.mean(k_fold_scores)
            print("LAMBDA AVERAGE: {}".format(lambda_scores))
            self.cv_scores.append(lambda_scores)
        
        # Optimal lambda is that which minimizes the cross-validation error
        self.lambda_star_index = np.argmin(self.cv_scores)
        self.lambda_star = self.lambdas[self.lambda_star_index]
        print("\n\n**OPTIMAL LAMBDA: {}**".format(self.lambda_star))
```


```python
# User must specify lambdas over which to search
lambdas = [1, 0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001]

cross_validator = CustomCrossValidator(
    X, Y, CustomLinearModel,
    loss_function=mean_absolute_percentage_error
)
cross_validator.cross_validate(lambdas, num_folds=5)
```

    Lambda: 1
    Fold: 1. Error: 37.70736919931204
    Fold: 2. Error: 36.59539972822217
    Fold: 3. Error: 30.159199395859716
    Fold: 4. Error: 28.026823039555516
    Fold: 5. Error: 36.5106662623846
    LAMBDA AVERAGE: 33.799891525066805
    Lambda: 0.1
    Fold: 1. Error: 16.742330362234128
    Fold: 2. Error: 17.202175960459936
    Fold: 3. Error: 14.681801319685855
    Fold: 4. Error: 15.2888782775815
    Fold: 5. Error: 17.454430901848337
    LAMBDA AVERAGE: 16.273923364361952
    Lambda: 0.01
    Fold: 1. Error: 11.815521826879978
    Fold: 2. Error: 11.299482024213498
    Fold: 3. Error: 16.68009174283627
    Fold: 4. Error: 16.521312983555607
    Fold: 5. Error: 17.904255723979507
    LAMBDA AVERAGE: 14.84413286029297
    Lambda: 0.001
    Fold: 1. Error: 15.088606483635598
    Fold: 2. Error: 14.080553661118223
    Fold: 3. Error: 14.469228192509826
    Fold: 4. Error: 17.232351982956583
    Fold: 5. Error: 24.07170014470806
    LAMBDA AVERAGE: 16.98848809298566
    Lambda: 0.0001
    Fold: 1. Error: 17.175599679212027
    Fold: 2. Error: 26.85279420590986
    Fold: 3. Error: 14.327939942926607
    Fold: 4. Error: 21.686903871586818
    Fold: 5. Error: 12.325073637345838
    LAMBDA AVERAGE: 18.47366226739623
    Lambda: 1e-05
    Fold: 1. Error: 21.330405966237638
    Fold: 2. Error: 15.491993091074216
    Fold: 3. Error: 15.471548321991305
    Fold: 4. Error: 17.324376705345156
    Fold: 5. Error: 15.504657241945976
    LAMBDA AVERAGE: 17.02459626531886
    Lambda: 1e-06
    Fold: 1. Error: 16.61058271143524
    Fold: 2. Error: 13.945473664600302
    Fold: 3. Error: 15.833777870872437
    Fold: 4. Error: 22.501321885364305
    Fold: 5. Error: 17.439738169583936
    LAMBDA AVERAGE: 17.266178860371244
    
    
    **OPTIMAL LAMBDA: 0.01**


After identifying the optimal $\lambda$ for your model/dataset, you will want to fit your final model using this value on the entire training dataset.


```python
lambda_star = cross_validator.lambda_star
final_model = CustomLinearModel(
    loss_function=mean_absolute_percentage_error,
    X=X, Y=Y, regularization=lambda_star
)
final_model.fit()
final_model.beta
```




    array([5.5651638 , 3.97915803, 8.9876656 , 3.72472547, 3.62855902,
           7.54186139, 0.24154393, 1.777476  , 1.28517917, 5.69645692])



You can then generate out-of-sample predictions using this final, fully optimized model.


```python
test_data = np.random.random((10,10))
final_model.predict(test_data)
```




    array([29.21630071, 26.66963116, 23.91469503, 18.04085737, 19.92362317,
           17.00326261, 16.78961617, 15.1117658 , 14.01058483, 18.5042368 ])









