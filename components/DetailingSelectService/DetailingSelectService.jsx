"use client";
import DetailingSelectServiceCard from "@/components/cards/DetailingSelectServiceCard/DetailingSelectServiceCard";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const DetailingSelectService = (props) => {
  console.log(props.data);
  const [productId, setProductId] = useState(null);

  const [childFunction, setChildFunction] = useState(null);

  const handleChildFunction = (func) => {
    setChildFunction(() => func);
  };

  return (
    <div className="w-full flex flex-col lg:w-[calc(100%-424px)] mr-auto mt-3 rounded-2xl overflow-hidden border border-[#383838A3]">
      <div className="bg-[#383838A3] flex flex-col gap-1 items-start px-10 py-5 text-[#FFFFFF] font-medium">
        <h1 className="text-16 lg:text-18">خدمات دیتیلینگ</h1>
        <span className="text-12 lg:text-14">
          (شامل ١٧ بخش مي‌باشد كه كاربر بنا به نیاز خود نسبت به انتخاب خدمات
          اقدام مي‌نمايد)
        </span>
      </div>
      <div className={"p-2 sm:p-4 lg:p-8 flex flex-col"}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-2 lg:gap-4">
          {props.data?.map((item, index) => (
            <DetailingSelectServiceCard
              data={item}
              allData={props.data}
              setProductId={setProductId}
              productId={productId}
              key={index}
              sendToParent={handleChildFunction}
            />
          ))}
        </div>
        <button
          className={
            "bg-[#F66B34] text-white text-14 self-end p-2 rounded-5 mt-5"
          }
          onClick={async () => await childFunction(productId)}
        >
          اضافه به سبد خرید
        </button>
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
};

export default DetailingSelectService;
