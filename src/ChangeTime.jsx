import React from "react";
import {useState} from "react";

function ChangeTime(){
     let date = new Date().toLocaleTimeString();
  const [updateTime, ChangingTime] = useState(date);
  let timeToChange = () => {
    let setTime = new Date().toLocaleTimeString();
    ChangingTime(setTime);
  };
    return(
        <div>
        <h1>{date}</h1>
        <button onClick={timeToChange}>Click to Change the Time</button>
      </div>
    )
}

export default ChangeTime;