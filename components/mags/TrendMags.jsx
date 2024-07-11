"use client";
import React from "react";
import TrendCard from "./TrendCard";

const TrendMags = (props) => {
  const { data } = props;

  const trend = data.trendOfTheWeek;

  console.log(trend);
  return (
    <div>
      {trend.length < 1 ? (
        <div></div>
      ) : (
        <div className="bg-[#F9F9F9] rounded-[1rem] p-[1rem] max-h-[350px] size974:max-h-[650px] overflow-y-scroll">
          <h2 className="font-bold text-[18px] text-[#212B5E] px-[0.5rem] border-r-[3px] border-r-RED_500 mb-[0.5rem] py-[0.5rem]">
            مجله های برتر هفته
          </h2>
          <div className="flex flex-col gap-2">
            {trend.map((item, index) => (
              <TrendCard key={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendMags;
