import React, { useContext } from "react";
import Game from "../game-parts/Game";
import SlotContext from "../../context/slots/slotContext";
import CharacterSelect from "../game-parts/character-select/CharacterSelect";

const GameContainer = () => {
  const slotContext = useContext(SlotContext);
  const {characterInitial, isReady, toggleIsReady} = slotContext
  if (isReady === false) {
    return (
      <div>
        <CharacterSelect />
        <button disabled={characterInitial===null} onClick={toggleIsReady}>Continue</button>
      </div>
    );
  } else {
    return (
      <div>
        <Game />
      </div>
    );
  }
};

export default GameContainer;
