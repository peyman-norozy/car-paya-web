"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import { batteryPurchaseProcessData } from "@/staticData/data";
import BatteryPurchaseProcess from "@/components/cards/BatteryPurchaseProcess";
import BatteryFaq from "@/components/BatteryFaq/BatteryFaq";
import BatteryAdvice from "@/components/‌BatteryAdvice/‌BatteryAdvice";
import { error } from "@/utils/function-utils";
import { usePathname, useSearchParams } from "next/navigation";

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
      <div className="bg-[#383838A3] rounded-3xl flex size900:flex-row-reverse flex-col-reverse gap-6 p-6 items-center">
        <div className="flex flex-col gap-2 items-start flex-1">
          <h1 className="lg:text-xl font-bold text-[#F66B34]">باتری</h1>
          <p className="text-[#FEFEFE] font-bold leading-8 lg:text-base text-[12px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <Link
            href={
              pathName.startsWith("/batteries") &&
              JSON.parse(localStorage.getItem("selectedVehicle"))?.id &&
              cityId
                ? `batteries/products?attribute_slug=type_vehicle&attribute_value=car${
                    JSON.parse(localStorage.getItem("selectedVehicle"))?.id
                      ? `&selectTipState=true,${JSON.parse(localStorage.getItem("selectedVehicle")).id.toString()}`
                      : ""
                  }`
                : ""
            }
            onClick={() => {
              setToastieDisplay((prev) => !prev);
              setPreventFirstRender(true);
            }}
            className="bg-[#F66B34] rounded-md py-2 px-4 text-[#FEFEFE] w-fit mt-2 font-medium lg:text-14 text-12"
          >
            ثبت درخواست
          </Link>
        </div>
        <Image
          alt={"buttery description image"}
          src={"/assets/images/batteryIndex.png"}
          width={245}
          height={195}
        />
      </div>
      <ul
        className={
          "flex justify-between lg:gap-8 gap-4 mt-10 overflow-x-scroll pb-2 [&>*:last-child]:hidden"
        }
      >
        {batteryPurchaseProcessData.map((item, index) => (
          <BatteryPurchaseProcess key={index} {...item} />
        ))}
      </ul>
      <BatteryAdvice />
      <BatteryFaq />
      {preventFirstRender && <ToastContainer rtl={true} />}
    </>
  );
};

export default BatteriesMainPage;
