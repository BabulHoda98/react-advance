import {useState} from "react";

const UseStateExample=()=>{
    // console.log(useState());//[undefine,fn]
    // console.log(useState("100"));//[100,fn]

    // Destruct 
    const [value,setValue]=useState(10);
    const handleClick=()=>{
        // value++; //no
        setValue(value+1);
    }; 
    // let count=0;
    // const handleClick=()=>{
    //     count++;
    //     console.log(count);
    // }
    return(
        <section>
            <h1 className="text -2xl font-bold mb-4">Example of useState</h1>
            <p className="text-lg">value:{value }</p>
            <button className="bg-purple-700 text-white px-4 py-2 rounded inline-block mt-4 cursor-pointer" onClick={handleClick}>increment</button>
        </section>
    );
};

export default UseStateExample;