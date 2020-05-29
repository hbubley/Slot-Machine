import React from 'react'

const Slot = ({icon, index}) => {
    return (
        <div>
          <h1 key={index}>{icon}</h1>  
        </div>
    )
}

export default Slot
