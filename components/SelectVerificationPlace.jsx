import React, { useState } from "react";
import GreenCheckInput from "./GreenCheckInput";
import MyLocations from "./MyLocations";
import Button from "./Button";
import plus from "@/public/assets/icons/plus.svg";
import Image from "next/image";
import arrowLeft from "@/public/assets/icons/Arrow-Left.svg";
import arrow from "@/public/assets/icons/Arrow-Down.svg";
import CarCheckLocations from "./CarCheckLocations";
const SelectVerificationPlace = (props) => {
  const { title, description, id, onClick, isSelected, options ,setStep } = props;
  const [isClicked, setIsClicked] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const myLocationData = [
    {
      title: "غرب",
      province: "تهران",
      city: "تهران",
      neighborhood: "آیت الله کاشانی",
    },
    {
      title: "غرب",
      province: "تهران",
      city: "تهران",
      neighborhood: "آیت الله کاشانی",
    },
  ];

  const carCheckLocations = [
    {
      name: "حسام حسامی",
      call: "0912 425-2522",
      code: "021021",
      address: "تهران، کوروش بزرگ، بین داریوش اول و داریوش دوم پلاک 6",
      title: "کارشناسی خودرو ایمان",
    },
    {
      name: "حسام حسامی",
      call: "0912 425-2522",
      code: "021021",
      address: "تهران، کوروش بزرگ، بین داریوش اول و داریوش دوم پلاک 6",
      title: "کارشناسی خودرو ایمان",
    },
  ];

  const selectLocationHandler = (index) => {
    setIsClicked(index);
  };

  const checkRulesHandler = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div>
      <div
        className={`relative bg-[#f6f6f6] px-[1rem] py-[1rem] rounded-10 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] border ${
          isSelected === id ? "border-[#3aab38]" : ""
        }`}
        onClick={onClick}
      >
        <div className="flex items-center gap-[0.5rem] mb-[0.25rem]">
          <GreenCheckInput
            isSelected={isSelected === id}
            class_name="rounded-[50%] w-[1.35rem] h-[1.35rem]"
          />
          <h1 className="font-bold text-18 size525:text-20">{title}</h1>
        </div>
        <p className="text-14 text-[#505050]">{description}</p>
      </div>
      {isSelected === id && (
        <div className=" w-full flex flex-col gap-[1.5rem] mt-[1.5rem]">
          {isSelected === 0 && (
            <Button class_name="flex items-center rounded-[0.5rem] py-[0.5rem] px-[1.5rem] text-white bg-RED_500 text-14 w-max">
              <Image src={plus} alt="" width={20} height={20} />
              <p>آدرس جدید</p>
            </Button>
          )}
          {isSelected === 0
            ? myLocationData.map((item, index) => (
                <MyLocations
                  province={item.province}
                  city={item.city}
                  neighborhood={item.neighborhood}
                  title={item.title}
                  id={index}
                  key={index}
                  isSelected={isClicked}
                  on_click={() => selectLocationHandler(index)}
                />
              ))
            : carCheckLocations.map((item, index) => (
                <CarCheckLocations
                  key={index}
                  id={index}
                  name={item.name}
                  call={item.call}
                  code={item.code}
                  address={item.address}
                  title={item.title}
                  isSelected={isClicked}
                  on_click={() => selectLocationHandler(index)}
                />
              ))}

          <div>
            <div className="flex items-center gap-[0.5rem] mb-[1.5rem]">
              <GreenCheckInput
                on_click={checkRulesHandler}
                isSelected={isChecked}
              />
              <p className="text-14 text-text_gray">
                قوانين كارچك و سياست نامه حريم خصوصی را ميپذيرم.
              </p>
            </div>
            <div className="flex flex-col items-start gap-[1rem] size525:flex-row size525:gap-0 size525:items-center justify-between mb-[3rem]">
              <Button
                class_name="py-[0.5rem] rounded-10 px-[1.5rem] shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] w-max bg-[#f6f6f6] hover:bg-[#e8e8e8] text-text_gray flex items-center gap-[0.25rem]"
                on_click={props.on_click}
              >
                <Image
                  src={arrow}
                  alt=""
                  height={10}
                  width={10}
                  className="-rotate-90"
                />
                <p className="text-14">تغییر زمان دریافت خدمت</p>
              </Button>
              <Button
                class_name="bg-[#3AAB38] w-max   flex items-center gap-[0.25rem] py-[0.5rem] px-[1.25rem] rounded-10 shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] hover:bg-[#109b38]"
                on_click={() => setStep(4)}
              >
                <p className="text-14 text-white">
                  تایید زمان و مکان دریافت خدمت
                </p>
                <Image src={arrowLeft} alt="" height={20} width={20} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectVerificationPlace;
