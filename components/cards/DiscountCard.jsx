import React from "react";
import { persianDateCovertor } from "@/utils/function-utils";

const DiscountCard = (props) => {
  return (
    <li className="flex flex-col gap-[16px] size1000:flex-1 w-full rounded-[10px] px-[43px] py-6 shadow-[0_0_6px_0_rgba(180,180,180,0.3)]">
      <div className={"flex items-center gap-3"}>
        <span
          className={
            "inline-block bg-[#E95149] w-[10px] h-[10px] rounded-full shadow-[0_0_8px_1px_rgba(233,81,73,1)]"
          }
        ></span>
        <div className={"flex gap-1"}>
          <span className={"text-[#888888] font-light"}>تاریخ انقضا</span>
          <span className={"text-[#888888] font-light"}>
            {persianDateCovertor(props.item.expired_at)}
          </span>
        </div>
      </div>
      <div className={"flex justify-between items-center"}>
        <p className={"text-[#3D3D3D]"}>{props.item.description}</p>
        <section className={"flex items-center gap-[8px]"}>
          <i
            className={
              "cc-copy text-[#A5A0A0] border border-[#A5A0A0] text-[20px] p-2 rounded-[8px]"
            }
          />
          <span className={"text-[#A5A0A0]"}>کپی کردن لینک</span>
        </section>
      </div>
    </li>
  );
};

export default DiscountCard;
