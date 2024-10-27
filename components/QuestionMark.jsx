import React from "react";
import BatteryFaq from "@/components/BatteryFaq/BatteryFaq";

const QuestionMark = () => {
  return (
    <div
      className={
        "bg-[url('/assets/images/questionMark.png')] bg-cover bg-center w-full h-full py-[22px] lg:px-[75px] px-[16px]"
      }
    >
      <div className={"lg:w-[70%] w-full"}>
        <BatteryFaq
          titleClassName={"text-right lg:text-20 text-16 font-medium pb-[23px]"}
        />
      </div>
    </div>
  );
};

export default QuestionMark;
