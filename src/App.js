import React from "react";
import "./App.css";
import Machine from "./components/game-parts/Machine";
import SlotState from "./context/slots/SlotState";

function App() {
  return (
    <SlotState>
      <div className="App">
        <h1>SLOT MACHINES!</h1>
        <Machine />
      </div>
    </SlotState>
  );
}

export default App;

//4 snakes (or some funny symbol) = lost 10% of your money
//4 (unicorn || narwhal || dragon || ghosts) 10000x the bet
//1 (unicorn || narwhal || dragon || ghosts) 10x the bet
//1 (unicorn || narwhal || dragon || ghosts) 10*x
//grid template areas!
//choose your own adventure roleplay type game based off of slots!! Fully react.
