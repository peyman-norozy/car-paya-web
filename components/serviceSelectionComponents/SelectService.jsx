"use client";
import useSetQuery from "@/hook/useSetQuery";
import SelectServiceCard from "../periodic-service-components/SelectServiceCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";

const SelectService = (props) => {
  const setQuery = useSetQuery();
  const router = useRouter();
  const periodicServiceBasketLength = useSelector(
    (item) => item.todo.periodicServiceBasketLength
  );
  useEffect(() => {
    console.log(props.data);
  }, []);
  function buttonClickHandler() {
    setQuery.updateQueryParams(
      { package_id: 1 },
      "/periodic-service/time-selection"
    );
  }

  const backstopHandler = () => {
    router.back();
  };
  return (
    // <div className="w-full flex flex-col justify-between lg:w-[calc(100%-424px)] mr-auto mt-3 rounded-2xl overflow-hidden border border-[#383838A3]">
    //   <div className="flex flex-col">
    //     <div className="bg-[#383838A3] flex flex-col gap-1 items-start px-10 py-5 text-[#FFFFFF] font-medium">
    //       <h1 className="text-16 lg:text-18">خدمات سرويس دوره‌ای</h1>
    //       <span className="text-12 lg:text-14">
    //         (شامل ١٧ بخش مي‌باشد كه كاربر بنا به نیاز خود نسبت به انتخاب خدمات
    //         اقدام مي‌نمايد)
    //       </span>
    //     </div>
    //     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 lg:gap-4 p-2 sm:p-4 lg:p-8">
    //       {props.data?.map((item, index) => (
    //         <SelectServiceCard data={item} key={index} />
    //       ))}
    //     </div>
    //   </div>
    //   <button
    //     className={`w-[204px] h-10 ${!periodicServiceBasketLength ? "bg-stone-400" : "bg-[#F66B34]"} rounded-[8px] text-[#FEFEFE] mb-6 mr-2 sm:mr-4 lg:mr-8`}
    //     disabled={!periodicServiceBasketLength}
    //     onClick={buttonClickHandler}
    //   >
    //     تایید و مرحله بعد
    //   </button>
    // </div>
    <div className="mb-[7rem] w-full lg:w-[calc(100%-424px)] mr-auto overflow-hidden flex flex-col gap-4 mt-[28px] bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] px-2 lg:p-6 rounded-2xl lg:min-h-[605px]">
      <div
        className={
          "flex items-center gap-2 size752:gap-[16px] text-[#0E0E0E] w-full"
        }
      >
        <i
          className={"cc-arrow-right text-24 cursor-pointer"}
          onClick={backstopHandler}
        />
        <p className={"text-14 size752:text-16 w-full font-medium"}>
          خدمات سرویس دوره ایی
        </p>
      </div>
      <div className=" flex flex-col gap-4 lg:mr-8">
        <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1]">
          <i
            className="cc-car-o text-2xl text-[#518DD5]"
            onClick={() => router.push(`/periodic-service`)}
          />
          <div className="border-b-4 border-dotted border-[#D1D1D1] w-full"></div>
          <i className="cc-search text-2xl text-[#D1D1D1]" />
          <div className="border-b-4 border-dotted border-[#D1D1D1] w-full"></div>
          <i className="cc-timer text-2xl text-[#D1D1D1]" />
          <div className="border-b-4 border-dotted border-[#D1D1D1] w-full"></div>
          <i className="cc-location text-2xl text-[#D1D1D1]" />
        </div>
        <div className="w-full p-[10px] shadow-[0_0_6px_0_rgba(125,125,125,0.5)] flex justify-between rounded-lg items-center">
          <span className="font-medium text-sm">نمایندگی ایران خودرو</span>
          <div className="relative flex justify-center items-center shadow-[0_0_6px_0_rgba(125,125,125,0.5)] size-[36px] rounded-[4px]">
            <i className="cc-wallet text-xl"/>
            <span className="rounded-full bg-[#F66B34] text-[#FEFEFE] size-[18px] flex items-center justify-center absolute -top-[9px] -right-[9px] text-xs pt-1">3</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-3 gap-y-6">
          {props.data.map((item) => (
            <div className="bg-white shadow-[0_0_6px_0_rgba(125,125,125,0.5)] rounded-lg flex flex-col items-center w-full px-3 py-2 gap-2">
              <Image
                className="w-full rounded-lg aspect-[67/50]"
                src={
                  process.env.BASE_API +
                  "/web" +
                  API_PATHS.FILE +
                  "/" +
                  item.image
                }
                width={67}
                height={50}
              />
              <span className="text-xs lg:text-18 h-8 line-clamp-2 flex items-center justify-center font-medium text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-full flex justify-between p-4 bg-white shadow-[0_-2px_8px_0_rgba(176,176,176,0.25)] rounded-t-2xl z-[3000]">
        <div className="flex-col flex items-start text-sm gap-1">
          <span>جمع سفارش:</span>
          <span className="font-medium text-[#518DD5]">1،560،000 تومان</span>
        </div>
        <button className="bg-[#FCCAAC] rounded-lg text-[#FEFEFE] font-medium py-2 px-3">
          تایید و تکمیل سفارش
        </button>
      </div>
    </div>
  );
};

export default SelectService;
