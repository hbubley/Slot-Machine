import React from "react";

const CharacterStat = ({character, characterHealth, characterHunger, characterOffspring}) => {
  console.log(characterOffspring)
  return (
    <div>
      <i className={character.icon}></i>
      <p>Health: {characterHealth}</p>
      <p>Hunger: {characterHunger}</p>
      <p>Number of offspring: {characterOffspring}</p>
    </div>
  );
};

export default CharacterStat;
