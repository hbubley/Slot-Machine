import React, { useContext } from 'react'
import Slots from './Slots'
import CharacterStat from "../character/CharacterStat"
import SlotContext from '../../context/slots/slotContext'
import Controls from './Controls'

const Game = () => {
    const slotContext = useContext(SlotContext)
    const {characterHunger, character, characterHealth, characterOffspring, generation} = slotContext
    return (
        <div className='game-container'>
            <h1>Generation: {generation}</h1>
            <Slots />
            <Controls />
            <CharacterStat character={character} characterHealth={characterHealth} characterHunger={characterHunger} characterOffspring={characterOffspring}/>
        </div>
    )
}
export default Game