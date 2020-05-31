import React, { useContext } from "react";
import SlotContext from "../../context/slots/slotContext";
import Slot from "./Slot";

const Slots = () => {
  const slotContext = useContext(SlotContext);
  const { slotsArray, iconArray } = slotContext;
  if (slotsArray === null) {
    return (
      <div className="slots-container grid-3">
        {iconArray.map((icon, index) => <Slot icon={icon} index={index} />)}
      </div>
    );
  } else if (slotsArray) {
    return (
      <div className="slots-container grid-3">
        {slotsArray.map((icon, index) => <Slot icon={icon} index={index} />)}
      </div>
    );
  }
};

export default Slots;
