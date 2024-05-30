import React from "react";
import DiscountCard from "@/components/cards/DiscountCard";

const fackeArray = [null, null, null, null, null];
const Discount = () => {
  return (
    <div className="flex flex-col size1000:flex-1 w-full rounded-[10px] px-[43px] py-6 shadow-[0_0_6px_0_rgba(180,180,180,0.3)]">
      <h1 className={"text-[18px] text-[#354597] mt-[8px] mb-[24px]"}>
        تخفیف های من
      </h1>
      <ul className={"flex flex-col gap-[16px]"}>
        {fackeArray.map((item, index) => (
          <DiscountCard key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Discount;
