import React from "react";
import CompletePrice from "@/components/CompletePrice/CompletePrice";
import { useSelector } from "react-redux";

const PriceDetails = () => {
  const innerWidth = useSelector((item) => item.todo.windowInnerWidth);

  return (
    <>
      <div className="flex justify-between">
        <span className="text-gray-500">جزئیات قیمت:</span>
        <span className="text-gray-900">۱۵۳۰۰۰۰ تومان</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">قیمت کالاها(3):</span>
        <span className="text-gray-900">۱۵۳۰۰۰۰ تومان</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">کد تخفیف:</span>
        <span className="text-gray-900">---</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">هزینه اپب ذهناب:</span>
        <span className="text-gray-900">---</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">هزینه دستمزد:</span>
        <span className="text-gray-900">---</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span className="text-[#137BDB]">سود شما از این خرید:</span>
        <span className="text-[#137BDB]">۱۵۳۰۰۰۰ تومان</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span className="text-[#F58052]">جمع قابل پرداخت:</span>
        <span className="text-[#F58052]">۱۵۳۰۰۰۰ تومان</span>
      </div>
      {innerWidth > 1024 && <CompletePrice />}
    </>
  );
};

export default PriceDetails;
