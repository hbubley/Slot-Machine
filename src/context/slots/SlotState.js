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
  ACTION_SPIN
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
    console.log('newArray', newArray)
    return newArray;
  };

  const getCharacterSpin = () => {
    const { characterIconArray } = state;
    let newArray = spin(characterIconArray);
    getResults(newArray);
    dispatch({
      type: GET_CHARACTER_SPIN,
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
    const { character } = state;
    let spinResult = spin(character.iconArrayHunt);
    let hunger = -10
    let health = 0
    let offspring = 0
    let predatorCount = spinResult.filter(icon => icon === character.iconArrayHunt[1])
    let preyCount = spinResult.filter(icon => icon === character.iconArrayHunt[2])
    if(predatorCount.length){
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
        if(preyCount.length === 1){
            hunger=hunger+10
        }
        else if(preyCount.length === 2){
            hunger=hunger+30
        }
        else if (preyCount.length === 3){
            hunger=hunger+50
        }
    }
    dispatch({
      type: ACTION_SPIN,
      payload: {spinResult, health, hunger, offspring}
    });
  };
  const getBreedSpin = () => {
    const { character } = state;
    let spinResult = spin(character.iconArrayBreed);
    let hunger = -10
    let health = 0
    let offspring = 0
    let predatorCount = spinResult.filter(icon => icon === character.iconArrayBreed[1])
    let babyCount = spinResult.filter(icon => icon === character.iconArrayBreed[2])
    let neutralCount = spinResult.filter(icon => icon === character.iconArrayBreed[0])
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
    if(babyCount.length && neutralCount.length && !(predatorCount.length)){
        console.log("baby count", babyCount.length)
        if(babyCount.length === 2){
            offspring=Math.floor(character.offspring/2)
        }
        else if(babyCount.length === 1){
          offspring=character.offspring
        }
    }else if(neutralCount.length===3){
      offspring=character.offspring
    }
    console.log("IN STATE", offspring)
    dispatch({
      type: ACTION_SPIN,
      payload: {spinResult, health, hunger, offspring}
    });
  };
  const getRestSpin = () => {
    const { character } = state;
    let spinResult = spin(character.iconArrayRest);
    let hunger = -10
    let health = 0
    let offspring = 0
    let predatorCount = spinResult.filter(icon => icon === character.iconArrayRest[1])
    let restCount = spinResult.filter(icon => icon === character.iconArrayRest[2])
    let neutralCount = spinResult.filter(icon => icon === character.iconArrayRest[0])
    if(predatorCount.length){
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
    if(restCount.length && neutralCount.length && !(predatorCount.length)){
        if(restCount.length === 2){
            health = 20
        }
        else if(restCount.length === 1){
          health = 10
        }
    }else if(neutralCount.length===3 || restCount.length===3){
      health=30
    }
    dispatch({
      type: ACTION_SPIN,
      payload: {spinResult, health, hunger, offspring},
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
