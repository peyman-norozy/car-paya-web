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
    <div className={"min-h-screen mt-4 lg:mr-[470px] px-3 mb-[71px]"}>
      <div className={`z-[2000] py-4 transition-all`}>
        <div className={"flex justify-center sm:gap-[139px] gap-[20px]"}>
          <SelectLocationTab
            headerText={"در محل شما"}
            addressTabState={"MOVING"}
            selectAddressState={selectAddressState}
            setSelectAddressState={setSelectAddressState}
          />
          <SelectLocationTab
            headerText={"در مراکز کارپایا"}
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
