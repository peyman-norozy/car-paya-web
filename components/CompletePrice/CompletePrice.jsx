import React from "react";

const CompletePrice = (props) => {
  return (
    <section
      className={`bottom-0 right-0 z-[1000] bg-white flex justify-end p-4 ${props.customStyle}`}
    >
      <button
        className={
          "bg-[#F66B34] rounded-[8px] text-white text-[16px] font-medium w-40 h-10"
        }
      >
        تایید و تکمیل سفارش
      </button>
      <div className={"text-[14px] lg:hidden block"}>
        <span>جمع سفارش:</span>
        <div className={"flex gap-2 items-center"}>
          {props.priceTotal + " تومان "}
        </div>
      </div>
    </section>
  );
};

export default CompletePrice;
