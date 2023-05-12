import { Button } from './Buttons';
import '../css/App.css';
import { useState } from 'react';

export function Screen() {
  // value is which is shown on screen
  let [value, setValue] = useState('');

  //preData contains the previous value , which we always need to apply check
  let prevData = value;

  // expression is which is made and passed to eval() function of javascript
  let [expression, setExp] = useState('');

  //this is used to check that digits should not start with 0 ex: 000007, 0812 , 09
  function newExpression() {
    while (prevData.startsWith('0') && prevData.length > 1) {
      let preLength = prevData.length;
      let newPreData = prevData.substring(1);
      expression =
        expression.substring(0, expression.length - preLength) +
        newPreData +
        '';
      prevData = newPreData;
      console.log(
        'yes you are write',
        expression.substring(expression.length - preLength)
      );
    }
  }

  // this function is called when = is pressed for final results .
  function handleCalculation() {
    if (value == 'Error') {
      return;
    }
    newExpression();

    let result = eval(expression);
    if (result == 'Infinity') {
      setExp('');
      setValue('Error');
      return;
    }
    prevData = result + '';
    setExp(result + '');
    setValue(result + '');
  }

  // this is called when we click on AC or C
  function clear() {
    setValue('');
    prevData = '';
    setExp('');
  }

  // this function ensures that we donot click on operators more then once ex:- 2++++++3 or 2*+3
  function check(expression) {
    let operator = expression.charAt(expression.length - 1);
    if (
      operator == '+' ||
      operator == '-' ||
      operator == '*' ||
      operator == '/' ||
      operator == '÷' ||
      operator == '×' ||
      operator == '%'
    ) {
      return true;
    }
  }

  // this is used to concat digits and expressions so that we can evaluate the correct results
  function conCat(data) {
    if (prevData === 'Error') {
      if (check(data + '') || data == '±') {
        return;
      }
      setValue(data + '');
      expression = expression + data + '';
      setExp(expression);
      return;
    }
    if (data == '±') {
      let len = prevData.length;

      expression = expression.substring(0, expression.length - len);

      data = prevData * -1;
      expression = expression + data + '';
      setExp(expression + '');

      setValue(data + '');
      return;
    }

    if (
      data === '+' ||
      data === '-' ||
      data === '÷' ||
      data === '×' ||
      data === '%'
    ) {
      if (check(expression)) {
        return;
      }

      newExpression();

      if (data === '%') {
        let calc = prevData / 100;
        setValue(calc + '');
        expression =
          expression.substring(0, expression.length - prevData.length) +
          calc +
          '';
        setExp(expression + '');
        return;
      }

      if (data === '×') {
        data = '*';
      }
      if (data === '÷') {
        data = '/';
      }
      expression = expression + data + '';

      prevData = '';
      value = '';
      setExp(expression + '');

      return;
    }
    prevData = value + '';
    expression = expression + '';

    let operator = expression.charAt(expression.length - 1);
    if (
      operator == '+' ||
      operator == '-' ||
      operator == '*' ||
      operator == '/' ||
      operator == '%' ||
      operator == '±'
    ) {
      setValue(data + ''); //since we only need to show ths value so we operators are clicked we won't concat then to value
    } else {
      setValue(prevData + data + '');
    } //1

    expression = expression + data + '';

    setExp(expression + '');
  }

  return (
    <>
      <div className="calculator">
        <div className="top-container"></div>
        <Button
          handleCalculation={handleCalculation}
          value={value}
          clear={clear}
          conCat={conCat}
        />
      </div>
    </>
  );
}
