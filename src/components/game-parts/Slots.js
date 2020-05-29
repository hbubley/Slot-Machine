import React, {useContext, Fragment} from 'react'
import SlotContext from '../../context/slots/slotContext'
import Slot from './Slot'

const Slots = () => {
const slotContext = useContext(SlotContext)
const { slotsArray, getSlotsArray} = slotContext

    return (
        <Fragment>
        {slotsArray && slotsArray.map((icon, index) => (
            <Slot icon={icon} index={index}/>
        ))}
        <button onClick={getSlotsArray}>CLICK</button>
        </Fragment>
    )
}

export default Slots
