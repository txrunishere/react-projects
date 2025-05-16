import { useState } from "react";
import "../style.css";

export default function Calculator() {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value)
  }

  const calculate = () => {
    setInputValue(eval(inputValue))
  }

  return (
    <div>
      <div className="container">
        <input
          type="text"
          placeholder="DO YOUR COMPLEX CALCULATIONS"
          value={inputValue}
          readOnly
          className="calc-input"
        />
      </div>
      <div className="buttons">
        <span onClick={() => display('1')}>1</span>
        <span onClick={() => display('2')}>2</span>
        <span onClick={() => display('3')}>3</span>
        <span onClick={() => display('4')}>4</span>
        <span onClick={() => display('5')}>5</span>
        <span onClick={() => display('6')}>6</span>
        <span onClick={() => display('7')}>7</span>
        <span onClick={() => display('8')}>8</span>
        <span onClick={() => display('9')}>9</span>
        <span onClick={() => display('0')}>0</span>
        <span onClick={() => display('+')}>+</span>
        <span onClick={() => display('-')}>-</span>
        <span onClick={() => display('*')}>*</span>
        <span onClick={() => display('/')}>/</span>

        <span onClick={calculate}>=</span>
        <span onClick={() => setInputValue('')}>CLEAR</span>
      </div>
    </div>
  );
}
