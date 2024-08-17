"use client";
import { HowWorksMockUpData } from "@/staticData/data";
import PeriodicServiceUnderCard from "../cards/PeriodicServiceUnderCard";
import HowWorks from "../HowWorks";
import TopRepresentatives from "../TopRepresentatives/TopRepresentatives";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { error } from "@/utils/function-utils";
import { ToastContainer } from "react-toastify";
const PeriodicServiceIndex = (props) => {
  const pathName = usePathname();
  const [toastieDisplay, setToastieDisplay] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const [servicesState, setServicesState] = useState("");
  const [cityId, setCityId] = useState(null);
  const searchParams = useSearchParams();

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const selectedVehicle = JSON.parse(
        localStorage.getItem("selectedVehicle"),
      );
      const city = JSON.parse(localStorage.getItem("city"));
      setSelectedVehicleId(selectedVehicle?.id);
      setCityId(city?.cityId);
    }
  }, [toastieDisplay, searchParams, pathName]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const selectedVehicle = JSON.parse(
        localStorage.getItem("selectedVehicle"),
      );
      const city = JSON.parse(localStorage.getItem("city"));

      if (!selectedVehicle) {
        error("لطفا خودرو خود را انتخاب کنید");
      } else if (!city) {
        error("لطفا شهر خود را انتخاب کنید");
      }
    }
  }, [toastieDisplay]);

  const selectServiceClickHandler = (status) => {
    setToastieDisplay((prev) => !prev);
    if (pathName.startsWith("/detailing") && selectedVehicleId && cityId) {
      router.push(
        `/detailing/selectLocation?type=${status}${searchParams.get("selectTipState") ? "" : `&selectTipState=true,${selectedVehicleId}`}&city_id=${cityId}`,
      );
    } else if (
      pathName.startsWith("/periodic-service") &&
      selectedVehicleId &&
      cityId
    ) {
      router.push(
        `/periodic-service/location-selection?type=${status}&selectTipState=true,${selectedVehicleId}&city_id=${cityId}`,
      );
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className={"flex flex-col gap-4 lg:gap-10"}>
      <div className="flex flex-col gap-4">
        <PeriodicServiceUnderCard
          title={props.title}
          servics={props.servics}
          description={props.description}
          icon={props.icon}
        />
        <div className="flex flex-col min-[1440px]:flex-row gap-4">
          <div className="bg-[#E7E7E7] flex flex-1 gap-4 rounded-2xl min-[580px]:p-3 cursor-pointer relative max-h-[200px] overflow-hidden">
            <Image
              src={props.ImageAddress1}
              alt={"repair2"}
              className="w-full min-[580px]:w-48 h-auto rounded-xl aspect-[200/130] absolute min-[580px]:static blur-sm min-[580px]:blur-0 brightness-75 min-[580px]:brightness-100"
              width={200}
              height={200}
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
              <button
                className="px-4 py-2 rounded-lg bg-[#F66B34] text-white text-14"
                onClick={() => selectServiceClickHandler("FIXED")}
              >
                ثبت درخواست خدمات
              </button>
            </div>
          </div>
          <div className="bg-[#E7E7E7] flex flex-1 gap-4 rounded-2xl min-[580px]:p-3 cursor-pointer relative max-h-[200px] overflow-hidden">
            <Image
              src={props.ImageAddress2}
              alt={"assistance"}
              className="w-full min-[580px]:w-48 h-auto rounded-xl aspect-[200/130] absolute min-[580px]:static blur-sm min-[580px]:blur-0 brightness-75 min-[580px]:brightness-100"
              width={200}
              height={200}
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
              <button
                className="px-4 py-2 rounded-lg bg-[#F66B34] text-white text-14"
                onClick={() => selectServiceClickHandler("MOVING")}
              >
                ثبت درخواست خدمات
              </button>
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
      <ToastContainer rtl={true} />
    </div>
  );
};

export default PeriodicServiceIndex;
