import React, { useState,createContext, useContext } from 'react'
import NavaLinks from './navlinks';

export const NavbarContext=createContext();
//returns two components
//Provider
//Consumer

export const useNavbarContext=()=>{
  return useContext(NavbarContext);
}

const Navbar = () => {
    const[user,setUser]=useState({name:"Hoda"});

    function logout(){
        setUser(null);
    }

  return (
    <NavbarContext.Provider value={{user,logout}}>
      <nav className='flex gap-4 justify-between'>
          <h4 className='h4'>PropDrilling</h4>
          <NavaLinks/>
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar;

