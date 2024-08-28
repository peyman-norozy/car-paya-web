import React from "react";

const CompletePrice = () => {
  return (
    <section
      className={
        "sticky bottom-0 right-0 z-[1000] bg-white flex justify-between p-4"
      }
    >
      <button
        className={
          "bg-[#F66B34] rounded-[8px] text-white text-[16px] font-semibold w-36 h-10"
        }
      >
        ثبت
      </button>
      <div className={"text-[14px]"}>
        <span>جمع سفارش:</span>
        <div className={"flex gap-2 items-center"}>
          <span>1500000</span>
          <span>تومان</span>
        </div>
      </div>
    </section>
  );
};

export default CompletePrice;
