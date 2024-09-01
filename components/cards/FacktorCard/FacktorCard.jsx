"use client";

import React from "react";
import Image from "next/image";
import { numberWithCommas } from "@/utils/function-utils";

const FacktorCard = ({ item }) => {
  return (
    <li
      className={
        "p-2 shadow-custom1 rounded-lg min-w-[197px] min-h-[238px] relative"
      }
    >
      <section className={"flex flex-row lg:flex-col items-center gap-4"}>
        <div>
          <Image
            src={process.env.BASE_API + "/web/file/" + item.image_id}
            className={"w-[120px] h-[114px]"}
            alt={"service product"}
            width={120}
            height={114}
          />
        </div>
        <div className={"text-12 flex flex-col flex-1 gap-2"}>
          <span>{item.name} :</span>
          <div className={"flex items-center gap-1"}>
            <span
              className={"inline-block w-[15px] h-[15px] bg-gray-300"}
            ></span>
            <span className={"text-10 text-[#B0B0B0]"}>
              گارانتی اصالت و سلامت فیزیکی کالا
            </span>
          </div>
          <div
            className={
              "flex items-center gap-1 line-through text-10 text-[#B0B0B0]"
            }
          >
            {numberWithCommas(item.price) + " تومان "}
          </div>
          <div className={"flex justify-between items-center w-full"}>
            <div className={"flex items-center gap-1 text-[12px]"}>
              <span>قیمت:</span>
              <span>{numberWithCommas(item.discounted_price)}</span>
              <span>تومان</span>
            </div>
            <section className={"text-left"}>
              <span className={"text-red-600 text-12 cursor-pointer"}>حذف</span>
            </section>
          </div>
        </div>
      </section>
      <div className={"absolute -top-1 -left-1"}>
        <Image
          src={"/assets/icons/image85.svg"}
          alt={"percent"}
          width={52}
          height={51}
        />
        <span
          className={
            "absolute top-[7px] left-[8px] text-12 text-white -rotate-45"
          }
        >
          {item.discounted_percent}%
        </span>
      </div>
    </li>
  );
};

export default FacktorCard;
