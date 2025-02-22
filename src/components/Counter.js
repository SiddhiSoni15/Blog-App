import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2>Count: <span className="count">{count}</span></h2>
        <div className="btn-group">
          <button className="btn btn-success" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
            Decrement
          </button>
          <button className="btn btn-warning" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
