import React from "react";
import check from "@/public/assets/icons/green-check.svg";
import Image from "next/image";

const GreenCheckInput = (props) => {
  const { isSelected, class_name, on_click } = props;
  return (
    <div
      className={
        "w-[30px] h-[30px] flex items-center justify-center self-start"
      }
    >
      <div
        className={`w-[1.5rem] h-[1.5rem] flex items-center justify-center border-[1px] border-[#C0C0C0] relative ${class_name}`}
        onClick={on_click}
      >
        {isSelected && (
          <div
            className={"w-[1.2rem] h-[1.2rem] rounded-[50%] bg-BLUE_700"}
          ></div>
        )}
      </div>
    </div>
  );
};

export default GreenCheckInput;
