import {
    GET_CHARACTER_SPIN,
    CLEAR_GAME,
    RESULTS,
    TOGGLE_SPIN,
    TOGGLE_IS_READY,
    SET_CHARACTER,
    RESET_CHARACTER,
    ACTION_SPIN,
    SPIN_OUTCOME,
    GAME_OVER,
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_CHARACTER_SPIN:
            let health = null;
            let hunger = null;
            if (action.payload.character !== null) {
                health = action.payload.character.health;
                hunger = action.payload.character.hunger;
            }
            return {
                ...state,
                slotsArray: action.payload.spinArray.newArray,
                character: action.payload.character,
                characterStatsObject:{current_health: health, current_hunger: hunger, current_offspring: 0},
                isSpinning: false,
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
            return {
                ...state,
                slotsArray: action.payload.shuffledArray,
                slotsStyleArray: action.payload.styleArray,
                results: action.payload.resultsCountObject,
                actionResult: action.payload.actionResult,
            };
        case SPIN_OUTCOME:
            console.log("Payload in reducer", action.payload)
            const {cHunger, cHealth, cOffspring} = action.payload.characterCurrentState 
            return {
                ...state,
                characterStatsObject: {current_health: cHealth, current_hunger: cHunger, current_offspring: cOffspring},
                spinCount: state.spinCount+1,
                generationCount: action.payload.gCount,
                isSpinning: false
            };
            case GAME_OVER:
                return {
                    ...state,
                    isGameOver: true,
                    score: action.payload,
                };
        default:
            return state;
    }
};
