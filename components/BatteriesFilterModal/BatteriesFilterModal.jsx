import React, { useEffect, useState } from "react";
import Portal from "@/components/Portal/Portal";
import CustomSearchInput from "@/components/CustomSearchInput/CustomSearchInput";
import useSetQuery from "@/hook/useSetQuery";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";

const filterData = [
  {
    name: "آمپر",
    value: "getAmp",
    placeHolder: "آمپر خود را انتخاب کنید",
    labelStyle: "text-12 font-semibold",
    iconStyle: "cc-arrow-down absolute top-[12px] left-[10px]",
    inputStyle:
      "outline-none border border-[#B0B0B0] rounded-[8px] w-full h-[40px] pr-1 placeholder:text-12",
    optionContainerStyle:
      "bg-[#FFFFFF] flex flex-col gap-2 absolute top-10 z-[1000000] right-0 left-0 transition-all duration-500 overflow-y-scroll",
    optionStyle:
      "even:bg-[#F8F5F5] odd:bg-[#F2F9FE] flex items-center gap-2 py-[6px] px-1 rounded-[4px] text-14 cursor-pointer hover:bg-[#e3e3e3]",
  },
  {
    name: "برند",
    value: "brand",
    placeHolder: "برند خود را انتخاب کنید",
    labelStyle: "text-12 font-semibold",
    iconStyle: "cc-arrow-down absolute top-[12px] left-[10px]",
    inputStyle:
      "outline-none border border-[#B0B0B0] rounded-[8px] w-full h-[40px] pr-1 placeholder:text-12",
    optionContainerStyle:
      "bg-[#FFFFFF] flex flex-col gap-2 absolute top-10 z-[1000000] right-0 left-0 transition-all duration-500 overflow-y-scroll",
    optionStyle:
      "even:bg-[#F8F5F5] odd:bg-[#F2F9FE] flex items-center gap-2 py-[6px] px-1 rounded-[4px] text-14 cursor-pointer hover:bg-[#e3e3e3]",
  },
];

const BatteriesFilterModal = ({ isOpen, onClose, options }) => {
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const setQuery = useSetQuery();

  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log(options);

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

  if (!isClient) return null;
  const modalContainer = document.getElementById("modal-root");
  if (!modalContainer) return null;

  const carBrand = JSON.parse(localStorage.getItem("selectedVehicle"))?.brand;
  const carModel = JSON.parse(localStorage.getItem("selectedVehicle"))?.model;
  const carTitle = JSON.parse(localStorage.getItem("selectedVehicle"))?.title;

  return (
    <Portal container={modalContainer}>
      <div
        className={`${!isOpen ? "hidden" : "fixed"} inset-0 h-full w-full bg-[#4c4c4caa] z-[20000] transition-all`}
        onClick={() => onClose()}
      ></div>
      <div
        className={`transition-all duration-1000 bg-[#FEFEFE] fixed sm:inset-0 sm:m-auto sm:max-w-[362px] w-full h-full ${
          isOpen ? "translate-y-0 bottom-0" : "translate-y-[200%] bottom-0"
        } z-[200000] overflow-hidden rounded-10`}
      >
        <div
          className={
            "bg-[#F6FBFF] flex justify-between items-center py-4 px-[18.5px]"
          }
        >
          <span className={"text-16 font-medium"}>فیلتر</span>
          <i
            className={"cc-close-circle text-[24px] cursor-pointer"}
            onClick={() => onClose()}
          />
        </div>
        <div>
          <span
            className={
              "inline-block text-14 text-[#454545] font-medium px-[18.5px]"
            }
          >
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
          <div className={"h-[1px] bg-[#BBBBBB] mx-[18.5px]"}></div>
        </div>
        <div className={"py-4 px-[18.5px] flex flex-col gap-2 mt-6"}>
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
        <div
          className={
            "shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-t-[16px]  py-4 px-[18.5px] absolute bottom-0 left-0 right-0"
          }
        >
          <button
            className={
              "bg-[#F66B34] text-[#FEFEFE] w-full text-14 py-[8px] rounded-[8px]"
            }
            onClick={() => onClose()}
          >
            تایید و ادامه
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default BatteriesFilterModal;
