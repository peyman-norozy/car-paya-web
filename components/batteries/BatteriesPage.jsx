"use client";

import React, { useEffect, useRef, useState } from "react";
import PurchaseBatteryModal from "@/components/PurchaseBatteryModal";
import useSetQuery from "@/hook/useSetQuery";
import SubFilterCard from "@/components/cards/SubFilterCard";
import { ToastContainer } from "react-toastify";
import BatteriesCard from "@/components/cards/BatteriesCard/BatteriesCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCityModalState } from "@/store/todoSlice";
import Link from "next/link";
import nProgress from "nprogress";

const BatteriesPage = (props) => {
  const query = useSetQuery();
  const [filterISOpen, setFilterIsOpen] = useState(false);
  const [batteryIsSelected, setBatteryIsSelected] = useState(false);
  const [filter, setFilter] = useState("فیلتر بر اساس");
  const [topDistance, setTopDistance] = useState(0);
  const [filterModalState, setFilterModalState] = useState(false);
  const [filterId, setFilterId] = useState("");
  const dispatch = useDispatch();
  const filterRef = useRef(null);
  const subFilterRef = useRef();
  const router = useRouter();
  const heightRef = useRef(null);
  const searchParams = useSearchParams();

  const filterData = [
    { name: "آمپر", value: "getAmp" },
    { name: "برند", value: "brand" },
  ];

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

  const filterMouseEnter = (event) => {
    const rect = event.target.getBoundingClientRect();
    setFilterModalState(true);
    setTopDistance(rect.top);
    console.log(event.target.id);
    setFilterId(event.target.id);
  };

  const filterMouseLeave = (event) => {
    console.log(event.relatedTarget.id);
    console.log(subFilterRef.current);

    if (event.relatedTarget.id !== "sub_filter") {
      setFilterModalState(false);
    } else {
      setFilterModalState(true);
    }
  };

  const subFilterMouseEnter = () => {
    console.log(subFilterRef.current);
  };

  const subFilterMouseLeave = () => {
    setFilterModalState(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeFilterHandler);
    return () => window.removeEventListener("click", closeFilterHandler);
  }, []);

  useEffect(() => {
    if (searchParams.get("attribute_slug") === undefined) {
      query.setMultiQuery([
        { key: "attribute_slug", value: "type_vehicle" },
        { key: "attribute_value", value: "car" },
      ]);
    }
  }, []);

  useEffect(() => {
    if (
      !JSON.parse(localStorage.getItem("city")) &&
      !JSON.parse(localStorage.getItem("city"))?.cityId
    ) {
      dispatch(setCityModalState(true));
      nProgress.start();
      router.push("/batteries");
    }
  }, [dispatch, router, searchParams]);

  return (
    <div className={"flex flex-col relative py-4 max-w-[1772px] m-auto"}>
      <section
        className={"lg:w-[calc(100%-424px)] w-full mr-auto lg:mt-16 mt-[20px]"}
      >
        <div className="flex items-center justify-between">
          <div
            ref={filterRef}
            onClick={toggleFilterHandler}
            className="bg-[#5D697A] rounded-[8px] py-[0.5rem] px-[1.5rem] flex items-center gap-[0.5rem] text-white cursor-pointer relative font-semibold"
          >
            <i className={"cc-arrow-down text-[20px]"} />
            <p className="text-12">{filter}</p>
            <ul
              ref={heightRef}
              className={`bg-[#5D697A] rounded-[8px] absolute  top-[2.2rem] right-0 left-0 text-12 overflow-hidden transition-all duration-500 z-[2]`}
              style={
                filterISOpen
                  ? { height: `${heightRef.current.scrollHeight}px` }
                  : { height: 0 }
              }
            >
              {filterData.map((item, index) => (
                <li
                  className="p-[0.5rem] w-full rounded-[8px]  hover:bg-[#a7a7a7] flex items-center justify-between z-[2]"
                  key={index}
                  onMouseEnter={filterMouseEnter}
                  onMouseLeave={filterMouseLeave}
                  order_by={item.value}
                  id={item.value}
                >
                  <span>{item.name}</span>
                  <i className={"cc-left text-[20px]"} />
                </li>
              ))}
            </ul>
            {filterModalState && (
              <div
                className={
                  "bg-[#5D697A] rounded-[8px] absolute right-[137px] pr-1 text-12 overflow-hidden transition-all duration-1000 w-[137px] z-[2]"
                }
                ref={subFilterRef}
                id={"sub_filter"}
                onMouseEnter={subFilterMouseEnter}
                onMouseLeave={subFilterMouseLeave}
                style={{
                  top: topDistance === 0 ? "0" : topDistance - 145 + "px",
                }}
              >
                <ul className={`bg-[#5D697A] h-[250px] overflow-y-scroll`}>
                  {props.data.filter[filterId]?.map((item) => (
                    <SubFilterCard
                      key={item.value}
                      setFilter={setFilter}
                      filterId={filterId}
                      item={item}
                      setFilterModalState={setFilterModalState}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link
            href={`/batteries/battery-assistant?selectTipState=${searchParams.get("selectTipState")}`}
            className={
              "bg-[#5D697A] text-12 text-white w-[146px] h-[36px] rounded-[8px] font-semibold animate-bounce flex justify-center items-center"
            }
          >
            دستیار باتری
          </Link>
        </div>
        <ul className={"mt-4 flex flex-col gap-[24px]"}>
          {props.data?.data?.map((item, index) => (
            <BatteriesCard
              key={index}
              item={item}
              setBatteryIsSelected={setBatteryIsSelected}
            />
          ))}
        </ul>
      </section>
      <div
        className={`${!batteryIsSelected ? "hidden" : "fixed"} inset-0 h-full w-full bg-[#4c4c4caa] z-[20000] transition-all`}
        onClick={() => setBatteryIsSelected(false)}
      ></div>
      <div
        className={`w-[75%] size900:w-[50%] m-auto fixed transition-all duration-1000 ${batteryIsSelected ? "top-[50%]" : "top-[-60%]"} left-[50%] translate-x-[-50%] translate-y-[-50%] z-[20000]`}
      >
        <PurchaseBatteryModal
          setBatteryIsSelected={setBatteryIsSelected}
          batteryIsSelected={batteryIsSelected}
        />
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
};

export default BatteriesPage;
