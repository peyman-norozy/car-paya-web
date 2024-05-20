"use client";
import SelectVehicleBox from "@/components/cards/SelectVehicleBox";
import React, { useEffect } from "react";
import ProductCard from "@/components/cards/ProductCard";
import CheckFilter from "@/components/CheckFilter";
import { serviceData } from "@/staticData/data";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import axios from "axios";

const ProductsPage = (props) => {
  const data = props.data && props.data.data;

  const tabTitle = [{ name: "خودرو" }, { name: "موتور سیکلت" }];

  return (
    <div className="w-[95%] m-auto flex flex-col size1000:flex-row items-center size1000:items-start gap-[0.5rem] size1190:gap-[2rem] size1275:gap-[4rem]">
      <div className="hidden size1000:block size617:w-[60%] size1160:w-[45%] mt-[1rem]">
        <SelectVehicleBox
          myTehicleTab={0}
          tabTitle={tabTitle}
          title="انتخاب وسیله نقلیه"
        />
      </div>
      <div className="pt-0 size1000:pt-[9rem] w-full mt-[1rem] flex flex-col gap-[1.5rem] relative">
        <div className="w-full absolute top-0 right-0 hidden size1000:flex flex-row-reverse items-center gap-[1rem]">
          <CarServicesSlider data={serviceData} />
        </div>
        {/* <div className="flex items-center justify-between">
                    <div className="flex gap-[0.65rem]">
                        {selectFilterOptions.map((item, index) => (
                            <CheckFilter key={index} item={item.name}/>
                        ))}
                    </div>
                </div> */}
        <div className="grid grid-cols-1 size560:grid-cols-2 size800:grid-cols-3  size1000:grid-cols-2 size1228:grid-cols-3 gap-x-[0.75rem] gap-y-[0.75rem]">
          {data.length === 0 ? (
            <p className="text-center text-[#333] col-span-full">
              متاسفانه محصولی یافت نشد
            </p>
          ) : (
            data.map((item, index) => <ProductCard key={index} data={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
