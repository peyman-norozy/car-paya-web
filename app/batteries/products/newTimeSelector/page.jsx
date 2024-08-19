"use client";
import React, { useEffect, useState } from "react";
import TimeSelectorCard from "@/components/TimeSelectorCard/TimeSelectorCard";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import useSetQuery from "@/hook/useSetQuery";
const Page = (props) => {
  const [selectedTime, setSelectedTime] = useState();
  const [data, setData] = useState([]);
  const setQuery = useSetQuery();
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
      { time_id: selectedTime, type: "MOVING" },
      "/batteries/invoice",
    );
  }

  return (
    <div className={"lg:mt-[124px] mt-16 min-h-screen lg:mr-[420px] mb-6"}>
      <h1 className={"text-center text-[24px]"}>انتخاب زمان دریافت خدمات</h1>
      <ul className={"flex flex-col gap-4 mt-9"}>
        {data.map((item, index) => (
          <TimeSelectorCard
            key={index}
            data={item}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        ))}
      </ul>
      <button
        type={"button"}
        className={
          "w-[204px] h-10 bg-[#F66B34] rounded-[8px] text-[#FEFEFE] mt-6"
        }
        onClick={onclick}
      >
        تایید و مرحله بعد
      </button>
    </div>
  );
};

export default Page;
