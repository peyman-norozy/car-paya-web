import React from "react";
import CarBackgroundCard from "@/components/cards/CarBackgroundCard";
import { persianDateCovertor } from "@/utils/function-utils";

const RecordModalCreatedCard = (props) => {
  
  return (
    <>
      <div className="hidden lg:flex justify-between items-center text-14 text-[#FEFEFE] rounded-10 gap-px">
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14">{props.item.title}</div>
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14">{props.item.crk}</div>
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14">{props.item.crd}</div>
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14">{props.item.nrk}</div>
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14">{props.item.nrd}</div>
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14"><span className="bg-[#5D697A] py-[6px] w-full rounded-lg mx-3">یادآوری</span></div>
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14">{props.item.sm}</div>
      </div>
      <div className="bg-[#383838A3] rounded-2xl flex lg:hidden flex-col gap-5 text-[#FEFEFE] p-4">
        <span className="font-bold">{props.item.title}</span>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col bg-[#383838] gap-2 p-2 rounded-lg">
            <span className="text-14 font-bold">کیلومتر تعویض فعلی</span>
            <span className="text-12">{props.item.crk}</span>
          </div>
          <div className="flex flex-col bg-[#383838] gap-2 p-2 rounded-lg">
            <span className="text-14 font-bold">تاریخ تعویض فعلی</span>
            <span className="text-12">{props.item.crd}</span>
          </div>
          <div className="flex flex-col bg-[#383838] gap-2 p-2 rounded-lg">
            <span className="text-14 font-bold">کیلومتر تعویض قبلی</span>
            <span className="text-12">{props.item.nrk}</span>
          </div>
          <div className="flex flex-col bg-[#383838] gap-2 p-2 rounded-lg">
            <span className="text-14 font-bold">تاریخ تعویض قبلی</span>
            <span className="text-12">{props.item.nrd}</span>
          </div>
          <div className="flex flex-col bg-[#383838] gap-2 p-2 rounded-lg col-span-full">
            <span className="text-14 font-bold">کیلومتر مصرفی استاندارد</span>
            <span className="text-12">{props.item.sm}</span>
          </div>
        </div>
        <button className="bg-[#5D697A] w-full h-8 flex justify-center items-center">یادآوری</button>
      </div>
    </>
  );
};

export default RecordModalCreatedCard;
