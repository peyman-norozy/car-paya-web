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
import SelectCarAndCity from "@/components/public/SelectCarAndCity";
import SelectCity from "@/components/public/SelectCity";
import CarSelect from "@/components/public/CarSelect";
import CarAndCityContainer from "../public/CarAndCityContainer";
import { useRouter } from "next/navigation";

const BatteriesMainPage = () => {
  // const [client, setClient] = useState(false);
  const [modalClickState, setModalClickState] = useState(false);
  const [cityId, setCityId] = useState(null);

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const city = JSON.parse(localStorage.getItem("city"));
      setCityId(city?.cityId);
    }
  }, [searchParams, pathName]);
  // const [cityId, setCityId] = useState(null);
  // const [toastieDisplay, setToastieDisplay] = useState(false);
  // const [asideStatus, setAsideStatus] = useState("car_city");

  // const [preventFirstRender, setPreventFirstRender] = useState(false);

  // useEffect(() => {
  //   setClient(true);
  //   if (typeof window !== "undefined") {
  //     const city = JSON.parse(localStorage.getItem("city"));
  //     setCityId(city?.cityId);
  //   }
  // }, [toastieDisplay, searchParams, pathName]);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const selectedVehicle = JSON.parse(
  //       localStorage.getItem("selectedVehicle"),
  //     );
  //     const city = JSON.parse(localStorage.getItem("city"));
  //     if (preventFirstRender) {
  //       if (!city) {
  //         error("لطفا شهر خود را انتخاب کنید");
  //       } else if (!selectedVehicle) {
  //         error("لطفا خودرو خود را انتخاب کنید");
  //       }
  //     }
  //   }
  // }, [preventFirstRender, toastieDisplay]);

  // if (!client) {
  //   return null;
  // }

  // <div className="bg-[#383838A3] rounded-3xl flex size900:flex-row-reverse flex-col-reverse gap-6 p-6 items-center">
  //   <div className="flex flex-col gap-2 items-start flex-1">
  //     <h1 className="lg:text-xl font-bold text-[#F66B34]">باتری</h1>
  //     <p className="text-[#FEFEFE] font-bold leading-8 lg:text-base text-[12px]">
  //       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
  //       استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
  //       ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
  //       کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
  //     </p>
  //     <Link
  //         href={
  //           pathName.startsWith("/batteries") &&
  //           JSON.parse(localStorage.getItem("selectedVehicle"))?.id &&
  //           cityId
  //               ? `batteries/products?attribute_slug=type_vehicle&attribute_value=car${
  //                   JSON.parse(localStorage.getItem("selectedVehicle"))?.id
  //                       ? `&selectTipState=true,${JSON.parse(localStorage.getItem("selectedVehicle")).id.toString()}`
  //                       : ""
  //               }`
  //               : ""
  //         }
  //         onClick={() => {
  //           setToastieDisplay((prev) => !prev);
  //           setPreventFirstRender(true);
  //         }}
  //         className="bg-[#F66B34] rounded-md py-2 px-4 text-[#FEFEFE] w-fit mt-2 font-medium lg:text-14 text-12"
  //     >
  //       ثبت درخواست
  //     </Link>
  //   </div>
  //   <Image
  //       alt={"buttery description image"}
  //       src={"/assets/images/batteryIndex.png"}
  //       width={245}
  //       height={195}
  //   />
  // </div>

  function RegisterBatteryRequestHandler() {
    router.push(
      JSON.parse(localStorage.getItem("selectedVehicle"))?.id && cityId
        ? `batteries/products?attribute_slug=type_vehicle&attribute_value=${searchParams.get("attribute_value")}${
            JSON.parse(localStorage.getItem("selectedVehicle"))?.id
              ? `&selectTipState=true,${JSON.parse(localStorage.getItem("selectedVehicle")).id.toString()}`
              : ""
          }`
        : ""
    );
  }

  return (
    <div className={"relative"}>
      {/* <div
        className={`lg:absolute fixed transition-all duration-500 ${modalClickState ? "bottom-0 right-0 left-0" : "bottom-[-500px]"} w-full lg:top-0 lg:right-0.5 lg:h-full lg:z-0 z-[10000]`}
      >
        {(() => {
          switch (asideStatus) {
            case "car_city":
              return (
                <SelectCarAndCity
                  buttonTitle={"درخواست باتری"}
                  href={
                    JSON.parse(localStorage.getItem("selectedVehicle"))?.id &&
                    cityId
                      ? `batteries/products?attribute_slug=type_vehicle&attribute_value=${searchParams.get("attribute_value")}${
                          JSON.parse(localStorage.getItem("selectedVehicle"))
                            ?.id
                            ? `&selectTipState=true,${JSON.parse(localStorage.getItem("selectedVehicle")).id.toString()}`
                            : ""
                        }`
                      : ""
                  }
                  setAsideStatus={setAsideStatus}
                  setToastieDisplay={setToastieDisplay}
                  setPreventFirstRender={setPreventFirstRender}
                />
              );
            case "citySelection":
              return <SelectCity setAsideStatus={setAsideStatus} />;
            case "carSelection":
              return <CarSelect setAsideStatus={setAsideStatus} />;
            default:
              return null;
          }
        })()}
      </div> */}
      <CarAndCityContainer
        title={"ثبت درخواست باتری"}
        onClick={RegisterBatteryRequestHandler}
        setModalClickState={setModalClickState}
        modalClickState={modalClickState}
      />
      <div
        className={
          "bg-[#cff9ff] rounded-[16px] mt-6 w-full h-auto aspect-[full/612]"
        }
      >
        <div className={"flex flex-col"}>
          <h1
            className={
              "flex items-center justify-center gap-1 lg:text-[24px] text-[20px] font-bold mt-10 mr-8 lg:mr-0 self-start lg:self-center"
            }
          >
            <span>استارت مطمئن وسیله نقلیه با</span>
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
            onClick={() => setModalClickState(true)}
          >
            درخواست باتری
          </button>
        </div>
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
        {/*{preventFirstRender && <ToastContainer rtl={true} />}*/}
      </div>
    </div>
  );
};

export default BatteriesMainPage;
