import React from "react";

const CharacterStat = ({character, characterHealth, characterHunger, characterOffspring}) => {
  return (
    <div className="character-card">
      <h1>{character.animal}</h1>
      <i className={character.avatar}></i>
      <p>Health: {characterHealth}</p>
      <p>Hunger: {characterHunger}</p>
      <p>Number of offspring: {characterOffspring}</p>
    </div>
  );
};

export default CharacterStat;
