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
import { persianDateCovertor, persianStringDay } from "@/utils/function-utils";
import Link from "next/link";
import DiscountPercent from "@/components/DiscountPercent/DiscountPercent";
import { postData } from "@/utils/client-api-function-utils";

const InvoicePage = () => {
  const [client, setClient] = useState(false);
  const [faktorData, setFaktorData] = useState({});
  const [roleChecked, setRoleChecked] = useState(false);
  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState({});
  const [coupon, setCoupon] = useState("");

  const [discount, setDiscount] = useState(0);
  const innerWidth = useSelector((item) => item.todo.windowInnerWidth);
  // const orderProduct = useRef();
  // const { events } = useDraggable(orderProduct);
  const searchParams = useSearchParams();
  const cityId = searchParams.get("city_id");
  const type = searchParams.get("type");
  const vehicleTipId = searchParams.get("vehicle_tip_id");
  const amper = searchParams.get("amper");
  const typeService = searchParams.get("type_service");
  const serviceLocationId = searchParams.get("service_location_id");
  const time = searchParams.get("time_id");
  const router = useRouter();
  const timestamp = Math.floor(Date.now() / 1000);

  useEffect(() => {
    setClient(true);
    //   (async () => {
    //     const response = await getCurrentData(
    //       "/web/reservation/battery?step=step-4",
    //       {
    //         city_id: searchParams.get("city_id"),
    //         reservation_time_slice_id: searchParams.get("time_id")?.split("/")[0],
    //         vehicle_tip_id: searchParams.get("vehicle_tip_id"),
    //         registrationable_id: searchParams.get("service_location_id"),
    //         exact_time: searchParams.get("time_id")?.split("/")[1],
    //         amp: searchParams.get("amper"),
    //         type: searchParams.get("type_service"),
    //         type_service: searchParams.get("type"),
    //       },
    //     );
    //     if (response.success) {
    //       setFaktorData(response.data.data);
    //     } else {
    //       console.log(response);
    //     }
    //   })();
  }, []);

  async function registerClickHandler() {
    const response = await postData("/web/order/register", {
      item_id: searchParams.get("item_id"),
      type: "battery",
      address_id: searchParams.get("service_location_id"),
      vehicle_tip_id: searchParams.get("vehicle_tip_id"),
      reservation_time_slice_id: searchParams.get("time_id")?.split("/")[0],
      coupon_code: searchParams.get(coupon),
      amp_user: searchParams.get("amper"),
      battery_type: searchParams.get("type_service"),
      shipped_time: searchParams.get("time_id")?.split("/")[1],
    });
    console.log(response);
    // router.push(response?.data?.data?.url);
  }

  if (!client) {
    return null;
  }

  const cartTipImage = JSON.parse(localStorage.getItem("selectedVehicle"));
  const userMobile = JSON.parse(localStorage.getItem("user-profile"))?.mobile;
  const locationServiceAddress = JSON.parse(
    sessionStorage.getItem("batteriesCart"),
  )?.address;
  const dateServiceAddress = JSON.parse(
    sessionStorage.getItem("batteriesCart"),
  )?.timeSelect;

  console.log(dateServiceAddress);

  return (
    <div
      className={
        "bg-white py-6 pt-[20px] px-14 lg:flex lg:gap-6 mb-8 lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] lg:mt-6 rounded-[16px]"
      }
    >
      <div className={"lg:w-[calc(100%-424px)]"}>
        <section
          className={
            "flex items-center gap-2 sticky lg:top-[97px] top-[74px] right-0 bg-white py-2 z-[1000]"
          }
        >
          <Link
            href={`/batteries/products/newTimeSelector?city_id=${cityId}&type=${type}&vehicle_tip_id=${vehicleTipId}&amper=${amper}&type_service=${typeService}&service_location_id=${serviceLocationId}`}
            className={"flex items-center"}
          >
            <i className={"cc-arrow-right text-24"} />
          </Link>
          <span className={"text-14 font-semibold"}>جزئیات سفارش باتری</span>
        </section>
        <section className={"flex justify-center"}>
          <Image
            src={process.env.BASE_API + "/web/file/" + cartTipImage.image}
            className={"w-[350px] h-[250px]"}
            alt={"car"}
            width={1000}
            height={750}
          />
        </section>
        <section
          className={
            "text-14 flex flex-col lg:flex-row gap-4 border-b-2 border-b-[#F5F5F5] pb-4"
          }
        >
          <div className={"flex items-center gap-1 w-full"}>
            <span className={"font-semibold"}>خودرو شما:</span>
            {/*<span>{cartTipImage.brand}</span>*/}
            {/*<span>{cartTipImage.model}</span>*/}
            <span>{cartTipImage.title}</span>
          </div>
          <div className={"flex items-center gap-1 w-full"}>
            <span className={"font-semibold"}>نام:</span>
            <span>{faktorData?.user_info?.name}</span>
          </div>
          <div className={"flex items-center gap-1 w-full"}>
            <span className={"font-semibold"}>شماره تماس:</span>
            {/*<span>{faktorData?.user_info?.mobile}</span>*/}
            <span>{userMobile}</span>
          </div>
        </section>
        <section
          className={
            "mt-4 text-14 flex flex-col lg:flex-row gap-4 border-b-2 border-b-[#F5F5F5] pb-4"
          }
        >
          <div className={"flex items-center gap-1 w-full "}>
            <span>تاریخ ثبت سفارش:</span>
            <span className={"font-semibold"}>
              {/*{Object.keys(faktorData).length > 0 &&*/}
              {/*  persianDateCovertor(faktorData.created_at)}*/}
              {persianDateCovertor(timestamp)}
            </span>
          </div>
        </section>
        <section className={"lg:flex lg:flex-col-reverse"}>
          {/*<section>*/}
          {/*  <div className={"text-14 flex items-center gap-1 my-4"}>*/}
          {/*    <span className={"font-semibold"}>سفارش شما:</span>*/}
          {/*    <span className={"text-[#888888]"}>1 کالا</span>*/}
          {/*  </div>*/}
          {/*  <div className={"w-full"}>*/}
          {/*    <ul*/}
          {/*      className={*/}
          {/*        "flex flex-col lg:flex-row gap-4 overflow-x-auto py-4 px-1"*/}
          {/*      }*/}
          {/*      {...events}*/}
          {/*      ref={orderProduct}*/}
          {/*    >*/}
          {/*      <FacktorCard item={faktorData.product} />*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</section>*/}
          <section className="bg-white rounded-lg w-full text-14 mt-4">
            {/* Price Details Section */}
            {innerWidth < 1024 && (
              <div className="space-y-4 p-4 shadow-custom1 rounded-lg w-full lg:h-fit">
                <PriceDetails
                  faktorData={faktorData}
                  setRoleChecked={setRoleChecked}
                  roleChecked={roleChecked}
                  length={1}
                  discount={discount}
                  setPrice={setPrice}
                  price={price}
                  discountPrice={discountPrice}
                  setDiscountPrice={setDiscountPrice}
                  totalPrice={JSON.parse(localStorage.getItem("batteryTotalPrice"))?.price || 0}
                  coupon={coupon}
                  setCoupon={setCoupon}
                  type={"product_key"}
                />
              </div>
            )}

            {/* Address Section */}
            <div className="mt-4 space-y-2 flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-gray-500">محل دریافت خدمات:</span>
                <span className="text-gray-900 text-right">
                  {/*{faktorData.address_info?.address}*/}
                  {locationServiceAddress}
                </span>
              </div>
              <Link
                href={`/batteries/products/newSelectLocation?city_id=${cityId}&type=${type}&vehicle_tip_id=${vehicleTipId}&amper=${amper}&type_service=${typeService}`}
                className="text-[#518dd5] flex items-center gap-1 mt-2 self-end border-b-2 border-b-[#518dd5] pb-2 cursor-pointer"
              >
                <i className={"cc-edit text-20"} />
                <span className={"font-semibold"}>تغییر آدرس</span>
              </Link>
            </div>

            {/* Date and Time Section */}
            <div className="mt-4 space-y-2 flex flex-col gap-2">
              <div className="flex justify-between lg:justify-start lg:gap-4">
                <span className="text-gray-500">تاریخ دریافت خدمات:</span>
                <div className="text-gray-900 flex gap-2 items-start">
                  <span>
                    {/*{Object.keys(faktorData).length > 0 &&*/}
                    {/*  persianStringDay(faktorData.reservation_time_day)}*/}
                    {persianStringDay(dateServiceAddress)}
                  </span>
                  <span>
                    {/*{Object.keys(faktorData).length > 0 &&*/}
                    {/*  persianDateCovertor(faktorData.reservation_time_day)}*/}
                    {persianDateCovertor(dateServiceAddress)}
                  </span>
                </div>
              </div>
              <div className="flex justify-between lg:justify-start lg:gap-4">
                <span className="text-gray-500">ساعت دریافت خدمات:</span>
                <span>
                  {/*{faktorData.reservation_time_slice?.split(",").join(" تا ")}*/}
                  {time.split("/")[1]}
                </span>
              </div>
              <Link
                href={`/batteries/products/newTimeSelector?city_id=${cityId}&type=${type}&vehicle_tip_id=${vehicleTipId}&amper=${amper}&type_service=${typeService}&service_location_id=${serviceLocationId}`}
                className="text-[#518dd5] flex items-center gap-1 mt-2 self-end border-b-2 border-b-[#518dd5] pb-2 cursor-pointer"
              >
                <i className={"cc-edit text-20"} />
                <span className={"font-semibold"}>تغییر تاریخ و زمان</span>
              </Link>
            </div>
            <div className={"mt-4 block lg:hidden"}>
              <DiscountPercent
                id={faktorData?.id}
                type={"battery"}
                setDiscountPrice={setDiscountPrice}
                setDiscount={setDiscount}
                coupon={coupon}
                setCoupon={setCoupon}
              />
            </div>
          </section>
        </section>
        {innerWidth < 1024 && (
          <CompletePrice
            customStyle={
              "bg-white fixed left-0 flex justify-between shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] rounded-t-xl"
            }
            faktorData={faktorData}
            type={"product_key"}
            roleChecked={roleChecked}
            discount={discount}
            registerClickHandler={registerClickHandler}
            price={price}
          />
        )}
      </div>
      {innerWidth > 1024 && (
        <div className="space-y-4 p-4 shadow-custom1 rounded-lg lg:w-[458px] lg:h-fit lg:sticky lg:top-[110px] lg:left-0 lg:block lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)]">
          <PriceDetails
            faktorData={faktorData}
            length={1}
            discount={discount}
            setPrice={setPrice}
            price={price}
            setRoleChecked={setRoleChecked}
            roleChecked={roleChecked}
            discountPrice={discountPrice}
            setDiscountPrice={setDiscountPrice}
            type={"product_key"}
            registerClickHandler={registerClickHandler}
            coupon={coupon}
            setCoupon={setCoupon}
          />
          {/*<div className={"mt-4 hidden lg:block"}>*/}
          {/*  <DiscountPercent*/}
          {/*    id={faktorData?.id}*/}
          {/*    type={"BATTERY"}*/}
          {/*    setDiscount={setDiscount}*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<div className="flex justify-start items-center text-xs gap-1 font-medium mt-2 border-t-2 border-t-[#BBBBBB] pt-4">*/}
          {/*  <div*/}
          {/*    className={`border-2 border-[#F58052] size-6 rounded-md ml-1 flex justify-center items-center ${roleChecked ? "bg-[#f58052]" : ""}`}*/}
          {/*    onClick={() => {*/}
          {/*      setRoleChecked(!roleChecked);*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <i className="cc-tick text-white text-xl" />*/}
          {/*  </div>*/}
          {/*  <span className="text-[#F58052] underline">*/}
          {/*    قوانین کار پایا و سیاست‌ نامه حریم‌ خصوصی*/}
          {/*  </span>*/}
          {/*  <span className="text-[#518DD5]">را می پذیرم</span>*/}
          {/*</div>*/}
        </div>
      )}
    </div>
  );
};

export default InvoicePage;
