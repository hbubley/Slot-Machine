import React from "react";

const Button = ({ action, actionFn, hiddenCondition }) => {
    return <button className='button' hidden={hiddenCondition} onClick={actionFn}>{action}</button>;
};

export default Button;
