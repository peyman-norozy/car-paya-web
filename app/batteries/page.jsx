import React from "react";
import Link from "next/link";

const Page = (props) => {
  return (
    <div
      className={
        "flex flex-col relative py-4 max-w-[1772px] m-auto mr-[500px] mt-[100px]"
      }
    >
      <Link
        href={
          "batteries/products?attribute_slug=type_vehicle&attribute_value=car"
        }
        className={"bg-red-600 text-white p-2"}
      >
        batteries product
      </Link>
    </div>
  );
};

export default Page;
