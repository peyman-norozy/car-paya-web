import React from "react";
import Image from "next/image";

const WhyInspectionData = [
  {
    icon: "/assets/icons/whyInspection/image-prev-ui(3).svg",
    title: "ضمانت کارشناسی",
    description: "ضمانت کارشناسی کارپایا تعهد ما به دقت و شفافیت در هر گزارش",
    width: 47,
    height: 44,
  },
  {
    icon: "/assets/icons/whyInspection/image-prev-ui(4).svg",
    title: "کارشناسی در محل شما",
    description:
      "کارشناسی کارپایا در محل شما؛ سرعت، دقت و راحتی در بررسی خودرو.",
    width: 35,
    height: 43,
  },
  {
    icon: "/assets/icons/whyInspection/image-prev-ui.svg",
    title: "کارشناسی با دقت بالا",
    description:
      "کارشناسی کارپایا؛ ترکیبی از تجربه و دقت بالا برای اطمینان از کیفیت خودرو",
    width: 50,
    height: 44,
  },
  {
    icon: "/assets/icons/whyInspection/image-prev-ui(2).svg",
    title: "کارشناسی به صرفه",
    description:
      "با کارشناسی به‌صرفه کارپایا، در هزینه‌ها صرفه‌جویی کنید و با اطمینان خرید کنید",
    width: 45,
    height: 45,
  },
];

const WhyInspection = () => {
  return (
    <div className="py-[48px] mt-[40px] max-w-[1294px] shadow-sm rounded-8 overflow-hidden bg-[#F7F8FB]">
      <p className="text-18 font-medium mb-[44px] text-center">
        چرا کارشناسی
        <span className="text-[#1C74D1]"> کار </span>
        <span className="text-[#F66B34]"> پایا </span>
        خوبه !
      </p>
      <ul
        className={
          "grid lg:grid-cols-4 grid-cols-2 lg:gap-[27px] gap-2 py-2 lg:w-[822px] w-[340px] m-auto"
        }
      >
        {WhyInspectionData.map((item, index) => (
          <li
            key={item.icon}
            className={
              "flex flex-col items-center gap-2 bg-[#FEFEFE] rounded-8 px-[13px] py-[16px] shadow-[0_0_14px_0_rgba(230, 232, 253, 0.7)] shadow-lg"
            }
          >
            <Image
              src={item.icon}
              alt={"why icon"}
              width={item.width}
              height={item.height}
            />
            <span className={"text-14 text-[#1E67BF]"}>{item.title}</span>
            <p className={"text-12 text-[#6D6D6D] text-center"}>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyInspection;
