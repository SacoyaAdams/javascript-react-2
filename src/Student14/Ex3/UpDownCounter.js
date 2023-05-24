import React from 'react'
import { useState } from "react"

export const UpDownCounter = () => {
    let[counter, setCounter]= useState(0)
    const handleClick = (direction) => {
        if(direction === 'down') {
            setCounter(counter--)
        } else{
          setCounter(counter++)
        }

    }
    //create a hook with counter and set counter, initialize counter to value 0
    //create the function of the button (handleClick)
    //create if statement that if agrument passed in equals "Down" decrement counter =down if down button is pressed
    //else increment counter 
  return (
    <div>
    <button onClick={()=> handleClick("down")}>DOWN</button>
    <p> {counter}</p>
    <button onClick={()=> handleClick('up')}>UP</button>
    </div>
    // create down button using onClickith that takes handleClick passes in the 'Down' string
    // create up  button using onclick that takes handleClick passes in the 'Up' string 
    //inbetween the buttons we will put the state counter varaible 
  )
}
