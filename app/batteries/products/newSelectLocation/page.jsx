"use client";

import React, { useCallback, useEffect, useState } from "react";
import SelectLocationTab from "@/components/SelectLocationTab/SelectLocationTab";
import AddressSelection from "@/components/AddressSelection/AddressSelection";
import { useSelector } from "react-redux";
import useSetQuery from "@/hook/useSetQuery";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";

const movingFakeData = [0, 0, 0, 0, 0];
const Page = (props) => {
  const [selectAddressState, setSelectAddressState] = useState("MOVING"); //FIXED
  const [myLocationData, setMyLocationData] = useState([]);
  const [carCheckLocations, setCarCheckLocations] = useState([]);

  const showHeaderState = useSelector((state) => state.todo.showHeader);
  const setQuery = useSetQuery();
  console.log(props);

  useEffect(() => {
    setSelectAddressState(props.searchParams.type);
  }, [props.searchParams.type]);

  const timeData = useCallback(() => {
    (async () => {
      const fetchTimeData = await getDataWithFullErrorRes(
        process.env.BASE_API +
          `/web/reservation/battery?step=step-5&type=${props.searchParams.type}&city_id=` +
          props.searchParams.privience_city_id +
          "&reservation_time_slice_battery_id=" +
          props.searchParams.time_id,
      );
      if (props.searchParams.type === "FIXED") {
        setCarCheckLocations(fetchTimeData.data);
      } else if (props.searchParams.type === "MOVING") {
        console.log(fetchTimeData);
        setMyLocationData(fetchTimeData.data);
      }
    })();
  }, [
    props.searchParams.type,
    props.searchParams.privience_city_id,
    props.searchParams.time_id,
  ]);

  useEffect(() => {
    timeData();
  }, [props.searchParams.type]);

  return (
    <div className={"min-h-screen lg:mt-[124px] lg:mr-[420px] mb-[71px]"}>
      <div
        className={`sticky ${showHeaderState ? "top-[98px]" : "top-0"}  bg-[#d1d1d1] z-[2000] py-4 transition-all`}
      >
        <div className={"flex justify-center gap-6 "}>
          <SelectLocationTab
            headerText={"در محل شما"}
            description={
              "دریافت خدمات سرویس دوره‌ای در موقعیت مکان مورد نظر شما انجام می‌شود."
            }
            addressTabState={"MOVING"}
            selectAddressState={selectAddressState}
            setSelectAddressState={setSelectAddressState}
          />
          <SelectLocationTab
            headerText={"در نمایندگی کار چک"}
            description={
              "برای دریافت خدمات سرویس دوره‌ای باید به یکی از مراکز کارچک مراجعه کنید."
            }
            addressTabState={"FIXED"}
            selectAddressState={selectAddressState}
            setSelectAddressState={setSelectAddressState}
          />
        </div>
      </div>
      <div className={"mt-7"}>
        {
          {
            MOVING: (
              <AddressSelection
                setMyLocationData={setMyLocationData}
                timeData={timeData}
                myLocationData={myLocationData}
                status={"MOVING"}
              />
            ),
            FIXED: (
              <AddressSelection
                carCheckLocations={carCheckLocations}
                status={"FIXED"}
                timeData={timeData}
              />
            ),
          }[selectAddressState]
        }
      </div>
    </div>
  );
};

export default Page;
