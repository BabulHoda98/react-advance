import React from 'react'
import UseToggle from './01-toggle'

const Demo = () => {
    const {show,toggle}=UseToggle(false);
  return (
    <div>
        <h2 className='h2 mb-8'>Using Custom hook</h2>
        <button className='btn mb-4'onClick={toggle}>Show Para</button>
        {show && (
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint deserunt ex! Perferendis voluptates dignissimos numquam consequuntur cupiditate?
            </p>
        )}
    </div>
  )
}

export default Demo