import React from "react";
import CompletePrice from "@/components/CompletePrice/CompletePrice";
import { useSelector } from "react-redux";
import { numberWithCommas } from "@/utils/function-utils";

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
      <div className="flex justify-between item-center">
        <span className="text-[#F58052] font-medium flex justify-between items-center">
          جمع قابل پرداخت:
        </span>
        <span className="text-[#F58052] font-medium flex justify-between items-center">
          {props.type === "product_key"
            ? numberWithCommas(
                Number(faktorData?.product?.discounted_price) - discount,
              )
            : numberWithCommas(
                faktorData?.swing_type === "INCREASE"
                  ? Number(faktorData?.service?.discounted_price) +
                      Number(faktorData?.diff_price) -
                      discount
                  : Number(faktorData?.service?.discounted_price) -
                      Number(faktorData?.diff_price) -
                      discount,
              )}
          تومان
        </span>
        {innerWidth > 1024 && (
          <CompletePrice
            priceTotal={numberWithCommas(faktorData?.price_total)}
            roleChecked={props.roleChecked}
            customStyle={"pl-0 pr-0 sticky flex justify-between"}
            registerClickHandler={props.registerClickHandler}
          />
        )}
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
    </>
  );
};

export default PriceDetails;
