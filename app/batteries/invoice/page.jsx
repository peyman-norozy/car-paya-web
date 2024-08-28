"use client";
import React, { useRef } from "react";
import Image from "next/image";
import FacktorCard from "@/components/cards/FacktorCard/FacktorCard";
import PriceDetails from "@/components/PriceDetails/PriceDetails";
import { useSelector } from "react-redux";
import CompletePrice from "@/components/CompletePrice/CompletePrice";
import { useDraggable } from "react-use-draggable-scroll";

const fakeData = [0, 0, 0, 0, 0, 0, 0];

const InvoicePage = () => {
  const innerWidth = useSelector((item) => item.todo.windowInnerWidth);
  const orderProduct = useRef();
  const { events } = useDraggable(orderProduct);

  return (
    <div className={"bg-white py-6 pt-[20px] px-4 lg:flex lg:gap-6 mb-8"}>
      <div className={"lg:w-[calc(100%-424px)]"}>
        <section
          className={
            "flex items-center gap-2 sticky top-[97px] right-0 bg-white py-2"
          }
        >
          <i className={"cc-arrow-right text-24"} />
          <span className={"text-14 font-semibold"}>جزئیات سفارش باتری</span>
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
            "text-14 flex flex-col lg:flex-row gap-4 border-b-2 border-b-[#F5F5F5] pb-4"
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
            "mt-4 text-14 flex flex-col lg:flex-row gap-4 border-b-2 border-b-[#F5F5F5] pb-4"
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
        <section className={"lg:flex lg:flex-col-reverse"}>
          <section>
            <div className={"text-14 flex items-center gap-1 my-4"}>
              <span className={"font-semibold"}>سفارش شما:</span>
              <span className={"text-[#888888]"}>3 خدمات</span>
            </div>
            <div className={"w-full"}>
              <ul
                className={
                  "flex flex-col lg:flex-row gap-4 overflow-x-auto py-4"
                }
                {...events}
                ref={orderProduct}
              >
                {fakeData.map((item, index) => (
                  <FacktorCard key={index} />
                ))}
              </ul>
            </div>
          </section>
          <section className="bg-white rounded-lg w-full text-14 mt-4">
            {/* Price Details Section */}
            {innerWidth < 1024 && (
              <div className="space-y-4 p-4 shadow-custom1 rounded-lg w-full lg:h-fit">
                <PriceDetails />
              </div>
            )}
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
              <div className="flex justify-between lg:justify-start lg:gap-4">
                <span className="text-gray-500">تاریخ دریافت خدمات:</span>
                <span className="text-gray-900">شنبه ۱۴۰۳/۰۶/۰۳</span>
              </div>
              <div className="flex justify-between lg:justify-start lg:gap-4">
                <span className="text-gray-500">ساعت دریافت خدمات:</span>
                <span className="text-gray-900">۱۶:۳۰</span>
              </div>
              <button className="text-orange-500 flex items-center gap-1 mt-2 self-end border-b-2 border-b-orange-400 pb-2 cursor-pointer">
                <i className={"cc-edit text-orange-500 text-20"} />
                <span className={"font-semibold"}>تغییر تاریخ و زمان</span>
              </button>
            </div>
          </section>
        </section>
        {innerWidth < 1024 && <CompletePrice />}
      </div>
      {innerWidth > 1024 && (
        <div className="space-y-4 p-4 shadow-custom1 rounded-lg lg:w-[400px] lg:h-fit lg:sticky lg:top-[110px] lg:left-0 lg:block">
          <PriceDetails />
        </div>
      )}
    </div>
  );
};

export default InvoicePage;
