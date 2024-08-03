import React from "react";

const DetailingDetailCard = (props) => {
  return (
    <li className={"flex items-center gap-[8px] w-[200px] text-14"}>
      <span
        className={"inline-block w-[20px] h-[20px] bg-[#24D34B80] rounded-full"}
      ></span>
      <span className={"line-clamp-1"}>{props.item}</span>
    </li>
  );
};

export default DetailingDetailCard;
