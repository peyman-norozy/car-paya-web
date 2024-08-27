import React from "react";

const BatterisDetailCard = (props) => {
  return (
    <>
      <li className={"flex items-center gap-[8px] w-[200px] text-14"}>
        <span
          className={
            "inline-block w-[20px] h-[20px] bg-[#24D34B80] rounded-full"
          }
        ></span>
        <p>آمپر:</p>
        <p>{props.item.amp}</p>
      </li>
      <li className={"flex items-center gap-[8px] w-[200px] text-14"}>
        <span
          className={
            "inline-block w-[20px] h-[20px] bg-[#24D34B80] rounded-full"
          }
        ></span>
        <p>تکنولوژی:</p>
        <p>{props.item.filters.technology}</p>
      </li>
      <li className={"flex items-center gap-[8px] w-[200px] text-14"}>
        <span
          className={
            "inline-block w-[20px] h-[20px] bg-[#24D34B80] rounded-full"
          }
        ></span>
        <p>ولتاژ:</p>
        <p>{props.item.filters.voltage}</p>
      </li>
      <li className={"flex items-center gap-[8px] w-[200px] text-14"}>
        <span
          className={
            "inline-block w-[20px] h-[20px] bg-[#24D34B80] rounded-full"
          }
        ></span>
        <p>قطب:</p>
        <p>{props.item.filters.pole}</p>
      </li>
      <li className={"flex items-center gap-[8px] w-[200px] text-14"}>
        <span
          className={
            "inline-block w-[20px] h-[20px] bg-[#24D34B80] rounded-full"
          }
        ></span>
        <p>گارانتی:</p>
        <p>{props.item.filters.warranty}</p>
      </li>
      <li className={"flex items-center gap-[8px] w-[200px] text-14"}>
        <span
          className={
            "inline-block w-[20px] h-[20px] bg-[#24D34B80] rounded-full"
          }
        ></span>
        <p>نوع:</p>
        <p>{props.item.filters.type}</p>
      </li>
    </>
  );
};

export default BatterisDetailCard;
