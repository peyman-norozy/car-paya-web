"use client";

import SelectVehicleBox from "@/components/cards/SelectVehicleBox";
import React, { Fragment, useEffect, useRef, useState } from "react";
import arrow from "@/public/assets/icons/Arrow-Down.svg";
import Image from "next/image";
import BatteryCard from "@/components/cards/BatteryCard";
import PurchaseBatteryModal from "@/components/PurchaseBatteryModal";
import axios from "axios";
import Spinner from "../Spinner";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import { serviceData } from "@/staticData/data";
import useSetQuery from "@/hook/useSetQuery";
import { getData } from "@/utils/api-function-utils";

const BatteriesPage = (props) => {
  const query = useSetQuery();
  const [isClicked, setIsClicked] = useState(1);
  const [filterISOpen, setFilterIsOpen] = useState(false);
  const [batteryIsSelected, setBatteryIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("فیلتر بر اساس");
  const [selectedItem, setSelectedItem] = useState(null);
  const [step, setStep] = useState("car-brands");
  const [selectFilterData, setSelectFilterData] = useState([]);
  const filterRef = useRef(null);
  const setQuery = useSetQuery();
  const heightRef = useRef(null);
  const data = selectFilterData.length > 0 ? selectFilterData : props.data.data;
  const tabTitle = [
    { name: "خودرو" },
    { name: "موتور سیکلت" },
    { name: "وسیله من" },
  ];

  const filterData = [
    { name: "جدید ترین", value: "newest" },
    { name: "قدیمی ترین", value: "oldest" },
    { name: "پربازدید ترین", value: "views" },
  ];

  const selectFilterHandler = (event) => {
    console.log(event.target.innerHTML);
    setFilter(event.target.innerHTML);
    console.log(event.currentTarget.getAttribute("order_by"));
    setQuery.setQuery("order_by", event.currentTarget.getAttribute("order_by"));
  };

  const toggleFilterHandler = () => {
    setFilterIsOpen((prevState) => !prevState);
  };

  const closeFilterHandler = (event) => {
    console.log(event.target.offsetParent);
    console.log(filterRef.current);
    if (event.target.offsetParent !== filterRef.current) {
      setFilterIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeFilterHandler);
    return () => window.removeEventListener("click", closeFilterHandler);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.BASE_API + "/web" + "/batteries")
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  console.log(data);

  // useEffect(() => {
  //   console.log(props.searchParams);
  //   if (
  //     props.searchParams.selectTipState &&
  //     props.searchParams.selectTipState.split(",")[0] === "true"
  //   ) {
  //     setStep("car-models");
  //   } else {
  //     setStep("car-brands");
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log(props.searchParams.selectTipState);
  //   if (!props.searchParams.selectTipState) {
  //     query.setQuery("selectTipState", "car-brands");
  //   }
  // }, []);

  console.log(selectFilterData);
  console.log(props.searchParams);

  return (
    <Fragment>
      <div className="w-[95%] size671:w-[98%] size1090:w-[95%] m-auto flex flex-col size1056:flex-row gap-[1rem] size1275:gap-[3rem]">
        <div className="hidden size1000:block size720:w-[48%] size1136:w-[45%] size1000:pt-[9rem] size1056:pt-0 mt-[1rem] self-center size1056:self-auto">
          <SelectVehicleBox
            tabTitle={tabTitle}
            title="انتخاب وسیله نقلیه"
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
            setStep={setStep}
            searchParams={props.searchParams}
            step={step}
          />
        </div>
        <div className="pt-0 size1056:pt-[9rem] w-full mt-[1rem] flex flex-col gap-[1.5rem] relative">
          <div className="w-full absolute top-0 right-0  hidden size1000:flex flex-row-reverse items-center gap-[1rem]">
            <CarServicesSlider data={serviceData} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div
                ref={filterRef}
                onClick={toggleFilterHandler}
                className="bg-[#D9D9D9] rounded-[8px] py-[0.5rem] px-[1.5rem] flex items-center gap-[0.5rem] text-text_gray cursor-pointer relative"
              >
                <Image src={arrow} alt="" width={10} height={10} />
                <p className="text-12">{filter}</p>
                <ul
                  ref={heightRef}
                  className={`bg-[#D9D9D9] rounded-[8px] absolute  top-[2.2rem] right-0 left-0 text-12 overflow-hidden transition-all duration-1000`}
                  style={
                    filterISOpen
                      ? { height: `${heightRef.current.scrollHeight}px` }
                      : { height: 0 }
                  }
                >
                  {filterData.map((item, index) => (
                    <li
                      className="p-[0.5rem] w-full rounded-[8px] hover:bg-[#9d9d9d]"
                      key={index}
                      onClick={selectFilterHandler}
                      order_by={item.value}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <Button class_name="bg-[#D9D9D9] rounded-[8px] py-[0.5rem] px-[1.5rem] flex items-center gap-[0.5rem] text-text_gray">
              <Image src={compare} alt="" width={15} height={15} />
              <p className="text-12">مقایسه محصولات</p>
            </Button> */}
          </div>
          {isLoading ? (
            <div className={"flex justify-center items-center h-[100px]"}>
              <Spinner width={"w-[44px]"} height={"h-[44px]"} />
            </div>
          ) : (
            <ul className="flex flex-col gap-[1.5rem]">
              {data &&
                data.map((item, index) => (
                  <li key={index}>
                    <BatteryCard
                      setBatteryIsSelected={setBatteryIsSelected}
                      data={item}
                    />
                  </li>
                ))}
            </ul>
          )}
        </div>

        <div
          onClick={() => setBatteryIsSelected(false)}
          className={` w-full transition-all duration-500 ${batteryIsSelected ? "bg-[#000] opacity-[0.8] h-[100vh]" : "opacity-0 h-0"} fixed top-0 right-0 left-0 bottom-0 z-[9999]`}
        ></div>

        <div
          className={`w-[75%] size900:w-[50%] m-auto fixed transition-all duration-1000 ${batteryIsSelected ? "top-[50%]" : "top-[-50%]"} left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99999]`}
        >
          <PurchaseBatteryModal setBatteryIsSelected={setBatteryIsSelected} />
        </div>
      </div>
    </Fragment>
  );
};

export default BatteriesPage;
