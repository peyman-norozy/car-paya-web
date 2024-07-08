import React from "react";
import Link from "next/link";

const MagsCategorySection = ({ data }) => {
   
  return (
    <div className="flex items-center gap-[1rem] overflow-x-scroll pb-[0.5rem]">
      {data &&
        data.map((item, index) => (
          <Link
            href={`/mags/category/${item.slug}`}
            key={index}
            className="text-[#212B5E] bg-[#ECEEF8] text-14 cursor-pointer py-[0.5rem] px-[1rem] rounded-5 "
          >
            <p className="line-clamp-1">{item.title}</p>
          </Link>
        ))}
    </div>
  );
};

export default MagsCategorySection;
