import React from "react";
import Link from "next/link";
import DetailingPage from "@/components/DetailingPage";

const Page = (props) => {
  console.log(props.searchParams, "jfjfjffjfj");

  return (
    <>
      <DetailingPage searchParams={props.searchParams} />
    </>
  );
};

export default Page;
