"use client";
import React from "react";
import Image from "next/image";
import FacktorCard from "@/components/cards/FacktorCard/FacktorCard";

const fakeData = [0, 0, 0, 0, 0, 0, 0];

const InvoicePage = () => {
  return (
    <div className={"bg-white py-6 px-4"}>
      <section
        className={
          "flex items-center gap-2 sticky top-[74px] right-0 bg-white py-2"
        }
      >
        <i className={"cc-arrow-right text-24"} />
        <span className={"text-14 font-semibold"}>جزئیات سفارش</span>
      </section>
      <section className={"flex justify-center"}>
        <Image
          src={"/assets/images/car8.png"}
          className={"w-[350px] h-[250px]"}
          alt={"car"}
          width={1000}
          height={750}
        />
      </section>
      <section
        className={
          "text-14 flex flex-col gap-4 border-b-2 border-b-[#F5F5F5] pb-4"
        }
      >
        <div className={"flex items-center gap-1 w-full"}>
          <span className={"font-semibold"}>خودرو شما:</span>
          <span>پورشه ماکان اتوماتیک Lx</span>
        </div>
        <div className={"flex items-center gap-1 w-full"}>
          <span className={"font-semibold"}>نام:</span>
          <span>محمد محمدی</span>
        </div>
        <div className={"flex items-center gap-1 w-full"}>
          <span className={"font-semibold"}>شماره تماس:</span>
          <span>0903722911</span>
        </div>
      </section>
      <section
        className={
          "mt-4 text-14 flex flex-col gap-4 border-b-2 border-b-[#F5F5F5] pb-4"
        }
      >
        <div className={"flex items-center gap-1 w-full"}>
          <span>کد پیگیری سفارش:</span>
          <span className={"font-semibold"}>0903722911</span>
        </div>
        <div className={"flex items-center gap-1 w-full "}>
          <span>تاریخ ثبت سفارش:</span>
          <span className={"font-semibold"}>0903722911</span>
        </div>
      </section>
      <section className={"text-14 flex items-center gap-1 my-4"}>
        <span className={"font-semibold"}>سفارش شما:</span>
        <span className={"text-[#888888]"}>3 خدمات</span>
      </section>
      <section>
        <ul className={"flex flex-col gap-4"}>
          {fakeData.map((item, index) => (
            <FacktorCard key={index} />
          ))}
        </ul>
      </section>
      <section className="bg-white rounded-lg w-full text-14 mt-4">
        {/* Price Details Section */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">جزئیات قیمت:</span>
            <span className="text-gray-900">۱۵۳۰۰۰۰ تومان</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">قیمت کالاها(3):</span>
            <span className="text-gray-900">۱۵۳۰۰۰۰ تومان</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">کد تخفیف:</span>
            <span className="text-gray-900">---</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">هزینه اپب ذهناب:</span>
            <span className="text-gray-900">---</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">هزینه دستمزد:</span>
            <span className="text-gray-900">---</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span className="text-gray-900">جمع قابل پرداخت:</span>
            <span className="text-gray-900">۱۵۳۰۰۰۰ تومان</span>
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-4 space-y-2 flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-gray-500">محل دریافت خدمات:</span>
            <span className="text-gray-900 text-right">
              تهران خیابان پاسداران گلستان هشت کوچه سرو دوم شرقی پلاک ۵
            </span>
          </div>
          <button className="text-orange-500 flex items-center gap-1 mt-2 self-end border-b-2 border-b-orange-400 pb-2 cursor-pointer">
            <i className={"cc-edit text-orange-500 text-20"} />
            <span className={"font-semibold"}> تغییر آدرس</span>
          </button>
        </div>

        {/* Date and Time Section */}
        <div className="mt-4 space-y-2 flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-gray-500">تاریخ دریافت خدمات:</span>
            <span className="text-gray-900">شنبه ۱۴۰۳/۰۶/۰۳</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">ساعت دریافت خدمات:</span>
            <span className="text-gray-900">۱۶:۳۰</span>
          </div>
          <button className="text-orange-500 flex items-center gap-1 mt-2 self-end border-b-2 border-b-orange-400 pb-2 cursor-pointer">
            <i className={"cc-edit text-orange-500 text-20"} />
            <span className={"font-semibold"}> تغییر تاریخ و زمان</span>
          </button>
        </div>
      </section>
      <section
        className={
          "sticky bottom-0 right-0 z-[1000] bg-white flex justify-between p-4"
        }
      >
        <button
          className={
            "bg-[#F66B34] rounded-[8px] text-white text-[16px] font-semibold w-36 h-10"
          }
        >
          ثبت
        </button>
        <div className={"text-[14px]"}>
          <span>جمع سفارش:</span>
          <div className={"flex gap-2 items-center"}>
            <span>1500000</span>
            <span>تومان</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvoicePage;
