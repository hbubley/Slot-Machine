import React from "react";

const Character = ({ character }) => {
  return (
    <div>
      <i className={character.icon}></i>
      <p>Health: {character.health}</p>
      <p>Hunger: {character.hunger}</p>
      <p>Number of offspring: {character.offspring}</p>
    </div>
  );
};

export default Character;
