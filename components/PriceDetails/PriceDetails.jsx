import React from "react";
import CompletePrice from "@/components/CompletePrice/CompletePrice";
import { useSelector } from "react-redux";
import { numberWithCommas } from "@/utils/function-utils";

const PriceDetails = ({ faktorData, length }) => {
  const innerWidth = useSelector((item) => item.todo.windowInnerWidth);

  return (
    <>
      <div className="flex justify-between border-b-2 border-b-stone-100 pb-1">
        <span className="text-gray-500 font-semibold">جزئیات قیمت</span>
        {/*<span className="text-gray-900">۱۵۳۰۰۰۰ تومان</span>*/}
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">{" قیمت کالاها " + `(${length})`}</span>
        <span className="text-gray-900">۱۵۳۰۰۰۰ تومان</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">کد تخفیف:</span>
        <span className="text-gray-900">---</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">هزینه ایاب ذهاب :</span>
        <span className="text-gray-900">---</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">هزینه دستمزد:</span>
        <span className="text-gray-900">---</span>
      </div>
      {/*<div className="flex justify-between font-semibold">*/}
      {/*  <span className="text-[#137BDB]">سود شما از این خرید:</span>*/}
      {/*  <span className="text-[#137BDB]">۱۵۳۰۰۰۰ تومان</span>*/}
      {/*</div>*/}
      <div className="flex justify-between font-semibold">
        <span className="text-[#F58052]">جمع قابل پرداخت:</span>
        <span className="text-[#F58052]">
          {numberWithCommas(faktorData?.price_total)} تومان
        </span>
      </div>
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
