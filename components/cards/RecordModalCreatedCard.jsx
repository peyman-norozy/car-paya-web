import React from "react";
import CarBackgroundCard from "@/components/cards/CarBackgroundCard";
import { persianDateCovertor } from "@/utils/function-utils";

const RecordModalCreatedCard = (props) => {
  const { item } = props;
  return (
      <div className="flex justify-between items-center text-14 text-[#FEFEFE] rounded-10 gap-px">
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14">روغن موتور</div>
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14">120000 Km</div>
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14">1402/5/10</div>
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14">120000 Km</div>
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14">1402/5/10</div>
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14"><span className="bg-[#5D697A] py-[6px] px-[60px] rounded-lg">یادآوری</span></div>
        <div className="flex-1 text-center bg-[#444444] flex items-center justify-center h-14">120000 Km</div>
      </div>
  );
};

export default RecordModalCreatedCard;
