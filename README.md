This is a react- calculator. It have mainly 2 components :- 

1. Screen.js
2. Buttons.js

Screen have following functions:-

newExpression():- This is used to check that digits should not start with 0 ex: 000007, 0812 , 09.

handleCalculation():- This function is called when = is pressed for final results.

clear() :- This is called when we click on AC or C.

check(expression):- This function ensures that we donot click on operators more then once ex:- 2++++++3 or 2*+3.

conCat(data):- This is used to concat digits and expressions so that we can evaluate the correct results.

all the functions are called from buttons components
