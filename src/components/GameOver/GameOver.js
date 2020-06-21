import React from "react";
//in later versions have leaderboard score, show highest score and avg score for that animal
const GameOver = ({ score, spinCount }) => {
    return (
        <div>
            <h1>And such is life</h1>
            <p>score: {score}</p>
            <p>spin count: {spinCount}</p>
        </div>
    );
};

export default GameOver;
