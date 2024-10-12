"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FacktorCard from "@/components/cards/FacktorCard/FacktorCard";
import PriceDetails from "@/components/PriceDetails/PriceDetails";
import { useSelector } from "react-redux";
import CompletePrice from "@/components/CompletePrice/CompletePrice";
import { useDraggable } from "react-use-draggable-scroll";
import { getCurrentData } from "@/utils/api-function-utils";
import { useRouter, useSearchParams } from "next/navigation";
import {
  persianDate,
  persianDateCovertor,
  persianStringDay,
} from "@/utils/function-utils";
import Link from "next/link";
import DiscountPercent from "@/components/DiscountPercent/DiscountPercent";
import axios from "axios";
import { getCookie } from "cookies-next";
import nProgress from "nprogress";

const VerificationInvoice = () => {
  const [faktorData, setFaktorData] = useState({});
  const [roleChecked, setRoleChecked] = useState(false);
  const [discountPrice, setDiscountPrice] = useState({});
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountedprice, setDiscountedPrice] = useState(0);
  const [fluctuatingPrice, setFluctuatingPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [cart, setCart] = useState({});
  const [vehicle, setVehicle] = useState({});
  const [coupon, setCoupon] = useState("");
  const innerWidth = useSelector((item) => item.todo.windowInnerWidth);
  //   const orderProduct = useRef();
  //   const { events } = useDraggable(orderProduct);
  const searchParams = useSearchParams();
  const cityId = searchParams.get("city_id");
  const typeService = searchParams.get("type_service");
  const vehicleTipId = searchParams.get("vehicle_tip");
  const package_id = searchParams.get("package_id");
  const exact_time = searchParams.get("exact_time");
  const reservation_time_slice_id = searchParams.get(
    "reservation_time_slice_id",
  );
  const registrationable_id = searchParams.get("registrationable_id");
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const response = await getCurrentData(
        "/web/expert/reservation?step=step-6",
        {
          city_id: searchParams.get("city_id"),
          vehicle_tip_id: searchParams.get("vehicle_tip"),
          type_service: searchParams.get("type_service"),
          package_id: searchParams.get("package_id"),
          exact_time: searchParams.get("exact_time"),
          reservation_time_slice_id: searchParams.get(
            "reservation_time_slice_id",
          ),
          registrationable_id: searchParams.get("registrationable_id"),
        },
      );
      if (response.success) {
        console.log(response);
        setDiscount(
          response.data.data.coupon_price ? response.data.data.coupon_price : 0,
        );
        setFaktorData(response.data.data);
      } else {
        console.log(response);
      }
    })();
    setCart(JSON.parse(sessionStorage.getItem("verificationCart")));
    setVehicle(JSON.parse(localStorage.getItem("selectedVehicle")));
  }, []);
  function registerClickHandler() {
    axios
      .post(
        process.env.BASE_API + "/web/order/register",
        {
          item_id: searchParams.get("package_id"),
          type: "master",
          address_id: searchParams.get("registrationable_id"),
          vehicle_tip_id: searchParams.get("vehicle_tip"),
          reservation_time_slice_id: searchParams.get(
            "reservation_time_slice_id",
          ),
          coupon_code: searchParams.get(coupon),
          shipped_time: searchParams.get("exact_time"),
        },
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        },
      )
      .then((res) => {
        nProgress.start();
        router.push(res?.data?.action);
      });
  }
  return (
    <div
      className={
        "lg:flex lg:gap-6 mb-8 mt-[28px] bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] px-2 lg:p-6 rounded-2xl min-h-[605px]"
      }
    >
      <div className={"lg:w-[calc(100%-424px)]"}>
        <section
          className={
            "flex items-center gap-2 sticky lg:top-[97px] top-[74px] right-0 bg-white py-2 z-[1000]"
          }
        >
          <i
            className={"cc-arrow-right text-24"}
            onClick={() => {
              router.back();
            }}
          />
          <span className={"text-14 font-semibold"}>
            جزئیات درخواست کارشناسی
          </span>
        </section>
        <div className=" flex flex-col gap-4 lg:mr-8">
          <section
            className={
              "text-14 flex flex-col gap-4 border-b-2 border-b-[#D1D1D1] pb-4 lg:mt-10"
            }
          >
            <div className={"flex items-center gap-1 w-full font-bold text-sm"}>
              <span>{vehicle.brand}</span>
              <span>{vehicle.model}</span>
              <span>{vehicle.tip}</span>
            </div>
            <Image
              src={process.env.BASE_API + "/web/file/" + vehicle.image}
              className={"w-[350px] h-[250px]"}
              alt={"car"}
              width={1000}
              height={750}
            />
            <div
              className={
                "flex items-center gap-1 w-full text-sm text-[#4F4F4F]"
              }
            >
              <span className={"font-medium"}>نوع کارشناسی:</span>
              <span className="font-bold">{cart.package_title}</span>
            </div>
            {/* <div className={"flex items-center gap-1 w-full text-sm text-[#4F4F4F]"}>
                <span className={"font-medium"}>شماره تماس:</span>
                <span className="font-bold">{faktorData?.user_info?.mobile}</span>
              </div> */}
          </section>
          <section
            className={
              " text-14 flex flex-col lg:flex-row gap-4 border-b-2 border-b-[#D1D1D1] pb-4"
            }
          >
            <div className={"flex items-start gap-1 w-full flex-col"}>
              <span className="text-[#3C3C3C] font-medium text-sm">
                محل دریافت خدمات:
              </span>
              {/* <span className={"font-medium"}>
              {Object.keys(faktorData).length > 0 &&
                persianDate(faktorData.reservation_time_day, "dddd")}
            </span> */}
              <span className={"text-[#454545] font-medium text-sm"}>
                {cart.selectedAddressText}
              </span>
            </div>
            <Link
              href={`/services/vehicle-inspection/location-selection?city_id=${cityId}&package_id=${package_id}&vehicle_tip=${vehicleTipId}&exact_time=${exact_time}&type_service=${typeService}&reservation_time_slice_id=${reservation_time_slice_id}`}
              className="text-[#518dd5] flex items-center gap-1 self-end border-b border-b-[#518dd5] pb-2 cursor-pointer"
            >
              <i className={"cc-edit text-20"} />
              <span className={"font-semibold w-max"}>تغییر آدرس</span>
            </Link>
          </section>
          <section
            className={
              "mt-4 text-14 flex flex-col lg:flex-row gap-4 border-b-2 border-b-[#F5F5F5] pb-4"
            }
          >
            <div className={"flex items-center gap-1 w-full "}>
              <span>تاریخ دریافت خدمات:</span>
              <span className={"font-medium"}>
                {persianDate(cart?.time_stamp, "dddd")}
              </span>
              <span className={"font-medium"}>
                {persianDate(cart?.time_stamp, "L")}
              </span>
            </div>
            <div className={"flex items-center gap-1 w-full"}>
              <span>ساعت دریافت خدمات:</span>
              <span className={"font-medium"}>{cart.exact_time}</span>
            </div>
            <Link
              href={`/services/vehicle-inspection/time-selection?city_id=${cityId}&package_id=${package_id}&vehicle_tip=${vehicleTipId}&exact_time=${exact_time}&type_service=${typeService}&reservation_time_slice_id=${reservation_time_slice_id}&registrationable_id=${registrationable_id}`}
              className="text-[#518dd5] flex items-center gap-1 mt-2 self-end border-b-2 border-b-[#518dd5] pb-2 cursor-pointer"
            >
              <i className={"cc-edit text-20"} />
              <span className={"font-semibold w-max"}>تغییر تاریخ و زمان</span>
            </Link>
          </section>
          <div className={"mt-4 block lg:hidden"}>
            <DiscountPercent
              id={faktorData?.id}
              type={"master"}
              setDiscount={setDiscount}
              coupon={coupon}
              setCoupon={setCoupon}
              setDiscountPrice={setDiscountPrice}
            />
          </div>
          <section className={"lg:flex lg:flex-col-reverse"}>
            {/* <section>
            <div className={"text-14 flex items-center gap-1 my-4"}>
              <span className={"font-medium text-sm text-[#454545]"}>جزئیات قیمت سرویس:</span>
              <span className={"text-[#888888]"}>1 کالا</span>
            </div>
            <div className={"w-full"}>
              <ul
                className={
                  "flex flex-col lg:flex-row gap-4 overflow-x-auto py-4 px-1"
                }
                {...events}
                ref={orderProduct}
              >
                <FacktorCard item={faktorData.service} />
              </ul>
            </div>
          </section> */}
            <section className="bg-white w-full text-14 mt-4 border-t border-[#D1D1D1]">
              {/* Price Details Section */}
              {innerWidth < 1024 && (
                <div className="space-y-4 py-4 w-full lg:h-fit border-b border-[#D1D1D1]">
                  <PriceDetails
                    faktorData={faktorData}
                    length={1}
                    discountPrice={discountPrice}
                    registerClickHandler={registerClickHandler}
                    price_fluctuation={cart?.price_fluctuation}
                    totalPrice={cart.price}
                    coupon={coupon}
                    setCoupon={setCoupon}
                    setRoleChecked={setRoleChecked}
                    roleChecked={roleChecked}
                    discount={discount}
                    setDiscountPrice={setDiscountPrice}
                    type={"master"}
                    finalPrice={finalPrice}
                    setFinalPrice={setFinalPrice}
                    discountedprice={discountedprice}
                    setDiscountedPrice={setDiscountedPrice}
                    fluctuatingPrice={fluctuatingPrice}
                    setFluctuatingPrice={setFluctuatingPrice}
                  />
                </div>
              )}
              {/* Address Section */}
              {/* <div className="mt-4 space-y-2 flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-gray-500">محل دریافت خدمات:</span>
                <span className="text-gray-900 text-right">
                  {faktorData.address_info?.address}
                </span>
              </div>
              <Link
                href={`/vehicle-inspection?step=step-4&city_id=${cityId}&package_id=${package_id}&vehicle_tip=${vehicleTipId}&exact_time=${exact_time}&type_service=${typeService}&reservation_time_slice_id=${reservation_time_slice_id}`}
                className="text-[#518dd5] flex items-center gap-1 mt-2 self-end border-b-2 border-b-[#518dd5] pb-2 cursor-pointer"
              >
                <i className={"cc-edit text-20"} />
                <span className={"font-semibold"}>تغییر آدرس</span>
              </Link>
            </div> */}
              {/* Date and Time Section */}
              {/* <div className="mt-4 space-y-2 flex flex-col gap-2">
              <div className="flex justify-between lg:justify-start lg:gap-4">
                <span className="text-gray-500">تاریخ دریافت خدمات:</span>
                <div className="text-gray-900 flex gap-2 items-start">
                  <span>
                    {Object.keys(faktorData).length > 0 &&
                      persianStringDay(faktorData.reservation_time_day)}
                  </span>
                  <span>
                    {Object.keys(faktorData).length > 0 &&
                      persianDateCovertor(faktorData.reservation_time_day)}
                  </span>
                </div>
              </div>
              <div className="flex justify-between lg:justify-start lg:gap-4">
                <span className="text-gray-500">ساعت دریافت خدمات:</span>
                <span>
                  {faktorData.reservation_time_slice?.split(",").join(" تا ")}
                </span>
              </div>
              <Link
                href={`/vehicle-inspection?step=step-2&city_id=${cityId}&package_id=${package_id}&vehicle_tip=${vehicleTipId}&exact_time=${exact_time}&type_service=${typeService}&reservation_time_slice_id=${reservation_time_slice_id}&registrationable_id=${registrationable_id}`}
                className="text-[#518dd5] flex items-center gap-1 mt-2 self-end border-b-2 border-b-[#518dd5] pb-2 cursor-pointer"
              >
                <i className={"cc-edit text-20"} />
                <span className={"font-semibold"}>تغییر تاریخ و زمان</span>
              </Link>
            </div> */}
              {/* <div className={"mt-4 block lg:hidden"}>
              <DiscountPercent />
            </div> */}
            </section>
          </section>
          {innerWidth < 1024 && (
            <CompletePrice
              customStyle={
                "bg-white fixed left-0 flex justify-between shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] rounded-t-xl"
              }
              type={"master"}
              roleChecked={roleChecked}
              discount={discount}
              registerClickHandler={registerClickHandler}
              finalPrice={finalPrice}
              discountedprice={discountedprice}
              fluctuatingPrice={fluctuatingPrice}
            />
          )}
          {/* <div className="flex justify-start items-center text-xs gap-1 font-medium mt-2 lg:hidden">
            <div
              className={`border-2 border-[#F58052] size-6 rounded-md ml-1 flex justify-center items-center ${roleChecked ? "bg-[#f58052]" : ""}`}
              onClick={() => {
                setRoleChecked(!roleChecked);
              }}
            >
              <i className="cc-tick text-white text-xl" />
            </div>
            <span className="text-[#F58052] underline">
              قوانین کار پایا و سیاست‌ نامه حریم‌ خصوصی
            </span>
            <span className="text-[#518DD5]">را می پذیرم</span>
          </div> */}
        </div>
      </div>
      {innerWidth > 1024 && (
        <div className="space-y-4 p-4 shadow-custom1 rounded-lg lg:w-[458px] lg:h-fit lg:sticky lg:top-[110px] lg:left-0 lg:block">
          <PriceDetails
            faktorData={faktorData}
            length={1}
            discountPrice={discountPrice}
            registerClickHandler={registerClickHandler}
            totalPrice={cart.price}
            price_fluctuation={cart?.price_fluctuation}
            coupon={coupon}
            setCoupon={setCoupon}
            setRoleChecked={setRoleChecked}
            roleChecked={roleChecked}
            discount={discount}
            setDiscountPrice={setDiscountPrice}
            type={"master"}
            finalPrice={finalPrice}
            setFinalPrice={setFinalPrice}
            discountedprice={discountedprice}
            setDiscountedPrice={setDiscountedPrice}
            fluctuatingPrice={fluctuatingPrice}
            setFluctuatingPrice={setFluctuatingPrice}
          />
        </div>
      )}
    </div>
  );
};

export default VerificationInvoice;
