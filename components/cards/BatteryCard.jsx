import Image from "next/image";
import React from "react";
import Button from "../Button";
import star from "@/public/assets/icons/Star-red.svg";
import toman from "@/public/assets/icons/toman.svg";
import { numberWithCommas } from "@/utils/function-utils";

const BatteryCard = ({ data ,setBatteryIsSelected }) => {
  return (
    <div className="w-full rounded-10 shadow-[0_0_6px_0_rgba(177,177,177,1)]   p-[1.5rem] flex items-center justify-between">
      <Image src={data.image} alt={data.title} height={100} width={116} />
      <div>
        <h1 className="text-[1.25rem] font-bold text-[#303030]">{data.title}</h1>
        <ul className="grid grid-cols-2 gap-x-[5rem] gap-y-[0.75rem] text-text_gray my-[1rem]">
          <li className="flex items-center gap-[0.25rem]">
            <p>آمپر:</p>
            <p>{data.options.amp}</p>
          </li>
          <li className="flex items-center gap-[0.25rem]">
            <p>تکنولوژی:</p>
            <p>{data.options.tech}</p>
          </li>
          <li className="flex items-center gap-[0.25rem]">
            <p>ولتاژ:</p>
            <p>{data.options.voltage}</p>
          </li>
          <li className="flex items-center gap-[0.25rem]">
            <p>قطب:</p>
            <p>{data.options.pole}</p>
          </li>
          <li className="flex items-center gap-[0.25rem]">
            <p>گارانتی:</p>
            <p>{data.options.garanty} ماه</p>
          </li>

          <li className="flex items-center gap-[0.25rem]">
            <p>نوع:</p>
            <p>{data.options.type}</p>
          </li>
        </ul>
        <ul className="flex flex-col gap-[0.5rem]">
          <li className="text-text_gray text-[1rem] flex gap-[0.5rem]">
            <Image src={star} alt="" width={20} height={20} />
            <p className="mt-[0.25rem]">
              {data.extra.freeDel && "ارسال و نصب رایگان"}
            </p>
          </li>
          <li className="text-text_gray text-[1rem] flex gap-[0.5rem]">
            <Image src={star} alt="" width={20} height={20} className="mb-[0.35rem]"/>
            <div className="flex gap-[0.75rem] pt-[0.25rem]">
              <p>قیمت با دریافت باطری فرسوده</p>
              <div className="flex items-center gap-[0.75rem]">
                <span className="flex items-center gap-[0.25rem] line-through text-center">
                  {numberWithCommas(data.extra.oldPrice)}
                  <Image
                    src={toman}
                    alt=""
                    width={20}
                    height={20}
                    className="mb-[0.5rem]"
                  />
                </span>
                <span className="flex items-center gap-[0.25rem] text-center">
                  {numberWithCommas(data.extra.newPrice)}
                  <Image
                    src={toman}
                    alt=""
                    width={20}
                    height={20}
                    className="mb-[0.5rem]"
                  />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Button on_click={() => setBatteryIsSelected(true)} class_name="bg-RED_500 rounded-[8px] text-white py-[1rem] px-[2rem] self-end hover:bg-RED_600">
        اضافه به سبد خرید
      </Button>
    </div>
  );
};

export default BatteryCard;
