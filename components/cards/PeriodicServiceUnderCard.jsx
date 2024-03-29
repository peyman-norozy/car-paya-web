import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const PeriodicServiceUnderCard = (props) => {
  return (
    <li
      className={
        "shadow-[0_0_6px_0_rgba(177,177,177,1)] rounded-10 py-4 px-4 flex items-center gap-8"
      }
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
        <div className={"flex items-center gap-2"}>
          <span>{props.item.title}</span>
          <span className={"text-12 font-light"}>
            {props.item.titleDescription}
          </span>
        </div>
        <ul className={"grid grid-cols-2 gap-4"}>
          {props.item.options.map((item, index) => (
            <li key={index} className={"flex items-center gap-2"}>
              <Image
                src={"/assets/images/Star 1.svg"}
                alt={"icon"}
                width={24}
                height={24}
              />
              <span className={"font-light text-14"}>{item}</span>
            </li>
          ))}
        </ul>
        <Button
          type={"button"}
          class_name={
            "bg-[#E73C33] text-white font-light text-14 self-start px-10 py-2 rounded-5"
          }
        >
          انتخاب خدمات
        </Button>
      </div>
    </li>
  );
};

export default PeriodicServiceUnderCard;
