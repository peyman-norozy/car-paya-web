"use client";
import React, { useEffect } from "react";

const CarAndCityInput = (props) => {
  useEffect(() => {
    if (props.inputStatus === "select_car" && props.value) {
      props.setCarSelectInputState(true);
    }
  }, []);
  return (
    <div className={"relative"}>
      <input
        placeholder={props.placeHolder}
        value={props.value}
        disabled={props.disabled}
        onKeyDown={(e) => e.preventDefault()}
        onClick={props.onClick}
        className={
          "outline-none border border-[#B0B0B0] rounded-8 flex justify-between h-[48px] w-full text-14 pr-2 caret-transparent"
        }
      />
      <i
        className={"cc-arrow-down text-24 absolute top-3 left-2 text-[#858585]"}
      />
    </div>
  );
};

export default CarAndCityInput;
