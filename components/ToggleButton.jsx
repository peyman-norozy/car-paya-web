import React from "react";

const ToggleButton = (props) => {
  return (
    <div
      className={`${
        props.newEnableToggle ? "bg-green-400" : "bg-stone-400"
      } w-[80px] rounded-2xl flex items-center h-[30px] relative`}
      onClick={props.onClick}
    >
      {!props.newEnableToggle ? (
        <span className="text-10 text-white absolute right-[10px]">
          {props.InactiveText}
        </span>
      ) : (
        <span className="text-10 text-white absolute left-[14px]">
          {props.activeText}
        </span>
      )}
      <span
        className={`inline-block bg-[#fff] w-[27px] h-[27px] rounded-full transition-all duration-500 ${props.newToggleClassName}`}
      ></span>
    </div>
  );
};

export default ToggleButton;
