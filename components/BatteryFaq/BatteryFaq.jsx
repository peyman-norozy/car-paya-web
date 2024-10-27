"use client";
import React from "react";
import { batteryFaqData } from "@/staticData/data";
import BatteryFaqCard from "@/components/cards/BatteryFaqCard/BatteryFaqCard";

const BatteryFaq = (props) => {
  return (
    <>
      <h1 className={props.titleClassName}>سوالات متداول</h1>
      <ul className={"flex flex-col gap-2"}>
        {batteryFaqData.map((item, index) => (
          <BatteryFaqCard key={index} {...item} />
        ))}
      </ul>
    </>
  );
};

export default BatteryFaq;
// text-center text-[16px] font-semibold
