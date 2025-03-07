import React, { useState } from 'react'

const ControllerInputs = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    function handleChangeName(e){
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.value)
        setName(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(name,email);
    }
  return (
    <div>
        <form onClick={handleSubmit}>
            <h3 className='h3 mb-4'>Controlles Inputs</h3>
            <div className='flex flex-col gap-2 mb-3'> 
                <label htmlFor='name' className='text-xl'>Name</label>
                <input
                type='text'
                name='name'
                id='name'
                className='input'
                value={name}
                onChange={handleChangeName}
                 />
            </div>
            <div className='flex flex-col gap-2 mb-3'> 
                <label htmlFor='email' className='text-xl'>Email</label>
                <input
                type='email'
                name='email'
                id='email'
                className='input'
                value={email}
                onChange={(e)=>{setEmail(e.target.email)}}
                 />
            </div>
            <div>
                <button className='btn'>Click me</button>
            </div>
        </form>
    </div>

  );
};

export default ControllerInputs;