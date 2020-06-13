import React, { useContext } from "react";
import SlotContext from "../../context/slots/slotContext";
import Character from "./Character";
import AllCharacters from "./AllCharacters";

const CharacterResults = () => {
    const slotContext = useContext(SlotContext);
    const { character } = slotContext;
    if (character === null) {
        return (
            <div>
                <h1>Click until you match an animal</h1>
                <h3>Possible options:</h3>
                <AllCharacters />
            </div>
        );
    } else {
        return (
            <div>
                <h1>In this run you will be playing as a {character.animal}</h1>
                <Character character={character} />
            </div>
        );
    }
};

export default CharacterResults;
