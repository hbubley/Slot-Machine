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
    switch (action.type) {
        case GET_CHARACTER_SPIN:
            return {
                ...state,
                slotsArray: action.payload,
            };
        case CLEAR_GAME:
            return state;
        case RESULTS:
            return {
                ...state,
                results: action.payload,
                isSpinning: false,
            };
        case SET_CHARACTER:
            return {
                ...state,
                character: action.payload,
                characterHealth: action.payload.health,
                characterHunger: action.payload.hunger,
                characterOffspring: 0,
                hasCharacter: true,
            };
        case TOGGLE_SPIN:
            return {
                ...state,
                isSpinning: true,
            };
        case TOGGLE_IS_READY:
            return {
                ...state,
                isReady: true,
            };
        case ACTION_SPIN:
            let spinCount = state.numberOfSpins + 1;
            let generationCount = state.generation;
            if (spinCount % (generationCount * 10) === 0) {
                generationCount = generationCount + 1;
            }
            return {
                ...state,
                slotsArray: action.payload.spinArray,
                slotsStyleArray: action.payload.styleArray,
                characterHealth: state.characterHealth + action.payload.health,
                characterHunger: state.characterHunger + action.payload.hunger,
                characterOffspring:
                    state.characterOffspring + action.payload.offspring,
                numberOfSpins: state.numberOfSpins + 1,
                generation: generationCount,
                isSpinning: false,
            };
        default:
            return state;
    }
};
