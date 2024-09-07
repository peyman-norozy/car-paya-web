"use client";
import React, { useState } from "react";
import Image from "next/image";
import { error, numberWithCommas } from "@/utils/function-utils";
import Button from "@/components/Button";
import DetailingResponsiveButton from "@/components/DetailingResponsiveButton/DetailingResponsiveButton";
import { usePathname, useRouter } from "next/navigation";
import toman from "@/public/assets/icons/toman.svg";
import { setBatteriesData } from "@/store/todoSlice";
import star from "@/public/assets/icons/Star-red.svg";
import BatterisDetailCard from "@/components/cards/BatterisDetailCard/BatterisDetailCard";
import { useDispatch, useSelector } from "react-redux";
import nProgress from "nprogress";
import { postData } from "@/utils/client-api-function-utils";

const BatteriesCard = (props) => {
  const batteryBasketLength = useSelector(
    (item) => item.todo.batteriesBasketLength,
  );
  const [morDetail, setMorDetail] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();

  const moreClickHandler = () => {
    setMorDetail(true);
  };

  const batteryShowHandler = () => {
    nProgress.start();
    router.push(pathName + "/" + props.item.id);
  };

  const basketClickHandler = async () => {
    const CityId = JSON.parse(localStorage.getItem("city"))?.cityId;
    const selectedVehicleId = JSON.parse(
      localStorage.getItem("selectedVehicle"),
    )?.id;

    // if (
    //   pathName.includes("/batteries") &&
    //   props.item.id !==
    //     JSON.parse(localStorage.getItem("batteryTotalPrice"))?.productId
    // ) {
    //   const data = await postData("/web/cart/remove", {
    //     cartable_id: JSON.parse(localStorage.getItem("batteryTotalPrice"))
    //       ?.productId,
    //     cartable_type: "BATTERIES",
    //     vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
    //   });
    //   console.log(data);
    // }

    if (batteryBasketLength) {
      error("فقط یک محصول میتوانید به سبد خرید خود اضافه کنید");
    } else if (
      batteryBasketLength &&
      props.item.id ===
        JSON.parse(localStorage.getItem("batteryTotalPrice"))?.productId
    ) {
      error("باتری برای این وسیله نقلیه انتخاب شده است");
    } else if (CityId && selectedVehicleId) {
      props.setBatteryIsSelected(true);
      dispatch(setBatteriesData(props.item));
    } else if (!CityId) {
      error("فیلد شهر و استان را انتخاب نشده");
    } else if (!selectedVehicleId) {
      error("لطفا خودرو خود را انتخاب کنید");
    }
  };

  return (
    <li
      className={
        "bg-[#E7E7E7] rounded-[16px] shadow-lg p-[16px] relative text-[#5D5D5D] flex flex-col gap-3"
      }
    >
      <div className={"flex flex-col justify-end gap-[8px]"}>
        <h1 className="lg:text-[24px] text-[14px] text-start font-bold text-[#303030]">
          {props.item.filters.brand} {props.item.name}
        </h1>
      </div>
      <div className={"flex gap-2"}>
        <div
          className={
            "h-[87px] w-[73px] bg-[#eee] rounded-[8px] relative self-center overflow-hidden"
          }
        >
          <Image
            src={process.env.BASE_API + "/web/file/" + props.item.image_id}
            alt={props.item.name}
            height={87}
            width={73}
            className={"cursor-pointer h-[87px] w-[73px]"}
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
        <ul className={`grid grid-cols-2 gap-y-2 text-[12px] text-[#47505D]`}>
          <BatterisDetailCard
            item={props.item}
            buletStyle={"w-[5px] h-[5px] bg-[#5D5D5D]"}
          />
        </ul>
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
      <div className="flex items-center size671:flex-row gap-[0.75rem] pt-[0.25rem]">
        <p className={"lg:text-[16px] text-14"}>قیمت </p>
        <div className="flex flex-row items-center gap-[0.75rem]">
          <span className="flex items-center gap-[0.25rem] line-through text-center lg:text-[16px] text-14">
            {numberWithCommas(props.item.price)} تومان
          </span>
          <span className="flex items-center gap-[0.25rem] text-center lg:text-[16px] text-14">
            {numberWithCommas(props.item["discounted_price"])}
            <span>تومان</span>
          </span>
        </div>
      </div>
      <div className={"flex size1314:flex-row size1314:gap-[0.75rem] gap-0"}>
        <p className={"lg:text-[16px] text-14"}>
          قیمت با دریافت باطری فرسوده هم آمپر
        </p>
        <div className="flex items-center gap-[0.75rem]">
          <span className="flex items-center gap-[0.25rem] text-center lg:text-[16px] text-14">
            {numberWithCommas(props.item["same_amp"])}تومان
          </span>
        </div>
      </div>
      <div className={"flex justify-between"}>
        <div className={"flex items-center gap-[0.75rem]"}>
          <p className={"lg:text-[14      px] text-12 text-[#518DD5]"}>
            ارسال و نصب رایگان
          </p>
        </div>
        <Button
          on_click={basketClickHandler}
          class_name={
            "bg-[#F66B34] text-white w-[120px] h-[34px] text-12 self-end rounded-[8px] flex item-center justify-between"
          }
        >
          <span className={"h-full flex  items-center pr-3"}>
            تایید و ادامه
          </span>
          <i className={"cc-left text-[24px] mt-1 mr-1 pl-3"} />
        </Button>
      </div>

      <div className={"size1142:hidden block"}>
        {pathName !== "/batteries/products" && <DetailingResponsiveButton />}
      </div>
    </li>
  );
};

export default BatteriesCard;
