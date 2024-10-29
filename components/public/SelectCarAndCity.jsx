"use client";
import React, { useEffect, useState } from "react";
import CarAndCityInput from "@/components/CarAndCityInput";
import { API_PATHS } from "@/configs/routes.config";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const SelectCarAndCity = (props) => {
  const [carSelectInputState, setCarSelectInputState] = useState(false);
  const [disabledInput, setDisabledInput] = useState(true);
  const carBrand = JSON.parse(localStorage.getItem("selectedVehicle"))?.brand;
  const carModel = JSON.parse(localStorage.getItem("selectedVehicle"))?.model;
  const carTitle = JSON.parse(localStorage.getItem("selectedVehicle"))?.title;
  const cityLabel = JSON.parse(localStorage.getItem("city"))?.label;

  const cityAsidHandler = () => {
    props.setAsideStatus("citySelection");
  };

  const carAndCityHandler = () => {
    props.setAsideStatus("carSelection");
    localStorage.removeItem("selectedVehicle");
  };

  useEffect(() => {
    if (cityLabel) {
      setDisabledInput(false);
    }
  }, []);

  return (
    <section
      className={
        "bg-[#FDFDFD] lg:w-[409px] w-full h-screen lg:h-[485px] lg:pt-6 lg:rounded-2xl sticky right-0 top-0 flex flex-col justify-between overflow-hidden gap-4 shadow-[0_0_6px_6px_rgba(125,125,125,0.2)] z-50"
      }
    >
      <div className="shadow-[0_2px_8px_0_rgba(148,148,148,0.25)] flex items-center justify-end h-14 px-4 lg:hidden">
        <i
          className="cc-add rotate-45 text-20 z-[10001]"
          onClick={() => {
            props.setModalClickState(false);
          }}
        />
      </div>
      <div className={"px-4 flex flex-col gap-4"}>
        <span>اطلاعات زیر را کامل کنید:</span>
        <CarAndCityInput
          placeHolder={"شهر خود را انتخاب کنید"}
          setAsideStatus={props.setAsideStatus}
          onClick={cityAsidHandler}
          inputStatus={"select_city"}
          value={cityLabel}
        />
        <CarAndCityInput
          placeHolder={"وسیله نقلیه خود را انتخاب کنید"}
          onClick={carAndCityHandler}
          disabled={disabledInput}
          inputStatus={"select_car"}
          setCarSelectInputState={setCarSelectInputState}
          value={carTitle ? `${carBrand} ${carModel} (${carTitle})` : ""}
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
            props.onClick();
          }}
          className={`w-[269px] h-[40px] ${carSelectInputState ? "bg-[#F66B34]" : "bg-[#F66B3433]"} text-[#FEFEFE] flex justify-center items-center font-medium rounded-[8px]`}
        >
          {props.buttonTitle}
        </button>
      </div>
    </section>
  );
};

export default SelectCarAndCity;
