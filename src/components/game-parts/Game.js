import React, { useContext } from 'react'
import Slots from './Slots'
import CharacterStat from "../character/CharacterStat"
import './game-parts.scss'
import SlotContext from '../../context/slots/slotContext'

const Game = () => {
    const slotContext = useContext(SlotContext)
    const {getHuntSpin, getBreedSpin, getRestSpin, characterHunger, character, characterHealth, characterOffspring} = slotContext
    return (
        <div className='all-center'>
            <Slots />
            <CharacterStat character={character} characterHealth={characterHealth} characterHunger={characterHunger} characterOffspring={characterOffspring}/>
            <button onClick={getHuntSpin}>HUNT</button>
            <button onClick={getBreedSpin}>BREED</button>
            <button onClick={getRestSpin}>REST</button>
        </div>
    )
}
export default Game