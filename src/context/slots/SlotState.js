import React, {useReducer} from 'react'
import SlotContext from './slotContext'
import SlotReducer from './slotReducer'
import {
GET_SLOTS_ARRAY,
CLEAR_GAME,
RESULTS,
TOGGLE_SPIN,
TOGGLE_RESULTS
} from '../types'


const SlotState = props => {
    const initialState = {
        iconArray: ['🐶', '🐱', '🐟'],
        slotsArray: null,
        isSpinning: false,
        results: null,
        isShowingResults: false,
    }
    const [state, dispatch] = useReducer(SlotReducer, initialState)

const getSlotsArray = () => {
    const {iconArray} = state
    let newArray = []
    toggleSpin()
    for(let i=0; i < iconArray.length; i++){
        let ranNum = Math.floor(Math.random()*Math.floor(iconArray.length))
        let icon = iconArray[ranNum]
        newArray.push(icon)
    }
    getResults(newArray);
    dispatch({
        type: GET_SLOTS_ARRAY,
        payload: newArray
    })
}

const getResults = (array) => {
    let newResult=''
    if(array.every(icon => icon === array[0])){
        newResult = 'winner'
    }else{
        newResult = 'loser'
    }
    dispatch({
        type: RESULTS,
        payload: newResult
    })
}

const toggleSpin = () => {
    dispatch({
        type: TOGGLE_SPIN,
    })
}




    return (
        <SlotContext.Provider
            value={{
                iconArray: state.iconArray,
                slotsArray: state.slotsArray,
                isSpinning: state.isSpinning,
                results: state.results,
                isShowingResults: state.isShowingResults,
                getSlotsArray,
                getResults,
                toggleSpin
            }}
        >
            {props.children}
        </SlotContext.Provider>
    )
}

export default SlotState