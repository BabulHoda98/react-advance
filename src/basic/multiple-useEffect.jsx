import React, { useEffect } from 'react'

const MultipleUseEffects = () => {
    const [stateOne,setStateOne]=useState(0);
    const [stateTwo,setStateTwo]=useState(1000);
    useEffect(()=>{
        console.log("Hello from first useEffect")
    },[]);
    useEffect(()=>{
        console.log("Hello from seconc useEffect")
    },[stateOne,stateTwo]);
  return (
    <div>
        <h2 className='h2 mb-4'>MultipleUffect</h2>
        <div mb-4>
            <h4 className='h4 mb-2'>State One:</h4>
            <button className='btn' onClick={()=>setStateOne(stateOne)}>Increment</button>
        </div>
    </div>
  )
}

export default multiple-useEffect