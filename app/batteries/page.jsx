import React from "react";
import BatteriesMainPage from "@/components/BatteriesMainPage/BatteriesMainPage";

const Page = (props) => {
  return (
    <div
      className={
        "flex flex-col relative py-4 max-w-[1772px] m-auto lg:mr-[424px] mr-0 mt-[26px] pb-10"
      }
    >
      <BatteriesMainPage />
    </div>
  );
};

export default Page;
