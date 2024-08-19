import React from "react";
import { batteryFaqData } from "@/staticData/data";
import BatteryFaqCard from "@/components/cards/BatteryFaqCard/BatteryFaqCard";

const BatteryFaq = () => {
  return (
    <div className={"mt-16 flex flex-col gap-8"}>
      <h1 className={"text-center lg:text-[20px] text-[18px] font-semibold"}>
        سوالات متداول
      </h1>
      <ul className={"flex flex-col lg:gap-8 gap-4"}>
        {batteryFaqData.map((item, index) => (
          <BatteryFaqCard key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default BatteryFaq;
