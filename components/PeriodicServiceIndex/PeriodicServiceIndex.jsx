// "use client";
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
// import { getCookies } from "cookies-next";
// import axios from "axios";
// import { setLoginModal } from "@/store/todoSlice";
// import { useDispatch } from "react-redux";
// const PeriodicServiceIndex = (props) => {
//   const pathName = usePathname();
//   const [toastieDisplay, setToastieDisplay] = useState(false);
//   const [isClient, setIsClient] = useState(false);
//   const [preventFirstRender, setPreventFirstRender] = useState(false);
//   // const [selectedVehicleId, setSelectedVehicleId] = useState(null);
//   const [servicesState, setServicesState] = useState("");
//   const [cityId, setCityId] = useState(null);
//   const searchParams = useSearchParams();
//   const dispatch = useDispatch();
//   const router = useRouter();

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

//   const selectServiceClickHandler = (status) => {
//     axios
//       .get(process.env.BASE_API + "/web" + "/checkAuth", {
//         headers: {
//           Authorization: "Bearer " + getCookies("Authorization").Authorization,
//         },
//       })
//       .then(async () => {
//         setToastieDisplay((prev) => !prev);
//         setPreventFirstRender(true);
//         nProgress.start();
//         router.push(
//           `/periodic-service/location-selection?type=${status}&${
//             JSON.parse(localStorage.getItem("selectedVehicle"))?.id
//               ? `&selectTipState=true,${
//                   JSON.parse(localStorage.getItem("selectedVehicle"))?.id
//                 }`
//               : ""
//           }&city_id=${cityId}`,
//         );
//       })
//       .catch((err) => {
//         dispatch(setLoginModal(true));
//       });
//   };

//   if (!isClient) {
//     return null;
//   }

//   console.log(toastieDisplay);

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

// export default PeriodicServiceIndex;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import periodic_landing from "@/public/assets/images/periodic_landing.png";
import zarebin from "@/public/assets/images/zarebin.png";
import { useRouter } from "next/navigation";
import { error } from "@/utils/function-utils";
import { useDispatch, useSelector } from "react-redux";
import CarAndCityContainer from "@/components/public/CarAndCityContainer";
import nProgress from "nprogress";
import Counseling from "@/components/Counseling";
import BachelorSteps from "@/components/BachelorSteps";
import CarPayaBenefits from "../periodic-service-components/CarPayaBenefits";
import QuestionMark from "../QuestionMark";
import PeriodicLandingServices from "../periodic-service-components/PeriodicLandingServices";
import PeriodicOptions from "../periodic-service-components/PeriodicOptions";
import CommentsSlider from "../periodic-service-components/CommentsSlider";
import { getCookies } from "cookies-next";
import { setLoginModal } from "@/store/todoSlice";

const PeriodicServiceIndex = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [city_id, setCity_id] = useState();
  const [data, setData] = useState([]);
  const [modalClickState, setModalClickState] = useState(false);
  const dispatch = useDispatch();
  const [toastieDisplay, setToastieDisplay] = useState(false);
  const [preventFirstRender, setPreventFirstRender] = useState(false);
  const vehicleVerificationBasket = useSelector(
    (state) => state.todo.vehicleVerificationBasketLength
  );
  const router = useRouter();

  // const PackageStepHandler = () => {
  //   if (!localStorage.getItem("selectedVehicle")) {
  //     error("ابتدا وسیله نقلیه را انتخاب کنید");
  //   }
  //   // if (!localStorage.getItem("city")) {
  //   //   error("ابتدا شهر خود را انتخاب کنید");
  //   // }
  //   if (
  //     // localStorage.getItem("city") &&
  //     localStorage.getItem("selectedVehicle")
  //   ) {
  //     nProgress.start();
  //     router.push(
  //       `/periodic-service/location-selection?city_id=87&vehicle_tip=${JSON.parse(localStorage.getItem("selectedVehicle")).id}&step=step-1`
  //     );
  //   }
  // };

  const PackageStepHandler = (status) => {
    if (!localStorage.getItem("selectedVehicle")) {
      error("ابتدا وسیله نقلیه را انتخاب کنید");
    } else {
      axios
        .get(process.env.BASE_API + "/web" + "/checkAuth", {
          headers: {
            Authorization: "Bearer " + getCookies("Authorization").Authorization,
          },
        })
        .then(async () => {
          setToastieDisplay((prev) => !prev);
          setPreventFirstRender(true);
          nProgress.start();
          router.push(
            `/periodic-service/location-selection?type=${status}&${JSON.parse(localStorage.getItem("selectedVehicle"))?.id
              ? `&selectTipState=true,${JSON.parse(localStorage.getItem("selectedVehicle"))?.id
              }`
              : ""
            }&city_id=87`,
          );
        })
        .catch((err) => {
          console.log(err);

          dispatch(setLoginModal(true));
        });
    }
  };

  useEffect(() => {
    localStorage.setItem("city", JSON.stringify({ "label": "تهران", "cityId": 87 }))
    const city = "&city_id=87"
    const vehicle_tip =
      selectedItem === null ? "" : "&vehicle_tip_id=" + selectedItem;
    axios
      .get(
        process.env.BASE_API +
        "/web/expert/reservation?step=step-1" +
        vehicle_tip +
        city
      )
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedItem, city_id]);

  return (
    <div className={"relative flex flex-col gap-12"}>
      <div className="flex w-full bg-[#EBF5FF] mt-10 sm:rounded-3xl gap-6">
        <div className="hidden lg:inline-block w-[410px] relative">
          <CarAndCityContainer
            title={"ثبت درخواست سرویس دوره ای"}
            onClick={PackageStepHandler}
            setModalClickState={setModalClickState}
            modalClickState={modalClickState}
          />
        </div>
        <div className=" flex p-4 flex-col items-center lg:h-[500px] lg:gap-20 w-full lg:w-[calc(100%-434px)] pt-14 lg:pl-20">
          <div className="flex flex-col gap-2 items-center self-start lg:gap-11">
            <h1 className="text-lg lg:text-2xl font-medium lg:font-bold text-[#000000]">
              با سرویس دوره‌ای کارپایا، سلامت خودرو خود را تضمین کنید!
            </h1>
            <p className="text-sm lg:text-2xl text-[#292929] font-medium">
              خدمات سیار در محل شما یا مراکز تخصصی کارپایا
            </p>
          </div>
          <div className="relative self-end lg:scale-125 xl:scale-150">
            <Image
              className="w-[287px] h-[164px]"
              src={periodic_landing}
              width={287}
              height={164}
              alt={"carshenasi image"}
            />
            {/* <Image
              src={zarebin}
              className="absolute zarebin"
              width={124}
              height={128}
              alt={"zarebin icon"}
            /> */}
          </div>
          <button
            className="bg-[#F66B34] rounded-md py-[10px] px-9 text-[#FEFEFE] w-fit text-xs mt-4 font-medium lg:hidden"
            onClick={() => {
              PackageStepHandler()
              setModalClickState(true);
            }}
          >
            {vehicleVerificationBasket.length ? "ادامه " : ""}درخواست سرویس دوره
            ای
          </button>
        </div>
      </div>
      <div className={"w-full mr-auto gap-8 flex flex-col"}>
        <BachelorSteps />
        <CarPayaBenefits />
        <Counseling />
        <PeriodicLandingServices />
        <PeriodicOptions />
        <CommentsSlider />
        <QuestionMark />
        <ToastContainer rtl={true} />
      </div>
    </div>
  );
};

export default PeriodicServiceIndex;
