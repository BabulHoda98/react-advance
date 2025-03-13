import React from 'react'

const UserContainer = ({user,logout}) => {
  return (
    <div className='flex gap-2 items-center'>
        <p >Hello There,{user.name}</p>
        <button className='btn'onClick={logout}>Logout</button>
    </div>
  )
}

export default UserContainer