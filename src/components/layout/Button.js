import React from "react";

const Button = ({ action, actionFn, hiddenCondition, iconArray }) => {
    return <button className='button' hidden={hiddenCondition} onClick={() => actionFn(action, iconArray)}>{action}</button>;
};

export default Button;
