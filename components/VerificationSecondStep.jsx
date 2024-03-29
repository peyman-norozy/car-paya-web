import Image from "next/image";
import React, { useEffect, useState } from "react";
import arrow from "@/public/assets/icons/Arrow-Left 1.svg";
import SelectReserveTimeAndDate from "./SelectReserveTimeAndDate";
import warning from "@/public/assets/icons/warning.svg";
import Button from "./Button";
import left from "@/public/assets/icons/angle-left.svg";
import arrowLeft from "@/public/assets/icons/Arrow-Left.svg";

const VerificationSecondStep = (props) => {
  const { setStep } = props;

  const [selectWeek, setSelectWeek] = useState(0);

  const dayData = [
    { day: "سه شنبه" },
    { day: "سه شنبه" },
    { day: "سه شنبه" },
    { day: "سه شنبه" },
    { day: "سه شنبه" },
    { day: "سه شنبه" },
    { day: "سه شنبه" },
  ];
  const nextWeekHandler = () => {
    setSelectWeek(1);
  };
  const previousWeekHandler = () => {
    setSelectWeek(0);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
      <div className="mt-[2rem] mb-[7rem] border border-[#c0c0c0] rounded-10 shadow-[0_5px_20px_5px_rgba(0,0,0,0.5)] size966:w-[95%] size1090:w-[85%] m-auto overflow-hidden ]">
        <div className="py-[1.2rem] px-[1rem] md:px-[3rem] flex items-center justify-between bg-[#EAEAEA]">
          <h1 className="text-text_gray text-18">انتخاب زمان دریافت خدمات</h1>
          <Image
            src={arrow}
            alt=""
            height={20}
            width={20}
            onClick={() => setStep(1)}
            className="cursor-pointer"
          />
        </div>
        <div className="overflow-x-scroll">
          <div className="px-[1rem] md:px-[3rem] pt-[3.2rem] flex flex-col gap-[1.5rem] w-[950px] size966:w-full">
            {dayData.map((item, index) => (
              <SelectReserveTimeAndDate day={item.day} key={index} />
            ))}
          </div>
        </div>
        <div className="px-[1rem] md:px-[3rem] py-[1.5rem] flex items-center gap-[0.25rem]">
          <Image src={warning} alt="" width={20} height={20} />
          <p className="text-text_gray text-14">
            در صورت انتخاب بازده زمانی 16:00 - 18:00 افزایش قیمت به دلیل پیک
            درخواست.
          </p>
        </div>
        <div className="px-[1rem] md:px-[3rem] mb-[3.5rem] flex flex-col gap-[1rem] md:flex-row md:items-center md:gap-0 justify-between">
          <div className="flex items-center gap-[0.65rem]">
            <Button
              on_click={previousWeekHandler}
              class_name="relative bg-[#F6F6F6] flex items-center gap-[0.25rem] py-[0.5rem] px-[1.25rem] rounded-10 shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <Image
                src={left}
                alt=""
                height={15}
                width={15}
                className="rotate-180"
              />
              <p className="text-14">هفته قبلی</p>
              {selectWeek === 0 && (
                <div className="absolute inset-0 w-full h-full bg-[#ddd] opacity-[0.5]"></div>
              )}
            </Button>
            <Button
              on_click={nextWeekHandler}
              class_name="relative bg-[#F6F6F6] flex items-center gap-[0.25rem] py-[0.5rem] px-[1.25rem] rounded-10 shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <p className="text-14">هفته بعدی</p>
              <Image src={left} alt="" height={15} width={15} />
              {selectWeek === 1 && (
                <div className="absolute inset-0 w-full h-full bg-[#ddd] opacity-[0.5]"></div>
              )}
            </Button>
          </div>
          <Button
            class_name="bg-[#3AAB38] w-max   flex items-center gap-[0.25rem] py-[0.5rem] px-[1.25rem] rounded-10 shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] hover:bg-[#109b38]"
            on_click={() => setStep(3)}
          >
            <p className="text-14 text-white">انتخاب مکان دریافت خدمات</p>
            <Image src={arrowLeft} alt="" height={20} width={20} />
          </Button>
        </div>
    </div>
  );
};

export default VerificationSecondStep;
