"use client";

import React from "react";
import Image from "next/image";

const FacktorCard = () => {
  return (
    <li className={"p-2 shadow-custom1 rounded-lg min-w-[194px]"}>
      <section className={"text-left"}>
        <span className={"text-red-600 text-12 cursor-pointer"}>حذف</span>
      </section>
      <section className={"flex flex-row lg:flex-col items-center gap-4"}>
        <div>
          <Image
            src={"/assets/images/hiclipart.com (3).png"}
            className={"w-[70px] h-[75px]"}
            alt={"service product"}
            width={100}
            height={130}
          />
        </div>
        <div className={"text-14 flex flex-col gap-2"}>
          <span>تعویض رغن موتور کاسترول 5*30:</span>
          <div className={"flex items-center gap-1"}>
            <span
              className={"inline-block w-[15px] h-[15px] bg-gray-300"}
            ></span>
            <span className={"text-10 text-[#B0B0B0]"}>
              گارانتی اصالت و سلامت فیزیکی کالا
            </span>
          </div>
          <div className={"flex items-center gap-1"}>
            <span>قیمت:</span>
            <span>1،500،000</span>
            <span>تومان</span>
          </div>
        </div>
      </section>
    </li>
  );
};

export default FacktorCard;
