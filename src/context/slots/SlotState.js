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
        slotsArray: null,
        slotsStyleArray: [],
        isSpinning: false,
        isLoading: false,
        isReady: false,
        numberOfSpins: 0,
        generation: 1,
        fightResult: {},
        actionResult: {},
        isGameOver: false,
    };
    const [state, dispatch] = useReducer(SlotReducer, initialState);

    const spin = (array, character) => {
        let newArray = [];
        let classArray = [];
        console.log("array", array);
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
        let fResult = { initialPredators: pCount, remainingPredators: pCount };
        let cAttack = Math.floor(
            Math.random() * Math.floor(character.strength * 100)
        );
        let pAttack = Math.floor(Math.random() * Math.floor(pCount * 20));
        console.log("random number", character, pCount, pAttack, cAttack);
            if (cAttack > pAttack) {
                fResult = {
                    result: "WIN",
                    initialPredators: pCount,
                    remainingPredators: pCount - 1,
                };
            } else if (cAttack > pAttack / pCount) {
                fResult = {
                    result: "MIX",
                    initialPredators: pCount,
                    remainingPredators: pCount - 1,
                };
            } else {
                fResult = {
                    result: "LOSE",
                    initialPredators: pCount,
                    remainingPredators: pCount,
                };
            }
        }

        return fResult;
    };

    const actionFunction = (action, countObject) => {
        let { character } = state;
        let aResult = {};
        let hunger = -10;
        let health = 0;
        let offspring = 0;
        let fightResult = fight(countObject.indexOneCount)
        let predatorCount = fightResult.remainingPredators
        switch (action) {
            case "HUNT":
                if (countObject.indexTwoCount === 1 && predatorCount < 1) {
                    hunger = hunger + 10;
                    aResult = {
                        result: 1,
                        action: "hunt",
                        hunger: hunger,
                        health: health,
                        offspring: offspring,
                        fResult: 
                    };
                } else if (countObject.indexTwoCount === 2 && predatorCount < 1) {
                    hunger = hunger + 30;
                    aResult = {
                        result: 2,
                        action: "hunt",
                        hunger: hunger,
                        health: health,
                        offspring: offspring,
                    };
                } else if (countObject.indexTwoCount === 3 && predatorCount < 1) {
                    hunger = hunger + 50;
                    aResult = {
                        result: 3,
                        action: "hunt",
                        hunger: hunger,
                        health: health,
                        offspring: offspring,
                    };
                } else {
                    aResult = {
                        result: 0,
                        action: "hunt",
                        hunger: hunger,
                        health: health,
                        offspring: offspring,
                    };
                }
                break;
            case "BREED":
                if (countObject.indexTwoCount === 1 && predatorCount < 1) {
                    offspring = offspring + Math.floor(character.offspring / 3);
                    aResult = {
                        result: 1,
                        action: "breed",
                        hunger: hunger,
                        health: health,
                        offspring: offspring,
                    };
                } else if (countObject.indexTwoCount === 2 && predatorCount < 1) {
                    offspring = offspring + Math.floor(character.offspring / 2);
                    aResult = {
                        result: 2,
                        action: "breed",
                        hunger: hunger,
                        health: health,
                        offspring: offspring,
                    };
                } else if (countObject.indexTwoCount === 3 && predatorCount < 1)  {
                    offspring = offspring + Math.floor(character.offspring);
                    aResult = {
                        result: 3,
                        action: "breed",
                        hunger: hunger,
                        health: health,
                        offspring: offspring,
                    };
                } else {
                    aResult = {
                        result: 0,
                        action: "breed",
                        hunger: hunger,
                        health: health,
                        offspring: offspring,
                    };
                }
                break;
            case "REST":
                if (countObject.indexTwoCount === 1 && predatorCount < 1) {
                    health = health + 10;
                    aResult = {
                        result: 1,
                        action: "offspring",
                        hunger: hunger,
                        health: health,
                        offspring: offspring,
                    };
                } else if (countObject.indexTwoCount === 2 && predatorCount < 1) {
                    health = health + 30;
                    aResult = {
                        result: 2,
                        action: "offspring",
                        hunger: hunger,
                        health: health,
                        offspring: offspring,
                    };
                } else if (countObject.indexTwoCount === 3 && predatorCount < 1) {
                    health = health + 50;
                    aResult = {
                        result: 3,
                        action: "offspring",
                        hunger: hunger,
                        health: health,
                        offspring: offspring,
                    };
                } else {
                    aResult = {
                        result: 0,
                        action: "offspring",
                        hunger: hunger,
                        health: health,
                        offspring: offspring,
                    };
                }
                break;
            default:
                break;
        }
        return aResult;
    };

    const getCharacterSpin = () => {
        const { iconArray } = state;
        let spinArray = spin(iconArray);
        console.log("getCharacterSpin -> spinArray", spinArray);
        let results = getResults(spinArray.newArray, iconArray);
        console.log("getCharacterSpin -> results", results);
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

    const getActionSpin = (action, iconArray) => {
        const { character } = state;
        let spinObject = spin(iconArray, character);
        let shuffledArray = spinObject.newArray;
        let styleArray = spinObject.classArray;
        let resultsCountObject = getResults(shuffledArray, iconArray);
        let actionResult = actionFunction(action, resultsCountObject);
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

    const toggleSpin = () => {
        dispatch({
            type: TOGGLE_SPIN,
        });
    };
    const gameOver = () => {
        dispatch({
            type: GAME_OVER,
        });
    };
    const toggleIsReady = () => {
        dispatch({
            type: TOGGLE_IS_READY,
        });
    };

    // const getActionSpin = (action, iconArray) => {
    //     const { character } = state;
    //     let spinResult = spin(iconArray, character);
    //     let spinArray = spinResult.newArray;
    //     let styleArray = spinResult.classArray;
    //     let actionResult = actionFunction(character, action, spinArray, iconArray)
    //     actionResult.aResult.health = (actionResult.aResult.health)-(actionResult.fResult.health)
    //     spinOutcomes(actionResult.aResult, actionResult.fResult);
    //     dispatch({
    //         type: ACTION_SPIN,
    //         payload: {
    //             spinArray,
    //             styleArray
    //         },
    //     });
    // };

    // const spinOutcomes = (actionResult, fightResult) => {
    //     const {
    //         character,
    //         characterStatsObject,
    //         gameObject,
    //     } = state;
    //     let spinCount = gameObject.numberOfSpins + 1;
    //     let generationCount = gameObject.generation;
    //     let cOffspring = characterStatsObject.offspring + actionResult.offspring;
    //     if (spinCount % (generationCount * 10) === 0) {
    //         generationCount = generationCount + 1;
    //     }
    //     if(characterStatsObject.health + actionResult.health <= 0 || characterStatsObject.hunger + actionResult.hunger <= 0) {
    //         cOffspring = cOffspring - 1;
    //         actionResult.health=character.health
    //         actionResult.hunger=character.hunger
    //         fightResult=4
    //         if (cOffspring < 0) {
    //             gameOver()
    //         }
    //     }else{
    //         actionResult.health=characterStatsObject.health + actionResult.health
    //         actionResult.hunger=characterStatsObject.hunger + actionResult.hunger
    //     }
    //     dispatch({
    //         type: SPIN_OUTCOME,
    //         payload: { cOffspring, generationCount, spinCount, actionResult, fightResult },
    //     });
    // };

    return (
        <SlotContext.Provider
            value={{
                iconArray: state.iconArray,
                character: state.character,
                characterArray: state.characterArray,
                characterIconArray: state.characterIconArray,
                slotsArray: state.slotsArray,
                slotsStyleArray: state.slotsStyleArray,
                isSpinning: state.isSpinning,
                isLoading: state.isLoading,
                isReady: state.isReady,
                numberOfSpins: state,
                generation: state.generation,
                fightResult: state.fightResult,
                actionResult: state.actionResult,
                health: state.health,
                hunger: state.hunger,
                offspring: state.offspring,
                results: state.results,
                isGameOver: state.isGameOver,
                getCharacterSpin,
                getActionSpin,
                getResults,
                toggleSpin,
                toggleIsReady,
                // spinOutcomes,
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
//     let fResult={}
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
