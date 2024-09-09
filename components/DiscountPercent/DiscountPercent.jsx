import React from "react";

const DiscountPercent = () => {
  return (
    <div
      className={
        "h-[40px] border border-stone-200 rounded-[8px] flex items-center justify-between pr-3"
      }
    >
      <i
        className={
          "cc-vector-stroke text-[18px] border-l-2 border-l-black pl-2 w-[50px]"
        }
      />
      <input
        type={"text"}
        placeholder={"کد تخفیف"}
        className={"w-full h-full outline-0 pr-2"}
      />
      <button
        className={"bg-[#518DD5] h-full w-[96px] text-white rounded-[8px]"}
      >
        تایید
      </button>
    </div>
  );
};

export default DiscountPercent;
