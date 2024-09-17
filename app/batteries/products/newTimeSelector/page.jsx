"use client";
import React, { useEffect, useState } from "react";
import TimeSelectorCard from "@/components/TimeSelectorCard/TimeSelectorCard";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import useSetQuery from "@/hook/useSetQuery";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { persianDate, persianDateCovertor } from "@/utils/function-utils";
import ReserveTimeVerification from "@/components/vehicle-verification/ReserveTimeVerification";
const Page = (props) => {
  const [selectedTime, setSelectedTime] = useState();
  const [optionIsOpen, setOptionIsOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([]);
  const [date, setDate] = useState(0);
  const setQuery = useSetQuery();
  const searchParams = useSearchParams();
  const router = useRouter();
  const attributeSlug = searchParams.get("attribute_slug");
  const attributeValue = searchParams.get("attribute_value");
  const cityId = searchParams.get("city_id");
  const type = searchParams.get("type");
  const vehicleTipId = searchParams.get("vehicle_tip_id");
  const amper = searchParams.get("amper");
  const typeService = searchParams.get("type_service");

  useEffect(() => {
    async function getTimeData() {
      try {
        const data = await getDataWithFullErrorRes(
          "/web/reservation/battery?step=step-3",
        );
        setData(
          Object.keys(data["time-reserve"]).map((key) => ({
            day: key,
            hour: data["time-reserve"][key],
          })),
        );
      } catch (error) {
        console.error("Error fetching time data", error);
      }
    }

    getTimeData();
  }, []);

  function onclick() {
    setQuery.updateQueryParams(
      { time_id: selectedTime, type: searchParams.get("type") },
      "/batteries/invoice",
    );
  }

  return (
    <div className={"mt-4 min-h-screen lg:mr-[420px] px-3 mb-6"}>
      <Link
        href={`/batteries/products/newSelectLocation?city_id=${cityId}&type=${type}&vehicle_tip_id=${vehicleTipId}&amper=${amper}&type_service=${typeService}`}
        className={
          "self-start h-[30px] flex items-center gap-2 rounded-[8px] bg-white mt-6 mb-3 text-[14px] font-semibold"
        }
      >
        <i className={"cc-arrow-right text-[24px]"} />
        <span className={"text-16"}>انتخاب زمان</span>
      </Link>
      <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1] border border-[#F2F2F2] rounded-full px-2">
        <i
          className="cc-car-o text-2xl text-[#1E67BF]"
          onClick={() =>
            router.push(
              `/batteries?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&selectTipState=${vehicleTipId}`,
            )
          }
        />
        <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
        <i
          className="cc-search text-2xl text-[#1E67BF]"
          onClick={() =>
            router.push(
              `/batteries/products/newSelectLocation?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&city_id=${cityId}&type=${type}&vehicle_tip_id=${vehicleTipId}&amper=${amper}&type_service=${typeService}`,
            )
          }
        />
        <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
        <i className="cc-location text-2xl text-[#1E67BF]" />
        <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
        <i className="cc-timer text-2xl text-[#D1D1D1]" />
      </div>
      <p
        className={
          "text-14 size752:text-16 w-full font-medium text-[#454545] my-3"
        }
      >
        زمان خود را انتخاب کنید:
      </p>
      <div className="w-fit flex justify-around items-center gap-6 min-w-full relative border-b border-[#FCCAAC] pb-2">
        {data.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 text-sm font-medium ${date === index ? "text-[#F58052]" : "text-[#FCCAAC]"}`}
            onClick={() => {
              setDate(index);
              setTab(index);
            }}
          >
            <p>{persianDate(item["day"], "dddd")}</p>
            <p>{persianDateCovertor(item["day"])}</p>
          </div>
        ))}
        <div
          className={`${tab ? "right-1/2" : "right-0"} w-1/2 h-[2px] bg-[#F58052] mt-[-2px] transition-all absolute bottom-0`}
        ></div>
      </div>
      <div className={"flex flex-col gap-[2rem]"}>
        {/*<ReserveTimeVerification*/}
        {/*  data={data[date]}*/}
        {/*  timeIsSelected={selectedTime}*/}
        {/*  setTimeIsSelected={setSelectedTime}*/}
        {/*  setOptionIsOpen={setOptionIsOpen}*/}
        {/*  optionIsOpen={optionIsOpen}*/}
        {/*  accordionState={props.accordionState}*/}
        {/*/>*/}
      </div>
      <ul className={"flex flex-col gap-4 mt-9"}>
        <TimeSelectorCard
          // data={item}
          // selectedTime={selectedTime}
          // setSelectedTime={setSelectedTime}
          data={data[date]}
          timeIsSelected={selectedTime}
          setTimeIsSelected={setSelectedTime}
          setOptionIsOpen={setOptionIsOpen}
          optionIsOpen={optionIsOpen}
          accordionState={props.accordionState}
        />
      </ul>
      <div className={"flex justify-end"}>
        <button
          type={"button"}
          disabled={!selectedTime}
          className={`h-10 ${!selectedTime ? "bg-stone-400" : "bg-[#F66B34]"} rounded-[4px] text-[#FEFEFE] mt-6 lg:text-14 text-12 flex items-center justify-center p-2`}
          onClick={onclick}
        >
          <span>تایید و ادامه</span>
          <i className={"cc-left text-[24px]"} />
        </button>
      </div>
    </div>
  );
};

export default Page;
