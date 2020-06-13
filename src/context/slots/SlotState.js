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
    TOGGLE_IS_READY,
    ACTION_SPIN,
} from "../types";

const SlotState = (props) => {
    const initialState = {
        iconArray: ["fad fa-badger-honey", "fad fa-snake", "fad fa-rabbit"],
        characterIconArray: [
            "fad fa-badger-honey",
            "fad fa-snake",
            "fad fa-snake",
            "fad fa-rabbit",
            "fad fa-rabbit",
        ],
        character: null,
        characterArray: ["rabbit", "snake", "badger"],
        characterHunger: null,
        characterHealth: null,
        numberOfSpins: 0,
        characterOffspring: null,
        slotsArray: null,
        isSpinning: false,
        results: null,
        hasCharacter: false,
        isReady: false,
        generation: 1,
        slotsStyleArray: [],
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
        return {newArray, classArray};
    };

    const fight = (character, pCount) => {
        let cAttack = Math.floor(
            Math.random() * Math.floor(character.strength * 100)
        );
        let pAttack = Math.floor(Math.random() * Math.floor(pCount * 30));
        console.log("random number", character, pCount, pAttack, cAttack);
        if (pCount !== 0) {
            if (cAttack > pAttack) {
                return 1;
            } else if (cAttack > pAttack - pAttack / 2) {
                return 2;
            } else if (pAttack > cAttack) {
                return 3;
            }
        } else {
            return 0;
        }
    };

    const getCharacterSpin = () => {
        const { characterIconArray } = state;
        let spinArray = spin(characterIconArray);
        getResults(spinArray.newArray);
        dispatch({
            type: GET_CHARACTER_SPIN,
            payload: spinArray.newArray,
        });
    };

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

    const getResults = (array) => {
        const { iconArray, hasCharacter } = state;
        let newResult = "";
        if (array.every((icon) => icon === iconArray[0])) {
            newResult = "match-index-0";
        } else if (array.every((icon) => icon === iconArray[1])) {
            newResult = "match-index-1";
        } else if (array.every((icon) => icon === iconArray[2])) {
            newResult = "match-index-2";
        } else {
            newResult = "no-match";
        }
        if (hasCharacter === false && newResult !== "no-match") {
            setCharacter(newResult);
        }
        dispatch({
            type: RESULTS,
            payload: newResult,
        });
    };

    const getActionSpin = (action, iconArray) => {
        const { character } = state;
        let spinResult = spin(iconArray, character);
        let spinArray = spinResult.newArray
        let styleArray = spinResult.classArray
        let hunger = -10;
        let health = 0;
        let offspring = 0;
        let predatorCount = spinArray.filter((icon) => icon === iconArray[1]);
        let successCount = spinArray.filter((icon) => icon === iconArray[2]);
        let neutralCount = spinArray.filter((icon) => icon === iconArray[0]);
        let predators = fight(character, predatorCount.length);
        if (predators === 1) {
            health = -20;
        } else if (predators === 2) {
            health = -30;
        } else if (predatorCount.length === 3) {
            health = -50;
        }
        switch (action) {
            case "HUNT":
                if (successCount.length) {
                    if (successCount.length === 1) {
                        hunger = hunger + 10;
                    } else if (successCount.length === 2) {
                        hunger = hunger + 30;
                    } else if (successCount.length === 3) {
                        hunger = hunger + 50;
                    }
                }
                break;
            case "BREED":
                if (
                    successCount.length &&
                    neutralCount.length &&
                    predators === 0
                ) {
                    if (successCount.length === 2) {
                        offspring = Math.floor(character.offspring / 2);
                    } else if (successCount.length === 1) {
                        offspring = character.offspring;
                    }
                } else if (
                    neutralCount.length === 3 ||
                    successCount.length === 3
                ) {
                    offspring = character.offspring;
                }
                break;
            case "REST":
                if (successCount.length && predators === 0) {
                    if (successCount.length === 1 || neutralCount.length > 1) {
                        health = 30;
                    } else if (successCount.length === 2) {
                        health = 40;
                    }
                } else if (
                    neutralCount.length === 3 ||
                    successCount.length === 3
                ) {
                    health = 60;
                }
                break;
            default:
                break;
        }

        dispatch({
            type: ACTION_SPIN,
            payload: { spinArray, styleArray, health, hunger, offspring },
        });
    };

    const toggleSpin = () => {
        dispatch({
            type: TOGGLE_SPIN,
        });
    };
    const toggleIsReady = () => {
        dispatch({
            type: TOGGLE_IS_READY,
        });
    };

    //NEED A SHOW SLOTS FUNCTION TO DETERMINE WHAT TO SHOW ON THE SCREEN BEFORE ANY TURN, FIRST CLICK CHANGES THE ARRAY
    return (
        <SlotContext.Provider
            value={{
                iconArray: state.iconArray,
                characterIconArray: state.characterIconArray,
                character: state.character,
                characterArray: state.characterArray,
                characterHealth: state.characterHealth,
                characterHunger: state.characterHunger,
                characterOffspring: state.characterOffspring,
                slotsArray: state.slotsArray,
                isSpinning: state.isSpinning,
                results: state.results,
                hasCharacter: state.hasCharacter,
                isReady: state.isReady,
                numberOfSpins: state.numberOfSpins,
                generation: state.generation,
                slotsStyleArray: state.slotsStyleArray,
                getCharacterSpin,
                getResults,
                toggleSpin,
                toggleIsReady,
                getActionSpin,
            }}
        >
            {props.children}
        </SlotContext.Provider>
    );
};

export default SlotState;
