import React from "react";
import { batteryFaqData } from "@/staticData/data";
import BatteryFaqCard from "@/components/cards/BatteryFaqCard/BatteryFaqCard";

const BatteryFaq = () => {
  return (
    <div className={"mt-16 flex flex-col gap-8"}>
      <h1 className={"text-center text-[20px] font-semibold"}>سوالات متداول</h1>
      <ul className={"flex flex-col gap-8"}>
        {batteryFaqData.map((item, index) => (
          <BatteryFaqCard key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default BatteryFaq;
