'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const PeriodicServiceUnderCard = () => {
  const [openService,setOpenService] = useState(false)
  const servics = ["تعویض روغن موتور","تعویض فیلتر روغن","تعویض فیلتر هوا","تعویض روغن هیدرولیک","تعویض فیلتر هوای کابین","تعویض فیلتر گیربکس اتومات","تعویض روغن گیربکس اتومات","تعویض روغن گیربکس دستی","تعویض لنت","روغن ترمز","ضد یخ","مکمل و اکتان","باتری","تنظیم باد","اپارات","دیاگ ماشین","چکاپ ماشین"]
  return (
    <div
      className={"py-4 px-4 flex flex-col md:flex-row items-center lg:gap-12 bg-[#E7E7E7] rounded-2xl"}
    >
      <div className={"w-[100px] h-[100px]"}>
        <Image
          src={"/assets/images/1.png"}
          alt={"icon"}
          width={200}
          height={200}
        />
      </div>
      <div className={"flex flex-col gap-4 flex-1"}>
        <div className={"flex flex-col gap-1 items-start font-medium md:font-bold text-18 md:text-[22px]"}>
          <span className="text-center md:text-right w-full">سرویس دوره ای </span>
          <span className={"text-12 font-medium text-[#47505D]"}>
          سرویس دوره ای شامل ١٧ بخش مي‌باشد كه كاربر بنا به نیاز خود نسبت به انتخاب خدمات اقدام مي‌نمايد
          </span>
        </div>
        <div className={` overflow-hidden ${openService?"h-[225px]":"h-[65px]"} transition-all duration-700`}>
          <ul className={"grid grid-cols-1 min-[400px]:grid-cols-2 min-[800px]:grid-cols-3 lg:grid-cols-2 min-[1500px]:grid-cols-3 gap-4"}>
            {servics.map((item)=>(
              <li className={"flex items-center gap-2 "}>
                <Image
                  src={"/assets/images/star.png"}
                  alt={"icon"}
                  width={24}
                  height={24}
                  className="size-[18px] md:size-[24px]"
                />
                <span className={"text-base xl:text-18 line-clamp-1"}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="text-[#F66B34] flex items-center gap-2 mx-auto" onClick={()=>{setOpenService(!openService)}}><span className="font-medium text-14 sm:text-base">مشاهده {openService?"کمتر":"بیشتر"}</span><i className={`cc-arrow-down text-lg sm:text-2xl transition-transform duration-700 ${openService?"rotate-180":"rotate-0"}`}/></button>
      </div>
    </div>
  );
};

export default PeriodicServiceUnderCard;
