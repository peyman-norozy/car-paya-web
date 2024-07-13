import { useState } from "react";
import { numberWithCommas } from "@/utils/function-utils";
import SelectAccordian from "@/components/SelectAccordian";
import CheckInput from "./CheckInput";

const CheckItem = (props) => {
  const data = props.data
  const isClicked = props.isClicked
  const index = props.index

  return (
    <div
      className={`border-[1px]  rounded-[0.5rem] px-[1rem] py-[1rem] cursor-pointer transition-color duration-500 size525:px-[1] ${
        isClicked ===index ? "border-purple_primary" : "border-gray_light_border"
      }`}
    >
      <div
        onClick={props.onclick}
        className="flex items-center justify-between pb-[1rem]"
      >
        <div className="flex gap-[0.5rem] items-center justify-center">
          <CheckInput clickState={isClicked} clickCondition={index}/>
          <h2 className=" text-[14px] size525:text-[1rem]">{data.title}</h2>
        </div>
        <span className=" text-[14px] size525:text-[1rem]">{numberWithCommas(data.price)} تومان</span>
      </div>
      <div>
        <SelectAccordian data={data.accordian}/>
      </div>
    </div>
  );
};

export default CheckItem;