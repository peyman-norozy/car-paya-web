"use client";
// import { HowWorksMockUpData } from "@/staticData/data";
// import PeriodicServiceUnderCard from "../cards/PeriodicServiceUnderCard";
// import HowWorks from "../HowWorks";
// import TopRepresentatives from "../TopRepresentatives/TopRepresentatives";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { error } from "@/utils/function-utils";
// import { ToastContainer } from "react-toastify";
// import nProgress from "nprogress";
// const PeriodicServiceIndex = (props) => {
//   const pathName = usePathname();
//   const [toastieDisplay, setToastieDisplay] = useState(false);
//   const [isClient, setIsClient] = useState(false);
//   const [preventFirstRender, setPreventFirstRender] = useState(false);
//   // const [selectedVehicleId, setSelectedVehicleId] = useState(null);
//   const [servicesState, setServicesState] = useState("");
//   const [cityId, setCityId] = useState(null);
//   const searchParams = useSearchParams();
//
//   const router = useRouter();
//
//   useEffect(() => {
//     setIsClient(true);
//     if (typeof window !== "undefined") {
//       // const selectedVehicle = JSON.parse(
//       //   localStorage.getItem("selectedVehicle"),
//       // );
//       const city = JSON.parse(localStorage.getItem("city"));
//       // setSelectedVehicleId(selectedVehicle?.id);
//       setCityId(city?.cityId);
//     }
//   }, [toastieDisplay, searchParams, pathName]);
//
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const selectedVehicle = JSON.parse(
//         localStorage.getItem("selectedVehicle"),
//       );
//       const city = JSON.parse(localStorage.getItem("city"));
//       if (preventFirstRender) {
//         if (!selectedVehicle) {
//           error("لطفا خودرو خود را انتخاب کنید");
//         } else if (!city) {
//           error("لطفا شهر خود را انتخاب کنید");
//         }
//       }
//     }
//   }, [preventFirstRender, toastieDisplay]);
//
//   const selectServiceClickHandler = (status) => {
//     setToastieDisplay((prev) => !prev);
//     setPreventFirstRender(true);
//     if (
//       pathName.startsWith("/detailing") &&
//       JSON.parse(localStorage.getItem("selectedVehicle"))?.id &&
//       cityId
//     ) {
//       nProgress.start();
//       router.push(
//         `/detailing/selectLocation?type=${status}${
//           JSON.parse(localStorage.getItem("selectedVehicle"))?.id
//             ? `&selectTipState=true,${
//                 JSON.parse(localStorage.getItem("selectedVehicle"))?.id
//               }`
//             : ""
//         }&city_id=${JSON.parse(localStorage.getItem("city"))?.cityId}`,
//       );
//     } else if (
//       pathName.startsWith("/periodic-service") &&
//       JSON.parse(localStorage.getItem("selectedVehicle"))?.id &&
//       cityId
//     ) {
//       nProgress.start();
//       router.push(
//         `/periodic-service/location-selection?type=${status}&${
//           JSON.parse(localStorage.getItem("selectedVehicle"))?.id
//             ? `&selectTipState=true,${
//                 JSON.parse(localStorage.getItem("selectedVehicle"))?.id
//               }`
//             : ""
//         }&city_id=${cityId}`,
//       );
//     }
//   };
//
//   if (!isClient) {
//     return null;
//   }
//
//   console.log(toastieDisplay);
//
//   return (
//     <div className={"flex flex-col gap-4 lg:gap-10"}>
//       <div className="flex flex-col gap-4">
//         <PeriodicServiceUnderCard
//           title={props.title}
//           servics={props.servics}
//           description={props.description}
//           icon={props.icon}
//         />
//         <div className="flex flex-col min-[1440px]:flex-row gap-4">
//           <div className="bg-[#E7E7E7] flex flex-1 gap-4 rounded-2xl min-[580px]:p-3 cursor-pointer relative max-h-[200px] overflow-hidden">
//             <Image
//               src={props.ImageAddress1}
//               alt={"repair2"}
//               className="w-full min-[580px]:w-48 h-auto rounded-xl aspect-[200/130] absolute min-[580px]:static blur-sm min-[580px]:blur-0 brightness-75 min-[580px]:brightness-100"
//               width={200}
//               height={200}
//             />
//             <div
//               className={
//                 "flex flex-col gap-3 items-start min-[580px]:p-0 p-3 min-[580px]:w-full z-[2]"
//               }
//             >
//               <span className="text-center md:text-right w-full text-18 md:text-[20px] font-medium md:font-bold text-white min-[580px]:text-black">
//                 خدمات در نمایندگی
//               </span>
//               <span
//                 className={
//                   "text-12 font-medium text-[#FEFEFE] min-[580px]:text-[#47505D] font-outline"
//                 }
//               >
//                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
//                 استفاده از طراحان گرافیک است.بلکه روزنامه و مجله در ستون و
//                 سطرآنچنان که لازم است.
//               </span>
//               <button
//                 className="px-4 py-2 rounded-lg bg-[#F66B34] text-white text-14"
//                 onClick={() => selectServiceClickHandler("FIXED")}
//               >
//                 ثبت درخواست خدمات
//               </button>
//             </div>
//           </div>
//           <div className="bg-[#E7E7E7] flex flex-1 gap-4 rounded-2xl min-[580px]:p-3 cursor-pointer relative max-h-[200px] overflow-hidden">
//             <Image
//               src={props.ImageAddress2}
//               alt={"assistance"}
//               className="w-full min-[580px]:w-48 h-auto rounded-xl aspect-[200/130] absolute min-[580px]:static blur-sm min-[580px]:blur-0 brightness-75 min-[580px]:brightness-100"
//               width={200}
//               height={200}
//             />
//             <div
//               className={
//                 "flex flex-col gap-3 items-start min-[580px]:p-0 p-3 min-[580px]:w-full z-[2]"
//               }
//             >
//               <span className="text-center md:text-right w-full text-18 md:text-[20px] font-medium md:font-bold text-white min-[580px]:text-black">
//                 خدمات در محل
//               </span>
//               <span
//                 className={
//                   "text-12 font-medium text-[#FEFEFE] min-[580px]:text-[#47505D] "
//                 }
//               >
//                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
//                 استفاده از طراحان گرافیک است.بلکه روزنامه و مجله در ستون و
//                 سطرآنچنان که لازم است.
//               </span>
//               <button
//                 className="px-4 py-2 rounded-lg bg-[#F66B34] text-white text-14"
//                 onClick={() => selectServiceClickHandler("MOVING")}
//               >
//                 ثبت درخواست خدمات
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-[#E7E7E7] p-6 flex-col gap-6 items-center flex rounded-10">
//         <span className="text-[#2C5D83] font-medium md:font-bold text-[22px] md:text-[28px] text-center">
//           مشاوره و ثبت تماس تلفنی
//         </span>
//         <div className="flex gap-1 items-center">
//           <i className="cc-call text-[20px]" />
//           <span className="text-[20px]">021-58919</span>
//         </div>
//         <span className="text-[20px]">ساعت کاری 8:00 - 21:00</span>
//       </div>
//       <HowWorks data={HowWorksMockUpData} removeImage={true} />
//       <TopRepresentatives />
//       {preventFirstRender && <ToastContainer rtl={true} />}
//     </div>
//   );
// };
//
// export default PeriodicServiceIndex;

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { error } from "@/utils/function-utils";
import SelectCarAndCity from "@/components/public/SelectCarAndCity";
import SelectCity from "@/components/public/SelectCity";
import CarSelect from "@/components/public/CarSelect";
import Image from "next/image";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import { batteryPurchaseProcessData, serviceData } from "@/staticData/data";
import BatteryPurchaseProcess from "@/components/cards/BatteryPurchaseProcess";
import PointView from "@/components/PointView/PointView";
import BatteryFaq from "@/components/BatteryFaq/BatteryFaq";

const PeriodicServiceIndex = () => {
  const [client, setClient] = useState(false);
  const [modalClickState, setModalClickState] = useState(false);
  const [cityId, setCityId] = useState(null);
  const [toastieDisplay, setToastieDisplay] = useState(false);
  const [asideStatus, setAsideStatus] = useState("car_city");

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
        if (!city) {
          error("لطفا شهر خود را انتخاب کنید");
        } else if (!selectedVehicle) {
          error("لطفا خودرو خود را انتخاب کنید");
        }
      }
    }
  }, [preventFirstRender, toastieDisplay]);

  if (!client) {
    return null;
  }

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

  return (
    <div className={"relative"}>
      <div
        className={`lg:absolute fixed transition-all duration-500 ${modalClickState ? "bottom-0 right-0 left-0" : "bottom-[-500px] right-0 left-0"} w-full lg:top-0 lg:right-0.5 lg:h-full lg:z-0 z-[10000]`}
      >
        {modalClickState && (
          <div
            className={"w-full h-screen"}
            onClick={() => setModalClickState(false)}
          ></div>
        )}

        {(() => {
          switch (asideStatus) {
            case "car_city":
              return (
                <SelectCarAndCity
                  buttonTitle={"درخواست دیتیلینگ"}
                  href={
                    JSON.parse(localStorage.getItem("selectedVehicle"))?.id &&
                    cityId
                      ? `/detailing/selectLocation?type=${"FIXED"}${
                          JSON.parse(localStorage.getItem("selectedVehicle"))
                            ?.id
                            ? `&selectTipState=true,${
                                JSON.parse(
                                  localStorage.getItem("selectedVehicle"),
                                )?.id
                              }`
                            : ""
                        }&city_id=${JSON.parse(localStorage.getItem("city"))?.cityId}`
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
      </div>
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
            <span>دیتیلینگ خودرو با</span>
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
            درخواست دیتیلینگ
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

export default PeriodicServiceIndex;
