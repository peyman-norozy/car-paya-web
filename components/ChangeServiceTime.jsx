import React from "react";
import Button from "./Button";
import arrow from "@/public/assets/icons/Arrow-Down.svg";
import Image from "next/image";

const ChangeServiceTime = (props) => {
  return (
    <div className="rounded-10 w-full bg-[#FFF0F0] flex flex-row items-center justify-between py-[0.75rem] px-[0.5rem] md:px-[1rem]">
      <div className="flex items-center gap-[0.5rem]">
        <p className="text-[12px] md:text-[15px]">1403/01/01</p>
        <p className="text-[12px] md:text-[15px]">سه‌شنبه</p>
        <p className="text-[12px] md:text-[15px]">10:00 - 12:00</p>
      </div>
      <Button
        class_name="py-[0.5rem] rounded-5 px-[0.5rem] size460:px-[1.5rem] w-max bg-white text-text_gray flex items-center gap-[0.25rem]"
        on_click={props.on_click}
      >
        <Image
          src={arrow}
          alt=""
          height={10}
          width={10}
          className="-rotate-90"
        />
        <p className="text-12 size411:text-14">تغییر زمان دریافت خدمت</p>
      </Button>
    </div>
  );
};

export default ChangeServiceTime;
