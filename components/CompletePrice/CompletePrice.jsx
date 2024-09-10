import React from "react";
import { numberWithCommas } from "@/utils/function-utils";

const CompletePrice = (props) => {
  console.log(props);
  return (
    <section
      className={`bottom-0 right-0 z-[1000] bg-white p-4 ${props.customStyle}`}
    >
      <div className={"font-medium lg:hidden block"}>
        <span>جمع سفارش:</span>
        <div className={"flex gap-2 items-center text-[#518DD5]"}>
          {numberWithCommas(props.priceTotal) + " تومان "}
        </div>
      </div>
      <button
        className={
          `${props.roleChecked?"bg-[#F66B34]":"bg-[#FCCAAC]"} rounded-[8px] text-white text-[16px] font-medium w-40 h-10`
        }
        disabled={!props.roleChecked}
      >
        تایید و تکمیل سفارش
      </button>
    </section>
  );
};

export default CompletePrice;
