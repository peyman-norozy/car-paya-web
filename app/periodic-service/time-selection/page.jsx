import React from "react";
import TimeSelectorCard from "@/components/TimeSelectorCard/TimeSelectorCard";
import Button from "@/components/Button";
const fakeData = [0, 0, 0, 0, 0, 0, 0, 0];
const Page = () => {
  return (
    <div className={"lg:mt-[124px] mt-16 min-h-screen lg:mr-[420px] mb-6"}>
      <h1 className={"text-center text-[24px]"}>انتخاب زمان دریافت خدمات</h1>
      <ul className={"flex flex-col gap-4 mt-9"}>
        {fakeData.map((item, index) => (
          <TimeSelectorCard key={index} />
        ))}
      </ul>
      <button
        type={"button"}
        class_name={
          "w-[204px] h-10 bg-[#F66B34] rounded-[8px] text-[#FEFEFE] mt-6"
        }
      >
        تایید و مرحله بعد
      </button>
    </div>
  );
};

export default Page;