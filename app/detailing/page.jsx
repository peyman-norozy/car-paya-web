import React from "react";
import ServicesCard from "@/components/cards/ServicesCard/ServicesCard";

let fakeArray = [0, 0, 0, 0, 0, 0, 0];

const Page = () => {
  return (
    <div className={"flex flex-col relative py-4 max-w-[1772px] m-auto"}>
      <h1 className={"lg:hidden block text-center text-[20px] font-semibold"}>
        دیتیلینگ
      </h1>
      <section className={"lg:w-[calc(100%-424px)] w-full mr-auto"}>
        <ul className={"lg:mt-16 mt-[20px] flex flex-col gap-[24px]"}>
          {fakeArray.map((item, index) => (
            <ServicesCard key={index} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Page;
