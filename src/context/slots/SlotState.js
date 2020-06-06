import React, { useReducer } from "react";
import SlotContext from "./slotContext";
import SlotReducer from "./slotReducer";
import characterData from "../character-data.json";
import {
  GET_SLOTS_ARRAY,
  GET_GAME_SLOTS_ARRAY,
  CLEAR_GAME,
  RESULTS,
  TOGGLE_SPIN,
  SET_CHARACTER,
  TOGGLE_IS_READY,
  HUNT
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
      "fad fa-rabbit",
    ],
    character: null,
    characterHunger: null,
    characterHealth: null,
    characterOffspring: null,
    slotsArray: null,
    isSpinning: false,
    results: null,
    hasCharacter: false,
    isReady: false,
  };
  const [state, dispatch] = useReducer(SlotReducer, initialState);

  const spin = (array) => {
    let newArray = [];
    toggleSpin();
    for (let i = 0; i < 3; i++) {
      let ranNum = Math.floor(Math.random() * Math.floor(array.length));
      let icon = array[ranNum];
      newArray.push(icon);
    }
    return newArray;
  };

  const getCharacterSpin = () => {
    const { characterIconArray } = state;
    let newArray = spin(characterIconArray);
    getResults(newArray);
    dispatch({
      type: GET_SLOTS_ARRAY,
      payload: newArray,
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

  const getHuntSpin = () => {
    toggleSpin()
    const { character } = state;
    let spinResult = spin(character.iconArrayHunt);
    let hunger = 0
    let health = 0
    let predatorCount = spinResult.filter(icon => icon === character.iconArrayHunt[1])
    let preyCount = spinResult.filter(icon => icon === character.iconArrayHunt[2])
    if(predatorCount.length){
        console.log("pred count", predatorCount.length)
        if(predatorCount.length === 1){
            health=-10
        }
        else if(predatorCount.length === 2){
            health=-20
        }
        else{
            health=-50
        }
    } 
    if(preyCount.length){
        console.log("prey count", preyCount.length)
        if(preyCount.length === 1){
            hunger=20
        }
        else if(preyCount.length === 2){
            hunger=30
        }
        else{
            hunger=50
        }
    }
    dispatch({
      type: HUNT,
      payload: {spinResult, health, hunger}
    });
  };
  const getBreedSpin = () => {
    toggleSpin()
    const { character } = state;
    let spinResult = spin(character.iconArrayHunt);
    let hunger = 0
    let health = 0
    let predatorCount = spinResult.filter(icon => icon === character.iconArrayHunt[1])
    let preyCount = spinResult.filter(icon => icon === character.iconArrayHunt[2])
    let neutralCount = spinResult.filter(icon => icon === character.iconArrayHunt[0])
    if(predatorCount.length){
        console.log("pred count", predatorCount.length)
        if(predatorCount.length === 1){
            health=-10
        }
        else if(predatorCount.length === 2){
            health=-20
        }
        else{
            health=-50
        }
    } 
    if(preyCount.length){
        console.log("prey count", preyCount.length)
        if(preyCount.length === 1){
            hunger=20
        }
        else if(preyCount.length === 2){
            hunger=30
        }
        else{
            hunger=50
        }
    }
    dispatch({
      type: HUNT,
      payload: {spinResult, health, hunger}
    });
    dispatch({
      type: GET_SLOTS_ARRAY,
      payload: spinResult,
    });
  };
  const getRestSpin = () => {
    const { character } = state;
    let spinResult = spin(character.iconArrayRest);
    getResults(spinResult, "hunt");
    dispatch({
      type: GET_SLOTS_ARRAY,
      payload: spinResult,
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
        characterHealth: state.characterHealth,
        characterHunger: state.characterHunger,
        slotsArray: state.slotsArray,
        isSpinning: state.isSpinning,
        results: state.results,
        hasCharacter: state.hasCharacter,
        isReady: state.isReady,
        getCharacterSpin,
        getResults,
        toggleSpin,
        toggleIsReady,
        getHuntSpin,
        getBreedSpin,
        getRestSpin,
      }}
    >
      {props.children}
    </SlotContext.Provider>
  );
};

export default SlotState;
