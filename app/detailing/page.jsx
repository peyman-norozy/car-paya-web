import React from "react";
import CarSelectComponent from "@/components/public/CarSelectComponent";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import { serviceData } from "@/staticData/data";
import DetailingCard from "@/components/cards/DetailingCard/DetailingCard";

let fakeArray = [0, 0, 0, 0, 0, 0, 0];

const Page = () => {
  return (
    <div
      className={
        "flex lg:flex-row flex-col relative max-w-[1772px] mx-auto py-4 size666:px-12 lg:mt-[110px] mt-[20px]"
      }
    >
      <h1 className={"lg:hidden block text-center text-[20px] font-semibold"}>
        دیتیلینگ
      </h1>
      <CarSelectComponent />
      <section className={"lg:w-[calc(100%-424px)] w-full mr-auto"}>
        <div className={"lg:block hidden"}>
          <CarServicesSlider data={serviceData} />
        </div>
        <ul className={"lg:mt-[40px] mt-[20px] flex flex-col gap-[24px]"}>
          {fakeArray.map((item, index) => (
            <DetailingCard key={index} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Page;
