import React, { useState } from 'react'

const ShorCircuit = () => {
  //Truthy & Falsy Value...
  //null,undefined,0,"",NaN
  console.log(Boolean(null));
  console.log(Boolean(0));
  console.log(Boolean(""));

//Short Circuit (&& and ||)
  console.log("OR ||");
  //Executes first truthy value is non then last falsy value
  console.log("Hello" || 0);
  console.log("" || "Rahul");
  console.log(undefined || "Vishal");
  console.log(undefined || 0 || NaN || "JavaScript" || null);
  console.log(undefined || 0 || NaN || null);

  console.log("AND &&");
  //Excutes first falsy value, is non then last truthy value
  console.log("Harsh" && undefined);
  console.log("Vishal" && "JavaScript");
  console.log(null && "Hello there");
  console.log("One" && true && NaN && "JavaScript" && null);

  const [text,setText]=useState("");
  const [name,setName]=useState("Rahul");
  
  return (
    <div>
        <h1 className='h1'>ShorCircuit</h1>
        <h3 className='h3'>Falsy OR : {text || "hello world"}</h3>
        <h3 className='h3'>Falsy AND: {text && "hello world"}</h3>
        <h3 className='h3'>Falsy OR : {name || "hello world"}</h3>
        <h3 className='h3'>Falsy AND : {name && "hello world"}</h3>
    </div>
  );
};

export default ShorCircuit;