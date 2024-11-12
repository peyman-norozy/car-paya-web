import React, { useEffect, useState } from "react";
// import CompletePrice from "@/components/CompletePrice/CompletePrice";
// import { useSelector } from "react-redux";
import { numberWithCommas } from "@/utils/function-utils";
import DiscountPercent from "../DiscountPercent/DiscountPercent";

const PriceDetails = (props) => {
  const { faktorData, innerWidth } = props;

  useEffect(() => {
    if (props.price_fluctuation) {
      if (props?.price_fluctuation?.type === "DECREASE") {
        props.setFluctuatingPrice(-Number(props?.price_fluctuation?.price));
      } else if (props?.price_fluctuation?.type === "INCREASE") {
        props.setFluctuatingPrice(Number(props?.price_fluctuation?.price));
      }
    }
    props.setFinalPrice(props.totalPrice);
    if (props.discountPrice?.amount) {
      props.setDiscountedPrice(Number(props.discountPrice.amount));
    } else if (props.discountPrice?.percentage) {
      props.setDiscountedPrice(
        Number(props.totalPrice * props.discountPrice.percentage) / 100
      );
    } else {
      props.setDiscountedPrice(0);
    }
  }, [props.discountPrice, props.totalPrice, props.discountPrice]);

  return (
    <>
      <div className="flex justify-between">
        <span className="text-[#000000] lg:text-16 text-14 font-medium">
          جزئیات قیمت:
        </span>
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
            {/* {props.discountPrice.amount
              ? numberWithCommas(Number(props.discountPrice.amount))
              : props.discountPrice.percentage
                ? numberWithCommas(
                    Number((props.price * props.discountPrice.percentage) / 100)
                  )
                : 0} */}
            {numberWithCommas(props?.discountedprice)}
          </span>
          <span className={"text-[#22A137] text-14"}>تومان</span>
        </div>
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
      {props.price_fluctuation &&
        props.price_fluctuation?.description !== "" && (
          <div className="flex justify-between">
            <span className="text-[#454545] font-medium lg:text-16 text-14">
              {props?.price_fluctuation?.description}
            </span>
            {props?.price_fluctuation?.type === "DECREASE" ? (
              <div className={"flex items-center gap-1"}>
                <span className="text-[#DB3737] text-14">
                  {numberWithCommas(props?.price_fluctuation?.price)}
                </span>
                <span className={"text-[#DB3737] text-14"}>تومان</span>
              </div>
            ) : (
              <div className={"flex items-center gap-1"}>
                <span className="text-[#22A137] text-14">
                  {numberWithCommas(props?.price_fluctuation?.price)}
                </span>
                <span className={"text-[#22A137] text-14"}>تومان</span>
              </div>
            )}
          </div>
        )}
      <div className="hidden lg:block w-full">
        <div className="flex justify-between gap-1 items-center">
          <span className="text-[#0F0F0F] font-medium">جمع قابل پرداخت:</span>
          <span className="text-[#0F0F0F] font-medium text-lg">
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
            {/* {numberWithCommas(props.price)} */}
            {numberWithCommas(
              props.finalPrice - props.discountedprice + props.fluctuatingPrice
            )}
            تومان
          </span>
        </div>
      </div>
      {innerWidth && (
        <button
          className={`${props.roleChecked ? "bg-[#F66B34]" : "bg-[#FCCAAC]"} rounded-[8px] text-white text-[16px] font-medium w-full h-10`}
          disabled={!props.roleChecked}
          onClick={props.registerClickHandler}
        >
          تایید و تکمیل سفارش
        </button>
      )}
      {/*<div className="flex justify-between font-semibold">*/}
      {/*  <span className="text-[#137BDB]">سود شما از این خرید:</span>*/}
      {/*  <span className="text-[#137BDB]">۱۵۳۰۰۰۰ تومان</span>*/}
      {/*</div>*/}
      <div className="flex justify-between font-semibold lg:hidden">
        <span className="text-[#0F0F0F]">جمع قابل پرداخت:</span>
        <span className="text-[#0F0F0F]">
          {numberWithCommas(
            props.finalPrice - props.discountedprice + props.fluctuatingPrice
          )}
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
          className={`border-2 border-[#1E67BF] lg:size-6 size-5 rounded-md ml-1 flex justify-center items-center ${props.roleChecked ? "bg-[#1E67BF]" : ""}`}
          onClick={() => {
            props.setRoleChecked(!props.roleChecked);
          }}
        >
          <i className="cc-tick text-white lg:text-xl text-sm" />
        </div>

        <p>
          <span className="text-[#1E67BF] lg:text-14 text-12 whitespace-nowrap break-keep">
            قوانین کار پایا و سیاست‌ نامه حریم‌ خصوصی
          </span>
          <span> را می پذیرم.</span>
        </p>
      </div>
    </>
  );
};

export default PriceDetails;
