import React, {useContext} from 'react'
import Slots from '../Slots'
import CharacterResults from './CharacterResults'
import SlotContext from '../../../context/slots/slotContext'

const CharacterSelect = () => {
    const slotContext = useContext(SlotContext)
    const {getSlotsArray} = slotContext 
    return (
        <div>
            <Slots />
            <CharacterResults />
            <button onClick={getSlotsArray}>CLICK</button>
        </div>
    )
}

export default CharacterSelect
