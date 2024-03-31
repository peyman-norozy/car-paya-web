'use client'

import SelectVehicleBox from "@/components/cards/SelectVehicleBox";
import React, { Fragment, useEffect, useRef, useState } from "react";
import battery from "@/public/assets/images/battery-product.svg";
import battery_product from "@/public/assets/images/battery-amargon.png";
import cluch from "@/public/assets/images/cluch-bumpers.png";
import insurance from "@/public/assets/images/insurance.png";
import service from "@/public/assets/images/periodic-service.png";
import car_bg from "@/public/assets/images/car-background.png";
import verification from "@/public/assets/images/vehicle-verification.png";
import compare from "@/public/assets/icons/compare.svg";
import arrow from "@/public/assets/icons/Arrow-Down.svg";
import SelectedVehicleVerificationBox from "@/components/SelectedVehicleVerificationBox";
import Button from "@/components/Button";
import Image from "next/image";
import BatteryCard from "@/components/cards/BatteryCard";
import PurchaseBatteryModal from "@/components/PurchaseBatteryModal";
import axios from "axios";
import { API_PATHS } from "@/configs/routes.config";

const Batteries = () => {
  const [isClicked, setIsClicked] = useState(0);
  const [filterISOpen, setFilterIsOpen] = useState(false);
  const [batteryIsSelected, setBatteryIsSelected] = useState(false);
  const [data,setData] = useState([])
  const[filter,setFilter] = useState('فیلتر بر اساس')
  const filterRef = useRef(null);
  const verificationTab = [
    { title: "فروشگاه باتری", src: battery, href: "/batteries" },
    {
      title: "کارشناسی خودرو",
      src: verification,
      href: "/vehicle-verification",
    },
    { title: "فیلتر و روغن", src: cluch, href: "/products" },
    { title: "سرویس دوره ای", src: service, href: "/periodic-service" },
    { title: "شناسنامه و سوابق خودرو", src: car_bg, href: "/" },
    { title: "بیمه", src: insurance, href: "/" },
  ];
  const tabTitle = [
    { name: "خودرو" },
    { name: "موتور سیکلت" },
    { name: "وسیله من" },
  ];

  const filterData = [
    { name: "جدید ترین" },
    { name: "محبوب ترین" },
    { name: "ارزان ترین" },
  ];

  //   const openFilterHandler = (event) => {
  //     console.log(event.target.offsetParent , filterRef.current);
  //     if(event.target.offsetParent !== filterRef.current) {
  //         setFilterIsOpen(false)
  //     }else {
  //         setFilterIsOpen(prevState => !prevState)

  //     }
  //   }

  const selectFilterHandler = (event) => {
    console.log(event.target.innerHTML);
setFilter(event.target.innerHTML)
  }

  const toggleFilterHandler = () => {
    setFilterIsOpen((prevState) => !prevState);
  };
  const closeFilterHandler = (event) => {
    if (event.target.offsetParent !== filterRef.current) {
      setFilterIsOpen(false);
    }
  };

  const selectTabHandler = (index) => {
    setIsClicked(index);
  };

  //   useEffect(() => {
  //     window.addEventListener("click", closeFilterHandler);
  //     return () => window.removeEventListener("click", closeFilterHandler);
  //   }, []);

  useEffect(() => {
    axios.get(process.env.BASE_API + '/web' + '/batteries').then(res => {
      setData(res.data.data)
    }).catch(err => console.log(err))
    
  } , [])

  return (
    <Fragment>
      <div className="w-[97%] size1056:w-[63%] absolute top-[5.6rem] left-[1.5%] size1090:left-[2.5%] hidden size1000:flex flex-row-reverse items-center gap-[1rem]">
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
    
    <div className="w-[95%] size671:w-[98%] size1090:w-[95%] m-auto flex flex-col size1056:flex-row gap-[1rem] size1275:gap-[3rem]">
      <div className="w-full size671:w-[70%] size720:w-[48%] size1136:w-[45%] size1000:pt-[9rem] size1056:pt-0 mt-[1rem] self-center size1056:self-auto">
        <SelectVehicleBox
          tabTitle={tabTitle}
          title="انتخاب وسیله نقلیه"
        />
      </div>
      <div className="pt-0 size1056:pt-[9rem] w-full mt-[1rem] flex flex-col gap-[1.5rem]">
        
        <div className="flex items-center justify-between">
          <div ref={filterRef}>
            <div
              onClick={toggleFilterHandler}
              className="bg-[#D9D9D9] rounded-[8px] py-[0.5rem] px-[1.5rem] flex items-center gap-[0.5rem] text-text_gray cursor-pointer relative"
            >
              <Image src={arrow} alt="" width={10} height={10} />
              <p className="text-12">{filter}</p>
              <ul
                className={`bg-[#D9D9D9] rounded-[8px] absolute  top-[2.2rem] right-0 left-0 text-12 overflow-hidden transition-all duration-1000 ${
                  filterISOpen ? "h-[7.5rem] py-[0.5rem] px-[0.5rem]" : "h-0 "
                }`}
              >
                {filterData.map((item, index) => (
                  <li
                    className="p-[0.5rem] w-full rounded-[8px] hover:bg-[#9d9d9d]"
                    key={index}
                    onClick={selectFilterHandler}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Button class_name="bg-[#D9D9D9] rounded-[8px] py-[0.5rem] px-[1.5rem] flex items-center gap-[0.5rem] text-text_gray">
            <Image src={compare} alt="" width={15} height={15} />
            <p className="text-12">مقایسه محصولات</p>
          </Button>
        </div>
        <ul className="flex flex-col gap-[1.5rem]">
          {data.map((item, index) => (
            <li key={index}>
              <BatteryCard
                setBatteryIsSelected={setBatteryIsSelected}
                data={item}
              />
            </li>
          ))}
        </ul>
      </div>
      {batteryIsSelected && (
        <div
          onClick={() => setBatteryIsSelected(false)}
          className="h-[100vh] w-full bg-[#000] opacity-[0.8] z-[10] fixed top-0 right-0 left-0 bottom-0"
        ></div>
      )}
      {batteryIsSelected && (
        <div className="w-[75%] size900:w-[50%] m-auto fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[15]">
          <PurchaseBatteryModal setBatteryIsSelected={setBatteryIsSelected} />
        </div>
      )}
    </div>
    </Fragment>
  );
};

export default Batteries;
