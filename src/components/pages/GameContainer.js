import React, { useContext, Fragment } from "react";
import Game from "../Game/Game";
import SlotContext from "../../context/slots/slotContext";
import CharacterSelect from "../Character-Select/CharacterSelect";

const GameContainer = () => {
  const slotContext = useContext(SlotContext);
  const {isReady} = slotContext
  if (isReady === false) {
    return (
      <Fragment>
        <h1>Darwin</h1>
        <CharacterSelect />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Game />
      </Fragment>
    );
  }
};

export default GameContainer;
