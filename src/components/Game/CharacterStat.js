import React, {useContext} from "react";
import SlotContext from "../../context/slots/slotContext";
const CharacterStat = () => {
  const slotContext = useContext(SlotContext);
  const {character, characterStatsObject} = slotContext
  const {current_offspring, current_health, current_hunger} = characterStatsObject
  return (
    <div className="character-card">
      <h1>{character.animal}</h1>
      <i className={character.avatar}></i>
      <p>Health: {current_health}</p>
      <p>Hunger: {current_hunger}</p>
      <p>Number of offspring: {current_offspring}</p>
    </div>
  );
};

export default CharacterStat;
