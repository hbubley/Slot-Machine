import React from "react";

const Character = ({ character }) => {
  return (
    <div>
      <i className={character.icon}></i>
      <p>Initial health: {character.health}</p>
      <p>Initial hunger: {character.hunger}</p>
      <p>Number of offspring: {character.offspring}</p>
      <p>Strength: {character.strength}</p>
    </div>
  );
};

export default Character;
