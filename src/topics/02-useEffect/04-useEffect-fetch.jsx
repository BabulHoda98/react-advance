import React, { useState,useEffect } from 'react'

const url="https://api.github.com/users";
const UseEffectFetch = () => {
  const [githubUsers,setGithubUsers]=useState([]);

   async function fetchGithubUsers(){
    try{
      const response=await fetch(url);
      //to parse the response we use .json()
      const result=await response.json()
      //  console.log(result)
      setGithubUsers(result);
    }catch(err){
      console.log(err);
    }
  }
  
    useEffect(()=>{
      fetchGithubUsers();
    },[]);  

    // console.log(githubUsers);

  return (
    <div>
        <h1 className='h1 mb-6'>Github Users</h1>
        {githubUsers.map(({id,login,avatar_url})=>{
          return(
            <article key={id} className='p-4 flex gap-6 items-center bg-sky-800 rounded-3xl mb-2'>
              <img src={avatar_url} alt={login} className='block size-16 rounded-full'/>
              <h4 className='h5 font-medium'>{login}</h4>
            </article>
          )
        })}
    </div>
  )     
}
export default UseEffectFetch;