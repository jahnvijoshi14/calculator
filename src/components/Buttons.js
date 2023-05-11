import { useState } from 'react';
import '../css/App.css';

//In this js file we have button component which contains all the buttons of calcuator
export function Button(props) {
  return (
    <>
      <div className="value">{props.value.substring(0, 13)}</div>
      <div className="buttons-container">
        <div className="button function ac" onClick={() => props.clear()}>
          {props.value === '' ? 'AC' : 'C'}
        </div>
        <div className="button function pm" onClick={() => props.conCat('±')}>
          +/-
        </div>
        <div
          className="button function percent"
          onClick={() => props.conCat('%')}
        >
          %
        </div>
        <div
          className="button operator division"
          onClick={() => props.conCat('÷')}
        >
          ÷
        </div>
        <div className="button number-7" onClick={() => props.conCat('7')}>
          7
        </div>
        <div className="button number-8" onClick={() => props.conCat('8')}>
          8
        </div>
        <div className="button number-9" onClick={() => props.conCat('9')}>
          9
        </div>
        <div
          className="button operator multiplication"
          onClick={() => props.conCat('×')}
        >
          ×
        </div>
        <div className="button number-4" onClick={() => props.conCat('4')}>
          4
        </div>
        <div className="button number-5" onClick={() => props.conCat('5')}>
          5
        </div>
        <div className="button number-6" onClick={() => props.conCat('6')}>
          6
        </div>
        <div
          className="button operator subtraction"
          onClick={() => props.conCat('-')}
        >
          −
        </div>
        <div className="button number-1" onClick={() => props.conCat('1')}>
          1
        </div>
        <div className="button number-2" onClick={() => props.conCat('2')}>
          2
        </div>
        <div className="button number-3" onClick={() => props.conCat('3')}>
          3
        </div>
        <div
          className="button operator addition"
          onClick={() => props.conCat('+')}
        >
          +
        </div>
        <div className="button number-0" onClick={() => props.conCat('0')}>
          0
        </div>
        <div className="button decimal" onClick={() => props.conCat('.')}>
          .
        </div>
        <div
          className="button operator equal"
          onClick={() => props.handleCalculation()} //this is called when we click on = for final results
        >
          =
        </div>
      </div>
      <div className="bottom"></div>
    </>
  );
}
