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
import Opinion from "../Opinion";
const PeriodicServiceIndex = () => {
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
    sessionStorage.removeItem("periodicCart");
    if (!localStorage.getItem("selectedVehicle")) {
      error("ابتدا وسیله نقلیه را انتخاب کنید");
    } else {
      axios
        .get(process.env.BASE_API + "/web" + "/checkAuth", {
          headers: {
            Authorization:
              "Bearer " + getCookies("Authorization").Authorization,
          },
        })
        .then(async () => {
          setToastieDisplay((prev) => !prev);
          setPreventFirstRender(true);
          nProgress.start();
          router.push(
            `/periodic-service/location-selection?${
              JSON.parse(localStorage.getItem("selectedVehicle"))?.id
                ? `selectTipState=true,${
                    JSON.parse(localStorage.getItem("selectedVehicle"))?.id
                  }`
                : ""
            }&city_id=${JSON.parse(localStorage.getItem("city"))?.cityId}`
          );
        })
        .catch((err) => {
          console.log(err);

          dispatch(setLoginModal(true));
        });
    }
  };

  useEffect(() => {
    axios
      .get(process.env.BASE_API + "/web/expert/reservation?step=step-1")
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={"relative flex flex-col gap-12"}>
      <div className="flex w-full aspect-[1200/670] lg:aspect-auto h-auto bg-[url('/assets/images/periodic_banner_mobile.png')] lg:bg-[url('/assets/images/periodic_baner.jpg')] bg-cover bg-center size1680:bg-left mt-10 sm:rounded-3xl gap-6 ">
        <div className="w-0 lg:w-[410px] relative">
          <CarAndCityContainer
            title={"ثبت درخواست سرویس دوره ای"}
            onClick={PackageStepHandler}
            setModalClickState={setModalClickState}
            modalClickState={modalClickState}
          />
        </div>
        <div className=" flex p-4 flex-col items-center justify-end lg:h-[500px] gap-2 lg:gap-20 w-full lg:w-[calc(100%-434px)] pt-8 lg:pl-20">
          {/* <div className="flex flex-col gap-4 items-center self-start lg:gap-11">
            <h1 className="text-sm lg:text-2xl font-medium lg:font-bold text-[#000000]">
              با سرویس دوره‌ای کارپایا، سلامت خودرو خود را تضمین کنید!
            </h1>
            <p className="text-xs lg:text-2xl text-[#292929] font-medium">
              خدمات سیار در محل شما یا مراکز تخصصی کارپایا
            </p>
          </div>
          <div className="relative self-center lg:self-end lg:scale-125 xl:scale-150">
            <Image
              className="w-[287px] h-[164px]"
              src={periodic_landing}
              width={287}
              height={164}
              alt={"carshenasi image"}
            />
            <Image
              src={zarebin}
              className="absolute zarebin"
              width={124}
              height={128}
              alt={"zarebin icon"}
            />
          </div> */}
          <button
            className="bg-[#F66B34] rounded-md py-[10px] px-9 text-[#FEFEFE] w-fit text-xs mt-4 font-medium lg:hidden"
            onClick={() => {
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
        {/* <CommentsSlider /> */}
        <Opinion />
        <QuestionMark />
        <ToastContainer rtl={true} />
      </div>
    </div>
  );
};

export default PeriodicServiceIndex;
