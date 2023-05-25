import React from "react";
//import your useState
import { useState } from 'react';

export const NumberBuilder = () => {
    //create state variable, one state will start at 0
    
    let[counter, setCounter]= useState(0)
    // next useState will display the string
    let[stringCounter, setStringCounter]= useState("")
    
    //create 2 functions for Add button and reset button
    const handleAddNum = ()=>{
        setCounter(++counter)
        //when Add number button is clicked, increment counter by 1
        setStringCounter(stringCounter+counter)
        //set string counter (stringCounter + counter)


    }

    const handleReset = ()=>{
        setCounter(0)
        //when reset button is clicked, set the counter back to 0
        setStringCounter("")
        //set the stringCounter to an empty string

    }


    return(
        <div>
            {/* add the two buttons on the same line */}
            <div>
                <button onClick={()=>handleAddNum()}>Add Numbers</button>
                <button onClick={()=>handleReset()}>Reset</button>
            {/* * make an add button and reset button 
            add button needs to build a string of numbers
            */}  
                
            </div>
            <div>
                Numbers: {stringCounter}
                {/* display the stringCounter */}

            </div>
            

            

        </div>

    )
}

//within return, input both buttons 