import React from "react";
import Image from "next/image";
import Link from "next/link";

const staticData = [
  {
    title: "کارشناس رنگ و بدنه ",
    description:
      "در کارشناسی رنگ و بدنه با تجهیزات کامل و تخصصی با کارشناسان متخصص قسمت های رنگ شده فرو رفتگی و ابرنگ خط خش برسی میکنیم ",
  },
  {
    title: "کارشناسی فنی",
    description:
      "در کارشناسی رنگ و بدنه با تجهیزات کامل و تخصصی با کارشناسان متخصص قسمت های رنگ شده فرو رفتگی و ابرنگ خط خش برسی میکنیم ",
  },
  {
    title: "عیب یابی و مشاوره",
    description:
      "در کارشناسی رنگ و بدنه با تجهیزات کامل و تخصصی با کارشناسان متخصص قسمت های رنگ شده فرو رفتگی و ابرنگ خط خش برسی میکنیم ",
  },
  {
    title: "قیمت گذاری",
    description:
      "در کارشناسی رنگ و بدنه با تجهیزات کامل و تخصصی با کارشناسان متخصص قسمت های رنگ شده فرو رفتگی و ابرنگ خط خش برسی میکنیم ",
  },
];

const HomeInspection = () => {
  return (
    <div
      className={
        "sm:shadow-[0_0_8px_0_rgba(162,162,162,0.25)] bg-[#F7FAFD] rounded-8 p-[34px]"
      }
    >
      <p className={"lg:hidden block text-16 font-medium"}>
        کارشناسی خودرو با <span className={"text-[#1C74D1]"}>کار</span>
        <span className={"text-[#F66B34]"}> پایا </span>
      </p>
      <div className={"flex lg:flex-row flex-col-reverse justify-between"}>
        <section>
          <span className={"text-20 font-medium lg:inline hidden"}>
            خدمات کارشناسی کارپایا
          </span>
          <ul className={"hidden lg:grid grid-cols-2 gap-[24px] mt-[39px] "}>
            {staticData.map((item, index) => (
              <li
                key={"index"}
                className={
                  "bg-[#FEFEFE] w-[257px] h-[187px] rounded-8 py-4 px-3 flex flex-col gap-3"
                }
              >
                <span
                  className={
                    "block text-center text-16 font-bold text-[#1F497B]"
                  }
                >
                  {item.title}
                </span>
                <p className={"text-14 text-center"}>{item.description}</p>
              </li>
            ))}
          </ul>
          <div className={"flex justify-center mt-[32px]"}>
            <Link
              href={"/vehicle-inspection"}
              className={
                "bg-[#F66B34] text-16 text-[#FEFEFE] rounded-8 w-[166px] h-[36px] flex justify-center items-center"
              }
            >
              <span className={"lg:inline hidden"}>کارشناسی</span>
              <span className={"lg:hidden inline"}>درخواست کارشناسی</span>
            </Link>
          </div>
        </section>
        <section>
          <Image
            src={`/assets/images/inceptorMainPage.png`}
            alt={"inspection"}
            width={630}
            height={515}
            className={"lg:block hidden"}
          />
          <Image
            src={`/assets/images/carshenasiNew.png`}
            alt={"inspection"}
            width={630}
            height={515}
            className={"lg:hidden block"}
          />
        </section>
      </div>
    </div>
  );
};

export default HomeInspection;
