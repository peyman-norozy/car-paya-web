"use client";

import React, { useEffect, useRef, useState } from "react";
import PurchaseBatteryModal from "@/components/PurchaseBatteryModal";

import useSetQuery from "@/hook/useSetQuery";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import SubFilterCard from "@/components/cards/SubFilterCard";
import { ToastContainer } from "react-toastify";
import BatteriesCard from "@/components/cards/BatteriesCard/BatteriesCard";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCarSelectToastHandler, setCityModalState } from "@/store/todoSlice";
import BatteryAssistantModal from "@/components/modal/BatteryAssistantModal";

const BatteriesPage = (props) => {
  const query = useSetQuery();
  console.log(props.data);
  const [isClicked, setIsClicked] = useState(1);
  const [filterISOpen, setFilterIsOpen] = useState(false);
  const [batteryIsSelected, setBatteryIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("فیلتر بر اساس");
  const [selectedItem, setSelectedItem] = useState(null);
  const [step, setStep] = useState("car-brands");
  const [modalStep, setModalStep] = useState(1);
  const [selectFilterData, setSelectFilterData] = useState([]);
  const [topDistance, setTopDistance] = useState(0);
  const [filterModalState, setFilterModalState] = useState(false);
  const [timeModalState, setTimeModalState] = useState(false);
  const [assistantModalState, setAssistantModalState] = useState(false);
  const [filterId, setFilterId] = useState("");
  const dispatch = useDispatch();
  const filterRef = useRef(null);
  const subFilterRef = useRef();
  const router = useRouter();
  const heightRef = useRef(null);

  console.log(props);
  if (props.filterData === 500) {
    console.log(props.filterData);
  }
  console.log(props);
  const data = selectFilterData.length > 0 ? selectFilterData : props.data.data;
  const tabTitle = [
    { name: "خودرو", attributeSlug: "type_vehicle", slug: "car" },
    { name: "موتور سیکلت", attributeSlug: "type_vehicle", slug: "motor" },
    { name: "وسیله سنگین", attributeSlug: "type_vehicle", slug: "heavy_car" },
    { name: "وسیله من", attributeSlug: "type_vehicle", slug: "my_vehicle" },
  ];

  const filterData = [
    { name: "آمپر", value: "getAmp" },
    { name: "برند", value: "brand" },
  ];

  const brandOption = [
    {
      id: "amper",
      amper: [
        { value: "25", label: "باتری 25 آمپر" },
        { value: "45", label: "باتری 45 آمپر" },
        { value: "56", label: "باتری 56 آمپر" },
        { value: "77", label: "باتری 77 آمپر" },
      ],
    },
    {
      id: "brand",
      brand: [
        { value: "سپاهان", label: "sepahan" },
        { value: "صباباتری", label: "sababatry" },
        { value: "آذر باتری", label: "azarbatry" },
        { value: "کاسپین", label: "caspian" },
      ],
    },
  ];

  console.log(props);

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
    if (props.searchParams.attribute_slug === undefined) {
      query.setMultiQuery([
        { key: "attribute_slug", value: "type_vehicle" },
        { key: "attribute_value", value: "car" },
      ]);
    }
  }, []);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("selectedVehicle"))?.id);
    if (
      !JSON.parse(localStorage.getItem("city")) &&
      !JSON.parse(localStorage.getItem("city"))?.cityId
    ) {
      dispatch(setCityModalState(true));
      router.push("/batteries");
    }
    if (
      !JSON.parse(localStorage.getItem("selectedVehicle")) &&
      !JSON.parse(localStorage.getItem("selectedVehicle"))?.id
    ) {
      dispatch(setCarSelectToastHandler(true));
      router.push("/batteries");
    }
  }, [dispatch, router, props.searchParams]);

  useEffect(() => {
    (async () => {
      const filterFetchData = await getDataWithFullErrorRes("/web/get/filter");
      console.log(filterFetchData);
    })();
  }, []);

  const toggleModal = () => {
    setAssistantModalState((prev) => !prev);
  };

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
            {/*<Image src={arrow} alt={"arrow"} cl width={10} height={10} />*/}
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
                  {props.filterData[filterId]?.map((item) => (
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
          <button
            className={
              "bg-[#5D697A] text-12 text-white w-[146px] h-[36px] rounded-[8px] font-semibold animate-bounce "
            }
            onClick={() => toggleModal()}
          >
            دستیار باتری
          </button>
        </div>
        <ul className={"mt-4 flex flex-col gap-[24px]"}>
          {props.data?.data?.map((item, index) => (
            <BatteriesCard
              key={index}
              item={item}
              searchParams={props.searchParams}
              setBatteryIsSelected={setBatteryIsSelected}
            />
          ))}
        </ul>
      </section>
      {/*<div className="w-[95%] size671:w-[98%] size1090:w-[95%] m-auto flex flex-col size1056:flex-row gap-[1rem] size1275:gap-[3rem]">*/}
      {/*  /!*<div className="hidden size1000:block size720:w-[48%] size1136:w-[45%] size1000:pt-[9rem] size1056:pt-0 mt-[1rem] self-center size1056:self-auto">*!/*/}
      {/*  /!*  <SelectVehicleBox*!/*/}
      {/*  /!*    tabTitle={tabTitle}*!/*/}
      {/*  /!*    title="انتخاب وسیله نقلیه"*!/*/}
      {/*  /!*    cityProvincesTitle={*!/*/}
      {/*  /!*      "برای ثبت کارشناسی استان و شهر خود را انتخاب کنید"*!/*/}
      {/*  /!*    }*!/*/}
      {/*  /!*    setSelectedItem={setSelectedItem}*!/*/}
      {/*  /!*    selectedItem={selectedItem}*!/*/}
      {/*  /!*    setStep={setStep}*!/*/}
      {/*  /!*    searchParams={props.searchParams}*!/*/}
      {/*  /!*    step={step}*!/*/}
      {/*  /!*  />*!/*/}
      {/*  /!*</div>*!/*/}
      {/*  <div className="pt-0 size1056:pt-[9rem] w-full mt-[1rem] flex flex-col gap-[1.5rem] relative">*/}
      {/*    /!*<div className="w-full absolute top-0 right-0  hidden size1000:flex flex-row-reverse items-center gap-[1rem]">*!/*/}
      {/*    /!*  <CarServicesSlider data={serviceData} />*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    <div className="flex items-center justify-between">*/}
      {/*      <div>*/}
      {/*        <div*/}
      {/*          ref={filterRef}*/}
      {/*          onClick={toggleFilterHandler}*/}
      {/*          className="bg-[#D9D9D9] rounded-[8px] py-[0.5rem] px-[1.5rem] flex items-center gap-[0.5rem] text-text_gray cursor-pointer relative"*/}
      {/*        >*/}
      {/*          <Image src={arrow} alt="" width={10} height={10} />*/}
      {/*          <p className="text-12">{filter}</p>*/}
      {/*          <ul*/}
      {/*            ref={heightRef}*/}
      {/*            className={`bg-[#D9D9D9] rounded-[8px] absolute  top-[2.2rem] right-0 left-0 text-12 overflow-hidden transition-all duration-500`}*/}
      {/*            style={*/}
      {/*              filterISOpen*/}
      {/*                ? { height: `${heightRef.current.scrollHeight}px` }*/}
      {/*                : { height: 0 }*/}
      {/*            }*/}
      {/*          >*/}
      {/*            {filterData.map((item, index) => (*/}
      {/*              <li*/}
      {/*                className="p-[0.5rem] w-full rounded-[8px] hover:bg-[#9d9d9d] flex items-center justify-between"*/}
      {/*                key={index}*/}
      {/*                onClick={selectFilterHandler}*/}
      {/*                onMouseEnter={filterMouseEnter}*/}
      {/*                onMouseLeave={filterMouseLeave}*/}
      {/*                order_by={item.value}*/}
      {/*                id={item.value}*/}
      {/*              >*/}
      {/*                <span>{item.name}</span>*/}
      {/*                <i className={"cc-left text-[20px]"} />*/}
      {/*              </li>*/}
      {/*            ))}*/}
      {/*          </ul>*/}
      {/*          {filterModalState && (*/}
      {/*            <div*/}
      {/*              className={*/}
      {/*                "bg-white rounded-[8px] absolute right-[137px] pr-1 text-12 overflow-hidden transition-all duration-1000 w-[137px]"*/}
      {/*              }*/}
      {/*              ref={subFilterRef}*/}
      {/*              id={"sub_filter"}*/}
      {/*              onMouseEnter={subFilterMouseEnter}*/}
      {/*              onMouseLeave={subFilterMouseLeave}*/}
      {/*              style={{*/}
      {/*                top: topDistance === 0 ? "0" : topDistance - 236 + "px",*/}
      {/*              }}*/}
      {/*            >*/}
      {/*              <ul className={`bg-[#D9D9D9] h-[250px] overflow-y-scroll`}>*/}
      {/*                {props.filterData[filterId]?.map((item) => (*/}
      {/*                  <SubFilterCard*/}
      {/*                    key={item.value}*/}
      {/*                    filterId={filterId}*/}
      {/*                    item={item}*/}
      {/*                    setFilterModalState={setFilterModalState}*/}
      {/*                  />*/}
      {/*                ))}*/}
      {/*              </ul>*/}
      {/*            </div>*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      /!* <Button class_name="bg-[#D9D9D9] rounded-[8px] py-[0.5rem] px-[1.5rem] flex items-center gap-[0.5rem] text-text_gray">*/}
      {/*        <Image src={compare} alt="" width={15} height={15} />*/}
      {/*        <p className="text-12">مقایسه محصولات</p>*/}
      {/*      </Button> *!/*/}
      {/*    </div>*/}
      {/*    {isLoading ? (*/}
      {/*      <div className={"flex justify-center items-center h-[100px]"}>*/}
      {/*        <Spinner width={"w-[44px]"} height={"h-[44px]"} />*/}
      {/*      </div>*/}
      {/*    ) : (*/}
      {/*      <ul className="flex flex-col gap-[1.5rem]">*/}
      {/*        {data &&*/}
      {/*          data.map((item) => (*/}
      {/*            <BatteryCard*/}
      {/*              key={item.id}*/}
      {/*              setBatteryIsSelected={setBatteryIsSelected}*/}
      {/*              data={item}*/}
      {/*              searchParams={props.searchParams}*/}
      {/*            />*/}
      {/*          ))}*/}
      {/*      </ul>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*  <div*/}
      {/*    onClick={() => {*/}
      {/*      setBatteryIsSelected(false);*/}
      {/*    }}*/}
      {/*    className={` w-full transition-all duration-500 ${batteryIsSelected ? "bg-[#000] opacity-[0.8] h-[100vh]" : "opacity-0 h-0"} fixed top-0 right-0 left-0 bottom-0 z-[9999]`}*/}
      {/*  ></div>*/}
      {/*  <div*/}
      {/*    className={`w-[75%] size900:w-[50%] m-auto fixed transition-all duration-1000 ${batteryIsSelected ? "top-[50%]" : "top-[-50%]"} left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99999]`}*/}
      {/*  >*/}
      {/*    <PurchaseBatteryModal*/}
      {/*      setBatteryIsSelected={setBatteryIsSelected}*/}
      {/*      batteryIsSelected={batteryIsSelected}*/}
      {/*      searchParams={props.searchParams}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div
        className={`${!batteryIsSelected ? "hidden" : "fixed"} inset-0 h-full w-full bg-[#4c4c4caa] z-[20000] transition-all`}
        onClick={() => setBatteryIsSelected(false)}
      ></div>

      <div
        className={`w-[75%] size900:w-[50%] m-auto fixed transition-all duration-1000 ${batteryIsSelected ? "top-[50%]" : "top-[-50%]"} left-[50%] translate-x-[-50%] translate-y-[-50%] z-[20000]`}
      >
        <PurchaseBatteryModal
          setBatteryIsSelected={setBatteryIsSelected}
          batteryIsSelected={batteryIsSelected}
          searchParams={props.searchParams}
        />
      </div>
      <BatteryAssistantModal
        isOpen={assistantModalState}
        onClose={toggleModal}
      />
      <ToastContainer rtl={true} />
    </div>
  );
};

export default BatteriesPage;
