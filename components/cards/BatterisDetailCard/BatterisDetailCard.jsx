import React from "react";

const BatterisDetailCard = (props) => {
  return (
    <>
      <li className={"flex items-center gap-[8px] w-full max-w-[100px]"}>
        <i
          className={
            "cc-tick bg-[#DDF5E9] text-[#34B674] rounded-full py-[2px] px-[1px] text-[14px]"
          }
        />
        <p className={"text-[12px] lg:text-[14px] font-medium"}>آمپر:</p>
        <p className={"text-[12px] lg:text-[14px] font-medium"}>
          {props.item.amp}
        </p>
      </li>
      <li className={"flex items-center gap-[8px] w-full max-w-[100px]"}>
        <i
          className={
            "cc-tick bg-[#DDF5E9] text-[#34B674] rounded-full py-[2px] px-[1px] text-[14px]"
          }
        />
        <p className={"text-[12px] lg:text-[14px] font-medium"}>تکنولوژی:</p>
        <p className={"text-[12px] lg:text-[14px] font-medium"}>
          {props.item.filters.technology}
        </p>
      </li>

      <li className={"flex items-center gap-[8px] w-full max-w-[100px]"}>
        <i
          className={
            "cc-tick bg-[#DDF5E9] text-[#34B674] rounded-full py-[2px] px-[1px] text-[14px]"
          }
        />
        <p className={"text-[12px] lg:text-[14px] font-medium"}>گارانتی:</p>
        <p className={"text-[12px] lg:text-[14px] font-medium"}>
          {props.item.filters.warranty}
        </p>
      </li>
      <li className={"flex items-center gap-[8px] w-full max-w-[100px]"}>
        <i
          className={
            "cc-tick bg-[#DDF5E9] text-[#34B674] rounded-full py-[2px] px-[1px] text-[14px]"
          }
        />
        <p className={"text-[12px] lg:text-[14px] font-medium"}>قطب:</p>
        <p className={"text-[12px] lg:text-[14px] font-medium"}>
          {props.item.filters.pole}
        </p>
      </li>
      <li className={"flex items-center gap-[8px] w-full max-w-[100px]"}>
        <i
          className={
            "cc-tick bg-[#DDF5E9] text-[#34B674] rounded-full py-[2px] px-[1px] text-[14px]"
          }
        />
        <p className={"text-[12px] lg:text-[14px] font-medium"}>ولتاژ:</p>
        <p className={"text-[12px] lg:text-[14px] font-medium"}>
          {props.item.filters.voltage}
        </p>
      </li>

      <li className={"flex items-center gap-[8px] w-full max-w-[100px]"}>
        <i
          className={
            "cc-tick bg-[#DDF5E9] text-[#34B674] rounded-full py-[2px] px-[1px] text-[14px]"
          }
        />
        <p className={"text-[12px] lg:text-[14px] font-medium"}>نوع:</p>
        <p className={"text-[12px] lg:text-[14px] font-medium"}>
          {props.item.filters.type}
        </p>
      </li>
    </>
  );
};

export default BatterisDetailCard;
