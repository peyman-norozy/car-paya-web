'use client'

import SelectedVehicleVerificationBox from "@/components/SelectedVehicleVerificationBox";
import SelectVehicleBox from "@/components/cards/SelectVehicleBox";
import cluch from "@/public/assets/images/cluch-bumpers.png";
import battery from '@/public/assets/images/battery-product.svg'
import insurance from '@/public/assets/images/insurance.png'
import service from '@/public/assets/images/periodic-service.png'
import car_bg from '@/public/assets/images/car-background.png'
import verification from "@/public/assets/images/vehicle-verification.png";
import caspian from "@/public/assets/images/caspian.png";
import React, {useState} from "react";
import ProductCard from "@/components/cards/ProductCard";
import CheckFilter from "@/components/CheckFilter";
import SelectMultipleOptions from "@/components/SelectMultipleOptions";
import {serviceData} from "@/staticData/data";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";

const ProductsPage = () => {
    const [isClicked, setIsClicked] = useState(0);
    const [isSelected, setIsSelected] = useState(null)

    const tabTitle = [{name: "خودرو"}, {name: "موتور سیکلت"}];

  const selectFilterOptions = [
    { name: "کالاهای موجود " },
    { name: "کالاهای تخفیف دار" },
  ];

  const multipleSelectData = [
    { name: "لوازم یدکی" },
    { name: "فیلتر" },
    { name: "روغن" },
  ];

    const selectTabHandler = (index) => {
        setIsClicked(index);
    };
    const selectOptionHandler = (index) => {
        setIsSelected(index)
    }
    return (
        <div className="w-[95%] m-auto flex gap-[4rem]">
            <div className="w-[45%] mt-[1rem]">
                <SelectVehicleBox
                    myTehicleTab={0}
                    tabTitle={tabTitle}
                    title="انتخاب وسیله نقلیه"
                />
            </div>
            <div className="pt-0 size1056:pt-[9rem] w-full mt-[1rem] flex flex-col gap-[1.5rem]">
                <div
                    className="w-[97%] size1056:w-[63%] absolute top-[5.6rem] left-[1.5%] size1090:left-[2.5%] hidden size1000:flex flex-row-reverse items-center gap-[1rem]">
                    <CarServicesSlider data={serviceData}/>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-[0.65rem]">
                        {selectFilterOptions.map((item, index) => (
                            <CheckFilter key={index} item={item.name}/>
                        ))}
                    </div>
                    <div className="flex gap-[0.65rem]">
                        {multipleSelectData.map((item, index) => (
                            <SelectMultipleOptions on_click={() => selectOptionHandler(index)} id={index}
                                                   name={item.name} isSelected={isSelected} key={index}/>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-x-[0.75rem] gap-y-[0.75rem]">
                    {data.map((item, index) => (
                        <ProductCard key={index} data={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
