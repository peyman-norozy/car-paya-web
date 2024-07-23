import React from "react";
import Image from "next/image";
import Link from "next/link";

const PeriodicServiceUnderCard = (props) => {
  return (
    <div
      className={"shadow-[0_0_6px_0_rgba(177,177,177,1)] rounded-10 py-4 px-4 flex flex-col md:flex-row items-center gap-12"}
    >
      <div className={"w-[100px] h-[100px]"}>
        <Image
          src={"/assets/images/1.png"}
          alt={"icon"}
          width={200}
          height={200}
        />
      </div>
      <div className={"flex flex-col gap-4 flex-1"}>
        <div className={"flex flex-col gap-1 items-start font-medium md:font-bold text-18 md:text-[22px]"}>
          <span className="text-center md:text-right w-full">{props.item.title}</span>
          <span className={"text-12 font-light"}>
            {props.item.titleDescription}
          </span>
        </div>
        <ul className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {props.item.options.map((item, index) => (
            <li key={index} className={"flex items-center gap-2 "}>
              <Image
                src={"/assets/images/Star 1.svg"}
                alt={"icon"}
                width={24}
                height={24}
                className="size-[18px] md:size-[24px]"
              />
              <span className={"text-base md:text-18"}>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href={"/periodic-service/service-selection"}
          className={"bg-[#E73C33] text-white font-light text-14 self-start px-6 md:px-10 py-1 md:py-2 rounded-5 flex items-center gap-1"}>
          <i className="cc-login text-xl"/>
          <span className="text-base md:text-18">انتخاب خدمات</span>
        </Link>
      </div>
    </div>
  );
};

export default PeriodicServiceUnderCard;
