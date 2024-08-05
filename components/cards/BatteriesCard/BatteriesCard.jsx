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
import { useDispatch } from "react-redux";

const BatteriesCard = (props) => {
  const [morDetail, setMorDetail] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();

  const moreClickHandler = () => {
    setMorDetail(true);
  };

  const batteryShowHandler = () => {
    router.push(pathName + "/" + props.item.id);
  };

  const basketClickHandler = () => {
    const CityId = JSON.parse(localStorage.getItem("city"))?.cityId;
    if (CityId) {
      props.setBatteryIsSelected(true);
      dispatch(setBatteriesData(props.item));
    } else {
      error("فیلد شهر و استان را انتخاب نشده");
    }
  };

  return (
    <li
      className={
        "bg-[#E7E7E7] size666:rounded-[16px] rounded-none shadow-lg p-[16px]"
      }
    >
      <div className={"flex gap-[16px]"}>
        <div
          className={
            "size666:w-[240px] w-[140px] size666:h-[240px] h-[144px] bg-[#eee] rounded-[8px] relative"
          }
        >
          <Image
            src={process.env.BASE_API + "/web/file/" + props.item.image_id}
            alt={props.item.name}
            height={100}
            width={116}
            className={"cursor-pointer w-full h-full"}
            onClick={batteryShowHandler}
          />
          <span
            className={
              "absolute top-0 right-0 flex justify-center items-center text-white text-[14px] rounded-bl-[20px] bg-[#E61919] w-[60px] h-[40px]"
            }
          >
            30%
          </span>
        </div>
        <div className={"flex-1"}>
          <div className={"flex flex-col justify-end gap-[8px]"}>
            <h1 className="text-[1.25rem] text-center size671:text-start font-bold text-[#303030]">
              {props.item.filters.brand} {props.item.name}
            </h1>
          </div>
          <ul
            className={`size1142:grid hidden grid-cols-2 gap-y-[16px] text-[12px] text-[#47505D] mt-[24px]`}
          >
            <BatterisDetailCard item={props.item} />
          </ul>
          <div className={"mt-[24px] flex justify-between"}>
            <div>
              <div className={"flex items-center gap-[0.75rem]"}>
                <Image
                  src={star}
                  alt=""
                  width={20}
                  height={20}
                  className="mb-[0.35rem] self-center mt-[0.25rem]"
                />
                <p>ارسال و نصب رایگان</p>
              </div>
              <div className="flex items-center size671:flex-row gap-[0.75rem] pt-[0.25rem]">
                <Image
                  src={star}
                  alt=""
                  width={20}
                  height={20}
                  className="mb-[0.35rem] self-center mt-[0.25rem]"
                />
                <p>قیمت </p>
                <div className="flex items-center gap-[0.75rem]">
                  <span className="flex items-center gap-[0.25rem] line-through text-center">
                    {numberWithCommas(props.item.price)}
                    <Image
                      src={toman}
                      alt=""
                      width={20}
                      height={20}
                      className="mb-[0.5rem]"
                    />
                  </span>
                  <span className="flex items-center gap-[0.25rem] text-center">
                    {numberWithCommas(props.item["discounted_price"])}
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
              <div className="flex items-center size671:flex-row gap-[0.75rem] pt-[0.25rem]">
                <Image
                  src={star}
                  alt=""
                  width={20}
                  height={20}
                  className="mb-[0.35rem] self-center mt-[0.25rem]"
                />
                <p>قیمت با دریافت باطری فرسوده هم آمپر</p>
                <div className="flex items-center gap-[0.75rem]">
                  <span className="flex items-center gap-[0.25rem] text-center">
                    {numberWithCommas(props.item["same_amp"])}
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
            </div>
            <Button
              on_click={basketClickHandler}
              class_name={
                "bg-[#F66B34] text-white w-[160px] h-[40px] font-[14px] self-end rounded-[8px]"
              }
            >
              اضافه به سبد خرید
            </Button>
          </div>
        </div>
      </div>
      <div className={"size1142:hidden block"}>
        {<DetailingResponsiveButton />}
      </div>
    </li>
  );
};

export default BatteriesCard;
