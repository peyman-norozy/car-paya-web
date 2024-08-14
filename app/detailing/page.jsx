import React from "react";
// import Link from "next/link";
// import DetailingPage from "@/components/DetailingPage";
//
// const Page = (props) => {
//   console.log(props.searchParams, "jfjfjffjfj");
//
//   return (
//     <>
//       <DetailingPage searchParams={props.searchParams} />
//     </>
//   );
// };
//
// export default Page;

import PeriodicServiceIndex from "@/components/PeriodicServiceIndex/PeriodicServiceIndex";

const Page = () => {
  return (
    <div className="lg:flex items-start gap-8 mt-1 lg:mt-10 max-w-[1772px] m-auto  py-4 relative">
      <div className={"w-full lg:w-[calc(100%-424px)] mr-auto"}>
        <PeriodicServiceIndex />
      </div>
    </div>
  );
};

export default Page;
