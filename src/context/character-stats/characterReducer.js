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
            let offspring = null;
            if (action.payload.character !== null) {
                health = action.payload.character.health;
                hunger = action.payload.character.hunger;
                offspring = action.payload.character.offspring
            }
            return {
                ...state,
                slotsArray: action.payload.spinArray.newArray,
                character: action.payload.character,
                health: health,
                hunger: hunger,
                offspring: offspring,
                isSpinning: false,
            };
    //  case RESULTS:
    //         return {
    //             ...state,
    //             results: action.payload,
    //             isSpinning: false,
    //         };
           
        // case CLEAR_GAME:
        //     return state;
        // case RESULTS:
        //     return {
        //         ...state,
        //         results: action.payload,
        //         isSpinning: false,
        //     };
        // case SET_CHARACTER:
        //     return {
        //         ...state,
        //         character: action.payload,
        //         characterStatsObject: {
        //             health: action.payload.health,
        //             hunger: action.payload.hunger,
        //             offspring: 0
        //         },
        //         isSpinning: false,
        //         hasCharacter: true,
        //     };
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
                isSpinning: false
            };
        // case SPIN_OUTCOME:
        //     return {
        //         ...state,
        //         gameObject: {
        //             numberOfSpins: action.payload.spinCount,
        //             generation: action.payload.generationCount,
        //             fightResult: action.payload.fightResult,
        //             actionResult: action.payload.actionResult
        //         },
        //         characterStatsObject: {
        //             health: action.payload.actionResult.health,
        //             hunger: action.payload.actionResult.hunger,
        //             offspring: action.payload.cOffspring
        //         },
        //         isSpinning: false
        //     };
        //     case GAME_OVER:
        //         return {
        //             ...state,
        //             isGameOver: true,
        //         };
        default:
            return state;
    }
};
