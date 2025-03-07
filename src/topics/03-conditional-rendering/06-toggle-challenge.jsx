//create state value(boolean)
// return a button and a component 
//when user click the button
//-toggle state value
//-conditionally render component/element

import React, { useState } from 'react'

const ToggleChallenge=()=> {
   const [toggle,setToggle]=useState(false);

    function handleToggle(){
        setToggle(!toggle);
    }
  return (
    <div>
        <h1 className='h1 mb-4'>ToggleChallenge</h1>
        <button className='btn' onClick={handleToggle}>Click me</button>
        {toggle && <SomeComponent/>}
    </div>
  )
}

function SomeComponent(){
    return(
        <div>
            <h1 className='h3'>Some Component</h1>
        </div>
    )
}

export default ToggleChallenge

