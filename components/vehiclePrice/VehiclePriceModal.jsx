"use client";
import React, { useEffect, useState } from "react";
import CarAndCityInput from "@/components/CarAndCityInput";
import { API_PATHS } from "@/configs/routes.config";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { functions } from "lodash";

const VehiclePriceModal = (props) => {
  const [carSelectInputState, setCarSelectInputState] = useState(false);
  const [disabledInput, setDisabledInput] = useState(true);
  const [validation, setValidation] = useState([]);

  const carBrand = JSON.parse(localStorage.getItem("selectedVehicle"))?.brand;
  const carModel = JSON.parse(localStorage.getItem("selectedVehicle"))?.model;
  const carTitle = JSON.parse(localStorage.getItem("selectedVehicle"))?.title;
  const cityLabel = JSON.parse(localStorage.getItem("city"))?.label;

  const carAndCityHandler = () => {
    props.setAsideStatus("carSelection");
    localStorage.removeItem("selectedVehicle");
  };

  useEffect(() => {
    if (cityLabel) {
      setDisabledInput(false);
    }
  }, []);

  function inputChangeHandler(e) {
    props.setCarData({ ...props.carData, [e.target.id]: e.target.value });
  }

  function onClick() {
    let array = [];
    [, "color", "operation", "year"].map((item) => {
      props.carData[item] ? "" : array.push(item);
    });
    setValidation(array);
    if (array.length === 0) {
      props.setDispaly(true);
    }
  }

  return (
    <section
      className={
        "bg-[#FDFDFD] lg:w-[409px] w-full h-[550px] lg:h-[600px] pt-4 lg:pt-6 rounded-xl lg:rounded-2xl sticky right-2 top-32 flex flex-col justify-between overflow-hidden gap-4 shadow-[0_0_6px_6px_rgba(125,125,125,0.2)] z-50 "
      }
    >
      <div className={"px-4 flex flex-col gap-4"}>
        <span>برای تخمین قیمت خودرو اطلاعات زیر را کامل کنید</span>
        {/* <CarAndCityInput
          placeHolder={"شهر خود را انتخاب کنید"}
          setAsideStatus={props.setAsideStatus}
          onClick={cityAsidHandler}
          inputStatus={"select_city"}
          value={cityLabel}
          /> */}
        <CarAndCityInput
          placeHolder={"وسیله نقلیه خود را انتخاب کنید"}
          onClick={carAndCityHandler}
          disabled={disabledInput}
          inputStatus={"select_car"}
          setCarSelectInputState={setCarSelectInputState}
          value={carTitle ? `${carBrand} ${carModel} (${carTitle})` : ""}
        />
        <div className={"relative"}>
          <select
            className={`${validation.includes("year") ? "border-red-500" : "border-[#B0B0B0]"} outline-none border appearance-none bg-[#fdfdfd] border-[#B0B0B0] rounded-8 flex justify-between h-[48px] w-full text-14 pr-2 caret-transparent text-[#757575]"`}
            id="year"
            onChange={inputChangeHandler}
          >
            <option value={null}>سال ساخت خودرو</option>
            <option value={"2024"}>2024</option>
            <option value={"2023"}>2023</option>
            <option value={"2022"}>2022</option>
            <option value={"2021"}>2021</option>
            <option value={"2020"}>2020</option>
            <option value={"2019"}>2019</option>
            <option value={"2018"}>2018</option>
            <option value={"2017"}>2017</option>
            <option value={"2016"}>2016</option>
            <option value={"2015"}>2015</option>
            {/* <option value={"2014"}>2014</option>
            <option value={"2013"}>2013</option>
            <option value={"2012"}>2012</option>
            <option value={"2011"}>2011</option>
            <option value={"2010"}>2010</option>
            <option value={"2009"}>2009</option>
            <option value={"2008"}>2008</option>
            <option value={"2007"}>2007</option>
            <option value={"2006"}>2006</option>
            <option value={"2005"}>2005</option>
            <option value={"2004"}>2004</option>
            <option value={"2003"}>2003</option>
            <option value={"2002"}>2002</option>
            <option value={"2001"}>2001</option>
            <option value={"2000"}>2000</option> */}
          </select>
          <i
            className={
              "cc-arrow-down text-24 absolute top-3 left-2 text-[#858585]"
            }
          />
        </div>
        <div className={"relative"}>
          <select
            className={`${validation.includes("color") ? "border-red-500" : "border-[#B0B0B0]"} outline-none border appearance-none bg-[#fdfdfd] border-[#B0B0B0] rounded-8 flex justify-between h-[48px] w-full text-14 pr-2 caret-transparent text-[#757575]`}
            id="color"
            onChange={inputChangeHandler}
          >
            <option value={null}>رنگ خودرو</option>
            <option value={"سفید"}>سفید</option>
            <option value={"مشکی"}>مشکی</option>
            <option value={"نوک مدادی"}>نوک مدادی</option>
            <option value={"خاکستری"}>خاکستری</option>
            <option value={"قرمز"}>قرمز</option>
            <option value={"ابی"}>آبی</option>
            <option value={"سبز"}>سبز</option>
            <option value={"زرد"}>زرد</option>
          </select>
          <i
            className={
              "cc-arrow-down text-24 absolute top-3 left-2 text-[#858585]"
            }
          />
        </div>
        <input
          className={`${validation.includes("operation") ? "border-red-500" : "border-[#B0B0B0]"} outline-none border bg-[#fdfdfd] border-[#B0B0B0] rounded-8 flex justify-between h-[48px] w-full text-14 pr-2 text-[#757575]`}
          placeholder="کیلومتر خودرو"
          id="operation"
          onChange={inputChangeHandler}
        />
      </div>
      {JSON.parse(localStorage.getItem("selectedVehicle"))?.image ? (
        <div className={"w-full h-[150px]"}>
          <Image
            src={
              process.env.BASE_API +
              "/web" +
              API_PATHS.FILE +
              "/" +
              JSON.parse(localStorage.getItem("selectedVehicle"))?.image
            }
            width={200}
            height={150}
            className="lg:w-[60%] aspect-auto mx-auto"
          />
        </div>
      ) : (
        <Image
          src={"/assets/icons/Doorstep-Pick-up.png"}
          width={120}
          height={120}
          className="aspect-auto mx-auto"
        />
      )}
      <div
        className={
          "shadow-[0_0_6px_0_rgba(125,125,125,0.5)] flex justify-center py-[11px] rounded-t-[16px]"
        }
      >
        <button
          onClick={() => {
            props.setToastieDisplay((prev) => !prev);
            props.setPreventFirstRender(true);
            onClick();
          }}
          className={`w-[269px] h-[40px] ${carSelectInputState ? "bg-[#F66B34]" : "bg-[#F66B3433]"} text-[#FEFEFE] flex justify-center items-center font-medium rounded-[8px]`}
        >
          تکمیل اطلاعات
        </button>
      </div>
    </section>
  );
};

export default VehiclePriceModal;
