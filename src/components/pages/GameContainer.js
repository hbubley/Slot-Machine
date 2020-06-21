import React, { useContext, Fragment } from "react";
import Game from "../Game/Game";
import SlotContext from "../../context/slots/slotContext";
import CharacterSelect from "../Character-Select/CharacterSelect";
import GameOver from "../GameOver/GameOver";

const GameContainer = () => {
    const slotContext = useContext(SlotContext);
    const { isReady, score, spinCount, isGameOver } = slotContext;
    if (isReady === false && isGameOver === false) {
        return (
            <Fragment>
                <h1>Darwin</h1>
                <CharacterSelect />
            </Fragment>
        );
    } else if (isReady === true && isGameOver === false) {
        return (
            <Fragment>
                <Game />
            </Fragment>
        );
    }else if (isGameOver === true){
      return (
        <Fragment>
            <GameOver
                score={score}
                spinCount={spinCount}
            />
        </Fragment>
      )
    }else{
        return <h1>WHAT AM I DOING</h1>
    }
};

export default GameContainer;
