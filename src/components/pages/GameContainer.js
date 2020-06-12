import React, { useContext } from "react";
import Game from "../game-parts/Game";
import SlotContext from "../../context/slots/slotContext";
import CharacterSelect from "../character/CharacterSelect";

const GameContainer = () => {
  const slotContext = useContext(SlotContext);
  const {isReady} = slotContext
  if (isReady === false) {
    return (
      <div>
        <CharacterSelect />
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
