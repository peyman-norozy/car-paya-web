import React from "react";
import Image from "next/image";

const InLocationData = [
  {
    title: "کارشناس رنگ و بدنه",
    description:
      "در کارشناسی رنگ و بدنه با تجهیزات کامل و تخصصی با کارشناسان متخصص قسمت های رنگ شده فرو رفتگی و ابرنگ خط خش برسی میکنیم",
  },
  {
    title: "عیب یابی و مشاوره",
    description:
      "در کارشناسی رنگ و بدنه با تجهیزات کامل و تخصصی با کارشناسان متخصص قسمت های رنگ شده فرو رفتگی و ابرنگ خط خش برسی میکنیم",
  },
  {
    title: "کارشناس فنی",
    description:
      "در کارشناسی رنگ و بدنه با تجهیزات کامل و تخصصی با کارشناسان متخصص قسمت های رنگ شده فرو رفتگی و ابرنگ خط خش برسی میکنیم",
  },
  {
    title: "قیمت گذاری",
    description:
      "در کارشناسی رنگ و بدنه با تجهیزات کامل و تخصصی با کارشناسان متخصص قسمت های رنگ شده فرو رفتگی و ابرنگ خط خش برسی میکنیم",
  },
];

const InLocation = () => {
  return (
    <div className={"px-[36px] bg-[#ffffff]"}>
      <p className="text-18 font-medium mb-[24px]">
        کارشناسی
        <span className="text-[#1C74D1]"> کار </span>
        <span className="text-[#F66B34]"> پایا </span>
        در محل انتخابی شما
      </p>
      <div className={"flex items-center gap-[30px] py-[41px] rounded-8"}>
        <div className={"w-fit"}>
          <Image
            src={"/assets/images/technicalCar.png"}
            alt={"car location"}
            width={458}
            height={381}
          />
        </div>
        <ul className={"flex-1 grid grid-cols-2 gap-[24px]"}>
          {InLocationData.map((item) => (
            <li key={item.title} className={"shadow-custom1 p-4 rounded-8"}>
              <span className={"text-[#1F497B] font-bold text-14"}>
                {item.title}
              </span>
              <p className={"font-medium text-12 text-[#4F4F4F]"}>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InLocation;
