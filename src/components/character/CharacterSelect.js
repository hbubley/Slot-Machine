import React, { useContext } from "react";
import Slots from "../game-parts/Slots";
import CharacterResults from "./CharacterResults";
import SlotContext from "../../context/slots/slotContext";
import Button from "../layout/Button";


const CharacterSelect = () => {
  const slotContext = useContext(SlotContext);
  const { getCharacterSpin, character, toggleIsReady } = slotContext;
  return (
    <div>
      <h1>Before you begin your adventure we first must let fate find you a companion</h1>
      <Slots />
      <Button hiddenCondition={character !== null} action="CLICK" actionFn={getCharacterSpin} />
      <Button hiddenCondition={character===null} action="BEGIN" actionFn={toggleIsReady} />
      <CharacterResults />
    </div>
  );
};

export default CharacterSelect;
