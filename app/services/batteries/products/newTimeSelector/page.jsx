"use client";
import React, { useEffect, useState } from "react";
import TimeSelectorCard from "@/components/TimeSelectorCard/TimeSelectorCard";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import useSetQuery from "@/hook/useSetQuery";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { persianDate, persianDateCovertor } from "@/utils/function-utils";
import ReserveTimeVerification from "@/components/vehicle-verification/ReserveTimeVerification";
import ServiceInformation from "@/components/ServiceInformation/ServiceInformation";
const Page = (props) => {
  const [client, setClient] = useState(false);
  const [selectedTime, setSelectedTime] = useState();
  const [optionIsOpen, setOptionIsOpen] = useState(false);
  const [daySelector, setDaySelector] = useState("");
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([]);
  const [date, setDate] = useState(0);
  const [uniqueTitle, setUniqueTitle] = useState([]);
  const [dayTitleTab, setDayTitleTab] = useState("");
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
  const itemId = searchParams.get("item_id");

  useEffect(() => {
    setClient(true);
    async function getTimeData() {
      try {
        const res = await getDataWithFullErrorRes(
          "/web/reservation/battery?step=step-3",
        );
        setData(res?.data);
        const uniqueTitles = Array.from(
          new Set(res?.data?.map((item) => item.title)),
        );
        setUniqueTitle(uniqueTitles);
        setDayTitleTab(uniqueTitles[0]);
        // setData(
        //   Object.keys(data["time-reserve"]).map((key) => ({
        //     day: key,
        //     hour: data["time-reserve"][key],
        //   })),
        // );
      } catch (error) {
        console.error("Error fetching time data", error);
      }
    }

    getTimeData();
  }, []);

  useEffect(() => {
    const batteriesCart = JSON.parse(sessionStorage.getItem("batteriesCart"));
    const newData = data.filter((item) => item.title === dayTitleTab);
    setDaySelector(newData[0]?.start_timestamp);
    batteriesCart.timeSelect = newData[0]?.start_timestamp;
    sessionStorage.setItem("batteriesCart", JSON.stringify(batteriesCart));
  }, [data, dayTitleTab]);

  function onclick() {
    setQuery.updateQueryParams(
      { time_id: selectedTime, type: searchParams.get("type") },
      "/services/batteries/invoice",
    );
  }

  if (!client) {
    return null;
  }

  const batteriesCart = JSON.parse(sessionStorage.getItem("batteriesCart"));

  return (
    <div className={"relative"}>
      <ServiceInformation
        serviceData={[
          {
            key: "نوع خدمات :",
            value: batteriesCart?.batteryName,
            icon: "cc-search",
          },
          {
            key: "محل دریافت خدمات :",
            value: batteriesCart?.title,
            icon: "cc-location",
          },
        ]}
      />
      <div
        className={
          "flex flex-col relative py-4 max-w-[1772px] lg:w-[calc(100%-424px)] mr-auto bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] lg:p-6 rounded-2xl min-h-[605px] mb-4 lg:mt-7"
        }
      >
        <Link
          href={`/services/batteries/products/newSelectLocation?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&city_id=${cityId}&type=${type}&vehicle_tip_id=${vehicleTipId}&amper=${amper}&type_service=${typeService}`}
          className={
            "flex items-center gap-2 size752:gap-[16px] text-[#0E0E0E] w-full"
          }
        >
          <i className={"cc-arrow-right text-24 cursor-pointer"} />
          <span className={"text-14 size752:text-16 w-full font-medium"}>
            انتخاب زمان
          </span>
        </Link>
        <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1] shadow-[0_0_4px_0_rgba(152,152,152,0.4)] lg:py-2 py-1 rounded-[16px] px-2 my-4">
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
                `/services/batteries/products?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&selectTipState=true,${vehicleTipId}&amper=${amper}&type_service=${typeService}`,
              )
            }
          />
          <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
          <i
            className="cc-location text-2xl text-[#1E67BF]"
            onClick={() =>
              router.push(
                `/services/batteries/products/newSelectLocation?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&city_id=${cityId}&type=${type}&vehicle_tip_id=${vehicleTipId}&amper=${amper}&type_service=${typeService}&item_id=${itemId}`,
              )
            }
          />
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
          {uniqueTitle?.map((item, index) => (
            <div
              key={index}
              className={`flex items-end gap-2 text-sm font-medium ${dayTitleTab === item ? "text-[#F58052]" : "text-[#FCCAAC]"}`}
              onClick={() => {
                // setDate(index);
                setTab(index);
                setDayTitleTab(item);
                setDaySelector(item["day"]);
                const batteriesCart = JSON.parse(
                  sessionStorage.getItem("batteriesCart"),
                );
                batteriesCart.timeSelect = item["day"];
                sessionStorage.setItem(
                  "batteriesCart",
                  JSON.stringify(batteriesCart),
                );
              }}
            >
              <p>{item}</p>
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
            data={data}
            timeIsSelected={selectedTime}
            setTimeIsSelected={setSelectedTime}
            setOptionIsOpen={setOptionIsOpen}
            optionIsOpen={optionIsOpen}
            accordionState={props.accordionState}
            dayTitleTab={dayTitleTab}
          />
        </ul>
        <div
          className={
            "flex justify-center lg:justify-end fixed bottom-0 right-0 left-0 lg:relative w-full z-50 bg-white py-4 px-10 rounded-t-[16px] lg:rounded-none lg:shadow-none shadow-[0_0_6px_0_rgba(125,125,125,0.5)]"
          }
        >
          <button
            className={`${!selectedTime ? "bg-[#ecb8a3]" : "bg-[#F66B34]"} text-white text-14 lg:w-[199px] w-full h-[40px] rounded-[8px] flex items-center justify-center`}
            disabled={!selectedTime}
            onClick={onclick}
          >
            <span>تایید و ادامه</span>
            <i className={"cc-left text-[24px] lg:block hidden"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
