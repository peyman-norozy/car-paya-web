"use client";

import React, { useCallback, useEffect, useState } from "react";
import useSetQuery from "@/hook/useSetQuery";
import { useRouter, useSearchParams } from "next/navigation";
import ButterySelectVerificationPlace from "@/components/BatterySelectVerificationPlace/BatterySelectVerificationPlace";
import BatteryChangeServiceTime from "@/components/BatteryChangeServiceTime/BatteryChangeServiceTime";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";

const Page = (props) => {
  const [isSelected, setIsSelected] = useState(0);
  const [chosenTime, setChosenTime] = useState("");
  const [carCheckLocations, setCarCheckLocations] = useState([]);
  const [myLocationData, setMyLocationData] = useState([]);
  const searchParams = useSearchParams();
  const city_id = searchParams.get("privience_city_id");
  const type = searchParams.get("type");
  const TimeSliceBattery = searchParams.get(
    "reservation_time_slice_battery_id",
  );
  const selectedItem = searchParams.get("vehicle_tip");
  const package_id = searchParams.get("package_id");
  const time_id = searchParams.get("time_id");
  const params = new URLSearchParams(searchParams.toString());
  const setQuery = useSetQuery();
  const router = useRouter();

  const placeData = [
    {
      title: "در محل شما",
      description: "کارشناسی در موقعیت مکان مورد نظر شما انجام می‌شود.",
    },
    {
      title: "در نمایندگی‌های کار چک",
      description: "برای کارشناسی باید به یکی از مراکز کارچک مراجعه کنید.",
    },
  ];

  const timeData = useCallback(() => {
    (async () => {
      const fetchTimeData = await getDataWithFullErrorRes(
        process.env.BASE_API +
          `/web/reservation/battery?step=step-5&type=${type}&city_id=` +
          city_id +
          "&reservation_time_slice_battery_id=" +
          TimeSliceBattery?.split("/")[0],
      );
      if (type === "AGENT") {
        setCarCheckLocations(fetchTimeData.data);
      } else if (type === "EXPERT") {
        console.log(fetchTimeData);
        setMyLocationData(fetchTimeData.data);
      }
    })();
  }, [TimeSliceBattery, city_id, type]);

  useEffect(() => {
    timeData();
  }, []);

  const backstopHandler = () => {
    router.push(`/batteries/timeSelector?privience_city_id=${city_id}`);
  };
  return (
    <div className="pt-[2rem] mb-[7rem] size966:w-[95%] size1090:w-[85%] m-auto overflow-hidden">
      <div
        className={
          "flex items-center gap-2 size752:gap-[16px] text-BLUE_600 w-full"
        }
      >
        <i
          className={"cc-arrow-right text-24 cursor-pointer"}
          onClick={backstopHandler}
        />
        <p
          className={
            "p-[6px] text-14 size752:text-16 w-full border-b border-BLUE_600"
          }
        >
          چه مکانی آماده دریافت خدمات هستید؟
        </p>
      </div>
      <div className="pb-[3rem] pt-4">
        <BatteryChangeServiceTime
          on_click={backstopHandler}
          exact_time={TimeSliceBattery?.split("/")[1]}
          chosenTime={chosenTime}
        />
        <div className="mt-[5rem] flex flex-col gap-[1.5rem]">
          {placeData.map((item, index) => (
            <ButterySelectVerificationPlace
              options={index === 1 && "options"}
              myLocationData={myLocationData}
              setMyLocationData={setMyLocationData}
              carCheckLocations={carCheckLocations}
              setCarCheckLocations={setCarCheckLocations}
              isSelected={isSelected}
              id={index}
              key={index}
              setIsSelected={setIsSelected}
              timeData={timeData}
              title={item.title}
              description={item.description}
              setChosenTime={setChosenTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
