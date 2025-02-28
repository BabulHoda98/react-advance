import React, {useState, useEffect } from 'react'

const UseEffectBasics = () => {
    const[num,setNum]=useState(0);

    function sayHello(){
        console.log("hello")
    }
    sayHello();

    // useEffect(()=>{
    //     console.log("Hello from useEffect"); 
    // });

    useEffect(()=>{
        console.log("Hello from useEffect"); 
    },[]);
    
  return (
    <div>
        <h2 className='h2 mb-4'>UseEffectBasics</h2>
        <h2>Num:{num}</h2>
        <button className='btn' onClick={()=>{setNum(num+1)}}>Click me</button>
    </div>
  )
}

export default UseEffectBasics