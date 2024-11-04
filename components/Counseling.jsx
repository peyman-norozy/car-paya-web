"use client";
import React from "react";

const Counseling = () => {
  return (
    <div className="relative overflow-hidden pt-16">
      <div className="lg:w-[518px] w-[282px] lg:h-[219px] h-[174px] flex flex-col items-center bg-white gap-5 py-5 px-6 m-auto relative z-[2] shadow-[0_0_4px_0_rgba(171,171,171,0.25)]">
        <span className="text-[#000000] lg:text-18 text-14 font-medium">
          مشاور و ثبت درخواست تلفنی
        </span>
        <a
          href="tel:02158919"
          className="text-[#F58052] justify-center items-center flex gap-1 py-[6px] px-6 rounded-md font-medium "
        >
          <p className={"lg:text-20 text-14"}>021-58919</p>
          <i className={"cc-calling lg:text-[30px] text-[20px]"} />
        </a>
        <p className={"lg:text-18 text-14 font-medium"}>
          کار پایا در تمامی هفته پاسخگو شماست.
        </p>
      </div>
      {/* تغییر overflow به visible */}
      <div className="top-6 relative h-[91px] w-[3127px] overflow-visible">
        <div
          className={
            "bg-[url('/assets/images/animationscrol.png')] h-[91px] w-[3127px] bg-cover bg-center bg-no-repeat absolute top-[-180px] left-[1000px] moving-image"
          }
        ></div>
      </div>
    </div>
  );
};

export default Counseling;
