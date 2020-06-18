import React, { useContext } from 'react'
import Slots from '../game-components/Slots'
import CharacterStat from "./CharacterStat"
import SlotContext from '../../context/slots/slotContext'
import Controls from '../game-components/Controls'
import SpinResults from './SpinResults'

const Game = () => {
    const slotContext = useContext(SlotContext)
    const { character, generation} = slotContext
    return (
        <div className='game-container'>
            <h1>Generation: {generation}</h1>
            <Slots />
            <Controls />
            <CharacterStat />
            {/* <SpinResults character={character} pCount={pCount} sCount={sCount} fightResult={fightResult} action={action} statChange={gameObject}/>  */}
        </div>
    )
}
export default Game