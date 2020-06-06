import {
  GET_SLOTS_ARRAY,
  CLEAR_GAME,
  RESULTS,
  TOGGLE_SPIN,
  TOGGLE_IS_READY,
  SET_CHARACTER,
  HUNT
} from "../types";

export default (state, action) => {
    switch(action.type){
        case GET_SLOTS_ARRAY:
            return {
                ...state,
                slotsArray: action.payload
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
              characterOffspring: action.payload.offspring,
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
        case HUNT:
            return{
                ...state,
                slotsArray: action.payload.spinResult,
                characterHealth: (state.characterHealth)+(action.payload.health),
                characterHunger: (state.characterHunger)+(action.payload.hunger),
                isSpinning: false
            } 
        default:
            return state;
    }
}