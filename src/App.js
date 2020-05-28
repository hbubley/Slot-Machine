import React from 'react';
import './App.css';
import Machine from './components/Machine';

function App() {
  const symbolsArray = ['🐶', '🐱', '🐟']
  return (
    <div className="App">
      <h1>SLOT MACHINES!</h1>
      <Machine s1='🐶' s2='🐱' s3='🐟' />
      <Machine s1='🐶' s2='🐶' s3='🐶' />
      <Machine s1='🐟' s2='🐱' s3='🐟' />
    </div>
  );
}

export default App;

//4 snakes (or some funny symbol) = lost 10% of your money
//4 (unicorn || narwhal || dragon || ghosts) 10000x the bet
//1 (unicorn || narwhal || dragon || ghosts) 10x the bet
//1 (unicorn || narwhal || dragon || ghosts) 10*x
//grid template areas!
//choose your own adventure roleplay type game based off of slots!! Fully react. 
