import React, {useContext} from "react";
import SlotContext from "../../context/slots/slotContext";
const CharacterStat = () => {
  const slotContext = useContext(SlotContext);
  const {character, health, hunger, offspring} = slotContext
  return (
    <div className="character-card">
      <h1>{character.animal}</h1>
      <i className={character.avatar}></i>
      <p>Health: {health}</p>
      <p>Hunger: {hunger}</p>
      <p>Number of offspring: {offspring}</p>
    </div>
  );
};

export default CharacterStat;
