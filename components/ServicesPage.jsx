"use client";

import React from "react";
import ServicesCard from "@/components/cards/ServicesCard/ServicesCard";

const ServicesPage = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className={"flex flex-col relative py-4 max-w-[1772px] m-auto"}>
      <h1 className={"lg:hidden block text-center text-[20px] font-semibold"}>
        دیتیلینگ
      </h1>
      <section className={"lg:w-[calc(100%-424px)] w-full mr-auto"}>
        <ul className={"lg:mt-16 mt-[20px] flex flex-col gap-[24px]"}>
          {data.map((item, index) => (
            <ServicesCard key={item.id} {...item} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ServicesPage;
