import React from "react";
import Image from "next/image";

const WhyInspectionData = [
  {
    icon: "/assets/icons/whyInspection/image-prev-ui(3).svg",
    title: "ضمانت سرویس",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از چاپ است. لورم ایپسوم متن ساختگی",
    width: 47,
    height: 44,
  },
  {
    icon: "/assets/icons/whyInspection/image-prev-ui(4).svg",
    title: "پشتیبانی حرفه ایی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از چاپ است. لورم ایپسوم متن ساختگی",
    width: 35,
    height: 43,
  },
  {
    icon: "/assets/icons/whyInspection/image-prev-ui.svg",
    title: "کارشناسی با دقت بالا",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از چاپ است. لورم ایپسوم متن ساختگی",
    width: 50,
    height: 44,
  },
  {
    icon: "/assets/icons/whyInspection/image-prev-ui(2).svg",
    title: "صرفه جویی در هزینه",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از چاپ است. لورم ایپسوم متن ساختگی",
    width: 45,
    height: 45,
  },
];

const WhyInspection = () => {
  return (
    <div className="py-[48px] mt-[40px] shadow-sm rounded-8 overflow-hidden bg-[#F7F8FB] w-full">
      <p className="text-18 font-medium mb-[44px] text-center">
        چرا سرویس دوره ای
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
