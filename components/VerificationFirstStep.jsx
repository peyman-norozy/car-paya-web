import React, { Fragment, useEffect, useState } from "react";
import SelectProvinceAndCarBox from "./SelectProvinceAndCarBox";
import Image from "next/image";
import { serviceData } from "@/staticData/data";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import axios from "axios";
import useSetQuery from "@/hook/useSetQuery";
import CallAndConsult from "@/components/CallAndConsult";
import CostumerSatisfaction from "@/components/vehicle-verification/CostumerSatisfaction";
import FrequentQuestions from "@/components/vehicle-verification/FrequentQuestions";
import CustomersComment from "@/components/vehicle-verification/CustomersComment";
import { ToastContainer } from "react-toastify";
import carshenasi from "@/public/assets/images/carshenasi.png";
import zarebin from "@/public/assets/images/zarebin.png";
import lines from "@/public/assets/images/lines.png";
import { useRouter } from "next/navigation";
import { error } from "@/utils/function-utils";
import { useSelector } from "react-redux";
import CarAndCityContainer from "./public/CarAndCityContainer";

const VerificationFirstStep = (props) => {
  const { on_click, verificationData, setStep, step } = props;
  const [isClicked, setIsClicked] = useState(5);
  const [isSelected, setIsSelected] = useState(null);
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
      router.push(
        `/vehicle-verification/service-selection?city_id=${JSON.parse(localStorage.getItem("city")).cityId}&vehicle_tip=${JSON.parse(localStorage.getItem("selectedVehicle")).id}&step=step-1`
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
    <div className="lg:flex items-start gap-8 mt-1 lg:mt-10 max-w-[1772px] m-auto pb-4 relative">
      <div
        className={"w-full lg:w-[calc(100%-424px)] mr-auto gap-8 flex flex-col"}
      >
        <div className="sm:rounded-3xl flex p-4 flex-col items-center bg-[#EBF5FF] lg:h-[500px] lg:p-10 xl:p-16 lg:gap-16">
          <div className="flex flex-col gap-2 items-start self-start lg:gap-11">
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
            />
            <Image
              src={zarebin}
              className="absolute zarebin"
              width={124}
              height={128}
            />
          </div>
          <button
            className="bg-[#F66B34] rounded-md py-2 px-1 text-[#FEFEFE] w-fit text-xs mt-4 font-medium lg:hidden"
            onClick={() => {
              setModalClickState(true);
            }}
            // onClick={PackageStepHandler}
          >
            {vehicleVerificationBasket.length ? "ادامه " : ""}درخواست کارشناسی
          </button>
        </div>
        <div className="relative overflow-hidden">
          <div className="w-[210px] flex flex-col items-center bg-white gap-5 py-5 px-6 m-auto relative z-[2] shadow-[0_0_4px_0_rgba(171,171,171,0.25)]">
            <span className="text-[#000000] text-sm font-medium">
              مشاور و ثبت درخواست تلفنی
            </span>
            <button className="border border-[#F58052] text-[#F58052] justify-center items-center flex gap-1 py-[6px] px-6 rounded-md font-medium">
              <p>58919</p>
              <i className={"cc-calling"} />
            </button>
          </div>
          <Image
            className="-top-5 absolute w-full h-[180px]"
            src={lines}
            width={430}
            height={179}
          />
        </div>
        <div className="flex flex-col items-center gap-3 text-[#000000]">
          <h2 className="font-bold">چرا کار پایا !</h2>
          <div className="grid grid-cols-2 gap-4 w-full px-4">
            <div className="w-full h-20 flex flex-col gap-2 bg-[#ffffff] shadow-[0_0_4px_0_rgba(204,204,204,0.25)] rounded-lg">
              <div className="flex justify-between items-center p-2">
                <span className="font-medium text-xs">محل کارشناسی</span>
                <span className="bg-slate-400 size-4"></span>
              </div>
              <span className="text-[#6D6D6D] text-xs text-center">
                انجام کارشناسی در مکان و زمان انتخابی شما
              </span>
            </div>
            <div className="w-full h-20 flex flex-col gap-2 bg-[#ffffff] shadow-[0_0_4px_0_rgba(204,204,204,0.25)] rounded-lg">
              <div className="flex justify-between items-center p-2">
                <span className="font-medium text-xs">محل کارشناسی</span>
                <span className="bg-slate-400 size-4"></span>
              </div>
              <span className="text-[#6D6D6D] text-xs text-center">
                انجام کارشناسی در مکان و زمان انتخابی شما
              </span>
            </div>
            <div className="w-full h-20 flex flex-col gap-2 bg-[#ffffff] shadow-[0_0_4px_0_rgba(204,204,204,0.25)] rounded-lg">
              <div className="flex justify-between items-center p-2">
                <span className="font-medium text-xs">محل کارشناسی</span>
                <span className="bg-slate-400 size-4"></span>
              </div>
              <span className="text-[#6D6D6D] text-xs text-center">
                انجام کارشناسی در مکان و زمان انتخابی شما
              </span>
            </div>
            <div className="w-full h-20 flex flex-col gap-2 bg-[#ffffff] shadow-[0_0_4px_0_rgba(204,204,204,0.25)] rounded-lg">
              <div className="flex justify-between items-center p-2">
                <span className="font-medium text-xs">محل کارشناسی</span>
                <span className="bg-slate-400 size-4"></span>
              </div>
              <span className="text-[#6D6D6D] text-xs text-center">
                انجام کارشناسی در مکان و زمان انتخابی شما
              </span>
            </div>
          </div>
        </div>
        {/* <CallAndConsult />
        <CostumerSatisfaction />
        <FrequentQuestions /> */}
        <ToastContainer rtl={true} />
        <CarAndCityContainer
          title={"ثبت درخواست کارشناسی"}
          onClick={PackageStepHandler}
          setModalClickState={setModalClickState}
          modalClickState={modalClickState}
        />
      </div>
    </div>
  );
};

export default VerificationFirstStep;
