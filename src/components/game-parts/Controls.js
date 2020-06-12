import React, { useContext } from 'react'
import SlotContext from '../../context/slots/slotContext'
import Button from '../layout/Button'


const Controls = () => {
    const slotContext = useContext(SlotContext)
    const {getHuntSpin, getBreedSpin, getRestSpin} = slotContext
    return (
        <div className='controls'>
            <Button actionFn={getHuntSpin} action="HUNT" />
            <Button actionFn={getBreedSpin} action="BREED" />
            <Button actionFn={getRestSpin} action="REST" />
        </div>
    )
}
export default Controls