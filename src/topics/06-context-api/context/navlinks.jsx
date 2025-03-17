import React from 'react'
import UserContainer from './usercontainer'

const NavaLinks = () => {
  return (
    <div className='flex gap-4 items-center'>
        <ul className='flex gap-4 items-center text-purple-500'>
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href='#'>About</a>
            </li>
        </ul>
        < UserContainer/>
    </div>
  )
}

export default NavaLinks;