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
        <p className={"lg:text-[22px] text-14 font-medium"}>
          با
          <span className={"text-[#1C74D1]"}> کار </span>
          <span className={"text-[#F66B34]"}> پایا </span>
          راحت و آسون باتری ماشینتو بگیر
        </p>
        <p className={"mt-[21px] lg:text-[22px] text-14"}>
          باتری ماشینتو آنلاین انتخاب کن
        </p>
        <div className={"flex justify-start lg:mt-[53px] mt-[20px]"}>
          <Link
            href={"/batteries?attribute_slug=type_vehicle"}
            className={
              "bg-[#F66B34] lg:text-16 text-14 text-[#FEFEFE] rounded-8 lg:w-[166px] lg:h-[36px] w-[140px] h-[30px] lg:flex hidden justify-center items-center"
            }
          >
            خرید باتری
          </Link>
        </div>
      </section>
      <section
        className={"lg:w-[626px] lg:h-[132px] w-[350px] h-[90px] self-end"}
      >
        <Image
          src={`/assets/images/carBattery.png`}
          alt={"carBattery"}
          width={626}
          height={132}
        />
      </section>
      <section
        className={
          "lg:hidden flex justify-start lg:mt-[53px] self-center mb-[20px]"
        }
      >
        <Link
          href={"/batteries?attribute_slug=type_vehicle"}
          className={
            "bg-[#F66B34] lg:text-16 text-14 text-[#FEFEFE] rounded-8 lg:w-[166px] lg:h-[36px] w-[140px] h-[30px] flex justify-center items-center"
          }
        >
          خرید باتری
        </Link>
      </section>
    </div>
  );
};

export default HomeBatteries;
