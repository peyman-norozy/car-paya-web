import React from "react";
import Image from "next/image";
import Link from "next/link";

const PriceEstimate = () => {
  return (
    <div
      className={
        "shadow-[0_0_8px_0_rgba(162,162,162,0.25)] rounded-8 flex lg:flex-row flex-col justify-between items-center p-10"
      }
    >
      <section
        className={
          "lg:w-[547px] lg:h-[338px] w-[349px] h-[221px] lg:self-end self-center relative"
        }
      >
        <Image
          src={"/assets/images/chart.gif"}
          alt={"carBattery"}
          className={"opacity-30"}
          width={547}
          height={271}
        />
        <Image
          src={"/assets/images/estimatCar.png"}
          alt={"carBattery"}
          className={
            "absolute -bottom-1 left-0 lg:w-[372px] lg:h-[204px] w-[243px] h-[133px]"
          }
          width={372}
          height={204}
        />
      </section>
      <section className={""}>
        <p className={"lg:text-[22px] text-14 font-medium"}>
          قیمت ماشینتو با
          <span className={"text-[#1C74D1]"}> کار </span>
          <span className={"text-[#F66B34]"}> پایا </span>
          ببین
        </p>
        <p className={"mt-[21px] lg:text-[22px] text-14"}>
          تخمین منصفانه قیمت خودرو با کارپا
        </p>
        <div className={"flex justify-start lg:mt-[53px] mt-[20px]"}>
          <Link
            href={"/vehicleprice"}
            className={
              "bg-[#F66B34] lg:text-16 text-14 text-[#FEFEFE] rounded-8 lg:w-[166px] lg:h-[36px] w-[140px] h-[30px] lg:flex hidden justify-center items-center"
            }
          >
            تخمین قیمت
          </Link>
        </div>
      </section>
      <section
        className={
          "lg:hidden flex justify-start lg:mt-[53px] mt-[20px] self-center mb-[20px]"
        }
      >
        <Link
          href={"/vehicleprice"}
          className={
            "bg-[#F66B34] lg:text-16 text-14 text-[#FEFEFE] rounded-8 lg:w-[166px] lg:h-[36px] w-[140px] h-[30px] flex justify-center items-center"
          }
        >
          تخمین قیمت
        </Link>
      </section>
    </div>
  );
};

export default PriceEstimate;
