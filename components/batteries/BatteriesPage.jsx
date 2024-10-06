"use client";

import React, { useEffect, useRef, useState } from "react";
import PurchaseBatteryModal from "@/components/PurchaseBatteryModal";
import useSetQuery from "@/hook/useSetQuery";
import SubFilterCard from "@/components/cards/SubFilterCard";
import { ToastContainer } from "react-toastify";
import BatteriesCard from "@/components/cards/BatteriesCard/BatteriesCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCityModalState } from "@/store/todoSlice";
import Link from "next/link";
import nProgress from "nprogress";
import BatteriesFilterModal from "@/components/BatteriesFilterModal/BatteriesFilterModal";
import FilterAndSelectedCar from "@/components/FilterAndSelectedCar/FilterAndSelectedCar";

const BatteriesPage = (props) => {
  const query = useSetQuery();
  const [batteriesData, setBatteriesData] = useState([]);
  const [batteryIsSelected, setBatteryIsSelected] = useState(false);
  const [filterModalState, setFilterModalState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [filterId, setFilterId] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const batteryBasketLength = useSelector(
    (item) => item.todo.batteriesBasketLength,
  );
  const innerWidth = useSelector((item) => item.todo.windowInnerWidth);
  const attributeSlug = searchParams.get("attribute_slug");
  const attributeValue = searchParams.get("attribute_value");
  const selectTipState = searchParams.get("selectTipState");
  let page = useRef(1);

  console.log(props);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  //when refresh page my batteryTotalPrice remove from localStorage
  useEffect(() => {
    if (batteryBasketLength === 0) {
      localStorage.removeItem("batteryTotalPrice");
    }
  }, [batteryBasketLength]);

  const filterData = [
    { name: "آمپر", value: "getAmp" },
    { name: "برند", value: "brand" },
    { name: "گارانتی", value: "warranty" },
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

  useEffect(() => {
    const handleScroll = () => {
      // محاسبه اینکه آیا به انتهای صفحه رسیده‌ایم یا نه
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight) {
        setIsAtBottom(true);
        console.log("شما به انتهای صفحه رسیده‌اید!");
        page.current = page.current + 1;
        if (props.data?.meta["last_page"] >= page.current) {
          query.updateQueryParams({ page: page.current }, null, false);
        }
      } else {
        setIsAtBottom(false);
      }
    };

    // اضافه کردن event listener برای اسکرول
    window.addEventListener("scroll", handleScroll);

    // پاکسازی event listener هنگام unmount شدن کامپوننت
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeFilterHandler = (event) => {
    if (!event.target.offsetParent?.classList.contains("filterModal")) {
      setFilterModalState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeFilterHandler);
    return () => window.removeEventListener("click", closeFilterHandler);
  }, []);

  useEffect(() => {
    setBatteriesData((prev) => [...prev, ...props.data?.data]);
  }, [props.searchParams.page]);

  useEffect(() => {
    if (isMounted) {
      setBatteriesData(props.data?.data);
    }
  }, [props.searchParams.amp]);

  const closeModal = () => {
    setModalState(false);
  };

  const openModal = () => {
    setModalState(true);
  };

  return (
    <div className={"relative"}>
      <FilterAndSelectedCar options={props.data.filter} page={page} />
      <div
        className={
          "flex flex-col relative py-4 max-w-[1772px] lg:w-[calc(100%-424px)] mr-auto bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] lg:p-6 rounded-2xl min-h-[605px] mb-4 lg:mt-7"
        }
      >
        <div
          className={
            "flex items-center gap-2 size752:gap-[16px] text-[#0E0E0E] w-full"
          }
        >
          <i
            className={"cc-arrow-right text-24 cursor-pointer"}
            onClick={() =>
              router.push(
                `/batteries?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&selectTipState=${selectTipState}`,
              )
            }
          />
          <p className={"text-14 size752:text-16 w-full font-medium"}>
            انتخاب باتری
          </p>
        </div>
        <section className={"w-full mr-auto lg:mt-4"}>
          <div
            className={
              "flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1] shadow-[0_0_4px_0_rgba(152,152,152,0.4)] lg:py-2 py-1 rounded-[16px] px-2 my-4"
            }
          >
            <i
              className="cc-car-o text-2xl text-[#1E67BF]"
              onClick={() =>
                router.push(
                  `/batteries?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&selectTipState=${selectTipState}`,
                )
              }
            />
            <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
            <i className="cc-search text-2xl" />
            <div className="border-b-4 border-dotted w-full"></div>
            <i className="cc-location text-2xl text-[#D1D1D1]" />
            <div className="border-b-4 border-dotted border-[#D1D1D1] w-full"></div>
            <i className="cc-timer text-2xl text-[#D1D1D1]" />
          </div>
          <div className="flex items-center justify-between lg:justify-end">
            <div
              className={
                "flex items-center gap-4 relative filterModal lg:hidden h-[40px]"
              }
            >
              <div className={"h-full"}>
                <button
                  className={
                    "shadow-lg rounded-[8px] bg-[#FBFBFB] w-[116px] h-full text-right flex items-center justify-center gap-2"
                  }
                  onClick={openModal}
                >
                  <i className={"cc-filter text-18"} />
                  <span className={"text-12 font-medium"}>فیلتر</span>
                </button>
                <BatteriesFilterModal
                  isOpen={modalState}
                  onClose={closeModal}
                  options={props.data.filter}
                  selectInputSlug={props.data.filter[filterId]}
                />
              </div>
            </div>
            <div className={"shadow-lg rounded-[11px] bg-[#FBFBFB]"}>
              <div className="relative z-10 flex cursor-pointer items-center overflow-hidden rounded-xl p-[3px] w-fit">
                <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#F66B34_20deg,transparent_120deg)]"></div>
                <Link
                  href={`/batteries/battery-assistant?selectTipState=${searchParams.get("selectTipState")}`}
                  className={
                    "relative z-20 p-2 bg-white text-12 text-[#3C3C3C] w-[146px] h-[36px] rounded-[8px] font-semibold flex justify-center items-center"
                  }
                >
                  دستیار باتری
                </Link>
              </div>
            </div>
          </div>
          <ul className={"mt-4 flex flex-col gap-[32px]"}>
            {batteriesData?.map((item, index) => (
              <BatteriesCard
                key={index}
                item={item}
                innerWidth={innerWidth}
                isMounted={isMounted}
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
    </div>
  );
};

export default BatteriesPage;
