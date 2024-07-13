import React, { useState } from "react";
import CheckInput from "../CheckInput";
import VerificationOptionAccordian from "../VerificationOptionAccordian";
import { numberWithCommas } from "@/utils/function-utils";

const SelectVerificationType = (props) => {
  const { title, data,price,isSelected , id , active } = props;
  const [isOpen, setIsOpen] = useState(null);
  const toggleDescriptionHandler = (index) => {
    setIsOpen((prevState) => (prevState === index ? null : index));
  };

  return (
    <div className={`py-[1.5rem] w-full rounded-10 shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] bg-[#FFF] border-[1px] overflow-hidden relative ${isSelected === id ? 'border-RED_500' : 'border-[#dedede]'} ${active ? 'cursor-pointer' : '' +
        'cursor-not-allowed'}`}>
        {!active && <div className='absolute top-0 w-full h-full bg-[#CCCCCC90] z-[100]'></div>}
      <div className="w-[90%] m-auto flex flex-col">
        <div className="flex items-center gap-[0.5rem] cursor-pointer" onClick={props.onClick}>
          <CheckInput isSelected={isSelected} id={id}/>
          <h1 className="text-RED_500 text-[1.25rem]">{title}</h1>
        </div>
        <div className="py-[1rem] border-b-[1px] border-[#c0c0c0]  h-[330px]">
          {data.map((item, index) => (
            <VerificationOptionAccordian
              onClick={() => toggleDescriptionHandler(index)}
              key={index}
              option={item.label}
              id={index}
              isOpen={isOpen}
              description={item.value}
            />
          ))}
        </div>
        <div className="flex items-center gap-[1rem] text-[#303030] mt-[1.5rem]">
            <p className="text-18">قیمت:</p>
            <p>{numberWithCommas(price)} تومان</p>
        </div>
      </div>
    </div>
  );
};

export default SelectVerificationType;
