import React from "react";
import CompletePrice from "@/components/CompletePrice/CompletePrice";
import { useSelector } from "react-redux";
import { numberWithCommas } from "@/utils/function-utils";

const PriceDetails = ({ faktorData, length }) => {
  const innerWidth = useSelector((item) => item.todo.windowInnerWidth);
  console.log(faktorData);
  
  return (
    <>
      <div className="flex justify-between border-b-2 border-b-stone-100 pb-1">
        <span className="text-[#454545] font-medium text-sm">جزئیات قیمت سرویس:</span>
        {/*<span className="text-gray-900">۱۵۳۰۰۰۰ تومان</span>*/}
      </div>
      <div className="flex justify-between">
        <span className="text-sm">قیمت سرویس:</span>
        <span className="text-[#454545] text-sm">{numberWithCommas(faktorData?.service?.discounted_price)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm">{faktorData?.price_diff_description}</span>
        <span className={`${faktorData?.swing_type === "INCREASE"?"text-[#DB3737]":"text-[#22A137]"} text-sm`}>{faktorData?.diff_price}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm">مبلغ تخفیف:</span>
        {/* <span className="text-[#22A137] text-sm">{numberWithCommas(faktorData?.service?.price - faktorData?.service?.discounted_price)}</span> */}
        <span className="text-[#22A137] text-sm">--</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-[#F58052]">جمع قابل پرداخت:</span>
        <span className="text-[#F58052] text-sm">
          {numberWithCommas(faktorData?.swing_type === "INCREASE"?Number(faktorData?.service?.discounted_price)+Number(faktorData?.diff_price):Number(faktorData?.service?.discounted_price)-Number(faktorData?.diff_price))} تومان
        </span>
      </div>
      {/*<div className="flex justify-between font-semibold">*/}
      {/*  <span className="text-[#137BDB]">سود شما از این خرید:</span>*/}
      {/*  <span className="text-[#137BDB]">۱۵۳۰۰۰۰ تومان</span>*/}
      {/*</div>*/}
      {/* <div className="flex justify-between font-semibold">
        <span className="text-[#F58052]">جمع قابل پرداخت:</span>
        <span className="text-[#F58052]">
          {numberWithCommas(faktorData?.price_total)} تومان
        </span>
      </div> */}
      {innerWidth > 1024 && (
        <CompletePrice
          priceTotal={numberWithCommas(faktorData?.price_total)}
          customStyle={
            "pl-0 pr-0 border-t-2 border-t-[#eee] sticky flex justify-between"
          }
        />
      )}
    </>
  );
};

export default PriceDetails;
