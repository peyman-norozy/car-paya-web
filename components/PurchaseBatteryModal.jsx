import React, { useState } from "react";
// import cross from "@/public/assets/icons/cross.svg";
import Image from "next/image";
import Button from "./Button";
import GreenCheckInput from "./GreenCheckInput";
import { numberWithCommas } from "@/utils/function-utils";
import ProfileEditeSelectInput from "@/components/ProfileEditeSelectInput";
// import Toman from "@/public/assets/icons/Toman.svg";
// import arrowLeft from "@/public/assets/icons/Arrow-Left.svg";

const PurchaseBatteryModal = (props) => {
  const { setBatteryIsSelected } = props;
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [provinces, setProvinces] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [cityId, setCityId] = useState("");

  const purchseOptions = [
    {
      title: "باتری سوزوکی 70 آمپر ",
      titleDescription: "(با باتری فرسوده هم آمپر)",
      price: 0,
      id: "oldSameAmperBattery",
    },
    {
      title: "باتری سوزوکی 70 آمپر با باتری فرسوده آمپر متفاوت",
      titleDescription: "",

      price: 1200000,
      id: "selectAmper",
    },
    {
      title: "باتری سوزوکی 70 آمپر",
      titleDescription: "(بدون باتری فرسوده)",
      price: 1200000,
      id: "noneOldBattery",
    },
  ];

  const amperSelectData = [
    { title: "۳۰ آمپر", id: 30 },
    { title: "۴۰ آمپر", id: 40 },
    { title: "۵۰ آمپر", id: 50 },
    { title: "۶۰ آمپر", id: 60 },
    { title: "۷۰ آمپر", id: 70 },
    { title: "۸۰ آمپر", id: 80 },
    { title: "۹۰ آمپر", id: 90 },
    { title: "۱۰۰ آمپر", id: 100 },
  ];

  const selectOptionHandler = (index) => {
    setIsSelected(index);
  };
  const selectPriceHandler = (event) => {
    setSelectedPrice(event.target.getAttribute("price"));
  };

  return (
    <div className="rounded-10 overflow-hidden w-full shadow-[0_0_5px_0_rgba(0,0,0,0.4)]">
      <div className="bg-[#eaeaea] flex items-center justify-between px-[1.25rem] py-[1rem] ">
        <h2 className="text-18">خرید باطری</h2>
        {/*<Image*/}
        {/*  src={cross}*/}
        {/*  alt=""*/}
        {/*  width={20}*/}
        {/*  height={20}*/}
        {/*  onClick={() => setBatteryIsSelected(false)}*/}
        {/*  className="cursor-pointer"*/}
        {/*/>*/}
      </div>
      <div className="bg-white w-full py-[1.75rem] px-[1.25rem]">
        <div>
          {purchseOptions.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-[0.75rem] py-[1rem] mb-[0.25rem] border-b-[1px] border-b-[#C0C0C0]"
              onClick={selectPriceHandler}
              price={item.price}
            >
              <div className={"flex items-center gap-2"}>
                <GreenCheckInput
                  isSelected={isSelected === index}
                  on_click={() => selectOptionHandler(index)}
                  class_name="rounded-[50%] cursor-pointer self-start"
                />
                <h3 className={`text-14 size1000:text-16`}>
                  <span> {item.title}</span>
                  <span>{item.titleDescription}</span>
                  {item.id === "selectAmper" ? (
                    <div className={"mt-4"}>
                      <ProfileEditeSelectInput
                        type={"text"}
                        icon={"cc-edit"}
                        title={"انتخاب آمپر"}
                        data={amperSelectData}
                        height={"h-[200px]"}
                        // star={true}
                        relation={false}
                        // setCitiesData={setCitiesData}
                        // setProvinces={setProvinces}
                        setCity={setSelectOption}
                        setCityId={setCityId}
                        selectOptionData={selectOption}
                        // setProvincesId={setProvincesId}
                        name={"select_amper"}
                        id={"select_amper"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </h3>
              </div>
              <div className="flex mr-[0.2rem] size933:mr-[1rem]">
                <p className="mt-[0.5rem] flex items-center gap-2">
                  {numberWithCommas(item.price)}
                  <span>تومان</span>
                </p>
                {/*<Image src={Toman} alt="" width={20} height={20} />*/}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between py-[1.5rem]">
          <div className="flex items-center gap-[0.25rem] size1000:gap-[0.5rem]">
            <p>مبلغ قابل پرداخت: </p>
            <div className="flex size1000:mr-[1rem]">
              <p className="mt-[0.5rem]">{numberWithCommas(1200000)}</p>
              {/*<Image src={Toman} alt="" width={20} height={20}/>*/}
            </div>
          </div>
          <Button class_name="bg-[#3aab38] rounded-10 hover:shadow-[0_0_5px_0_rgba(0,0,0,0.4)] flex items-center justify-center ga-[0.25rem] text-white px-[1.5rem] py-[0.5rem]">
            <p> تایید و ادامه</p>
            {/*<Image src={arrowLeft} alt="" height={20} width={20} />*/}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseBatteryModal;
