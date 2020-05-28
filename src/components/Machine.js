import React from 'react'

const Machine = ({s1, s2 , s3}) => {
    return (
        <div>
            <h1> <span>{s1}</span> <span>{s2}</span>  <span>{s3}</span></h1>
            {s1===s2 && s1===s3 ? <h1>WINNER</h1> : <h1>LOSER</h1>}
        </div>
    )
}
export default Machine