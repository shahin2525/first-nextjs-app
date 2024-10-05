"use client";

import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-accent"
      >
        increase
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="btn btn-accent"
      >
        decrease
      </button>
    </div>
  );
};

export default Counter;
