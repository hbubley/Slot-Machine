import React from "react";

const spinResults = ({
    action,
    result,
    fight_result,
    health_change,
    offspring_change,
    hunger_change,
}) => {
    let fightRemark = "";
    let actionRemark = "";
    let remark = "As for the goal...";
    const {
        result_text,
        initial_predators,
        remaining_predators,
    } = fight_result;
    if (result_text !== "NONE") {
        remark = "looks like we weren't the only ones here...";
        if (result_text === "WIN") {
            fightRemark = `You took on ${initial_predators} predators AND won!`;
        } else if (result_text === "MIX") {
            fightRemark = `Not a bad fight, you took on ${initial_predators} predators and the remaining ${remaining_predators} predators scurried off. `;
            actionRemark = `Unfortanetly, you still took ${health_change} damage and were unable to attempt your goal.`;
        } else if (result_text === "LOSE") {
            fightRemark = `Not great, mate. You took on ${initial_predators} predators and they bested you...`;
            actionRemark = `You took ${health_change} damage...`;
        }
    }else if (result_text === "NONE"){
        remark="No predators hanging around here!"
    }
    if (result >= 0) {
        if (result === 1) {
            remark = "It was not a completely worthless attempt!";
            if (action === "hunt") {
                actionRemark = `You found some food and regained ${hunger_change} hunger`;
            } else if (action === "breed") {
                actionRemark = `You are now the proud parent of ${offspring_change} offspring`;
            } else if (action === "rest") {
                actionRemark = `With that catnap you regained ${health_change} health`;
            }
        } else if (result === 2) {
            remark = "Not bad, not bad at all!";
            if (action === "hunt") {
                actionRemark = `You found quite a bit of food and regained ${hunger_change} hunger`;
            } else if (action === "breed") {
                actionRemark = `You are now the proud parent of ${offspring_change} offspring`;
            } else if (action === "rest") {
                actionRemark = `With that nice nap you regained ${health_change} health`;
            }
        } else if (result === 3) {
            remark = "What are the chances!";
            if (action === "hunt") {
                actionRemark = `You found a feast and regained ${hunger_change} hunger`;
            } else if (action === "breed") {
                actionRemark = `You'll have your hands full with these ${offspring_change} offspring`;
            } else if (action === "rest") {
                actionRemark = `Such a restful night... you regained ${health_change} health`;
            }
        }else{
            actionRemark="Bummer, as for the goal, looks like that was a waisted run"
        }
    }

    return (
        <div>
            <h1>{remark}</h1>
            <h2>{fightRemark}</h2>
            <h2>{actionRemark}</h2>
        </div>
    );
};

export default spinResults;
