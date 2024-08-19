import React from "react";

import PeriodicServiceIndex from "@/components/PeriodicServiceIndex/PeriodicServiceIndex";
const servics = [
  "پولیش",
  "صفر شویی",
  "کاور",
  "سرامیک ۳ ساله",
  "سرامیک ۵ ساله",
  "سرامیک ۷ ساله",
];

const Page = () => {
  return (
    <div className="lg:flex items-start gap-8 mt-1 lg:mt-10 max-w-[1772px] m-auto  py-4 relative">
      <div className={"w-full lg:w-[calc(100%-424px)] mr-auto"}>
        <PeriodicServiceIndex
          title={"دیتیلینگ"}
          servics={servics}
          ImageAddress1={"/assets/images/detailingIndex1.jpg"}
          ImageAddress2={"/assets/images/auto-detailing01.jpg"}
          icon={"/assets/icons/detailingIconservices.png"}
        />
      </div>
    </div>
  );
};

export default Page;
