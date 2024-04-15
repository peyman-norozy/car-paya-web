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
import { useEffect, useState } from "react";
import ProductCard from "@/components/cards/ProductCard";
import CheckFilter from "@/components/CheckFilter";
import SelectMultipleOptions from "@/components/SelectMultipleOptions";
import axios from "axios";

const ProductsPage = (props) => {
  console.log(props.data.data);
  const data = props.data.data
  const [isClicked, setIsClicked] = useState(0);
  const [isSelected,setIsSelected] = useState(null)
  
  const tabTitle = [{ name: "خودرو" }, { name: "موتور سیکلت" }];
  const verificationTab = [
    { title: "فیلتر و روغن", src: cluch , href : '/‌products' },

    { title: 'فروشگاه باتری', src: battery , href : '/batteries' },
    { title: 'سرویس دوره ای', src: service , href : '/periodic-service' },
    { title: "شناسنامه و سوابق خودرو", src: car_bg , href : "/profile/my-vehicle/my-car" },
    { title: "بیمه", src: insurance , href: '/' },
    { title: "کارشناسی خودرو", src: verification , href : '/vehicle-verification' },
  ];

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
      <div className="w-full mt-[1rem] flex flex-col gap-[1.5rem]">
        <div className="hidden size1000:flex flex-row-reverse items-center gap-[1rem]">
          {verificationTab.map((item, index) => (
            <SelectedVehicleVerificationBox
            href={item.href}
              isClicked={isClicked}
              onClick={() => selectTabHandler(index)}
              index={index}
              key={index}
              title={item.title}
              src={item.src}
              width={60}
              height={60}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-[0.65rem]">
            {selectFilterOptions.map((item, index) => (
              <CheckFilter key={index} item={item.name} />
            ))}
          </div>
          <div className="flex gap-[0.65rem]">
            {multipleSelectData.map((item, index) => (
              <SelectMultipleOptions on_click={() => selectOptionHandler(index)} id={index} name={item.name} isSelected={isSelected} key={index} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-[0.75rem] gap-y-[0.75rem]">
          {data.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
