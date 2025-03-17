import React from "react";
import { useNavbarContext } from "./navbar";

const UserContainer = () => {

  const {user,logout}= useNavbarContext();

  return (
    <div className='flex gap-2 items-center'>
        {user ? (
            <>
                <p >Hello There,{user.name}</p>
                <button className='btn'onClick={logout}>Logout</button>
            </>
        ):(
            <p>Please login</p>
        )}
        
    </div>
  )
}

export default UserContainer;

