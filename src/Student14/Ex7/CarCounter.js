
import React, { useState } from "react"


export const CarCounter = () => {
    
    //useState for food
    let[ford, setFord] = useState(0);
    //useState for toyota
    let [toyota, setToyota] = useState(0);

    // useState for chevy
    let[chevy, setChevy] = useState(0);
    //useState for total count of cars
    let[total, setTotal] = useState(0);
    //function that takes in an agrument of each tpe of car
    //if the type of car that increments variables for each car and als the variable for total
  const handleClick = (carType) => {
    if(carType === "ford") {
        setFord(ford += 1)
        setTotal(total +=1)
    } else if 
    (carType=== "toyota") {
        setToyota(toyota += 1)
        setTotal(total += 1)
    }else if
    (carType === "chevy") {
        setChevy(chevy += 1)
        setTotal(total += 1)

    }

    

  }
    return (
    <div>
        {/* button for food
        button for toyota
        button for chevy */}
        <button onClick = {() => handleClick("ford")}>Ford</button>
        <button onClick = {() => handleClick("toyota")}>Toyota</button>
        <button onClick = {() => handleClick("chevy")}>chevy</button>
        <div>
            <p>Ford: {ford}</p>
            <p>Toyota: {toyota}</p>
            <p>Chevy: {chevy}</p>
            <p>Total: {total}</p>
        </div>
      
    </div>
  )
}
