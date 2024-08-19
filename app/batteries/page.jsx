import React from "react";
import BatteriesMainPage from "@/components/BatteriesMainPage/BatteriesMainPage";

const Page = (props) => {
  return (
    <div
      className={
        "flex flex-col relative py-4 max-w-[1772px] m-auto lg:mr-[424px] mx-3 lg:mt-[26px] mt-0 pb-10"
      }
    >
      <BatteriesMainPage />
    </div>
  );
};

export default Page;
