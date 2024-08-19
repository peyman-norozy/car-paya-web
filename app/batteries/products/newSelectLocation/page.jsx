"use client";

import React, { useCallback, useEffect, useState } from "react";
import SelectLocationTab from "@/components/SelectLocationTab/SelectLocationTab";
import AddressSelection from "@/components/AddressSelection/AddressSelection";
import { useSelector } from "react-redux";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import { useSearchParams } from "next/navigation";

const Page = (props) => {
  const [selectAddressState, setSelectAddressState] = useState("MOVING"); //FIXED
  const [myLocationData, setMyLocationData] = useState([]);
  const [carCheckLocations, setCarCheckLocations] = useState([]);
  const [filter, setFilter] = useState([]);
  const searchParams = useSearchParams();

  const showHeaderState = useSelector((state) => state.todo.showHeader);

  useEffect(() => {
    setSelectAddressState(searchParams.get("type"));
  }, [searchParams]);

  const timeData = useCallback(
    (query) => {
      (async () => {
        const fetchTimeData = await getDataWithFullErrorRes(
          process.env.BASE_API +
            `/web/reservation/battery?step=step-2&${searchParams.toString()}`,
          query ? query : "",
        );
        if (searchParams.get("type") === "FIXED") {
          setCarCheckLocations(fetchTimeData.data);
          setFilter(fetchTimeData.filter);
        } else if (searchParams.get("type") === "MOVING") {
          setMyLocationData(fetchTimeData.data);
        }
      })();
    },
    [searchParams],
  );

  useEffect(() => {
    timeData();
  }, [searchParams]);

  return (
    <div className={"min-h-screen lg:mt-[124px] lg:mr-[420px] px-3 mb-[71px]"}>
      <div
        className={`sticky ${showHeaderState ? "size720:top-[98px] top-[74px]" : "top-0"}  bg-[#d1d1d1] z-[2000] py-4 transition-all`}
      >
        <div className={"flex size540:flex-row flex-col justify-center gap-6"}>
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
      <div className={"mt-7 flex flex-col gap-5"}>
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
                filter={filter}
              />
            ),
          }[selectAddressState]
        }
      </div>
    </div>
  );
};

export default Page;
