import React, {useState,useEffect } from 'react'

const MultipleReturns = () => {
    const[data,setData]=useState(null);
    const[loading,setLoading]=useState(true);
    function fetchFakeData(){
      setTimeout(()=>{
        setData({
        name:"Rahul",
        age:28,
      });
      setLoading(false);
      },2000);
    }
      useEffect(()=>{fetchFakeData()},[]);
      if(loading){
        return (
          <div> 
            <h2 className="h-2 mb-2">Loading...</h2>
          </div>
        )
      }
      return (
        <div>
          <h2 className="h-2 mb-2">MultipleReturns</h2>
          <p className="h3">{data.name}</p>
          <p className="h4">{data.age}</p>
        </div>
      );
  };
export default MultipleReturns