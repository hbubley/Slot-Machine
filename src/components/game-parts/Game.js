import React, { useContext } from 'react'
import Slots from './Slots'
import CharacterStat from "../character/CharacterStat"
import './game-parts.scss'
import SlotContext from '../../context/slots/slotContext'

const Game = () => {
    const slotContext = useContext(SlotContext)
    const {getHuntSpin} = slotContext
    return (
        <div className='all-center'>
            <Slots />
            <CharacterStat />
            <button onClick={getHuntSpin}>HUNT</button>
        </div>
    )
}
export default Game