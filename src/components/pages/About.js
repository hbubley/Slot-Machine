import React from "react";

const About = () => {
  return (
    <div>
      <h1>Darwin</h1>
      <h2>
        In the game of Darwin, your ultimate goal is to survive long enough to
        make it to the next generation.
      </h2>
      <label>Instructions</label>
      <p>
        Each generation consists of 10 turns. You begin the game with one animal
        and your goal is to survive through those 10 turns with at least one
        animal remaining. Once you have run out of animals, you lose.{" "}
      </p>
      <p>
        Currently, once you make it to the next generation, you win. In the
        future, each generation will face different natural events causing the
        game difficulty to increase.
      </p>
      <label>There are certain things that can affect your animal:</label>
      <ul>
        <h3>Hunger</h3>
        <li>
          Hunger is decreased each turn, when it reaches zero your animal takes
          a nap... forever...
        </li>
        <li>Hunger can be replenished through the "hunting action"</li>
        <h3>Health</h3>
        <li>
          Any "action" can result in your animal being attacked, thus lowering
          its health
        </li>
        <li>Health can be replenished through the "sleeping action"</li>
      </ul>
    </div>
  );
};

export default About;
