"use client";
import React, { useState } from "react";
import PeriodicServiceTabCard from "@/components/cards/PeriodicServiceTabCard";
import CustomSlider from "@/components/CustomSlider/CustomSlider";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const CarServicesSlider = (props) => {
  const pathname = usePathname();
  console.log(pathname);
  const [isClicked, setIsClicked] = useState(pathname);
  const showHeaderData = useSelector((state) => state.todo.showHeader);

  const selectTabHandler = (index) => {
    setIsClicked(index);
  };

  console.log(props.data);
  return (
    <div
      className={`lg:block hidden sticky ${showHeaderData ? "top-[98px]" : "top-0"} bg-[#d1d1d1] py-4 rounded-b-lg  w-[calc(100%-424px)] mr-auto z-[2000]`}
    >
      <CustomSlider>
        {props.data.map((item, index) => (
          <PeriodicServiceTabCard
            href={item.href}
            isClicked={isClicked}
            onClick={() => selectTabHandler(item.href)}
            index={index}
            key={index}
            title={item.title}
            src={item.icon}
            width={60}
            height={40}
          />
        ))}
      </CustomSlider>
    </div>
  );
};

export default CarServicesSlider;
