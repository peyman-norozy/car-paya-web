import React from "react";
import close from '@/public/assets/icons/close.svg'
import Image from "next/image";

const VerificationModal = (props) => {
  return (
    <>
      <div onClick={props.onClick} className="w-full fixed top-0 bottom-0 right-0 left-0 bg-black opacity-[0.88] z-[10000]"></div>
      <div className="absolute inset-0 m-auto w-[75%] h-[10rem] z-[100000]">
          <div className="bg-[#EAEAEA] w-full flex items-center justify-between py-[1rem] px-[2.5rem]">
            <h1 className="text-text_gray">انتخاب زمان دریافت خدمات</h1>
            <Image src={close} alt="" height={15} width={15} className="cursor-pointer" onClick={props.onClick}/>
          </div>
          <div className="bg-white py-[2.5rem] px-[2.5rem]">content</div>
      </div>
    </>
  );
};

export default VerificationModal;
