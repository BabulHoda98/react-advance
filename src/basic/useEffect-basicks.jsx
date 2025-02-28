import React,{useState,useEffect} from 'react'

const useEffectBasicks = () => {
    const[num,setNum]=useState(0);
    function sayHello(){
        console.log("Hello world")
    }
    sayHello();
    useEffect(()=>{
        console.log("Hello from useEffect")
    },[]);
  return (
    <div>
        <h2 className='h2 mb-4'>useEffect-basicks</h2>
        <h4 className='h2 mb-4'>Num:</h4>
        <button className='btn' onClick={()=>{
            setNum(num+1);
        }}>Click me</button>

    </div>
  )
}
export default useEffectBasicks;