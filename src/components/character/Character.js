import React from "react";

const Character = ({ character }) => {
  return (
    <div className="character-card">
      <h1>{character.animal}</h1>
      <i className={character.avatar}></i>
      <p>Health: {character.health}</p>
      <p>Hunger: {character.hunger}</p>
      <p>Possible offspring amount: {character.offspring}</p>
      <p>Strength: {character.strength}</p>
    </div>
  );
};

export default Character;
