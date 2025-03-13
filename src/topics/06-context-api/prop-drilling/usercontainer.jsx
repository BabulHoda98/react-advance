import React from 'react'

const UserContainer = ({user,logout}) => {
  return (
    <div className='flex gap-2 items-center'>
        {uesr ? (
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

export default UserContainer