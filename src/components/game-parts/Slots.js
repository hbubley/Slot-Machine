import React, { useContext } from "react";
import SlotContext from "../../context/slots/slotContext";
import Slot from "./Slot";

const Slots = () => {
  const slotContext = useContext(SlotContext);
  const { slotsArray, iconArray, isSpinning } = slotContext;
  if (slotsArray === null || isSpinning) {
    return (
      <div className="slots-container grid-3">
        {iconArray.map((icon, index) => <Slot icon={icon} index={index} key={index}/>)}
      </div>
    );
  } else if (!isSpinning && slotsArray) {
    return (
      <>
      <div className="slots-container grid-3">
        {slotsArray.map((icon, index) => <Slot icon={icon} index={index} key={index}/>)}
      </div>
      </>
    );
  }
};

export default Slots;
