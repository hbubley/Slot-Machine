import React from "react";
import "./App.scss";
import GameContainer from './components/pages/GameContainer'
import SlotState from "./context/slots/SlotState";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from './components/pages/Contact'
import CharacterState from "./context/character/CharacterState";

function App() {
  return (
    <SlotState>
      <CharacterState>
      <Router>
        <Navbar icon="Coool logo" title="Darwin" />
        <div className="main-container all-center">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/darwin" component={GameContainer} />
            <Route path="/instructions" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
      </CharacterState>
    </SlotState>
  );
}

export default App;

//First: spin to determine your animals
//Stage 2: Spin and see if your animal can survive! Different animals have different vulnerabilites and survival rates
//