import React, { useContext } from 'react'
import{NavbarContext} from "./Navbar";

const UserContainer = () => {
  const {user,logout}=useContext(NavbarContext);
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