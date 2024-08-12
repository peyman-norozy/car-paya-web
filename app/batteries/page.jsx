import React from "react";
import BatteriesMainPage from "@/components/BatteriesMainPage/BatteriesMainPage";

const Page = (props) => {
  return (
    <div
      className={
        "flex flex-col relative py-4 max-w-[1772px] m-auto mr-[500px] mt-[100px]"
      }
    >
      <BatteriesMainPage />
    </div>
  );
};

export default Page;
