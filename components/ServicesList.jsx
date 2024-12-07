"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ServicesList = ({ data }) => {
  const pathName = usePathname();
  return (
    <li
      className={`py-1 px-1 hover:bg-[#FDE7DE] rounded-5 ${pathName === data.href && "bg-[#FDE7DE]"}`}
    >
      <Link href={data.href} className={"block"}>
        {data.title}
      </Link>
    </li>
  );
};

export default ServicesList;
