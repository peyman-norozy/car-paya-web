import React from "react";
import Image from "next/image";
import Link from "next/link";

const periodicServiceStatickData = [
  { title: "صفر شوی خودرو" },
  { title: "صفر شوی خودرو" },
  { title: "صفر شوی خودرو" },
  { title: "صفر شوی خودرو" },
  { title: "صفر شوی خودرو" },
  { title: "صفر شوی خودرو" },
  { title: "صفر شوی خودرو" },
  { title: "صفر شوی خودرو" },
];

const HomPeriodicService = () => {
  return (
    <div
      className={
        "shadow-[0_0_8px_0_rgba(162,162,162,0.25)] bg-[#F7FAFD] rounded-8 py-[34px] flex lg:flex-row flex-col justify-between lg:items-end items-center"
      }
    >
      <section>
        <p className={"lg:pr-[34px] px-[13px] lg:text-[20px] text-[14px]"}>
          با کار پایا همه خدمات سرویس دوره ای ماشینتو انلاین انتخاب کن
        </p>
        <Image
          src={"/assets/images/periodicServiceHome.png"}
          alt={"home periodic service"}
          width={610}
          height={245}
          className={"lg:mt-[52px] mt-[16px]"}
        />
      </section>
      <section className={"lg:pl-[111px] flex flex-col gap-[44px]"}>
        <ul className={"hidden lg:grid grid-cols-2 gap-x-[79px] gap-y-[24px]"}>
          {periodicServiceStatickData.map((item, index) => (
            <li key={index} className={"flex items-center gap-[6px]"}>
              <i
                className={
                  "cc-tick bg-[#24D34B44] text-[#24D34B] w-[20px] h-[20px] rounded-full flex justify-center items-center"
                }
              />
              <span className={"text-14 font-medium"}>{item.title}</span>
            </li>
          ))}
        </ul>
        <div className={"flex justify-center mt-4"}>
          <Link
            href={"/periodic-service"}
            className={
              "bg-[#F66B34] lg:text-16 text-14 text-[#FEFEFE] rounded-8 w-[191px] h-[36px] flex justify-center items-center"
            }
          >
            درخواست سرویس دوره ای
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomPeriodicService;
