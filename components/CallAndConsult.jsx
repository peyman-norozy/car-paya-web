import Image from "next/image";
import React from "react";
import phone from "@/public/assets/icons/phone.svg";
import Button from "@/components/Button";

const CallAndConsult = () => {
  return (
    <div className="flex gap-4 flex-row items-center justify-between">
      <div
        className={
          "flex flex-col justify-center items-center size690:items-start gap-3 w-full size690:w-[50%] lg:w-[28%]"
        }
      >
        <h3 className={"text-[18px] font-bold"}>
          <span className={"text-[#F66B34]"}>کارشناسی خودرو </span> لازمه چون
        </h3>
        <p className={"text-[#303030] text-14 size800:text-16 font-medium"}>
          تیم <span className={"text-[#F66B34] text-18"}>کارچک </span>
          بهترین مجموعه کارشناسی خودرو حضوری در خدمت مشتریان بوده کارشناسان کادر
          ما آموزش دیده و با تجربه آماده ارائه خدمات رسانی به شما هستند .
        </p>
      </div>
      <div className={"flex flex-col gap-4 justify-center items-center font-medium"}>
        <p>مشاور و ثبت درخواست تلفنی</p>
        <button
          className={
            "text-[#F66B34] hover:text-white hover:bg-[#F66B34] flex items-center justify-center w-fit gap-2 px-4 py-2 border rounded-lg border-[#F66B34] animate-bounce"
          }
        >
          <p>۰۲۱-۸۸۱۰۹۵۲۴</p>
          <i className={"cc-calling"} />
        </button>
      </div>
      <Image
        src={"/assets/images/car8.png"}
        alt={""}
        width={400}
        height={200}
        className={"hidden lg:block"}
      />
    </div>
  );
};

export default CallAndConsult;
