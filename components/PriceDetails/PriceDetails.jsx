import React from "react";
import CompletePrice from "@/components/CompletePrice/CompletePrice";
import { useSelector } from "react-redux";
import { numberWithCommas } from "@/utils/function-utils";
import DiscountPercent from "../DiscountPercent/DiscountPercent";

const PriceDetails = (props) => {
  const { faktorData, length, discount } = props;
  const innerWidth = useSelector((item) => item.todo.windowInnerWidth);

  return (
    <>
      <div className="flex justify-between">
        <span className="text-[#454545] font-medium text-sm">
          جزئیات قیمت سرویس:
        </span>
        {/*<span className="text-gray-900">۱۵۳۰۰۰۰ تومان</span>*/}
      </div>
      <div className="flex justify-between">
        <span className="text-sm">قیمت سرویس:</span>
        <span className="text-[#454545] text-sm">
          {numberWithCommas(faktorData?.service?.discounted_price)}
        </span>
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
        <span className="text-sm">مبلغ تخفیف:</span>
        {/* <span className="text-[#22A137] text-sm">{numberWithCommas(faktorData?.service?.price - faktorData?.service?.discounted_price)}</span> */}
        <span className="text-[#22A137] text-sm">
          {discount ? discount : "--"}
        </span>
      </div>
      <div className={"mt-4 hidden lg:inline-block w-full"}>
        <DiscountPercent
          id={faktorData?.id}
          type={"MASTER"}
          setDiscount={props.setDiscount}
        />
      </div>
      <div className="justify-between items-center hidden lg:flex">
        <div className="flex gap-1 items-center">
          <span className="text-[#3C3C3C] font-medium">جمع قابل پرداخت:</span>
          <span className="text-[#1E67BF] font-medium text-lg">
            {props.type === "product_key"
              ? numberWithCommas(
                  Number(faktorData?.product?.discounted_price) - discount
                )
              : numberWithCommas(
                  faktorData?.swing_type === "INCREASE"
                    ? Number(faktorData?.service?.discounted_price) +
                        Number(faktorData?.diff_price) -
                        discount
                    : Number(faktorData?.service?.discounted_price) -
                        Number(faktorData?.diff_price) -
                        discount
                )}
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
          {numberWithCommas(faktorData?.price_total)} تومان
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
            setRoleChecked(!props.roleChecked);
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
