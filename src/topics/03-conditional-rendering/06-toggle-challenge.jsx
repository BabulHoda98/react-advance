//create state value(boolean)
// return a button and a component 
//when user click the button
//-toggle state value
//-conditionally render component/element

import { useState } from "react";

function ToggleChallenge() {
    const[toggle,setToggle]=useState(false);
    function handleToggle(){
        setToggle(!toggle);
    }
}
return(
    <div>
        <h1>Toggle Challenge</h1>
        <button onClick={handleToggle} className="btn">Click me </button>
        {toggle && <SomeComponent/>}
    </div>
)

function SomeComponent() {
    return(
        <div>
            <h3 className="h3">Some Component</h3>
        </div>
    )
}
export default ToggleChallenge;
