import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeBatteries = () => {
  return (
    <div
      className={
        "bg-gradient-to-r from-stone-100 via-stone-200 to-stone-100 rounded-8 pt-[34px] pr-[34px] flex lg:flex-row flex-col justify-between"
      }
    >
      <section className={"lg:pb-[90px] pb-[14px]"}>
        <p className={"text-20 font-medium"}>
          با
          <span className={"text-[#1C74D1]"}> کار </span>
          <span className={"text-[#F66B34]"}> پایا </span>
          راحت و آسون باتری ماشینتو بگیر
        </p>
        <p className={"mt-[21px]"}>باتری ماشینتو آنلاین انتخاب کن</p>
        <div className={"flex justify-start mt-[53px]"}>
          <Link
            href={"/vehicle-inspection"}
            className={
              "bg-[#F66B34] text-16 text-[#FEFEFE] rounded-8 w-[166px] h-[36px] flex justify-center items-center"
            }
          >
            خرید باتری
          </Link>
        </div>
      </section>
      <section className={"w-[626px] h-[132px] self-end"}>
        <Image
          src={"/assets/images/carBattery.png"}
          alt={"carBattery"}
          width={626}
          height={132}
        />
      </section>
    </div>
  );
};

export default HomeBatteries;
