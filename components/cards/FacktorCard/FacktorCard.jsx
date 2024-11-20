"use client";

import React from "react";
import Image from "next/image";
import { numberWithCommas } from "@/utils/function-utils";
import { usePathname } from "next/navigation";

const FacktorCard = ({ item }) => {
  const pathName = usePathname();
  return (
    <li className={"p-2 shadow-custom1 rounded-lg min-w-[197px]  relative"}>
      <section className={"flex flex-row lg:flex-col items-center gap-4"}>
        <div>
          <Image
            src={process.env.BASE_API + "/web/file/" + item?.image_ids}
            className={"w-[120px] h-[114px] bg-slate-200 rounded"}
            alt={"service product"}
            width={120}
            height={114}
          />
        </div>
        <div className={"text-12 flex flex-col flex-1 gap-2"}>
          <span>{item?.name}</span>
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
            {item?.discounted_salary || item?.discounted_price
              ? numberWithCommas(
                  pathName.includes("/detailing") ? item?.salary : item?.price
                ) + " تومان "
              : ""}
          </div>
          <div className={"flex justify-between items-center w-full"}>
            <div className={"flex items-center gap-1 text-[12px]"}>
              <span>قیمت:</span>
              <span>
                {numberWithCommas(
                  pathName.includes("/detailing")
                    ? item?.discounted_salary
                      ? item?.discounted_salary
                      : item?.salary
                    : item?.discount_price
                      ? item?.discount_price
                      : item?.price
                ) + " تومان "}
              </span>
            </div>
            <section className={"text-left"}>
              <span className={"text-red-600 text-12 cursor-pointer"}>حذف</span>
            </section>
          </div>
        </div>
      </section>
      <div
        className={`absolute -top-1 -left-1 ${item?.discounted_percent ? "block" : "hidden"}`}
      >
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
          {item?.discounted_percent}%
        </span>
      </div>
    </li>
  );
};

export default FacktorCard;
