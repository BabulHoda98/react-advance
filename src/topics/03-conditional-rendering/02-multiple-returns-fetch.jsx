import axios from 'axios'
import React,{useState,useEffect} from 'react'

const url=`https://api.github.com/users/vanpelt`

const MultipleReturnsFetch = () => {
  const[user,setUser]=useState(null)
  const[isloading,setIsLoading]=useState(true)
  const[isError,setIsError]=useState(false)

  useEffect(()=>{
    async function fetchUser() {
      try{
        setIsLoading(true)
        const response=await axios.get(url)
        // console.log(response.data);
        setUser(response.data);
      }catch(err){
        console.log(err);
        setIsError(true)
      }finally{
        setIsLoading(false)
      }
    }
    fetchUser();
  },[]);
  if(isloading){
    return(
      <h1 className='h2'>Loading....</h1>
    )
  }
  if(isError){
    return(
      <h1 className='h2'>Error,try again later</h1>
    )
  }

//Destructuring
// const person={
//   name:"Rahul",
//   age:22,
// }

// const pName=person.name;
// const pAge=person.age;
// const {name,age}=person;
// name;
// age;
// const arr=[2,4,6];
// const a=arr[0]
// const b=arr[1]
// const c=arr[2]
// const[p,q,r]=arr;

//Destructuring (avatar_url,html_url,name,followers,following)
// console.log(user)


const {avatar_url,html_url,name,followers,following}=user;

  return (
    <section className='text-center'>
        <img
         src={user.avatar_url}
        alt={user.name}
        className='block mx-auto rounded-3xl size-80 mb-8'
        />

        <a href={user.html_url} className='mb-3 block'>
          <h2 className="h3 underline">{user.name}</h2>
        </a>
    <div className='flex gap-4 justify-center'>
        <p className='font-medium'>Followers:{user.followers}</p>
        <p>Following:{user.following}</p>
    </div>
    <p className='text-xl'>{user.location}</p>
    </section>
  )
}

export default MultipleReturnsFetch