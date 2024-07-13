'use client'
import { HowWorksMockUpData } from "@/staticData/data";
import PeriodicServiceUnderCard from "../cards/PeriodicServiceUnderCard";
import HowWorks from "../HowWorks";
import TopRepresentatives from "../TopRepresentatives/TopRepresentatives";

const PeriodicServiceIndex = () => {
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
    return ( 
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
     );
}
 
export default PeriodicServiceIndex;