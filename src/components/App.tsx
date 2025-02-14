import React, { useState } from "react";
import './App.scss'

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>click</button>
    </div>
  );
};
