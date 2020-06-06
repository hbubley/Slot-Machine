import React, { useContext } from "react";
import Slots from "../game-parts/Slots";
import CharacterResults from "./CharacterResults";
import SlotContext from "../../context/slots/slotContext";


const CharacterSelect = () => {
  const slotContext = useContext(SlotContext);
  const { getCharacterSpin, character } = slotContext;
  return (
    <div>
      <Slots />
      <CharacterResults />
      <button hidden={character !== null} onClick={getCharacterSpin}>
        CLICK
      </button>
    </div>
  );
};

export default CharacterSelect;
