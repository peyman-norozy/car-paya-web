import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <Link
      href={"/detailing/services"}
      className={"inline-block mt-[200px] mr-[400px] bg-red-600"}
    >
      دیتیلینگ
    </Link>
  );
};

export default Page;
