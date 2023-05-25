//import React from 'react'
//import useState
import React, { useState } from "react";

export const RandomNumber = () => {
    //create a state to hold the random number
    let[randomNumber, setRandomNumber]= useState(0);
// handle click functionthat generates a random number from 0-10
const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 10));
    //console.log(Math.random());
}

  return (
    <div>
    <div>Random Number: {randomNumber}</div>
    <button onClick ={() => generateRandomNumber()}>Generate</button>
    </div>
  )
}
