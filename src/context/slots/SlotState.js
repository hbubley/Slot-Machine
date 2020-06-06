import React, {useReducer} from 'react'
import SlotContext from './slotContext'
import SlotReducer from './slotReducer'
import characterData from "../character-data.json";
import {
GET_SLOTS_ARRAY,
CLEAR_GAME,
RESULTS,
TOGGLE_SPIN,
TOGGLE_RESULTS,
SET_CHARACTER,
TOGGLE_IS_READY
} from '../types'


const SlotState = props => {
    const initialState = {
        iconArray: ['fad fa-badger-honey', 'fad fa-snake', 'fad fa-rabbit'],
        characterIconArray: ['fad fa-badger-honey', 'fad fa-snake', 'fad fa-snake', 'fad fa-rabbit', 'fad fa-rabbit', 'fad fa-rabbit'],
        characterInitial: null,
        slotsArray: null,
        isSpinning: false,
        results: null,
        isShowingResults: false,
        hasCharacter: false,
        isReady: false,
    }
    const [state, dispatch] = useReducer(SlotReducer, initialState)

// const getCharacterArray(){

// }

const getSlotsArray = (array) => {
    const {characterIconArray} = state
    let newArray = []
    toggleSpin()
    for(let i=0; i < 3; i++){
        let ranNum = Math.floor(Math.random()*Math.floor(characterIconArray.length))
        let icon = characterIconArray[ranNum]
        newArray.push(icon)
    }
   getResults(newArray);
    dispatch({
        type: GET_SLOTS_ARRAY,
        payload: newArray
    })
}

const getResults = (array) => {
    const {iconArray, hasCharacter} = state
    let newResult=''
    if(array.every(icon => icon === iconArray[0])){
        newResult = 'match-index-0'
    }
    else if(array.every(icon => icon === iconArray[1])){
        newResult = 'match-index-1'
    }
    else if(array.every(icon => icon === iconArray[2])){
        newResult = 'match-index-2'
    }else{
        newResult = 'no-match'
    }
    if(hasCharacter === false && newResult!=='no-match'){
        setCharacter(newResult)
    }
    dispatch({
        type: RESULTS,
        payload: newResult
    })
}

const setCharacter = (results) => {
    let character = null;
    if (results !== "no-match") {
      if (results === "match-index-0") {
        character = characterData.badger;
      } else if (results === "match-index-1") {
        character = characterData.snake;
      } else if (results === "match-index-2") {
        character = characterData.rabbit;
      }

      dispatch({
        type: SET_CHARACTER,
        payload: character,
      });
    }
  };


const toggleSpin = () => {
    dispatch({
        type: TOGGLE_SPIN,
    })
}
const toggleIsReady = () => {
    dispatch({
        type: TOGGLE_IS_READY,
    })
}




    return (
        <SlotContext.Provider
            value={{
                iconArray: state.iconArray,
                characterIconArray: state.characterIconArray,
                characterInitial: state.characterInitial,
                slotsArray: state.slotsArray,
                isSpinning: state.isSpinning,
                results: state.results,
                isShowingResults: state.isShowingResults,
                hasCharacter: state.hasCharacter,
                isReady: state.isReady,
                getSlotsArray,
                getResults,
                toggleSpin,
                toggleIsReady
            }}
        >
            {props.children}
        </SlotContext.Provider>
    )
}

export default SlotState
