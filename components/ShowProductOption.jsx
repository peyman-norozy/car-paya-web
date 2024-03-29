import React from "react";
import StarRating from "./StarRating";
import { numberWithCommas } from "@/utils/function-utils";
import ProductOptions from "./ProductOptions";

const ShowProductOption = (props) => {
  return (
    <div className="py-[1rem] px-[0.5rem] w-full">
      <div className="flex items-center justify-between pb-[0.5rem] border-b-[1px] border-gray_light_border">
        <h1 className="text-purple_primary text-[18px]">{props.title}</h1>
        <div>
          <StarRating edit={false} value={5} />
        </div>
      </div>
      <div className="flex gap-[1rem] items-center mt-[1rem]">
        <span className="line-through decoration-red-600 text-gray-500 text-[14px]">
          {numberWithCommas(5500000)}
          <span>تومان</span>
        </span>
        <span className="font-bold text-purple_primary text-[14px]">
          {numberWithCommas(4100000)}
          <span>تومان</span>
        </span>
      </div>
      <div className="w-[40%] mt-[1rem]">

      <ProductOptions />
      </div>
    </div>
  );
};

export default ShowProductOption;
