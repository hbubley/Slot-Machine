import React, { useContext } from 'react'
import SlotContext from '../../context/slots/slotContext'
import Button from '../layout/Button'


const Controls = () => {
    const slotContext = useContext(SlotContext)
    const {getActionSpin, character} = slotContext
    return (
        <div className='controls'>
            <Button actionFn={getActionSpin} action="HUNT" iconArray={character.iconArrayHunt} />
            <Button actionFn={getActionSpin} action="BREED" iconArray={character.iconArrayBreed}/>
            <Button actionFn={getActionSpin} action="REST" iconArray={character.iconArrayRest} />
        </div>
    )
}
export default Controls