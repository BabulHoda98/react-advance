import React, { useState } from 'react'

const UseStateObject = () => {
    // const[name,setName]=useState("Rahul");
    // const[age,setAge]=useState("26");
    // const[hobby,setHobby]=useState("Cricket");
    const[person,setPerson]=useState({
        name:"Mohit",
        age:12,
        hobby:"footbal"
    })

    function handleChangePerson(){
        // setName("Hoda");
        // setAge("16");
        // setHobby("Coding hey re baba");
        //*1
        // setPerson({
        //     name:"Babul Hoda",
        //     age:34,
        //     hobby:"Swiming"
        // })
        setPerson({
            // name:"Mohit",
            // age:12,
            // hobby:"footbal",
            ...person,//spread operater
            name:"Harsh",
        })
    }
  return (
    <div>
        <h2>Name:{person.name}</h2>
        <h2>Age:{person.age}</h2>
        <h2>hobby:{person.hobby}</h2>
        <button className="btn bg-blue-500 rounded-lg mt-10 cursor-pointer text-black"  onClick={handleChangePerson}>New Person click</button>
    </div>
  )
}
export default UseStateObject