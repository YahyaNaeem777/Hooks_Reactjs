import React, { useState } from "react";

function DigitalClock(){

    let date=new Date().toLocaleTimeString();
    const [clock, UpdateTime]=useState(date);
    
    const timeUpdate=()=>{
    date=new Date().toLocaleTimeString();
    UpdateTime(date);
    }

    setInterval(timeUpdate,1000);
    return(
        <div>
            <h1>{date}</h1>
        </div>
    )
}

export default DigitalClock;