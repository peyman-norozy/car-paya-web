import React from "react";
import IndivisualPurchaseInfo from "./IndivisualPurchaseInfo";
import car from "@/public/assets/icons/car.svg";
import check from "@/public/assets/icons/sheild-check.svg";
import truck from "@/public/assets/icons/truck.svg";
import basket from "../public/assets/icons/shopping-bag 1.svg";
import Button from "./Button";
import Image from "next/image";

const PurchaseProductInfo = () => {
  const purchaseInfos = [
    { title: "فروشگاه اینترنتی CarCheck", icon: car },
    { title: "تضمین اصالت کالا", icon: check },
    { title: "ارسال به سراسر کشور", icon: truck },
  ];
  return (
    <div className=" bg-purple-200 flex flex-col gap-[0.25rem] p-[0.25rem] rounded-[0.5rem]">
      {purchaseInfos.map((item, idx) => (
        <IndivisualPurchaseInfo key={idx} title={item.title} icon={item.icon} />
      ))}
      <Button class_name="bg-red_shop text-white text-[12px] w-full h-[2rem] rounded-[0.5rem] font-bold flex  items-center gap-[0.5rem] justify-center">
      <Image src={basket} alt="" width={20} height={20} />
        <p className="mt-[0.25rem]"> اضافه به سبد خرید</p>
        
      </Button>
    </div>
  );
};

export default PurchaseProductInfo;
