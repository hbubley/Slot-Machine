import React from "react";

const Slot = ({ icon, index, style }) => {
  let newIcon = `slot-container ${style}`
  console.log("BLEB", newIcon)
  return (
    <div className={newIcon}>
      <i className={icon} key={index}></i>
    </div>
  );
};

export default Slot;
