import React, { useContext } from 'react'
import Slots from './Slots'
import CharacterStat from "../character/CharacterStat"
import SlotContext from '../../context/slots/slotContext'
import Controls from './Controls'
import GameResults from './GameResults'

const Game = () => {
    const slotContext = useContext(SlotContext)
    const {characterHunger, character, characterHealth, characterOffspring, generation, pCount, sCount, fightResult, action, statChangeObject} = slotContext
    return (
        <div className='game-container'>
            <h1>Generation: {generation}</h1>
            <Slots />
            <Controls />
            <CharacterStat character={character} characterHealth={characterHealth} characterHunger={characterHunger} characterOffspring={characterOffspring}/>
            <GameResults character={character} pCount={pCount} sCount={sCount} fightResult={fightResult} action={action} statChange={statChangeObject}/>
        </div>
    )
}
export default Game