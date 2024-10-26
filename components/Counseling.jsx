import React from "react";
import Image from "next/image";
import lines from "@/public/assets/images/lines.png";

const Counseling = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="w-[518px] h-[219px] flex flex-col items-center bg-white gap-5 py-5 px-6 m-auto relative z-[2] shadow-[0_0_4px_0_rgba(171,171,171,0.25)]">
        <span className="text-[#000000] text-18 font-medium">
          مشاور و ثبت درخواست تلفنی
        </span>
        <a
          href="tel:02158919"
          className="text-[#F58052] justify-center items-center flex gap-1 py-[6px] px-6 rounded-md font-medium relative"
        >
          <p>021-58919</p>
          <i className={"cc-calling text-20 absolute -top-[4px] lef-[4px]"} />
        </a>
        <p className={"text-18 font-medium"}>
          کار پایا در تمامی هفته پاسخگو شماست.
        </p>
      </div>
      <Image
        className="top-6 absolute w-full h-[180px]"
        src={lines}
        width={430}
        height={179}
        alt={"line icon"}
      />
    </div>
  );
};

export default Counseling;
