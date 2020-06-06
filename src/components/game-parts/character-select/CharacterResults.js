import React, { useContext } from "react";
import SlotContext from "../../../context/slots/slotContext";

const CharacterResults = () => {
  const slotContext = useContext(SlotContext);
  const {characterInitial} = slotContext
  if(characterInitial === null){
  return <h1>Click until you match an animal</h1>
  }else{
    return (
    <h1>In this run you will be playing as a {characterInitial.animal}</h1>
    )
  }
};

export default CharacterResults;
