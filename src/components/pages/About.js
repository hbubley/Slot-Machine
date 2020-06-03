import React from "react";

const About = () => {
  return (
    <div>
      <h1>Darwin</h1>
      <h2>
        In the game of Darwin, your ultimate goal is to survive long enough to
        make it to the next generation.
      </h2>
      <div className="instructions">
        <h3>Instructions</h3>
        <p>
          Each generation consists of 10 turns. You begin the game with one
          animal and your goal is to survive through those 10 turns with at
          least one animal remaining. Once you have run out of animals, you
          lose.{" "}
        </p>
        <p>
          Currently, once you make it to the next generation, you win. In the
          future, each generation will face different natural events causing the
          game difficulty to increase.
        </p>
      </div>

      <h3>There are certain things that can affect your animal:</h3>
        <h5>Hunger</h5>
        <p>
          Hunger is decreased each turn, when it reaches zero your animal takes
          a nap... forever...
        </p>
        <p>Hunger can be replenished through the "hunting action"</p>
        <h5>Health</h5>
        <p>
          Any "action" can result in your animal being attacked, thus lowering
          its health
        </p>
        <p>Health can be replenished through the "sleeping action"</p>
    </div>
  );
};

export default About;
