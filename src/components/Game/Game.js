import React, { useContext } from 'react'
import Slots from '../game-components/Slots'
import CharacterStat from "./CharacterStat"
import SlotContext from '../../context/slots/slotContext'
import Controls from '../game-components/Controls'
import SpinResults from './SpinResults'

const Game = () => {
    const slotContext = useContext(SlotContext)
    const { generationCount, actionResult} = slotContext
    const {result, action, hunger_change, health_change, offspring_change, fight_result} = actionResult
    return (
        <div className='game-container'>
            <h1>Generation: {generationCount}</h1>
            <Slots />
            <Controls />
            <CharacterStat />
            {fight_result && <SpinResults action={action} result={result} fight_result={fight_result} health_change={health_change} hunger_change={hunger_change} offspring_change={offspring_change}/>}
        </div>
    )
}
export default Game