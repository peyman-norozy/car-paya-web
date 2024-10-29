"use client";
import { useRef, useState } from "react";
import carachar from "@/public/assets/images/carachar.png";
import Image from "next/image";
import { serviceData } from "@/staticData/data";
import Link from "next/link";

const MainPageServices = (props) => {
  const serviceRef = useRef();
  const [openService, setOpenService] = useState(false);

  return (
    <div
      className={
        "sm:shadow-[0_0_8px_0_rgba(162,162,162,0.25)] bg-[#FEFEFE] sm:rounded-[16px] pt-7 sm:pb-5 pb-0"
      }
    >
      <div
        className={`transition-all duration-700 overflow-y-hidden mx-4 md:mx-0 h-[200px] sm:h-[245px]`}
        style={{
          height: `${openService ? `${serviceRef.current.offsetHeight}px` : ""}`,
        }}
      >
        <div
          className="grid grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-1 justify-items-center"
          ref={serviceRef}
        >
          {serviceData.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={
                "inline-block sm:w-[220px] w-[96px] shadow-[0_0_5px_0_rgba(162,162,162,0.25)] rounded-8"
              }
            >
              <div
                className="w-full h-full flex flex-col items-center justify-around py-2 gap-2 sm:gap-3 rounded-lg"
                key={index}
              >
                <Image
                  className="w-[57px] h-[47px]"
                  src={item.icon}
                  height={47}
                  width={57}
                  alt="carachar"
                />
                <span className="text-12 sm:text-base text-[#0E0E0E] line-clamp-1 font-medium">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <button
        className="text-[#757575] flex flex-col items-center gap-2 mx-auto mt-[8px]"
        onClick={() => {
          setOpenService(!openService);
        }}
      >
        <span className="font-medium sm:text-14 text-12 sm:text-base">
          مشاهده {openService ? "کمتر" : "بیشتر"}
        </span>
        <div className={"flex flex-col relative w-[20px] h-[20px]"}>
          <i
            className={`cc-arrow-down text-lg sm:text-2xl transition-transform duration-700 absolute -top-[20px] ${openService ? "rotate-180" : "rotate-0"}`}
          />
          <i
            className={`cc-arrow-down text-lg sm:text-2xl transition-transform duration-700 absolute -top-[15px] ${openService ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </button>
    </div>
  );
};

export default MainPageServices;
