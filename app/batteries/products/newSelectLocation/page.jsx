"use client";

import React, { useCallback, useEffect, useState } from "react";
import SelectLocationTab from "@/components/SelectLocationTab/SelectLocationTab";
import AddressSelection from "@/components/AddressSelection/AddressSelection";
import { useSelector } from "react-redux";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import { useRouter, useSearchParams } from "next/navigation";

const Page = (props) => {
  const [selectAddressState, setSelectAddressState] = useState("MOVING"); //FIXED
  const [myLocationData, setMyLocationData] = useState([]);
  const [carCheckLocations, setCarCheckLocations] = useState([]);
  const [filter, setFilter] = useState([]);
  const searchParams = useSearchParams();
  const attributeSlug = searchParams.get("attribute_slug");
  const attributeValue = searchParams.get("attribute_value");
  const selectTipState = searchParams.get("selectTipState");
  const amper = searchParams.get("amper");
  const typeService = searchParams.get("type_service");
  const router = useRouter();

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
      <div
        className={
          "flex items-center gap-2 size752:gap-[16px] text-[#0E0E0E] w-full"
        }
      >
        <i
          className={"cc-arrow-right text-24 cursor-pointer"}
          // onClick={backStepHandler}
        />
        <p className={"text-14 size752:text-16 w-full font-medium"}>
          انتخاب زمان
        </p>
      </div>
      <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1] border border-[#F2F2F2] rounded-full px-2 my-4">
        <i
          className="cc-car-o text-2xl text-[#1E67BF]"
          onClick={() =>
            router.push(
              `/batteries?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&selectTipState=${selectTipState}`,
            )
          }
        />
        <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
        <i
          className="cc-search text-2xl text-[#1E67BF]"
          onClick={() =>
            router.push(
              `/batteries/products?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&selectTipState=${selectTipState}&amper=${amper}&type_service=${typeService}`,
            )
          }
        />
        <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
        <i className="cc-location text-2xl text-[#D1D1D1]" />
        <div className="border-b-4 border-dotted border-[#D1D1D1] w-full"></div>
        <i className="cc-timer text-2xl text-[#D1D1D1]" />
      </div>
      <span className={"font-semibold text-14"}>آدرس خود را انتخاب کنید:</span>
      <div className={`z-[2000] py-4 transition-all`}>
        <div className={"flex justify-center"}>
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
