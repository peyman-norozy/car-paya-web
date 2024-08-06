import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

const DetailingDetailCard = (props) => {
  return (
    <li className={"flex items-center gap-[8px] w-[200px] text-14"}>
      {props.item.value?
      <AiOutlineCheckCircle className="size-5 text-[#17c726]"/>:
      <AiOutlineCloseCircle className="size-5 text-[#c71717]"/>
      }
      {/* <span className={`inline-block w-[20px] h-[20px] bg-[#24D34B80] rounded-full`}></span> */}
      <span className={"line-clamp-1"}>{props.item.label}</span>
    </li>
  );
};

export default DetailingDetailCard;
