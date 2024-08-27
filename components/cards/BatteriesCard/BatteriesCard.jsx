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

  console.log(props);

  return (
    <li
      className={
        "bg-[#E7E7E7] size666:rounded-[16px] rounded-none shadow-lg p-[16px] "
      }
    >
      <div className={"flex lg:flex-row flex-col gap-[16px]"}>
        <div
          className={
            "w-[240px] h-[240px] bg-[#eee] rounded-[8px] relative self-center overflow-hidden"
          }
        >
          <Image
            src={process.env.BASE_API + "/web/file/" + props.item.image_id}
            alt={props.item.name}
            height={240}
            width={240}
            className={"cursor-pointer"}
            onClick={batteryShowHandler}
          />
          <span
            className={
              "absolute top-0 right-0 flex justify-center items-center text-white text-[14px] rounded-bl-[20px] bg-[#E61919] w-[60px] h-[40px]"
            }
          >
            {props.item.discounted_percent}%
          </span>
        </div>
        <div className={"flex-1"}>
          <div className={"flex flex-col justify-end gap-[8px]"}>
            <h1 className="lg:text-[24px] text-[20px] text-center size671:text-start font-bold text-[#303030] ">
              {props.item.filters.brand} {props.item.name}
            </h1>
          </div>
          <ul
            className={`size1142:grid hidden grid-cols-2 gap-y-[16px] text-[12px] text-[#47505D] mt-[24px]`}
          >
            <BatterisDetailCard item={props.item} />
          </ul>
          <div className={"mt-[24px] flex justify-between size"}>
            <div>
              <div className={"flex items-center gap-[0.75rem]"}>
                <Image
                  src={star}
                  alt=""
                  width={20}
                  height={20}
                  className="mb-[0.35rem] self-center mt-[0.25rem]"
                />
                <p className={"lg:text-[16px] text-14"}>ارسال و نصب رایگان</p>
              </div>
              <div className="flex items-center size671:flex-row gap-[0.75rem] pt-[0.25rem]">
                <Image
                  src={star}
                  alt=""
                  width={20}
                  height={20}
                  className="mb-[0.35rem] self-center mt-[0.25rem]"
                />
                <p className={"lg:text-[16px] text-14"}>قیمت </p>
                <div className="flex flex-row items-center gap-[0.75rem]">
                  <span className="flex items-center gap-[0.25rem] line-through text-center lg:text-[16px] text-14">
                    {numberWithCommas(props.item.price)}
                    <Image
                      src={toman}
                      alt=""
                      width={20}
                      height={20}
                      className="mb-[0.5rem]"
                    />
                  </span>
                  <span className="flex items-center gap-[0.25rem] text-center lg:text-[16px] text-14">
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
                <div
                  className={
                    "flex flex-col size1314:flex-row size1314:gap-[0.75rem] gap-0"
                  }
                >
                  <p className={"lg:text-[16px] text-14"}>
                    قیمت با دریافت باطری فرسوده هم آمپر
                  </p>
                  <div className="flex items-center gap-[0.75rem]">
                    <span className="flex items-center gap-[0.25rem] text-center lg:text-[16px] text-14">
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
            </div>
            <Button
              on_click={basketClickHandler}
              class_name={
                "bg-[#F66B34] text-white w-[160px] h-[40px] lg:text-[16px] text-12 self-end rounded-[8px] size1400:block hidden"
              }
            >
              تایید و ادامه
            </Button>
          </div>
          <Button
            on_click={basketClickHandler}
            class_name={
              "bg-[#F66B34] text-white w-[160px] h-[40px] lg:text-[16px] text-12 float-left mt-rounded-[8px] size1400:hidden block rounded-[8px] mt-2"
            }
          >
            تایید و ادامه
          </Button>
        </div>
      </div>
      <div className={"size1142:hidden block"}>
        {pathName !== "/batteries/products" && <DetailingResponsiveButton />}
      </div>
    </li>
  );
};

export default BatteriesCard;
