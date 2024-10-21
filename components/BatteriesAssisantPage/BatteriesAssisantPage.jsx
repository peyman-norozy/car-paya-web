"use client";
import React, { useEffect, useState } from "react";
import { error, numberWithCommas } from "@/utils/function-utils";
import Button from "@/components/Button";
import { setBatteriesData } from "@/store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import PurchaseBatteryModal from "@/components/PurchaseBatteryModal";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import GreenCheckInput from "@/components/GreenCheckInput";

const BatteriesAssisantPage = (props) => {
  const batteryBasketLength = useSelector(
    (item) => item.todo.batteriesBasketLength,
  );
  const [batteryIsSelected, setBatteryIsSelected] = useState(false);
  const [batteryProductId, setBatteryProductId] = useState(null);
  const [filterButtery, setFilterButtery] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  //when refresh page my batteryTotalPrice remove from localStorage
  useEffect(() => {
    console.log(batteryBasketLength);
    if (batteryBasketLength === 0) {
      localStorage.removeItem("batteryTotalPrice");
    }
  }, [batteryBasketLength]);

  const basketClickHandler = () => {
    const CityId = JSON.parse(localStorage.getItem("city"))?.cityId;
    const selectedVehicleId = JSON.parse(
      localStorage.getItem("selectedVehicle"),
    )?.id;
    if (Object.keys(filterButtery).length > 0) {
      if (batteryBasketLength) {
        error("فقط یک محصول میتوانید به سبد خرید خود اضافه کنید");
      } else if (
        batteryBasketLength &&
        batteryProductId ===
          JSON.parse(localStorage.getItem("batteryTotalPrice"))?.productId
      ) {
        error("باتری برای این وسیله نقلیه انتخاب شده است");
      } else if (CityId && selectedVehicleId) {
        setBatteryIsSelected(true);
        dispatch(setBatteriesData(filterButtery));
      } else if (!CityId) {
        error("فیلد شهر و استان را انتخاب نشده");
      } else if (!selectedVehicleId) {
        error("لطفا خودرو خود را انتخاب کنید");
      }
    } else {
      error("باتری خود را انتخاب کنید");
    }
  };

  const radioButtonChangeHandler = (id) => {
    console.log(id);
    setBatteryProductId(id);
    const singleButtery = props.data.data.filter((item) => item.id === id);
    console.log(singleButtery);
    setFilterButtery(...singleButtery);
  };

  const selectOptionHandler = (index, id) => {
    setIsSelected(index);
    setBatteryProductId(id);
    const singleButtery = props.data.data.filter((item) => item.id === id);
    setFilterButtery(...singleButtery);
  };

  console.log(filterButtery);

  return (
    <div
      className={
        "flex flex-col relative py-4 max-w-[1772px] lg:w-[calc(100%-424px)] mr-auto bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] lg:px-6 rounded-2xl min-h-[605px] mb-4 lg:mt-7"
      }
    >
      <section className={"w-full mr-auto"}>
        <Link
          href={`/services/batteries/products?attribute_slug=type_vehicle&attribute_value=${searchParams.get("attribute_value")}&selectTipState=${searchParams.get("selectTipState")}`}
          className={
            "flex items-center gap-2 size752:gap-[16px] text-[#0E0E0E] w-full"
          }
        >
          <i className={"cc-arrow-right text-24 cursor-pointer"} />
          <span className={"text-14 size752:text-16 w-full font-medium"}>
            دستیار باتری
          </span>
        </Link>
        <ul
          className={
            "sticky top-[70px] flex bg-white w-full text-[#3C3C3C] text-12 sm:text-14 font-bold shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-2 rounded-[8px] mt-4 z-50"
          }
        >
          <li className="flex-1 border-l border-l-[#CECECE] py-2 sm:px-2 bg-white flex justify-center items-center">
            نام باتری
          </li>
          <li className="lg:flex-1 sm:w-[150px] w-[90px] border-l border-l-[#CECECE] py-2 sm:px-2 bg-white flex justify-center items-center">
            آمپر
          </li>
          <li className="lg:flex-1 sm:w-[150px] w-[90px] border-l border-l-[#CECECE] py-2 sm:px-2 bg-white flex justify-center items-center">
            گارانتی (ماه)
          </li>
          <li className="flex-1 py-2 sm:p-2 bg-white text-center">
            قیمت باتری (تومان)
          </li>
        </ul>
        <div className={"flex flex-col mt-4 gap-4"}>
          {props.data.data.map((item, index) => (
            <ul
              key={item.id}
              className={
                "flex bg-white w-full text-[#3C3C3C] sm:text-14 text-12 font-medium shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 rounded-[8px]"
              }
            >
              <li
                className={
                  "flex-1 border-l border-l-[#CECECE] p-2 bg-white relative flex justify-start items-center"
                }
              >
                <div className={"flex justify-start gap-1 w-full"}>
                  <div className="checkbox-wrapper-37 flex justify-center items-center h-full">
                    <GreenCheckInput
                      isSelected={isSelected === index}
                      on_click={() => selectOptionHandler(index, item.id)}
                      class_name="rounded-[50%] cursor-pointer self-start"
                    />
                  </div>
                  <span onClick={() => selectOptionHandler(index, item.id)}>
                    {item.name}
                  </span>
                </div>
              </li>
              <li className="lg:flex-1 sm:w-[150px] w-[90px] border-l border-l-[#CECECE] sm:p-2 bg-white flex justify-center items-center">
                {item.amp}
              </li>
              <li className="lg:flex-1 sm:w-[150px] w-[90px] border-l border-l-[#CECECE] sm:p-2 bg-white flex justify-center items-center">
                Male
              </li>
              <li className="flex-1 sm:p-2 bg-white flex flex-col justify-center items-center gap-1">
                <span className="flex items-center gap-[0.25rem] line-through text-center text-[#B4BCC5] ">
                  {numberWithCommas(item.price)}
                </span>
                <span>{numberWithCommas(item["discounted_price"])}</span>
              </li>
            </ul>
          ))}
        </div>
      </section>
      <Button
        on_click={basketClickHandler}
        disabled_btn={isSelected === false}
        class_name={`${isSelected === false ? "bg-[#ecb8a3]" : "bg-[#F66B34]"} text-white h-[40px] lg:text-[16px] text-12 self-end rounded-[8px] size1400:w-[160px] w-[120px] mt-4`}
      >
        تایید و ادامه
      </Button>

      <PurchaseBatteryModal
        setBatteryIsSelected={setBatteryIsSelected}
        batteryIsSelected={batteryIsSelected}
      />
      <ToastContainer rtl={true} />
    </div>
  );
};

export default BatteriesAssisantPage;
