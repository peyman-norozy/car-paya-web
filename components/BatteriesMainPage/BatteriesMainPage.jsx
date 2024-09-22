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
      <div className={"bg-[#EBF5FF] rounded-[16px] mt-6"}>
        <Image
          src={"/assets/images/batteryBanner.png"}
          alt={"battery banner"}
          width={1296}
          height={500}
          className={"w-full h-[615px]"}
        />
      </div>
      <CarServicesSlider data={serviceData} />
      <div
        className={
          "flex flex-col relative max-w-[1772px] m-auto lg:mr-[424px] pb-10 mt-10"
        }
      >
        <h1 className={"text-[18px] font-medium text-[#F58052]"}>
          مراحل تعویض باتری با کار پایا
        </h1>
        <ul
          className={
            "flex justify-between lg:gap-8 gap-4 mt-10 overflow-x-scroll py-2 px-1 [&>*:last-child]:hidden"
          }
        >
          {batteryPurchaseProcessData.map((item, index) => (
            <BatteryPurchaseProcess key={index} {...item} />
          ))}
        </ul>
        <BatteryAdvice />
        <BatteryFaq />
        {preventFirstRender && <ToastContainer rtl={true} />}
      </div>
    </>
  );
};

export default BatteriesMainPage;
