"use client";

import Link from "next/link";
import { useState } from "react";

const SelectProduct = (props) => {
  const [value, setValue] = useState("");
  const array = [1, 2, 3, 4];
  return (
    <div className="w-full border border-[#EAEAEA] flex flex-col pb-5 lg:w-[calc(100%-424px)] mr-auto">
      <div className="bg-[#EAEAEA] items-start px-10 py-5 justify-between flex">
        <h1 className="text-18">تعویض روغن موتور</h1>
        <i className="cc-left text-[30px] pr-10" />
      </div>
      <div className="flex flex-col gap-4 p-4 xl:p-8">
        {array.map((item, index) => (
          <label
            key={index}
            className="shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] hover:scale-[102%] transition-transform duration-300 rounded-lg flex flex-col sm:flex-row justify-between p-5 gap-y-4 items-start sm:items-center cursor-pointer"
            for={index}
          >
            <div className="gap-2 xl:gap-4 flex items-center">
              <div className="size-[55px] bg-red-500"></div>
              <span className="text-14 xl:text-18">روغن موتور کاستوی</span>
            </div>
            <div className="gap-4 flex items-center">
              <span className="text-14 xl:text-18">قیمت</span>
              <span className="text-14 xl:text-18 line-through">
                2.500.000 تومان
              </span>
              <span className="text-14 xl:text-18">1.800.000 تومان</span>
              <input
                type="radio"
                id={index}
                name="radioButton"
                value={123}
                className="size-5"
                onChange={() => {
                  setValue(index);
                }}
                checked={value === index}
              />
            </div>
          </label>
        ))}
      </div>
      <div className="flex justify-end px-10 w-full">
        <Link
          href={
            value !== ""
              ? `/periodic-service/service-selection?product=${value}`
              : ""
          }
        >
          <button
            className={`${value !== "" ? "bg-[#3AAB38] cursor-pointer" : "bg-gray-400 cursor-not-allowed"} rounded-md py-2 lg:py-3 px-4 lg:px-6`}
          >
            <span className="text-white font-bold text-14 lg:text-16">
              افزودن به سبد خرید
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SelectProduct;
