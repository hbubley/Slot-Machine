import React, { Fragment } from "react";

const GameResults = ({
    character,
    pCount,
    fightResult,
    action,
    statChange,
}) => {
    let outcome = "";
    switch (action) {
        case "HUNT":
            console.log(statChange.hunger);
            if (statChange.hunger <= -10) {
                outcome = "Not your best hunt... less than ideal.";
            } else if (statChange.hunger <= 30) {
                outcome = "Not bad, it looks like you have found a bit to eat!";
            } else if (statChange.hunger <= 60) {
                outcome = "Tonight, we eat like KINGS!";
            }
            break;
        case "BREED":
            if (statChange.offspring<1) {
                outcome = "No dice, or babies for that matter.";
            } else if (statChange.offspring===1) {
                outcome = "Look at that magic! You have got yourself a baby.";
            } else if (statChange.offspring <= 2) {
                outcome = "Everything is better in pairs, two babies!";
            }
            else if(statChange.offspring <= 3){
                outcome = "Look at all them babies! Promising..."
            }
            else if(statChange.offspring <= 5){
                outcome = "Can one have too many babies? If so you probably do..."
            }
            else if(statChange.offspring <= 10){
                outcome = "I can't even count that high..."
            }else{
                outcome = "No dice, or babies for that matter.";
            }
            console.log(statChange.offspring);
            break;
        case "REST":
            if(statChange.change<30){
                outcome = "That looked painful...";
            }
            else if (statChange.health === 30) {
                outcome = "Well that was refreshing! Looks like we've healed a bit";
            } else if (statChange.health <= 50) {
                outcome = "Someone woke up on the right side of the bed! Look at all that sweet health";
            } else if (statChange.health <= 60) {
                outcome = "let him sleep 5 more minutes, he looks so peaceful with all that extra health";
            }
            console.log(statChange.health);
            break;
        default:
            break;
    }
    return (
        <div>
            {fightResult === 0 && (
                <div>
                    <h1>It's always easier without those predators around!</h1>
                    <h1>{outcome}</h1>
                </div>
            )}
            {fightResult === 2 && (
                <div>
                    <h1>
                        You took on {pCount} predators and lived to tell the
                        tale!
                    </h1>
                    <h2>ergh... with a small hit to your health that is...</h2>
                    <h1>As for the goal... {outcome}</h1>
                </div>
            )}
            {fightResult === 1 && (
                <div>
                    <h1>
                        You took on {pCount} predators and barely took a hit!
                    </h1>
                    <h1>As for the goal...{outcome}</h1>
                </div>
            )}
            {fightResult === 3 && (
                <div>
                    <h1>Ouch, that was not your best fight...</h1>
                    <h1>As for the goal... {outcome}</h1>
                </div>
            )}
        </div>
    );
};

export default GameResults;
