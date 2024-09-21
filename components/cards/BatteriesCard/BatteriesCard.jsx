"use client";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import BatterisDetailCard from "@/components/cards/BatterisDetailCard/BatterisDetailCard";
import nProgress from "nprogress";
import BatteryPriceDitail from "@/components/BatteryPriceDitail/BatteryPriceDitail";

const BatteriesCard = (props) => {
  const router = useRouter();
  const pathName = usePathname();

  const batteryShowHandler = () => {
    nProgress.start();
    router.push(pathName + "/" + props.item.id);
  };

  return (
    <li
      className={
        "bg-[#FDFDFD] rounded-[16px] p-[16px] relative text-[#5D5D5D] flex flex-col gap-3 shadow-[0_0_6px_0_rgba(125,125,125,0.5)] lg:shadow-[0_0_4px_0_rgba(207,207,207,0.7)]"
      }
    >
      <div className={"flex flex-col justify-end gap-[8px]"}>
        <h1 className="lg:text-[16px] text-[14px] text-start font-bold text-[#303030] border-r border-r-[#F66B34] pr-2">
          {props.item.filters.brand} {props.item.name}
        </h1>
      </div>
      <div className={"flex lg:gap-6 gap-2"}>
        <div
          className={
            "h-[87px] w-[73px] lg:h-[183px] lg:w-[167px] rounded-[8px] relative self-center overflow-hidden"
          }
        >
          <Image
            src={process.env.BASE_API + "/web/file/" + props.item.image_id}
            alt={props.item.name}
            height={183}
            width={167}
            className={
              "cursor-pointer h-[87px] w-[73px] lg:h-[183px] lg:w-[167px]"
            }
            onClick={batteryShowHandler}
          />
          {/*<span*/}
          {/*  className={*/}
          {/*    "absolute top-0 right-0 flex justify-center items-center text-white text-[14px] rounded-bl-[20px] bg-[#E61919] w-[60px] h-[40px]"*/}
          {/*  }*/}
          {/*>*/}
          {/*  {props.item.discounted_percent}%*/}
          {/*</span>*/}
        </div>
        <div className={"flex-1"}>
          <ul
            className={`grid grid-cols-2 gap-y-2 text-[12px] lg:text-[14px] text-[#47505D]`}
          >
            <BatterisDetailCard item={props.item} />
          </ul>
          {props.isMounted && props.innerWidth >= 1024 && (
            <BatteryPriceDitail
              item={props.item}
              setBatteryIsSelected={props.setBatteryIsSelected}
            />
          )}
        </div>
      </div>

      <div className={`absolute -top-1 -left-1`}>
        <Image
          src={"/assets/icons/image85.svg"}
          alt={"percent"}
          width={52}
          height={51}
        />
        <span
          className={
            "absolute top-[7px] left-[8px] text-12 text-white -rotate-45"
          }
        >
          {props.item.discounted_percent}%
        </span>
      </div>
      {props.isMounted && props.innerWidth < 1024 && (
        <BatteryPriceDitail
          item={props.item}
          setBatteryIsSelected={props.setBatteryIsSelected}
        />
      )}
    </li>
  );
};

export default BatteriesCard;
