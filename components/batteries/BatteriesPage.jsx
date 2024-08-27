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
  const [batteryIsSelected, setBatteryIsSelected] = useState(false);
  const [filterModalState, setFilterModalState] = useState(false);
  const [filterId, setFilterId] = useState("");
  const dispatch = useDispatch();
  const filterRef = useRef(null);
  const router = useRouter();
  const filterTitleRef = useRef(null);
  const searchParams = useSearchParams();

  const filterData = [
    { name: "آمپر", value: "getAmp" },
    { name: "برند", value: "brand" },
  ];

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

  const filterClickHandler = (event, id) => {
    setFilterModalState(true);
    setFilterId(id);
  };

  const closeFilterHandler = (event) => {
    if (!event.target.offsetParent?.classList.contains("filterModal")) {
      setFilterModalState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeFilterHandler);
    return () => window.removeEventListener("click", closeFilterHandler);
  }, []);

  return (
    <div className={"flex flex-col relative py-4 max-w-[1772px] m-auto"}>
      <section
        className={"lg:w-[calc(100%-424px)] w-full mr-auto lg:mt-16 mt-[20px]"}
      >
        <div className="flex items-center justify-between">
          <div className={"flex items-center gap-4 relative filterModal"}>
            <div className={"flex items-center gap-4"}>
              {filterData.map((item, index) => (
                <div
                  ref={filterTitleRef}
                  className="bg-[#5D697A] rounded-[8px] py-[0.5rem] px-[1.5rem] flex items-center gap-[0.5rem] text-white cursor-pointer relative font-semibold filterModal"
                  key={index}
                  onClick={(event) => filterClickHandler(event, item.value)}
                  order_by={item.value}
                  id={item.value}
                >
                  <i className={"cc-arrow-down text-[20px]"} />
                  <p className="text-14">{item.name}</p>
                </div>
              ))}
            </div>
            <ul
              ref={filterRef}
              className={`bg-[#5D697A] overflow-y-scroll  absolute top-10 rounded-[8px] z-[100] text-12 text-white transition-all duration-500 ${filterModalState ? "h-[250px] p-2" : "h-0 p-0"} ${filterId ? "block" : "hidden"} ${filterId === "brand" ? "mr-[117px]" : ""}`}
            >
              {props.data.filter[filterId]?.map((item, index) => (
                <SubFilterCard
                  key={item.value}
                  filterId={filterId}
                  item={item}
                  index={index}
                  setFilterModalState={setFilterModalState}
                />
              ))}
            </ul>
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
      <PurchaseBatteryModal
        setBatteryIsSelected={setBatteryIsSelected}
        batteryIsSelected={batteryIsSelected}
      />
      <ToastContainer rtl={true} />
    </div>
  );
};

export default BatteriesPage;
