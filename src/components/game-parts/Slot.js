import React from 'react'

const Slot = ({icon, index}) => {
    return (
        <div className='slot-container'>
          <h1 key={index}>{icon}</h1>  
        </div>
    )
}

export default Slot
