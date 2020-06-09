import {
  GET_CHARACTER_SPIN,
  CLEAR_GAME,
  RESULTS,
  TOGGLE_SPIN,
  TOGGLE_IS_READY,
  SET_CHARACTER,
  ACTION_SPIN,
} from "../types";

export default (state, action) => {
    switch(action.type){
        case GET_CHARACTER_SPIN:
            return {
                ...state,
                slotsArray: action.payload,
            }
        case CLEAR_GAME:
            return state
        case RESULTS:
            return {
                ...state,
                results: action.payload,
                isSpinning: false 
          }
          case SET_CHARACTER:
            return {
              ...state,
              character: action.payload,
              characterHealth: action.payload.health,
              characterHunger: action.payload.hunger,
              characterOffspring: 0,
              hasCharacter: true
            }
        case TOGGLE_SPIN:
            return {
                ...state,
                isSpinning: true 
            }
        case TOGGLE_IS_READY:
            return{
                ...state,
                isReady: true
            } 
        case ACTION_SPIN:
            console.log("IN REDUCER CHAROFF STATE", state.characterOffspring)
            console.log("IN REDUCER OFFSPRING", action.payload.offspring)
            return{
                ...state,
                slotsArray: action.payload.spinResult,
                characterHealth: (state.characterHealth)+(action.payload.health),
                characterHunger: (state.characterHunger)+(action.payload.hunger),
                characterOffspring: (state.characterOffspring)+(action.payload.offspring),
                isSpinning: false
            } 
        default:
            return state;
    }
}