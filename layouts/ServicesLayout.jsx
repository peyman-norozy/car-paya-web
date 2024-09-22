import React from "react";
import CarSelectComponent from "@/components/public/CarSelectComponent";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import { serviceData } from "@/staticData/data";

const ServicesLayout = (props) => {
  return (
    <main
      className={`lg:mt-0 relative max-w-[1772px] sm:px-[48px] px-2 m-auto`}
    >
      <CarSelectComponent />
      {/*<CarServicesSlider data={serviceData} />*/}
      {props.children}
    </main>
  );
};

export default ServicesLayout;
