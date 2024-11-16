import React, { useEffect, useState } from "react";
import Image from "next/image";

const InspectionConditionData = [
  {
    title: "نور و فضای کافی محل کارشناسی",
  },
  {
    title: "تمیز و خشک‌ بودن خودرو",
  },
  {
    title: "خالی‌بودن صندوق عقب",
  },
];

const ImageArray = [
  { image: "/assets/images/InspectionCondition/car-light.png" },
  { image: "/assets/images/InspectionCondition/car-water.png" },
  { image: "/assets/images/InspectionCondition/car-back.png" },
];

const InspectionCondition = () => {
  const [inspectionConditionNumber, setInspectionConditionNumber] = useState(1);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (inspectionConditionNumber < InspectionConditionData.length) {
        setInspectionConditionNumber((prevCount) => prevCount + 1);
      } else if (inspectionConditionNumber >= InspectionConditionData.length) {
        setInspectionConditionNumber(1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [inspectionConditionNumber]);

  useEffect(() => {
    // شروع انیمیشن برای تصویر جدید با کمی تأخیر
    setAnimated(false);
    const timeout = setTimeout(() => setAnimated(true), 2000);
    return () => clearTimeout(timeout);
  }, [inspectionConditionNumber]);
  return (
    <div className={"flex lg:flex-row flex-col-reverse bg-white"}>
      <div className={"mt-[20px] mr-[36px]"}>
        <span className={"text-[20px] font-medium lg:inline hidden"}>
          شرایط برای کارشناسی خودرو
        </span>
        <ul className={"lg:mt-[60px] flex flex-col gap-[26px]"}>
          {InspectionConditionData.map((item, index) => (
            <li
              key={item.title}
              className={`text-14 ${
                inspectionConditionNumber === index + 1
                  ? "text-[#1E67BF]"
                  : "text-[#0F0F0F]"
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <ul className={"flex-1"}>
        {ImageArray.map((item, index) => (
          <li key={item.image}>
            {inspectionConditionNumber === index + 1 && (
              <Image
                src={item.image}
                alt={"car light"}
                width={993}
                height={352}
                className={`w-full transition-all duration-500 ${inspectionConditionNumber === index + 1 ? "block" : "hidden"} ${
                  animated ? "opacity-80" : "opacity-100"
                }`}
              />
            )}
          </li>
        ))}
      </ul>
      <span className={"text-14 font-medium lg:hidden inline pb-4 pr-[36px]"}>
        شرایط برای کارشناسی خودرو
      </span>
    </div>
  );
};

export default InspectionCondition;
