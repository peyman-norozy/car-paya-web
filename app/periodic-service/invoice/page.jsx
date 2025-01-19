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
import axios from "axios";
import { getCookie } from "cookies-next";
import nProgress from "nprogress";

const InvoicePage = () => {
  const [faktorData, setFaktorData] = useState({});
  const [roleChecked, setRoleChecked] = useState(false);
  const innerWidth = useSelector((item) => item.todo.windowInnerWidth);
  const [discountPrice, setDiscountPrice] = useState({});
  const [cart, setCart] = useState({});
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountedprice, setDiscountedPrice] = useState(0);
  const [fluctuatingPrice, setFluctuatingPrice] = useState(0);
  const orderProduct = useRef();
  const { events } = useDraggable(orderProduct);
  const searchParams = useSearchParams();
  const cityId = searchParams.get("city_id"); //ok
  const packageId = searchParams.get("package_id"); //ok
  const reservationTimeSlice = searchParams.get("reservation_time_slice_id"); //ok
  const type = searchParams.get("type"); //ok
  const vehicleTipId = Number(searchParams.get("vehicle_tip_id").split(",")[1]); //ok
  const serviceLocationId = searchParams.get("service_location_id"); //ok
  const router = useRouter();

  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem("periodicCart"));
    let price = 0;
    cartData.products.map((item) => {
      price = price + item.discount_price;
    });
    setCart({ price: price });

    const vehicle = JSON.parse(localStorage.getItem("selectedVehicle"));
    const user = JSON.parse(localStorage.getItem("user-profile"));

    setFaktorData({
      vehicle_image: vehicle.image,
      vehicle_brand: vehicle.brand,
      vehicle_model: vehicle.model,
      vehicle_tip: vehicle.title,
      user_info: user,
      product: cartData.products,
      address: cartData.location_title,
      address_id: cartData.location_address_id,
      reservation_time_day: cartData.time.title,
      reservation_time_slice: cartData.time.start + " تا " + cartData.time.end,
    });
  }, []);

  function removeHandler(item) {
    setFaktorData({ ...faktorData, product: item });
  }

  function registerClickHandler() {
    axios
      .post(
        process.env.BASE_API + "/web/order/register",
        {
          item_id: JSON.parse(
            sessionStorage.getItem("periodicCart")
          ).products.map((item) => {
            return item.id;
          }),
          type: "periodic_service",
          address_id: JSON.parse(sessionStorage.getItem("periodicCart"))
            .location_address_id,
          vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))
            .id,
          reservation_time_slice_id: searchParams.get(
            "reservation_time_slice_id"
          ),
          coupon_code: coupon,
          shipped_time: JSON.parse(sessionStorage.getItem("periodicCart"))?.time
            .start,
          plaque: ["11", "ج", "32", "351"],
        },
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        }
      )
      .then((res) => {
        nProgress.start();
        router.push(res?.data?.action);
      });
  }

  return (
    <div className={"py-6 pt-[20px] px-4 lg:flex lg:gap-6 mb-8"}>
      <div
        className={
          "lg:w-[calc(100%-424px)] shadow-custom1 p-4 rounded-lg bg-white"
        }
      >
        <section
          className={
            "flex items-center gap-2 fixed lg:static top-0 right-0 bg-white py-2 z-[1000] w-full px-4 lg:px-0 lg:w-auto"
          }
        >
          <Link
            href={`/periodic-service/time-selection?city_id=${cityId}&type=${type}&selectTipState=true,${vehicleTipId}&service_location_id=${serviceLocationId}&package_id=${packageId}`}
          >
            <i className={"cc-arrow-right text-24"} />
          </Link>{" "}
          <span className={"text-14 font-semibold"}>
            جزئیات سفارش سرویس دوره ای
          </span>
        </section>
        <section className={"flex justify-center"}>
          <Image
            src={process.env.BASE_API + "/web/file/" + faktorData.vehicle_image}
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
            <span>{faktorData.vehicle_brand}</span>
            <span>{faktorData.vehicle_model}</span>
            <span>{faktorData.vehicle_tip}</span>
          </div>
          <div className={"flex items-center gap-1 w-full"}>
            <span className={"font-semibold"}>نام:</span>
            <span>{faktorData?.user_info?.profile?.full_name}</span>
          </div>
          <div className={"flex items-center gap-1 w-full"}>
            <span className={"font-semibold"}>شماره تماس:</span>
            <span>{faktorData?.user_info?.mobile}</span>
          </div>
        </section>
        {/* <section
          className={
            "mt-4 text-14 flex flex-col lg:flex-row gap-4 border-b-2 border-b-[#F5F5F5] pb-4"
          }
        >
          <div className={"flex items-center gap-1 w-full "}>
            <span>تاریخ ثبت سفارش:</span>
            <span className={"font-semibold"}>
              {Object.keys(faktorData).length > 0 &&
                persianDateCovertor(faktorData.created_at)}
            </span>
          </div>
        </section> */}
        <section className={"lg:flex lg:flex-col-reverse"}>
          <section>
            <div className={"text-14 flex items-center gap-1 my-4"}>
              <span className={"font-semibold"}>سفارش شما:</span>
              <span className={"text-[#888888]"}>
                {faktorData?.product?.length + " کالا "}
              </span>
            </div>
            <div className={"w-full"}>
              <ul
                className={
                  "flex flex-col lg:flex-row gap-4 overflow-x-auto py-4 px-1"
                }
                {...events}
                ref={orderProduct}
              >
                {faktorData.product?.map((item, index) => (
                  <FacktorCard
                    key={item.id}
                    item={item}
                    removeHandler={removeHandler}
                  />
                ))}
              </ul>
            </div>
          </section>
          <section className="bg-white rounded-lg w-full text-14 mt-4">
            {/* Address Section */}
            <div className="mt-4 space-y-2 flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-gray-500">محل دریافت خدمات:</span>
                <span className="text-gray-900 text-right">
                  {faktorData.address}
                </span>
              </div>
              <div
                className="text-[#518dd5] flex items-center gap-1 mt-2 self-end border-b-2 border-b-[#518dd5] pb-2 cursor-pointer"
                onClick={() => {
                  nProgress.start();
                  router.push(
                    `/periodic-service/location-selection?selectTipState=${vehicleTipId}&city_id=${cityId}&type=${type}`
                  );
                }}
              >
                <i className={"cc-edit text-20"} />
                <span className={"font-semibold"}>تغییر آدرس</span>
              </div>
            </div>

            {/* Date and Time Section */}
            <div className="mt-4 space-y-2 flex flex-col gap-2 mb-4">
              <div className="flex justify-between lg:justify-start lg:gap-4">
                <span className="text-gray-500">تاریخ دریافت خدمات:</span>
                <div className="text-gray-900 flex gap-2 items-start">
                  {/* <span>
                    {Object.keys(faktorData).length > 0 &&
                      persianStringDay(faktorData.reservation_time_day)}
                  </span>
                  <span>
                    {Object.keys(faktorData).length > 0 &&
                      persianDateCovertor(faktorData.reservation_time_day)}
                  </span> */}
                  {faktorData.reservation_time_day}
                </div>
              </div>
              <div className="flex justify-between lg:justify-start lg:gap-4">
                <span className="text-gray-500">ساعت دریافت خدمات:</span>
                <span>
                  {faktorData.reservation_time_slice}
                  {/* {faktorData.reservation_time_slice?.split(",").join(" تا ")} */}
                </span>
              </div>
              <div
                className="text-[#518dd5] flex items-center gap-1 mt-2 self-end border-b-2 border-b-[#518dd5] pb-2 cursor-pointer"
                onClick={() => {
                  nProgress.start();
                  router.push(
                    `/periodic-service/time-selection?city_id=${cityId}&type=${type}&selectTipState=true,${vehicleTipId}&service_location_id=${serviceLocationId}&package_id=${packageId}`
                  );
                }}
              >
                <i className={"cc-edit text-20"} />
                <span className={"font-semibold"}>تغییر تاریخ و زمان</span>
              </div>
            </div>
            {/* Price Details Section */}
            {innerWidth < 1024 && (
              <div className="space-y-4 p-4 shadow-custom1 rounded-lg w-full lg:h-fit">
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
                  type={"periodic_service"}
                  finalPrice={finalPrice}
                  setFinalPrice={setFinalPrice}
                  discountedprice={discountedprice}
                  setDiscountedPrice={setDiscountedPrice}
                  fluctuatingPrice={fluctuatingPrice}
                  setFluctuatingPrice={setFluctuatingPrice}
                />
              </div>
            )}
          </section>
        </section>
        {innerWidth < 1024 && (
          <CompletePrice
            customStyle={
              "bg-white fixed left-0 flex justify-between shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] rounded-t-xl"
            }
            type={"periodic_service"}
            roleChecked={roleChecked}
            discount={discount}
            registerClickHandler={registerClickHandler}
            finalPrice={finalPrice}
            discountedprice={discountedprice}
            fluctuatingPrice={fluctuatingPrice}
          />
        )}
      </div>
      {innerWidth > 1024 && (
        <div className="space-y-4 p-4 shadow-custom1 rounded-lg lg:w-[400px] lg:h-fit lg:sticky lg:top-[20px] lg:left-0 lg:block bg-white">
          <PriceDetails
            faktorData={faktorData}
            length={faktorData?.product?.length}
            roleChecked={roleChecked}
            setRoleChecked={setRoleChecked}
            discountPrice={discountPrice}
            setDiscountPrice={setDiscountPrice}
            registerClickHandler={registerClickHandler}
            totalPrice={cart.price}
            price_fluctuation={cart?.price_fluctuation}
            innerWidth={innerWidth}
            coupon={coupon}
            setCoupon={setCoupon}
            discount={discount}
            type={"periodic_service"}
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

export default InvoicePage;
