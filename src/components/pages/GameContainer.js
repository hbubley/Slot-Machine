import React, { useContext } from "react";
import Game from "../game-parts/Game";
import SlotContext from "../../context/slots/slotContext";
import CharacterSelect from "../character/CharacterSelect";

const GameContainer = () => {
  const slotContext = useContext(SlotContext);
  const {character, isReady, toggleIsReady} = slotContext
  if (isReady === false) {
    return (
      <div>
        <CharacterSelect />
        <button hidden={character===null} onClick={toggleIsReady}>Continue</button>
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
