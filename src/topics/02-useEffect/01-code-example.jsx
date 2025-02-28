import React, { useState } from 'react'

const CodeExample = () => {
    const[num,setNum]=useState(0)
    function sayhello(){
        console.log("Hello");
        //Be careful infinite loop
        // setNum(num+1);
    }
    sayhello();
    //initial render - setup state value and invoke sayHello
    //in the sayHello update state,trigger re-render 
    //re-render- setup state value and invoke sayHello
    //in the sayHello update state,trigger re-render 
    //repeat
    //repeat
    //repeat
    // ... 
  return (
    <div>
        <h2 className='h-2 mb-4'>Code Example</h2>
        <h2 className='h-2 mb-4'>Num:{num}</h2>
        <button className='btn bg-blue-500 rounded-lg mt-10 cursor-pointer text-black' onClick={()=>{
            setNum(num+1);
        }}>Click me</button>
    </div>
  )
}
export default CodeExample