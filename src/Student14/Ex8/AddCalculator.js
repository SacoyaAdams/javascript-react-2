import React, {useState} from 'react'

export const AddCalculator = () => {

    //create a state varaiable 
    let[Total, setTotal] = useState(0)
    const onhandleClick =(value)=>{
        setTotal(Total += value)
        //Total= 0+1
    }



  return (
    <div>
        {/* create button Add1
        create button Add2
        create button Add3
        hard code Total : {useState} */}
        <button onClick={()=>onhandleClick(1)}>Add1</button>
        <button onClick={()=>onhandleClick(2)}>Add2</button>
        <button onClick={()=>onhandleClick(3)}>Add3</button>
    <br/>
    Total: {Total}
    
    
    </div>
  )
}
