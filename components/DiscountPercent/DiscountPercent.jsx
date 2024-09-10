import React from "react";

const DiscountPercent = () => {
  return (
    <div
      className={
        "h-[48px] border border-[#B0B0B0] rounded-[8px] flex items-center justify-between pr-3 relative"
      }
    >
      <i
        className={
          "cc-vector-stroke text-[18px] border-l-2 border-l-black pl-2 w-[50px]"
        }
      />
      <input
        type={"text"}
        placeholder={"123456"}
        className={"w-full h-full outline-0 pr-2"}
      />
      <button
        className={"bg-[#518DD5] h-full w-[96px] text-white rounded-[8px]"}
      >
        تایید
      </button>
      <span className="bg-[#fbfbfb] px-2 text-[#454545] text-sm absolute -top-3 right-2">کد تخفیف</span>
    </div>
  );
};

export default DiscountPercent;
