import React from "react";
import Image from "next/image";

const BatteryPurchaseProcess = ({ icon, title }) => {
  return (
    <>
      <li
        className={
          "bg-[#E7E7E7] flex flex-col justify-center gap-[16px] min-w-[158px] h-[136px] rounded-[16px]"
        }
      >
        <div className={"flex justify-center"}>
          <Image src={icon} alt={"purchase image"} width={48} height={48} />
        </div>
        <span className={"flex justify-center"}>{title}</span>
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
