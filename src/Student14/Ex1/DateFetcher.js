import React from "react";
import {useState} from 'react'
// import {DateFetcher} from './DateFetcher'
export const DateFetcher = () => {

    const[date, setDate] =useState('unknown')
    const onClick= () => {

        const newDate= new Date().toUTCString()
        setDate(newDate)
    }
        //console.log("push")
        //new Date ( means u are making a new object and ur converting it to a string(toUTCString))
    
    return (
        <div>
            <button onClick={ () =>onClick()}>Push</button>
            UTC Date:{date}
        </div>
    )
}
