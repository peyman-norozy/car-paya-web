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
        "flex relative justify-end max-w-[1676px] mx-auto p-4 mt-[110px]"
      }
    >
      <CarSelectComponent />
      <section className={"w-[calc(100%-450px)]"}>
        <CarServicesSlider data={serviceData} />
        <ul className={"mt-[40px] flex flex-col gap-[24px]"}>
          {fakeArray.map((item, index) => (
            <DetailingCard key={index} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Page;
