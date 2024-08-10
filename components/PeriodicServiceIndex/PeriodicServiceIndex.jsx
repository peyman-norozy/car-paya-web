"use client";
import { HowWorksMockUpData } from "@/staticData/data";
import PeriodicServiceUnderCard from "../cards/PeriodicServiceUnderCard";
import HowWorks from "../HowWorks";
import TopRepresentatives from "../TopRepresentatives/TopRepresentatives";
import Image from "next/image";
import assistance from "@/public/assets/images/assistance.jpg";
import repair2 from "@/public/assets/images/repair2.jpg";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { error } from "@/utils/function-utils";
const PeriodicServiceIndex = (props) => {
  const pathName = usePathname();
  const [toastieDisplay, setToastieDisplay] = useState(false);

  useEffect(() => {
    if (!props.searchParams.selectTipState) {
      error("لطفا خودرو خود را انتخاب کنید");
      console.log("peyman");
    } else if (!props.searchParams.city_id) {
      error("لطفا شهر خود را انتخاب کنید");
    }
  }, [props.searchParams, toastieDisplay]);

  return (
    <div className={"flex flex-col gap-4 lg:gap-10"}>
      <div className="flex flex-col gap-4">
        <PeriodicServiceUnderCard />
        <div className="flex flex-col min-[1440px]:flex-row gap-4">
          <div className="bg-[#E7E7E7] flex flex-1 gap-4 rounded-2xl min-[580px]:p-3 cursor-pointer relative max-h-[200px] overflow-hidden">
            <Image
              src={repair2}
              alt={"repair2"}
              className="w-full min-[580px]:w-48 h-auto rounded-xl aspect-[200/130] absolute min-[580px]:static blur-sm min-[580px]:blur-0 brightness-75 min-[580px]:brightness-100"
            />
            <div
              className={
                "flex flex-col gap-3 items-start min-[580px]:p-0 p-3 min-[580px]:w-full z-[2]"
              }
            >
              <span className="text-center md:text-right w-full text-18 md:text-[20px] font-medium md:font-bold text-white min-[580px]:text-black">
                خدمات در نمایندگی
              </span>
              <span
                className={
                  "text-12 font-medium text-[#FEFEFE] min-[580px]:text-[#47505D] font-outline"
                }
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.بلکه روزنامه و مجله در ستون و
                سطرآنچنان که لازم است.
              </span>
              <Link
                href={{
                  pathname: pathName.startsWith("/detailing")
                    ? props.searchParams.selectTipState &&
                      props.searchParams.city_id
                      ? "/detailing/selectLocation"
                      : "/detailing"
                    : props.searchParams.selectTipState &&
                        props.searchParams.city_id
                      ? `/periodic-service/location-selection`
                      : "/periodic-service",
                  query: { ...props.searchParams, type: "FIXED" },
                }}
                className="px-4 py-2 rounded-lg bg-[#F66B34] text-white text-14"
                onClick={() => setToastieDisplay((prev) => !prev)}
              >
                ثبت درخواست خدمات
              </Link>
            </div>
          </div>
          <div className="bg-[#E7E7E7] flex flex-1 gap-4 rounded-2xl min-[580px]:p-3 cursor-pointer relative max-h-[200px] overflow-hidden">
            <Image
              src={assistance}
              alt={"assistance"}
              className="w-full min-[580px]:w-48 h-auto rounded-xl aspect-[200/130] absolute min-[580px]:static blur-sm min-[580px]:blur-0 brightness-75 min-[580px]:brightness-100"
            />
            <div
              className={
                "flex flex-col gap-3 items-start min-[580px]:p-0 p-3 min-[580px]:w-full z-[2]"
              }
            >
              <span className="text-center md:text-right w-full text-18 md:text-[20px] font-medium md:font-bold text-white min-[580px]:text-black">
                خدمات در محل
              </span>
              <span
                className={
                  "text-12 font-medium text-[#FEFEFE] min-[580px]:text-[#47505D] "
                }
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.بلکه روزنامه و مجله در ستون و
                سطرآنچنان که لازم است.
              </span>
              <Link
                href={{
                  pathname: pathName.startsWith("/detailing")
                    ? props.searchParams.selectTipState &&
                      props.searchParams.city_id
                      ? "/detailing/selectLocation"
                      : "/detailing"
                    : props.searchParams.selectTipState &&
                        props.searchParams.city_id
                      ? `/periodic-service/location-selection`
                      : "/periodic-service",
                  query: { ...props.searchParams, type: "MOVING" },
                }}
                className="px-4 py-2 rounded-lg bg-[#F66B34] text-white text-14"
                onClick={() => setToastieDisplay((prev) => !prev)}
              >
                ثبت درخواست خدمات
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E7E7E7] p-6 flex-col gap-6 items-center flex rounded-10">
        <span className="text-[#2C5D83] font-medium md:font-bold text-[22px] md:text-[28px] text-center">
          مشاوره و ثبت تماس تلفنی
        </span>
        <div className="flex gap-1 items-center">
          <i className="cc-call text-[20px]" />
          <span className="text-[20px]">021-58919</span>
        </div>
        <span className="text-[20px]">ساعت کاری 8:00 - 21:00</span>
      </div>
      <HowWorks data={HowWorksMockUpData} removeImage={true} />
      <TopRepresentatives />
    </div>
  );
};

export default PeriodicServiceIndex;
