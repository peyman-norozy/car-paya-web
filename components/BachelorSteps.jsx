import React from "react";
import Image from "next/image";

const bachelorData = [
  {
    title: "انتخاب وسیله نقلیه",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
  },
  {
    title: "انتخاب کارشناسی مورد نیاز",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
  },
  {
    title: "انتخاب مکان و زمان دریافت خدمات",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
  },
  {
    title: "دریافت خدمات",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
  },
];

const BachelorSteps = () => {
  return (
    <div className={"py-[48px] px-6 w-full"}>
      <p className={"lg:hidden block text-16 font-medium mb-[44px]"}>
        مراحل ثبت کارشناسی
        <span className={"text-[#1C74D1]"}> کار </span>
        <span className={"text-[#F66B34]"}> پایا </span>
      </p>
      <section className={"flex flex-col md:flex-row justify-between"}>
        <ul className={""}>
          {bachelorData.map((item, index) => (
            <li
              key={item.title}
              className={"transition-all duration-500 pb-[60px] border-r"}
            >
              <p className={"flex items-center gap-[11px]"}>
                <span
                  className={
                    "flex justify-center items-center bg-[#E6E6E6] text-[#1E67BF] w-[25px] h-[25px]"
                  }
                >
                  {index + 1}
                </span>
                <span className={"text-[#000000] text-14 font-medium"}>
                  {item.title}
                </span>
              </p>
              <p className={"text-[#6D6D6D] text-14 font-medium pr-[23px]"}>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <Image
          src={"/assets/images/MobileRectangle.png"}
          alt={"mobile"}
          width={200}
          height={337}
          className="aspect-[200/337] w-[250px] h-auto m-auto"
        />
      </section>
    </div>
  );
};

export default BachelorSteps;
