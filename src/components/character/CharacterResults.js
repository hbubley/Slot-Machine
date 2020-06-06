import React, { useContext } from "react";
import SlotContext from "../../context/slots/slotContext";

const CharacterResults = () => {
  const slotContext = useContext(SlotContext);
  const { character } = slotContext;
  if (character === null) {
    return <h1>Click until you match an animal</h1>;
  } else {
    return (
      <div>
        <h1>In this run you will be playing as a {character.animal}</h1>
        <p>Initial health: {character.health}</p>
        <p>Initial hunger: {character.hunger}</p>
        <p>Number of offspring: {character.offspring}</p>
        <p>Strength: {character.strength}</p>
      </div>
    );
  }
};

export default CharacterResults;
