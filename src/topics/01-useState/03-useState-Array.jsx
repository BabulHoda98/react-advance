import React, { useState } from 'react';
import{people as data} from "../../data";

const UseStateArray = () => {
    const[people,setPeople]=useState(data);
    function handleRemove(personId){
        //filter those person whose id does not match with parameter id
        const newPeople=people.filter((person)=>{
            return person.id !==personId;
        });
        setPeople(newPeople);
    }
    function handleClearList(){
        setPeople([]);
    }
  return (
    <section>
        <h2 className='h2 mb-4'>Use State Array</h2>

        {
            people.map((person)=>{
            const{id,name,age}=person;
            return(
                <article key={id} className='bg-neutral-700 py-2 px-6 rounded-lg shadow flex justify-between items-center mb-3'>
                    <h4 className='h5'>{name}</h4>
                    <button className='btn' onClick={()=>{handleRemove(id)}}>remove</button>
                </article>
            );
        })}
        <button className='btn w-full' onClick={handleClearList}>Clear List</button>
    </section>
  )
}
export default UseStateArray