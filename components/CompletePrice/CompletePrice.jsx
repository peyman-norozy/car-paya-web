import React from "react";
import { numberWithCommas } from "@/utils/function-utils";

const CompletePrice = (props) => {
  console.log(props);
  return (
    <section
      className={`bottom-0 right-0 z-[1000] bg-white ${props.customStyle} p-4 rounded-t-2xl shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)]`}
    >
      <div className={"font-medium lg:hidden block"}>
        <span>جمع سفارش:</span>
        <div className={"flex gap-2 items-center text-[#518DD5]"}>
          {/*{props.type === "product_key"*/}
          {/*  ? numberWithCommas(*/}
          {/*      Number(props.faktorData?.product?.discounted_price) -*/}
          {/*        props.discount*/}
          {/*    )*/}
          {/*  : numberWithCommas(*/}
          {/*      props.faktorData?.swing_type === "INCREASE"*/}
          {/*        ? Number(props.faktorData?.service?.discounted_price) +*/}
          {/*            Number(props.faktorData?.diff_price)*/}
          {/*        : Number(props.faktorData?.service?.discounted_price) -*/}
          {/*            Number(props.faktorData?.diff_price)*/}
          {/*    )}*/}
          <span>{numberWithCommas(props.finalPrice - props.discountedprice + props.fluctuatingPrice)}</span>
          <span>تومان</span>
        </div>
      </div>
      <button
        className={`${props.roleChecked ? "bg-[#F66B34]" : "bg-[#FCCAAC]"} rounded-[8px] text-white text-[16px] font-medium w-40 h-10`}
        disabled={!props.roleChecked}
        onClick={props.registerClickHandler}
      >
        تایید و تکمیل سفارش
      </button>
    </section>
  );
};

export default CompletePrice;
