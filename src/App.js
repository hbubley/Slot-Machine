import React from "react";
import "./App.scss";
import Machine from "./components/game-parts/Machine";
import SlotState from "./context/slots/SlotState";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <SlotState>
      <Router>
        <Navbar icon="Coool logo" title="Darwin" />
        <div className="App all-center">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/slots" component={Machine} />
            <Route path="/instructions" component={About} />
          </Switch>
        </div>
      </Router>
    </SlotState>
  );
}

export default App;

//First: spin to determine your animals
//Stage 2: Spin and see if your animal can survive! Different animals have different vulnerabilites and survival rates
//