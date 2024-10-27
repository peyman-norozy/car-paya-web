import React from "react";
import Image from "next/image";

const benefitsData = [
  {
    description: "تیم کارپایا کاملا تخصصی و حرفه ایی در کنار شماست",
    title: "تخصص و حرفه ایی",
    icon: "businessman.png",
  },
  {
    description: "تیم کارپایا کاملا تخصصی و حرفه ایی در کنار شماست",
    title: "اولویت با شما",
    icon: "trust.png",
  },
  {
    description: "تیم کارپایا کاملا تخصصی و حرفه ایی در کنار شماست",
    title: "قیمت منصفانه",
    icon: "dollar.png",
  },
  {
    description: "تیم کارپایا کاملا تخصصی و حرفه ایی در کنار شماست",
    title: "سریع و آسان",
    icon: "tasks.png",
  },
];

const Benefits = () => {
  return (
    <div className={"bg-[#FFC5AE] sm:-rotate-1 rounded-8"}>
      <div
        className={
          "shadow-[0_0_8px_0_rgba(162,162,162,0.25)] bg-[#FFFFFF] rounded-8 sm:p-[34px] p-[16px] flex flex-col items-center sm:gap-[48px] gap-[13px] sm:rotate-1"
        }
      >
        <p className={"lg:text-20 text-14 font-medium"}>
          مزایای استفاده از <span className={"text-[#1C74D1]"}>کار</span>
          <span className={"text-[#F66B34]"}> پایا </span>
        </p>
        <p className={"lg:text-16 text-14 text-center"}>
          کارپایا یه تیم پویا و مشاور وسیله نقلیه شما با پشتیان وضمانت برای
          خدمات وسیله نقلیه کارپایا یه تیم پویا و مشاور وسیله نقلیه شما با
          پشتیان و
        </p>
        <ul
          className={
            "grid size1275:grid-cols-4 size974:grid-cols-3 grid-cols-2 sm:gap-20 gap-4"
          }
        >
          {benefitsData.map((item) => (
            <li
              key={item.icon}
              className={
                "shadow-[0_0_8px_0_rgba(162,162,162,0.25)] flex flex-col items-center justify-center sm:gap-[14px] gap-[11px] sm:w-[231px] sm:h-[217px] w-[152px] h-[133px] px-4 py-6 rounded-8"
              }
            >
              <Image
                src={`/assets/images/${item.icon}`}
                alt={"benefit icon"}
                width={46}
                height={46}
                className={"sm:w-[46px] sm:h-[46px] w-[30px] h-[30px]"}
              />
              <span className={"text-[#1E67BF] sm:text-18 text-12 font-medium"}>
                {item.title}
              </span>
              <p className={"text-center sm:text-16 text-12 font-medium"}>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
