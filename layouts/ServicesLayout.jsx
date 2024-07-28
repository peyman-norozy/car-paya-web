import React from "react";
import CarSelectComponent from "@/components/public/CarSelectComponent";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import { serviceData } from "@/staticData/data";

const ServicesLayout = (props) => {
  return (
    <main
      className={`lg:mt-[64px] relative max-w-[1772px] size666:px-[48px] m-auto`}
    >
      <CarSelectComponent />
      <CarServicesSlider data={serviceData} />
      {props.children}
    </main>
  );
};

export default ServicesLayout;
