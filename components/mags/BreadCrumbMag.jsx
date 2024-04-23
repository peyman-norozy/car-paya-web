'use client'

import React from "react";
import left from '@/public/assets/icons/Arrow-Left 1.svg'
import Image from "next/image";
import Link from "next/link";

const BreadCrumbMag = (props) => {
  return (
    <div className="flex items-center gap-1 mb-8 pt-4">
        <Link href='/' className="text-[0.5rem] size490:text-10 size560:text-12 size690:text-14 text-[#999] line-clamp-1">صفحه اصلی</Link>
      <div className="flex items-center gap-1">
      {props.data.map((item, index) => (
        <Link href={item.url} key={index} className="flex items-center gap-1 text-[#999] last:text-[#000]">
          <Image src={left} alt="" width={20} height={20} />
          <p className="text-[0.5rem] size490:text-10 size560:text-12 size690:text-14 line-clamp-1">{item.name}</p>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default BreadCrumbMag;
