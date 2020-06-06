import React from "react";

const Slot = ({ icon, index }) => {
  return (
    <div className="slot-container">
      <i className={icon} key={index}></i>
    </div>
  );
};

export default Slot;
