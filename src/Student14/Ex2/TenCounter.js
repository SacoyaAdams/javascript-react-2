import React from "react";
import { useState } from "react";


export const TenCounter = () => {
    let [counter, setCounter] = useState(0)
    const handleClick=()=> {
        if(counter>10){
            setCounter(0)
        }
        else{
            setCounter(counter++)
        }
    }
    //create a hook with counter and setCounter and set initial value to 0
    //create a function for button
    //if counter is greater than or equal to 10, set the counter to 0
    //else we will increment the counter

  return (
    <div>TenCounter
    <button onClick={()=> handleClick()}>Push</button>
    Counter: {counter}
    {/* create a button with onClick */}
    </div>
  )
}
