import React, { useState } from 'react'

const ShorCircuitExample = () => {
    //falsy
    const[text,setText]=useState(false);
    //truthy
    const [name,setName]=useState("Rahul");
    const [user,setUser]=useState({name:"Vishal"});
    const[isEditing,setIsEditing]=useState(true);

    
  return (
    <div>
        {/* agar text nhi aata to default text rahega */}
        <h2 className='h2'>{text || "Default Text"}</h2>
        {/* agar text nhi hai to second jsx bhi nhi rahega  */}
        {text && (
                <div>
                    <h2 className='h2'>whatever return </h2>
                    <h2 className='h2'>{name}</h2>
                </div>
            )
        }
        {/* agar text nhi hai to second jsx rahega  */}
        {!text && (
                <div>
                    <h2 className='h2'>whatever return Two</h2>
                    <h2 className='h2'>{name}</h2>
                </div>
            )
        }
        {/* agar user info hai to SomeComponent render hoga */}
        {user && <SomeComponent/>}

        <button className={`text-purple-100 border-4 py-2 px-4 rounded-lg cursor-pointer ${isEditing ? "bg-green-700 hover:bg-green-700 border-green" : "bg-purple-700 hover:bg-purple-600 border-purple-800" }`}
        >
        {isEditing ? "Confirm" : "Edit"}
        </button>

        {user ? (
            <div>
                <h3 className='h3'>hello,there,{user.name}</h3>
            </div>

        ):(
            <div>
                <h3 className='h3'>Please login</h3>
            </div> 
        )}
    </div>
  )
}

export default ShorCircuitExample

const SomeComponent=({name})=>{
    return(
        <div>
            <h4 className='h4'>Hello there,{name}</h4>
            <button className='btn'>log out</button>
        </div>
    )
}