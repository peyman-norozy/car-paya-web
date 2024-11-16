"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import useSetQuery from "@/hook/useSetQuery";

import { ToastContainer } from "react-toastify";
import carshenasi from "@/public/assets/images/carshenasi.png";
import zarebin from "@/public/assets/images/zarebin.png";
import { useRouter } from "next/navigation";
import { error } from "@/utils/function-utils";
import { useSelector } from "react-redux";
import CarAndCityContainer from "@/components/public/CarAndCityContainer";
import nProgress from "nprogress";
import Counseling from "@/components/Counseling";
import BachelorSteps from "@/components/BachelorSteps";
import WhyInspection from "@/components/WhyInspection";
import InLocation from "@/components/InLocation";
import InspectionCondition from "@/components/InspectionCondition";
import InspectionPackage from "@/components/InspectionPackage";
import Opinion from "@/components/Opinion";
import QuestionMark from "@/components/QuestionMark";
const VehicleInspection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [city_id, setCity_id] = useState();
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalClickState, setModalClickState] = useState(false);
  const vehicleVerificationBasket = useSelector(
    (state) => state.todo.vehicleVerificationBasketLength
  );
  const router = useRouter();
  const setQuery = useSetQuery();
  const cityName = [{ name: "تهران" }];
  const tabTitle = [
    { name: "خودرو" },
    { name: "موتور سیکلت" },
    { name: "وسیله من" },
  ];

  const PackageStepHandler = () => {
    if (!localStorage.getItem("selectedVehicle")) {
      error("ابتدا وسیله نقلیه را انتخاب کنید");
    }
    if (!localStorage.getItem("city")) {
      error("ابتدا شهر خود را انتخاب کنید");
    }
    if (
      localStorage.getItem("city") &&
      localStorage.getItem("selectedVehicle")
    ) {
      // setQuery.setMultiQuery([
      //   {
      //     key: "city_id",
      //     value: JSON.parse(localStorage.getItem("city")).cityId,
      //   },
      //   {
      //     key: "vehicle_tip",
      //     value: JSON.parse(localStorage.getItem("selectedVehicle")).id,
      //   },
      //   { key: "step", value: "step-1" },
      // ]);
      // setStep(2);
      nProgress.start();
      router.push(
        `/services/vehicle-inspection/service-selection?city_id=${JSON.parse(localStorage.getItem("city")).cityId}&vehicle_tip=${JSON.parse(localStorage.getItem("selectedVehicle")).id}&step=step-1`
      );
    }
    // setModalIsOpen(true);
    // router.push(
    //   `/periodic-service/location-selection?city_id=${localStorage.getItem("city").cityId}&vehicle_tip=${localStorage.getItem("selectedVehicle").id}`,
    // );
  };

  useEffect(() => {
    const city = city_id === undefined ? "" : "&city_id=" + city_id;
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
        setMessage(err.response.data.message);
        console.log(err);
      });
  }, [selectedItem, city_id]);

  const active = data.length > 0;
  return (
    <div className={"relative"}>
      <CarAndCityContainer
        title={"ثبت درخواست کارشناسی"}
        onClick={PackageStepHandler}
        setModalClickState={setModalClickState}
        modalClickState={modalClickState}
      />
      <div className="sm:rounded-3xl flex p-4 flex-col items-center bg-[#EBF5FF] lg:h-[500px] lg:p-10 xl:p-16 lg:gap-16 mt-[25px]">
        <div className="flex flex-col gap-2 items-start self-center lg:gap-11">
          <h1 className="text-lg lg:text-2xl font-medium lg:font-bold text-[#000000]">
            کارشناسی وسیله نقلیه
          </h1>
          <p className="text-sm lg:text-2xl text-[#000000] font-medium lg:font-bold">
            کارشناسی مطمئن با تیم کار پایا
          </p>
        </div>
        <div className="relative self-end lg:scale-125 xl:scale-150">
          <Image
            className="w-[287px] h-[164px]"
            src={carshenasi}
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
        </div>
        <button
          className="bg-[#F66B34] rounded-md py-2 px-1 text-[#FEFEFE] w-fit text-xs mt-4 font-medium lg:hidden"
          onClick={() => {
            setModalClickState(true);
          }}
        >
          {vehicleVerificationBasket.length ? "ادامه " : ""}درخواست کارشناسی
        </button>
      </div>
      <div className={"max-w-[1294px] mx-auto gap-8 flex flex-col"}>
        <BachelorSteps />
        <WhyInspection />
        <Counseling />
        <InLocation />
        <InspectionCondition />
        <InspectionPackage />
        <Opinion />
        <QuestionMark />

        {/* <CallAndConsult />
        <CostumerSatisfaction />
        <FrequentQuestions /> */}
        <ToastContainer rtl={true} />
      </div>
    </div>
  );
};

export default VehicleInspection;
