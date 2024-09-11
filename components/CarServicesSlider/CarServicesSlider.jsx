"use client";
import React, { useEffect, useState } from "react";
import PeriodicServiceTabCard from "@/components/cards/PeriodicServiceTabCard";
import CustomSlider from "@/components/CustomSlider/CustomSlider";
import { usePathname, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

const CarServicesSlider = (props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams()
  const [isClicked, setIsClicked] = useState(pathname);
  const [carServicesShow, setCarServicesShow] = useState(false);
  const showHeaderData = useSelector((state) => state.todo.showHeader);

  const selectTabHandler = (index) => {
    setIsClicked(index);
  };

  useEffect(() => {
    switch (pathname) {
      case "/detailing":
        setCarServicesShow(true);
        break;
      case "/batteries":
        setCarServicesShow(true);
        break;
      case "/periodic-service":
        setCarServicesShow(true);
        break;
      case "/vehicle-verification":
        setCarServicesShow(true);
        break;
      default:
        setCarServicesShow(false);
    }
  }, [pathname]);
  if (!(searchParams.toString().includes("step")&&pathname.includes("/vehicle-verification"))) {
    return (
      carServicesShow && (
        <div
          className={`lg:block hidden sticky top-[98px] bg-[#F4F4F4] py-7 rounded-b-lg w-[calc(100%-424px)] mr-auto z-[2000]`}
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
      )
    );
  }
};

export default CarServicesSlider;
