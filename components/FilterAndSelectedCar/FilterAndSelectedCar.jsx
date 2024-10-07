"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";
import CustomSearchInput from "@/components/CustomSearchInput/CustomSearchInput";
import { useSearchParams } from "next/navigation";
import useSetQuery from "@/hook/useSetQuery";

const filterData = [
  {
    name: "بر اساس آمپر",
    value: "getAmp",
    placeHolder: "آمپر خود را انتخاب کنید",
    labelStyle: "text-12 font-semibold",
    iconStyle: "cc-arrow-down absolute top-[12px] left-[10px]",
    inputStyle:
      "outline-none border border-[#F58052] rounded-[8px] w-full h-[40px] pr-1 placeholder:text-12",
    optionContainerStyle:
      "bg-[#FFFFFF] flex flex-col gap-2 z-[1000000] right-0 left-0 transition-all duration-500 overflow-y-scroll",
    optionStyle:
      "even:bg-[#F8F5F5] odd:bg-[#F2F9FE] flex items-center gap-2 py-[6px] px-1 rounded-[4px] text-14 cursor-pointer hover:bg-[#e3e3e3]",
  },
  {
    name: "بر اساس برند",
    value: "brand",
    placeHolder: "برند خود را انتخاب کنید",
    labelStyle: "text-12 font-semibold",
    iconStyle: "cc-arrow-down absolute top-[12px] left-[10px]",
    inputStyle:
      "outline-none border border-[#F58052] rounded-[8px] w-full h-[40px] pr-1 placeholder:text-12",
    optionContainerStyle:
      "bg-[#FFFFFF] flex flex-col gap-2 z-[1000000] right-0 left-0 transition-all duration-500 overflow-y-scroll",
    optionStyle:
      "even:bg-[#F8F5F5] odd:bg-[#F2F9FE] flex items-center gap-2 py-[6px] px-1 rounded-[4px] text-14 cursor-pointer hover:bg-[#e3e3e3]",
  },
];

const FilterAndSelectedCar = ({ options, page }) => {
  const [client, setClient] = useState(false);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const setQuery = useSetQuery();

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return null;
  }

  const filterClickHandler = (value, inputValueType) => {
    console.log(value.length, inputValueType);

    setQuery.setQuery(
      inputValueType === "getAmp"
        ? "amp"
        : inputValueType === "brand"
          ? "brand"
          : "",
      value,
    );
  };

  const deleteQueryHandler = (slug) => {
    console.log(slug, searchParams.get("brand"), params.toString());
    page.current = 1;
    if (slug === "brand") {
      setQuery.deleteSingleQuery(
        [{ key: "brand", value: searchParams.get("brand") }],
        params,
        "",
      );
    } else if (slug === "getAmp") {
      setQuery.deleteSingleQuery(
        [{ key: "amp", value: searchParams.get("amp") }],
        params,
        "",
      );
    }
  };

  const carBrand = JSON.parse(localStorage.getItem("selectedVehicle"))?.brand;
  const carModel = JSON.parse(localStorage.getItem("selectedVehicle"))?.model;
  const carTitle = JSON.parse(localStorage.getItem("selectedVehicle"))?.title;
  return (
    <div className={"absolute right-0.5 h-full lg:block hidden"}>
      <section
        className={
          "bg-[#FDFDFD] w-[409px] h-fit sticky right-2 top-32 rounded-[16px] p-6 flex flex-col justify-between overflow-hidden gap-4 shadow-[0_0_6px_6px_rgba(125,125,125,0.5)]"
        }
      >
        <div>
          <span className={"text-14 text-[#454545] font-medium"}>
            {carTitle ? `${carBrand} ${carModel} (${carTitle})` : ""}
          </span>
          <Image
            src={
              process.env.BASE_API +
              "/web" +
              API_PATHS.FILE +
              "/" +
              JSON.parse(localStorage.getItem("selectedVehicle"))?.image
            }
            width={226}
            height={108}
            alt={"car"}
            className="w-[60%] aspect-auto mx-auto"
          />
          <div className={"h-[1px] bg-[#BBBBBB] w-full"}></div>
        </div>
        <div className={"flex items-center gap-2"}>
          <i className={"cc-filter text-18"} />
          <span className={"text-16 text-[#0F0F0F] font-medium"}>فیلتر</span>
        </div>
        <div className={"flex flex-col gap-2"}>
          {filterData.map((item, index) => (
            <div key={index}>
              <CustomSearchInput
                title={item.name}
                placeHolder={item.placeHolder}
                labelStyle={item.labelStyle}
                iconStyle={item.iconStyle}
                inputStyle={item.inputStyle}
                optionContainerStyle={item.optionContainerStyle}
                optionStyle={item.optionStyle}
                value={item.value}
                options={options[item?.value]}
                onClick={(value) => filterClickHandler(value, item.value)}
                deleteInputValueHandler={(slug) => deleteQueryHandler(slug)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FilterAndSelectedCar;
