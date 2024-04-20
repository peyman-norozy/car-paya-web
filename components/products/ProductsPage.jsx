'use client'
import SelectVehicleBox from "@/components/cards/SelectVehicleBox";
import React from "react";
import ProductCard from "@/components/cards/ProductCard";
import CheckFilter from "@/components/CheckFilter";
import {serviceData} from "@/staticData/data";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";

const ProductsPage = (props) => {
    const data = props.data && props.data.data

    const tabTitle = [{name: "خودرو"}, {name: "موتور سیکلت"}];

  const selectFilterOptions = [
    { name: "کالاهای موجود " },
    { name: "کالاهای تخفیف دار" },
  ];

    return (
        <div className="w-[95%] m-auto flex flex-col size1000:flex-row items-center size1000:items-start gap-[0.5rem] size1190:gap-[2rem] size1275:gap-[4rem]">
            <div className="w-full size460:w-[80%] size617:w-[60%] size1160:w-[45%] mt-[1rem]">
                <SelectVehicleBox
                    myTehicleTab={0}
                    tabTitle={tabTitle}
                    title="انتخاب وسیله نقلیه"
                />
            </div>
            <div className="pt-0 size1000:pt-[9rem] w-full mt-[1rem] flex flex-col gap-[1.5rem]">
                <div
                    className="w-[97%] size1000:w-[63%] absolute top-[5.6rem] left-[1.5%] size1050:left-[-1%] hidden size1000:flex flex-row-reverse items-center gap-[1rem]">
                    <CarServicesSlider data={serviceData}/>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-[0.65rem]">
                        {selectFilterOptions.map((item, index) => (
                            <CheckFilter key={index} item={item.name}/>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 size560:grid-cols-2 size800:grid-cols-3  size1000:grid-cols-2 size1228:grid-cols-3 gap-x-[0.75rem] gap-y-[0.75rem]">
                {data.length === 0 ? <p className="text-center text-[#333] col-span-full">متاسفانه محصولی یافت نشد</p> : data.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
