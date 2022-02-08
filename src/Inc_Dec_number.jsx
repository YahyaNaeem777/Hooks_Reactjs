import React from "react";
import { useState } from "react";


function Inc_Dec_numbers(){

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
    return(
    <div>
        <h1>{count}</h1>
        <br />
        <button onClick={incNum}>Increment</button>
        <button onClick={decNum}>decrement</button>
    </div>
    )
}

export default Inc_Dec_numbers;