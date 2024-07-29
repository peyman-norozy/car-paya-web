"use client";

import React, { useState } from "react";
import SelectLocationTab from "@/components/SelectLocationTab/SelectLocationTab";
import AddressSelection from "@/components/AddressSelection/AddressSelection";
import { useSelector } from "react-redux";

const movingFakeData = [0, 0, 0, 0, 0];
const fixedFakeData = [
  {
    services: [
      "فیلتر روغن",
      "فیلتر روغن",
      "تعویض روغن گیر بکس دستی",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
    ],
  },
  {
    services: [
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
    ],
  },
  {
    services: [
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
    ],
  },
  {
    services: [
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
    ],
  },
  {
    services: [
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر ",
    ],
  },
  {
    services: [
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر ",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
    ],
  },
  {
    services: [
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر ",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
      "فیلتر روغن",
    ],
  },
];
const Page = () => {
  const [selectAddressState, setSelectAddressState] = useState("MOVING"); //FIXED
  const showHeaderState = useSelector((state) => state.todo.showHeader);

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
              <AddressSelection data={movingFakeData} status={"MOVING"} />
            ),
            FIXED: <AddressSelection data={fixedFakeData} status={"fixed"} />,
          }[selectAddressState]
        }
      </div>
    </div>
  );
};

export default Page;
