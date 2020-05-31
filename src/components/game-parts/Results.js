import React, {useContext} from 'react'
import SlotContext from '../../context/slots/slotContext'

const Results = () => {
    const slotContext = useContext(SlotContext)
    const {results} = slotContext 
    if(results && results !== null){
    return (
        <div className='results-container'>
           {results === 'winner' ? <h1>WINNER!</h1> : <h1>LOSER!</h1>} 
        </div>
    )
    }else{return <h1>Take a Spin!</h1>;}
}

export default Results
