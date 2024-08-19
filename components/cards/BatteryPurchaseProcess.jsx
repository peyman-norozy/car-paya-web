import React from "react";
import Image from "next/image";

const BatteryPurchaseProcess = ({ icon, title }) => {
  return (
    <>
      <li
        className={
          "bg-[#E7E7E7] flex flex-col justify-center gap-[16px] lg:min-w-[158px] min-w-[130px] lg:h-[136px] h-[100px] rounded-[16px]"
        }
      >
        <div className={"flex justify-center"}>
          <Image
            src={icon}
            alt={"purchase image"}
            width={48}
            height={48}
            className={"lg:w-12 w-8"}
          />
        </div>
        <span className={"flex justify-center lg:text-16 text-14"}>
          {title}
        </span>
      </li>
      <li className={"min-w-[20px] rotate-180 flex items-center"}>
        <Image
          src={"/assets/icons/arrowhead.png"}
          alt={"arrowhead"}
          width={50}
          height={50}
        />
      </li>
    </>
  );
};

export default BatteryPurchaseProcess;
