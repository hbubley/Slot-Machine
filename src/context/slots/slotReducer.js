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
            // const {character} = state
            // let hunger = -10
            // let predatorCount = action.payload.filter(icon => icon === character.iconArrayHunt[1])
            // let preyCount = action.payload.filter(icon => icon === character.iconArrayHunt[2])
            // let neutralCount = action.payload.filter(icon => icon === character.iconArrayHunt[0])
            // console.log("PRED", predatorCount)
            // console.log("PREy", preyCount)
            // console.log("newt", neutralCount)
            // if(action.payload[0]===character.iconArrayHunt[1]) && (action.payload[1]===character.iconArrayHunt[1]){
            //     hunger = hunger+30
            // }
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