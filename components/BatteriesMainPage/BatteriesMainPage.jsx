"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import { batteryPurchaseProcessData, serviceData } from "@/staticData/data";
import BatteryPurchaseProcess from "@/components/cards/BatteryPurchaseProcess";
import BatteryFaq from "@/components/BatteryFaq/BatteryFaq";
import BatteryAdvice from "@/components/‌BatteryAdvice/‌BatteryAdvice";
import { error } from "@/utils/function-utils";
import { usePathname, useSearchParams } from "next/navigation";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import PointView from "@/components/PointView/PointView";

const BatteriesMainPage = () => {
  const [client, setClient] = useState(false);
  const [cityId, setCityId] = useState(null);

  const [toastieDisplay, setToastieDisplay] = useState(false);

  const [preventFirstRender, setPreventFirstRender] = useState(false);
  const pathName = usePathname();

  const searchParams = useSearchParams();

  useEffect(() => {
    setClient(true);
    if (typeof window !== "undefined") {
      const city = JSON.parse(localStorage.getItem("city"));
      setCityId(city?.cityId);
    }
  }, [toastieDisplay, searchParams, pathName]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const selectedVehicle = JSON.parse(
        localStorage.getItem("selectedVehicle"),
      );
      const city = JSON.parse(localStorage.getItem("city"));
      if (preventFirstRender) {
        if (!selectedVehicle) {
          error("لطفا خودرو خود را انتخاب کنید");
        } else if (!city) {
          error("لطفا شهر خود را انتخاب کنید");
        }
      }
    }
  }, [preventFirstRender, toastieDisplay]);

  if (!client) {
    return null;
  }

  return (
    <>
      <div
        className={
          "bg-[#EBF5FF] rounded-[16px] mt-6 w-full h-auto aspect-[full/612] flex flex-col"
        }
      >
        <h1
          className={
            "flex items-center justify-center gap-1 lg:text-[24px] text-[20px] font-bold mt-10 mr-8 lg:mr-0 self-start lg:self-center"
          }
        >
          <span>استارت مطمئن با</span>
          <span className={"text-[#F66B34]"}>کارپایا</span>
        </h1>
        <div className={"flex flex-row-reverse justify-start"}>
          <Image
            src={"/assets/images/carshenasi.png"}
            alt={"battery banner"}
            width={522}
            height={352}
            className={
              "lg:w-[522px] lg:h-[352px] w-[224px] h-[151px] self-end mb-[71px]"
            }
          />
          <Image
            src={"/assets/images/image 110 (1).svg"}
            alt={"battery banner"}
            width={178}
            height={217}
            className={
              "lg:w-[178px] lg:h-[217px] w-[82px] h-[100px] self-end mb-[71px]"
            }
          />
        </div>
        <button
          className={
            "block lg:hidden bg-[#F66B34] text-[#FEFEFE] w-[165px] h-[36px] mb-[14px] text-[12px] font-medium self-center rounded-[4px]"
          }
        >
          درخواست باتری
        </button>
      </div>
      <CarServicesSlider data={serviceData} />
      <div
        className={
          "flex flex-col relative max-w-[1772px] m-auto lg:mr-[424px] pb-10 mt-10"
        }
      >
        <h2 className={"text-[18px] font-medium text-[#F58052]"}>
          مراحل تعویض باتری با کار پایا
        </h2>
        <ul
          className={
            "flex justify-between lg:gap-8 gap-4 mt-10 overflow-x-scroll py-2 px-1 [&>*:last-child]:hidden"
          }
        >
          {batteryPurchaseProcessData.map((item, index) => (
            <BatteryPurchaseProcess key={index} {...item} />
          ))}
        </ul>
        <PointView />

        {/*<BatteryAdvice />*/}
        <BatteryFaq />
        {preventFirstRender && <ToastContainer rtl={true} />}
      </div>
    </>
  );
};

export default BatteriesMainPage;
