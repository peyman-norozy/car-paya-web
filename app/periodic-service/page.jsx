'use client'
import Image from "next/image";
import Button from "@/components/Button";
import PeriodicServiceCard from "@/components/cards/PeriodicServiceCard";
import Input from "@/components/Input";
import PeriodicServiceUnderCard from "@/components/cards/PeriodicServiceUnderCard";
import {Suspense, useState} from "react";
import {HowWorksMockUpData, serviceData,workData} from "@/staticData/data";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import SelectVehicleBoxComponent from "@/components/periodic-service-components/SelectVehicleBoxComponent";
import HowWorks from "@/components/HowWorks";
import TopRepresentatives from "@/components/TopRepresentatives/TopRepresentatives";

const CarServicesSliderData = async () => {
  return <CarServicesSlider data={serviceData}/>;
};

const periodicServiceUnderCardData ={
  title: "سرویس دوره ای",
  titleDescription: "(شامل ١٧ بخش مي‌باشد كه كاربر بنا به نیاز خود نسبت به انتخاب خدمات اقدام مي‌نمايد)",
  options: [
    "تعویض روغن موتور",
    "تعویض فیلتر هوا",
    "تعویض فیلتر روغن",
    "تعویض فیلتر کابین",
  ],
};

const PeriodicService = (props) => {
  return (
    <div className="lg:flex items-start gap-8 mt-[10px] md:mt-[88px] max-w-[1676px] m-auto p-4 relative">
      <SelectVehicleBoxComponent searchParams={props.searchParams}/>
      <div className={"w-full lg:w-[calc(100%-450px)] flex flex-col gap-8 md:gap-20"}>
        <Suspense fallback={<div>....Loading</div>}>
          <CarServicesSliderData/>
        </Suspense>
        <div className={"flex flex-col gap-8 md:gap-20"}>
          <PeriodicServiceUnderCard key={1} item={periodicServiceUnderCardData} />
          <div className="bg-[#e0e0e0] p-6 flex-col gap-6 items-center flex rounded-10">
            <span className="text-[#2C5D83] font-medium md:font-bold text-[22px] md:text-[28px] text-center">مشاوره و ثبت تماس تلفنی</span>
            <div className="flex gap-1 items-center">
              <i className="cc-call text-[20px]"/>
              <span className="text-[20px]">021-58919</span>
            </div>
            <span className="text-[20px]">ساعت کاری 8:00 - 21:00</span>
          </div>
          <HowWorks data={HowWorksMockUpData} removeImage={true}/>
          <TopRepresentatives />
        </div>
      </div>
    </div>
  );
};

export default PeriodicService;