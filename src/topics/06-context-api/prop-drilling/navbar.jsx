import React, { createContext, useState } from 'react'
import NavaLinks from './navlinks';

const NavbarContext=createContext():
const Navbar = () => {
    const[user,setUser]=useState({name:"Hoda"});

    function logout(){
        setUser(null);
    }

  return (
    <nav className='flex gap-4 justify-between'>
        <h4 className='h4'>PropDrilling</h4>
        <NavaLinks user={user} logout={logout} />
    </nav>
  )
}

export default Navbarcc1