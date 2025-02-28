import React, { useEffect, useState } from 'react'

const MultipleUseEffect = () => {
    const[stateOne,setStateOne]=useState(0);
    const[stateTwo,setStateTwo]=useState(1000);
useEffect(()=>{
    console.log("Hello from first useEffect")
},[]);
useEffect(()=>{
    console.log("Hello from second useEffect")
},[stateOne,stateTwo]);

  return (
    <div>
       <h2 className='h2 mb-4'>MultipleUseEffect</h2> 
       <div className='mb-4'>
        <h4 className='h4'>State One:{stateOne}</h4>
        <button className='btn' onClick={()=>setStateOne(stateOne+1)}>Increment</button>
       </div>
       <div className='mb-4'>
        <h4 className='h4'>State Two:{stateTwo}</h4>
        <button className='btn' onClick={()=>setStateTwo(stateTwo+1)}>Increment</button>
       </div>
    </div>
  )
}
export default MultipleUseEffect