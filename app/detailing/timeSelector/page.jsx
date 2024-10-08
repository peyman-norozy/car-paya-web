// "use client";
// import React, { useEffect, useState } from "react";
// import TimeSelectorCard from "@/components/TimeSelectorCard/TimeSelectorCard";
// import { getCurrentData } from "@/utils/api-function-utils";
// import useSetQuery from "@/hook/useSetQuery";
// import { useSearchParams } from "next/navigation";
// const Page = (props) => {
//   const [selectedTime, setSelectedTime] = useState();
//   const [data, setData] = useState([]);
//   const [optionIsOpen, setOptionIsOpen] = useState(false);
//
//   const setQuery = useSetQuery();
//   const searchParams = useSearchParams();
//
//   console.log(props);
//   useEffect(() => {
//     (async () => {
//       const fetchData = await getCurrentData("/web/detailing?step=step-3", {
//         vehicle_tip_id: searchParams.get("selectTipState").split(",")[1],
//         type: searchParams.get("type"),
//         city_id: searchParams.get("city_id"),
//         service_location_id: searchParams.get("service_location_id"),
//         package_id: searchParams.get("package_id"),
//       });
//       setData(
//         Object.keys(fetchData.data["time-reserve"]).map((key) => ({
//           day: key,
//           hour: fetchData.data["time-reserve"][key],
//         })),
//       );
//     })();
//   }, []);
//
//   function onclick() {
//     setQuery.updateQueryParams(
//       { time_id: selectedTime, type: searchParams.get("type") },
//       "/detailing/invoice",
//     );
//   }
//
//   return (
//     <div className={"lg:mt-[124px] mt-16 min-h-screen lg:mr-[420px] mb-6"}>
//       <h1 className={"text-center text-[24px]"}>انتخاب زمان دریافت خدمات</h1>
//       <ul className={"flex flex-col gap-4 mt-9"}>
//         {data.map((item, index) => (
//           <TimeSelectorCard
//             key={index}
//             data={item}
//             // selectedTime={selectedTime}
//             timeIsSelected={selectedTime}
//             setSelectedTime={setSelectedTime}
//             setOptionIsOpen={setOptionIsOpen}
//             optionIsOpen={optionIsOpen}
//             setTimeIsSelected={setSelectedTime}
//           />
//         ))}
//       </ul>
//       <button
//         type={"button"}
//         disabled={!selectedTime}
//         className={`lg:w-[204px] w-[130px] h-10 ${!selectedTime ? "bg-stone-400" : "bg-[#F66B34]"} rounded-[8px] text-[#FEFEFE] mt-6 lg:text-14 text-12`}
//         onClick={onclick}
//       >
//         تایید و مرحله بعد
//       </button>
//     </div>
//   );
// };
//
// export default Page;

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
  const vehicleTipId = searchParams.get("selectTipState").split(",")[1];
  const amper = searchParams.get("amper");
  const typeService = searchParams.get("type_service");
  const packageId = searchParams.get("package_id");
  const serviceLocationId = searchParams.get("service_location_id");

  useEffect(() => {
    async function getTimeData() {
      try {
        const data = await getDataWithFullErrorRes(
          "/web/detailing?step=step-3",
          {
            city_id: cityId,
            package_id: packageId,
            service_location_id: serviceLocationId,
            type: type,
            vehicle_tip_id: vehicleTipId,
          },
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

  useEffect(() => {
    const ditailingCart = JSON.parse(sessionStorage.getItem("ditailingCart"));
    if (ditailingCart) {
      ditailingCart.timeSelect = data[0]?.day;
    }
    sessionStorage.setItem("ditailingCart", JSON.stringify(ditailingCart));
  }, [data]);

  function onclick() {
    setQuery.updateQueryParams(
      { time_id: selectedTime, type: searchParams.get("type") },
      "/detailing/invoice",
    );
  }
  return (
    <div
      className={
        "flex flex-col relative py-4 max-w-[1772px] lg:w-[calc(100%-424px)] mr-auto bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] lg:p-6 rounded-2xl min-h-[605px] mb-4 lg:mt-7"
      }
    >
      <Link
        href={`/detailing/selected-services?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&city_id=${cityId}&type=${type}&selectTipState=true,${vehicleTipId}&service_location_id=${serviceLocationId}`}
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
              `/detailing?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}`,
            )
          }
        />
        <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
        <i
          className="cc-location text-2xl text-[#1E67BF]"
          onClick={() =>
            router.push(
              `/detailing/selectLocation?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&city_id=${cityId}&type=${type}&selectTipState=true,${vehicleTipId}`,
            )
          }
        />
        <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
        <i
          className="cc-search text-2xl text-[#1E67BF]"
          onClick={() =>
            router.push(
              `/detailing/selected-services?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&city_id=${cityId}&type=${type}&selectTipState=true,${vehicleTipId}&service_location_id=${serviceLocationId}`,
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
        {data.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 text-sm font-medium ${date === index ? "text-[#F58052]" : "text-[#FCCAAC]"}`}
            onClick={() => {
              setDate(index);
              setTab(index);
              const ditailingCart = JSON.parse(
                sessionStorage.getItem("ditailingCart"),
              );
              ditailingCart.timeSelect = item["day"];
              sessionStorage.setItem(
                "ditailingCart",
                JSON.stringify(ditailingCart),
              );
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
  );
};

export default Page;
