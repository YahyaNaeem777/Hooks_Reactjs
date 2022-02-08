import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const date = new Date();
  // const state = useState();
  const [count, stateposition] = useState(0);
  let incNum = () => {
    stateposition(count + 1);
  };

  let decNum = () => {
    stateposition(count - 1);
  };

  if (count < 0) {
    alert("not decrease by 0");
  }
  // stateposition();
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <br />
        <button onClick={incNum}>Increment</button>
        <button onClick={decNum}>decrement</button>
      </div>
    </div>
  );
}

export default App;
