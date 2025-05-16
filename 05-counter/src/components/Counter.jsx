import { useState } from "react";
import '../style.css'

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(p => p + 1)
  }

  const decrement = () => {
    if (count <= 0) {
      setCount(0)
    } else {
      setCount(p => p - 1)
    }
  }

  return (
    <div className="container">
      <div className="head">
        <h1>{count}</h1>
      </div>
      <div className="btn-section">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
