import React, { useEffect, useState } from "react";
// import CompletePrice from "@/components/CompletePrice/CompletePrice";
// import { useSelector } from "react-redux";
import { numberWithCommas } from "@/utils/function-utils";
import DiscountPercent from "../DiscountPercent/DiscountPercent";

const PriceDetails = (props) => {
  const { faktorData } = props;

  useEffect(() => {
      const localPrice = props.totalPrice;
      if (props.discountPrice?.amount) {
        props.setPrice(localPrice - props.discountPrice.amount);
      } else if (props.discountPrice?.percentage) {
        props.setPrice(
          localPrice - (props.price * props.discountPrice.percentage) / 100
        );
      } else {
        props.setPrice(localPrice);
      }
  }, [props.discountPrice,props.totalPrice]);

  return (
    <>
      <div className="flex justify-between">
        <span className="text-[#000000] lg:text-16 text-14 font-medium">
          جزئیات قیمت:
        </span>
      </div>
      <div className={"mt-4 hidden lg:inline-block w-full"}>
        <DiscountPercent
          id={faktorData?.id}
          type={props.type}
          setDiscount={props.setDiscount}
          setDiscountPrice={props.setDiscountPrice}
          coupon={props.coupon}
          setCoupon={props.setCoupon}
          // setDiscountPercent={setDiscountPercent}
        />
      </div>
      <div className="flex justify-between">
        <span className="text-[#454545] font-medium lg:text-16 text-14">
          قیمت سرویس:
        </span>
        <div className={"flex items-center gap-1"}>
          <span className="text-[#454545] text-14">
            {numberWithCommas(props.totalPrice)}
          </span>
          <span>تومان</span>
        </div>
      </div>
      {faktorData?.diff_percent_description && (
        <div className="flex justify-between">
          <span className="text-sm">
            {faktorData?.diff_percent_description}
          </span>
          <span
            className={`${faktorData?.swing_type === "INCREASE" ? "text-[#DB3737]" : "text-[#22A137]"} text-sm`}
          >
            {faktorData?.diff_price}
          </span>
        </div>
      )}
      <div className="flex justify-between">
        <span className="text-[#454545] font-medium lg:text-16 text-14">
          مبلغ تخفیف:
        </span>
        {/* <span className="text-[#22A137] text-sm">{numberWithCommas(faktorData?.service?.price - faktorData?.service?.discounted_price)}</span> */}
        <div className={"flex items-center gap-1"}>
          <span className="text-[#22A137] text-14">
            {/*{discount ? discount : "--"}*/}
            {props.discountPrice.amount
              ? numberWithCommas(Number(props.discountPrice.amount))
              : props.discountPrice.percentage
                ? numberWithCommas(
                    Number((props.price * props.discountPrice.percentage) / 100)
                  )
                : 0}
          </span>
          <span className={"text-[#22A137] text-14"}>تومان</span>
        </div>
      </div>
      <div className="justify-between items-center hidden lg:flex">
        <div className="flex gap-1 items-center">
          <span className="text-[#3C3C3C] font-medium">جمع قابل پرداخت:</span>
          <span className="text-[#1E67BF] font-medium text-lg">
            {/*{props.type === "product_key"*/}
            {/*  ? numberWithCommas(*/}
            {/*      Number(faktorData?.product?.discounted_price) - discount,*/}
            {/*    )*/}
            {/*  : numberWithCommas(*/}
            {/*      faktorData?.swing_type === "INCREASE"*/}
            {/*        ? Number(faktorData?.service?.discounted_price) +*/}
            {/*            Number(faktorData?.diff_price) -*/}
            {/*            discount*/}
            {/*        : Number(faktorData?.service?.discounted_price) -*/}
            {/*            Number(faktorData?.diff_price) -*/}
            {/*            discount,*/}
            {/*    )}*/}
            {numberWithCommas(props.price)}
            تومان
          </span>
        </div>
        <button
          className={`${props.roleChecked ? "bg-[#F66B34]" : "bg-[#FCCAAC]"} rounded-[8px] text-white text-[16px] font-medium w-40 h-10`}
          disabled={!props.roleChecked}
          onClick={props.registerClickHandler}
        >
          تایید و تکمیل سفارش
        </button>
      </div>
      {/*<div className="flex justify-between font-semibold">*/}
      {/*  <span className="text-[#137BDB]">سود شما از این خرید:</span>*/}
      {/*  <span className="text-[#137BDB]">۱۵۳۰۰۰۰ تومان</span>*/}
      {/*</div>*/}
      <div className="flex justify-between font-semibold lg:hidden">
        <span className="text-[#F58052]">جمع قابل پرداخت:</span>
        <span className="text-[#F58052]">
          {numberWithCommas(props.price)}
          تومان
        </span>
      </div>
      {/* {innerWidth > 1024 && (
        <CompletePrice
          priceTotal={numberWithCommas(faktorData?.price_total)}
          roleChecked={props.roleChecked}
          customStyle={
            "pl-0 pr-0 border-t-2 border-t-[#eee] sticky flex justify-between"
          }
          registerClickHandler={props.registerClickHandler}
        />
      )} */}
      <div className="flex justify-start items-center text-xs gap-1 font-medium mt-2 border-t border-[#BBBBBB] pt-2">
        <div
          className={`border-2 border-[#F58052] size-6 rounded-md ml-1 flex justify-center items-center ${props.roleChecked ? "bg-[#f58052]" : ""}`}
          onClick={() => {
            props.setRoleChecked(!props.roleChecked);
          }}
        >
          <i className="cc-tick text-white text-xl" />
        </div>
        <span className="text-[#F58052] underline">
          قوانین کار پایا و سیاست‌ نامه حریم‌ خصوصی
        </span>
        <span className="text-[#3C3C3C]">را می پذیرم</span>
      </div>
    </>
  );
};

export default PriceDetails;
