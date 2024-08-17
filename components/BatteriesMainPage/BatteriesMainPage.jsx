"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import { batteryPurchaseProcessData } from "@/staticData/data";
import BatteryPurchaseProcess from "@/components/cards/BatteryPurchaseProcess";
import BatteryFaq from "@/components/BatteryFaq/BatteryFaq";
// import BatteryAdvice from "@/components/BatteryAdvice/BatteryAdvice";
import BatteryAdvice from "@/components/‌BatteryAdvice/‌BatteryAdvice";

const BatteriesMainPage = () => {
  const [client, setClient] = useState(false);
  const [tipId, setTipId] = useState("");

  useEffect(() => {
    setClient(true);
    setTipId(
      JSON.parse(localStorage.getItem("selectedVehicle"))?.id
        ? `&selectTipState=true${JSON.parse(localStorage.getItem("selectedVehicle")).id.toString()}`
        : "",
    );
  }, []);

  if (!client) {
    return null;
  }

  return (
    <>
      <div className="bg-[#383838A3] rounded-3xl  flex size900:flex-row-reverse flex-col-reverse gap-6 p-6 items-center">
        <div className="flex flex-col gap-2 items-start flex-1">
          <h1 className="text-xl font-bold text-[#F66B34]">باتری</h1>
          <p className="text-base text-[#FEFEFE] font-bold leading-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <Link
            href={`batteries/products?attribute_slug=type_vehicle&attribute_value=car${
              JSON.parse(localStorage.getItem("selectedVehicle"))?.id
                ? `&selectTipState=true,${JSON.parse(localStorage.getItem("selectedVehicle")).id.toString()}`
                : ""
            }`}
            className="bg-[#F66B34] rounded-md py-2 px-4 text-[#FEFEFE] w-fit text-14 mt-2 font-medium"
          >
            ثبت درخواست
          </Link>
        </div>
        <Image
          alt={"buttery description image"}
          src={"/assets/images/batteryIndex.png"}
          width={245}
          height={195}
        />
      </div>
      <ul
        className={
          "flex justify-between gap-8 mt-10 overflow-x-scroll pb-2 [&>*:last-child]:hidden"
        }
      >
        {batteryPurchaseProcessData.map((item, index) => (
          <BatteryPurchaseProcess key={index} {...item} />
        ))}
      </ul>
      <BatteryAdvice />
      <BatteryFaq />
      <ToastContainer rtl={true} />
    </>
  );
};

export default BatteriesMainPage;
