import arrow from "@/public/assets/icons/Arrow-Left 1.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChangeServiceTime from "./ChangeServiceTime";
import SelectVerificationPlace from "./SelectVerificationPlace";

const VerificationThirdStep = (props) => {
  const [isSelected,setIsSelected] = useState(false)

  const placeData = [
    {title : 'در محل شما' , description : 'کارشناسی در موقعیت مکان مورد نظر شما انجام می‌شود.'},
    {title : 'در نمایندگی‌های کار چک' , description : 'برای کارشناسی باید به یکی از مراکز کارچک مراجعه کنید.'},
  ]

  const selectPlaceHandler = (id) => {
    setIsSelected(id)
}
   
    const {setStep} = props
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="mt-[2rem] mb-[7rem] border border-[#c0c0c0] rounded-10 shadow-[0_5px_20px_5px_rgba(0,0,0,0.5)] size966:w-[95%] size1090:w-[85%] m-auto overflow-hidden ]">
        <div className="py-[1.2rem] px-[1rem] md:px-[3rem] flex items-center justify-between bg-[#EAEAEA]">
          <h1 className="text-text_gray text-18">انتخاب مکان دریافت خدمات</h1>
          <Image
            src={arrow}
            alt=""
            height={20}
            width={20}
            onClick={() => setStep(2)}
            className="cursor-pointer"
          />
        </div>
        <div className="py-[3rem] px-[0.75rem] md:px-[3rem]">
          <ChangeServiceTime on_click={() => setStep(2)}/>
          <div className="mt-[1.5rem] flex flex-col gap-[1.5rem]">
            {placeData.map((item,index) => <SelectVerificationPlace setStep={setStep} options={index === 1 && 'options'} isSelected={isSelected} id={index} key={index} onClick={() => selectPlaceHandler(index)} title={item.title} description={item.description}/>)}
          </div>

        </div>
    </div>
    );
};

export default VerificationThirdStep;