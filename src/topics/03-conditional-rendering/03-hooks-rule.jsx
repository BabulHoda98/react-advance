import React, { useEffect, useState } from 'react'

const HooksRules = () => {
    const [condition,setCondition]=useState(false );

    if(condition){
        //this won't work
        const [state,setState]=useState("Random value");
    }
    if(condition){
        return <h1 className='h2'>Hello there</h1>
    }
    //this will also fail
    useEffect(()=>{
        console.log("Hello darling")
    },[]);
  return (
    <div>HooksRules</div>
  )
}

export default HooksRules