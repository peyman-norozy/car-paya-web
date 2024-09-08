import React from "react";
import check from "@/public/assets/icons/green-check.svg";
import Image from "next/image";

const GreenCheckInput = (props) => {
  const { isSelected, class_name, on_click } = props;
  return (
    <div
      className={
        "w-[20px] h-[20px] flex items-center justify-center self-start"
      }
    >
      <div
        className={`w-[20px] h-[20px] flex items-center justify-center border-[2px] border-[#F66B34] relative ${class_name}`}
        onClick={on_click}
      >
        {isSelected && (
          <div className={"w-[10px] h-[10px] rounded-[50%] bg-[#F66B34]"}></div>
        )}
      </div>
    </div>
  );
};

export default GreenCheckInput;
