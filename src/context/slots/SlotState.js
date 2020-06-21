import React, { useReducer } from "react";
import SlotContext from "./slotContext";
import SlotReducer from "./slotReducer";
import characterData from "../character-data.json";
import {
    GET_CHARACTER_SPIN,
    CLEAR_GAME,
    RESULTS,
    TOGGLE_SPIN,
    SET_CHARACTER,
    RESET_CHARACTER,
    TOGGLE_IS_READY,
    ACTION_SPIN,
    SPIN_OUTCOME,
    GAME_OVER,
} from "../types";

const SlotState = (props) => {
    const initialState = {
        iconArray: ["fad fa-badger-honey", "fad fa-snake", "fad fa-rabbit"],
        character: null,
        characterArray: ["rabbit", "snake", "badger"],
        characterStatsObject: {},
        slotsArray: null,
        slotsStyleArray: [],
        isSpinning: false,
        isLoading: false,
        isReady: false,
        spinCount: 0,
        generationCount: 1,
        actionResult: {},
        isGameOver: false,
        score: 0
    };
    const [state, dispatch] = useReducer(SlotReducer, initialState);

    const spin = (array, character) => {
        let newArray = [];
        let classArray = [];
        toggleSpin();
        for (let i = 0; i < 3; i++) {
            let ranNum = Math.floor(Math.random() * Math.floor(array.length));
            let icon = array[ranNum];
            let style = [];
            newArray.push(icon);
            if (character) {
                if (icon === character.avatar) {
                    style = "neutral";
                    classArray.push(style);
                } else if (icon === character.counter_animal) {
                    style = "danger";
                    classArray.push(style);
                } else {
                    style = "success";
                    classArray.push(style);
                }
            }
        }
        return { newArray, classArray };
    };

    const getResults = (array, inputArray) => {
        let indexZeroCount = array.filter((icon) => icon === inputArray[0]);
        let indexOneCount = array.filter((icon) => icon === inputArray[1]);
        let indexTwoCount = array.filter((icon) => icon === inputArray[2]);
        indexZeroCount = indexZeroCount.length;
        indexOneCount = indexOneCount.length;
        indexTwoCount = indexTwoCount.length;
        return { indexZeroCount, indexOneCount, indexTwoCount };
    };

    const fightFunction = (pCount) => {
        let { character } = state;
        let fResult = {};
        let cAttack = Math.floor(
            Math.random() * Math.floor(character.strength * 100)
        );
        let pAttack = Math.floor(Math.random() * Math.floor(pCount * 30));
        if (pCount !== 0) {
            if (cAttack > pAttack) {
                fResult = {
                    result_text: "WIN",
                    initial_predators: pCount,
                    remaining_predators: pCount - pCount,
                };
            } else if (cAttack > pAttack / pCount) {
                fResult = {
                    result_text: "MIX",
                    initial_predators: pCount,
                    remaining_predators: pCount - 1,
                };
            } else {
                fResult = {
                    result_text: "LOSE",
                    initial_predators: pCount,
                    remaining_predators: pCount,
                };
            }
        } else {
            fResult = {
                result_text: "NONE",
                initial_predators: 0,
                remaining_predators: 0,
            };
        }
        return fResult;
    };

    const actionFunction = (action, countObject) => {
        let { character } = state;
        let actionResultObject = {};
        let hungerChange = -10;
        let healthChange = 0;
        let offspringChange = 0;
        let fightResult = fightFunction(countObject.indexOneCount);
        let predatorCount = fightResult.remaining_predators;

        switch (action) {
            case "HUNT":
                if (countObject.indexTwoCount === 1 && predatorCount < 1) {
                    hungerChange = hungerChange + 10;
                    actionResultObject = {
                        result: 1,
                        action: "hunt",
                        hunger_change: hungerChange,
                        health_change: healthChange,
                        offspring_change: offspringChange,
                        fight_result: fightResult,
                    };
                } else if (
                    countObject.indexTwoCount === 2 &&
                    predatorCount < 1
                ) {
                    hungerChange = hungerChange + 30;
                    actionResultObject = {
                        result: 2,
                        action: "hunt",
                        hunger_change: hungerChange,
                        health_change: healthChange,
                        offspring_change: offspringChange,
                        fight_result: fightResult,
                    };
                } else if (
                    countObject.indexTwoCount === 3 &&
                    predatorCount < 1
                ) {
                    hungerChange = hungerChange + 50;
                    actionResultObject = {
                        result: 3,
                        action: "hunt",
                        hunger_change: hungerChange,
                        health_change: healthChange,
                        offspring_change: offspringChange,
                        fight_result: fightResult,
                    };
                }         
                break;
            case "BREED":
                if (countObject.indexTwoCount === 1 && predatorCount < 1) {
                    offspringChange =
                        offspringChange + Math.floor(character.offspring / 3);
                    actionResultObject = {
                        result: 1,
                        action: "breed",
                        hunger_change: hungerChange,
                        health_change: healthChange,
                        offspring_change: offspringChange,
                        fight_result: fightResult,
                    };
                } else if (
                    countObject.indexTwoCount === 2 &&
                    predatorCount < 1
                ) {
                    offspringChange =
                        offspringChange + Math.floor(character.offspring / 2);
                    actionResultObject = {
                        result: 2,
                        action: "breed",
                        hunger_change: hungerChange,
                        health_change: healthChange,
                        offspring_change: offspringChange,
                        fight_result: fightResult,
                    };
                } else if (
                    countObject.indexTwoCount === 3 &&
                    predatorCount < 1
                ) {
                    offspringChange =
                        offspringChange + Math.floor(character.offspring);
                    actionResultObject = {
                        result: 3,
                        action: "breed",
                        hunger_change: hungerChange,
                        health_change: healthChange,
                        offspring_change: offspringChange,
                        fight_result: fightResult,
                    };
                } 
                break;
            case "REST":
                if (countObject.indexTwoCount === 1 && predatorCount < 1) {
                    healthChange = healthChange + 10;
                    actionResultObject = {
                        result: 1,
                        action: "offspring",
                        hunger_change: hungerChange,
                        health_change: healthChange,
                        offspring_change: offspringChange,
                        fight_result: fightResult,
                    };
                } else if (
                    countObject.indexTwoCount === 2 &&
                    predatorCount < 1
                ) {
                    healthChange = healthChange + 30;
                    actionResultObject = {
                        result: 2,
                        action: "offspring",
                        hunger_change: hungerChange,
                        health_change: healthChange,
                        offspring_change: offspringChange,
                        fight_result: fightResult,
                    };
                } else if (
                    countObject.indexTwoCount === 3 &&
                    predatorCount < 1
                ) {
                    healthChange = healthChange + 50;
                    actionResultObject = {
                        result: 3,
                        action: "offspring",
                        hunger_change: hungerChange,
                        health_change: healthChange,
                        offspring_change: offspringChange,
                        fight_result: fightResult,
                    };
                } 
                break;
            default:
                break;
        }
        if (predatorCount === 1) {
            healthChange = -10;
            actionResultObject = {
                result: -1,
                action: action,
                hunger_change: hungerChange,
                health_change: healthChange,
                offspring_change: offspringChange,
                fight_result: fightResult,
            };
        } else if (predatorCount === 2) {
            healthChange = -30;
            actionResultObject = {
                result: -2,
                action: action,
                hunger_change: hungerChange,
                health_change: healthChange,
                offspring_change: offspringChange,
                fight_result: fightResult,
            }
        } else if (predatorCount === 3) {
            healthChange = -60;
            actionResultObject = {
                result: -3,
                action: action,
                hunger_change: hungerChange,
                health_change: healthChange,
                offspring_change: offspringChange,
                fight_result: fightResult,
            }
        }else if(predatorCount === 0 && countObject.indexTwoCount<=0){
            actionResultObject = {
                result: 0,
                action: action,
                hunger_change: hungerChange,
                health_change: healthChange,
                offspring_change: offspringChange,
                fight_result: fightResult,
            };
        }
        return actionResultObject;
    };

    const spinOutcomes = (resultsObject) => {
        let {
            character,
            characterStatsObject,
            spinCount,
            generationCount,
        } = state;
        const { health, hunger } = character;
        const {
            health_change,
            hunger_change,
            offspring_change,
        } = resultsObject;
        const {
            current_health,
            current_hunger,
            current_offspring,
        } = characterStatsObject;
        let characterCurrentState = {
            cHunger: current_hunger + hunger_change,
            cHealth: current_health + health_change,
            cOffspring: current_offspring + offspring_change,
        };

        let gCount = generationCount;
        if ((spinCount + 1) / 10 === generationCount) {
            gCount = generationCount + 1;
        }
        if ((current_health + health_change) <= 0 || (current_hunger + hunger_change) <= 0) {
            if((current_offspring + offspring_change)<=0){
                gameOver(spinCount, generationCount) 
            }
            characterCurrentState = {
                cHunger: hunger,
                cHealth: health,
                cOffspring: current_offspring - 1,
            };
        }

        dispatch({
            type: SPIN_OUTCOME,
            payload: { characterCurrentState, gCount },
        });
    };

    const getActionSpin = (action, iconArray) => {
        const { character } = state;
        let spinObject = spin(iconArray, character);
        let shuffledArray = spinObject.newArray;
        let styleArray = spinObject.classArray;
        let resultsCountObject = getResults(shuffledArray, iconArray);
        let actionResult = actionFunction(action, resultsCountObject);
        spinOutcomes(actionResult);
        dispatch({
            type: ACTION_SPIN,
            payload: {
                shuffledArray,
                styleArray,
                resultsCountObject,
                actionResult,
            },
        });
    };

    const getCharacterSpin = () => {
        const { iconArray } = state;
        let spinArray = spin(iconArray);
        let results = getResults(spinArray.newArray, iconArray);

        let character = null;
        if (results.indexZeroCount === 3) {
            character = characterData.badger;
        } else if (results.indexOneCount === 3) {
            character = characterData.snake;
        } else if (results.indexTwoCount === 3) {
            character = characterData.rabbit;
        }
        dispatch({
            type: GET_CHARACTER_SPIN,
            payload: { spinArray, character },
        });
    };

    const toggleSpin = () => {
        dispatch({
            type: TOGGLE_SPIN,
        });
    };

    const gameOver = (spinCount, generationCount) => {
        let score = spinCount*generationCount
        dispatch({
            type: GAME_OVER,
            payload: score
        });
    };
    const toggleIsReady = () => {
        dispatch({
            type: TOGGLE_IS_READY,
        });
    };

    return (
        <SlotContext.Provider
            value={{
                iconArray: state.iconArray,
                character: state.character,
                characterArray: state.characterArray,
                characterIconArray: state.characterIconArray,
                characterStatsObject: state.characterStatsObject,
                slotsArray: state.slotsArray,
                slotsStyleArray: state.slotsStyleArray,
                isSpinning: state.isSpinning,
                isLoading: state.isLoading,
                isReady: state.isReady,
                spinCount: state.spinCount,
                generationCount: state.generationCount,
                fightResult: state.fightResult,
                actionResult: state.actionResult,
                results: state.results,
                isGameOver: state.isGameOver,
                score: state.score,
                getCharacterSpin,
                getActionSpin,
                getResults,
                toggleSpin,
                toggleIsReady,
                spinOutcomes,
            }}
        >
            {props.children}
        </SlotContext.Provider>
    );
};

export default SlotState;

// gameObject: {
//     numberOfSpins: 0,
//     generation: 1,
//     fightResult: {},
//     actionResult: {},
// },

// const fightFunction = (character, pCount) => {
//     let fightResult={}
//     let cAttack = Math.floor(
//         Math.random() * Math.floor(character.strength * 100)
//     );
//     let pAttack = Math.floor(Math.random() * Math.floor(pCount * 0));
//     console.log("random number", character, pCount, pAttack, cAttack);
//     if (pCount !== 0) {
//         if (cAttack > pAttack) {
//             fResult = {result: 1, health: -5}
//         } else if (cAttack > pAttack / 2) {
//             fResult = {result: 2, health: -25}
//         } else if (pAttack > cAttack) {
//             fResult = {result: 3, health: -50}
//         }
//     } else {
//         fResult = {result: 0, health: 0}
//     }

//    return fResult
// };
