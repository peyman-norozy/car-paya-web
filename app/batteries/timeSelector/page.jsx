import React from "react";
import BatteriesTimeSelector from "@/components/BatteriesTimeSelector/BatteriesTimeSelector";

const Page = () => {
  return (
    <div className={"mb-10"}>
      <BatteriesTimeSelector backUrl={"/batteries"} accordionState={true} />
    </div>
  );
};

export default Page;
