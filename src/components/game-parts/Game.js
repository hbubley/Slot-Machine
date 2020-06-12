import React, { useContext } from 'react'
import Slots from './Slots'
import CharacterStat from "../character/CharacterStat"
import './game-parts.scss'
import SlotContext from '../../context/slots/slotContext'
import Controls from './Controls'

const Game = () => {
    const slotContext = useContext(SlotContext)
    const {characterHunger, character, characterHealth, characterOffspring} = slotContext
    return (
        <div className='all-center game-container'>
            <Slots />
            <Controls />
            <CharacterStat character={character} characterHealth={characterHealth} characterHunger={characterHunger} characterOffspring={characterOffspring}/>
        </div>
    )
}
export default Game