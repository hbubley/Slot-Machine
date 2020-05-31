import {
  GET_SLOTS_ARRAY,
  CLEAR_GAME,
  RESULTS,
  TOGGLE_SPIN,
  TOGGLE_RESULTS,
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
                results: action.payload
            }
        case TOGGLE_SPIN:
            return state
        case TOGGLE_RESULTS:
            return state
        default:
            return state;
    }
}