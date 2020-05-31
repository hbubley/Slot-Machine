import React, { useContext } from 'react'
import Slots from './Slots'
import Results from './Results'
import './game-parts.scss'
import SlotContext from '../../context/slots/slotContext'

const Machine = () => {
    const slotContext = useContext(SlotContext)
    const { getSlotsArray} = slotContext
    return (
        <div className='all-center'>
            <Slots />
            <Results />
            <button onClick={getSlotsArray}>CLICK</button>
        </div>
    )
}
export default Machine