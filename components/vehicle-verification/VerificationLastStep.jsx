import React from "react";
import CarCheckLocations from "@/components/CarCheckLocations";
import Input from "@/components/Input";
import useSetQuery from "@/hook/useSetQuery";
import { useSearchParams } from "next/navigation";

const VerificationLastStep = () => {
  const searchParams = useSearchParams();
  const city_id = searchParams.get("city_id");
  const selectedItem = searchParams.get("vehicle_tip");
  const package_id = searchParams.get("package_id");
  const time_id = searchParams.get("time_id");
  const params = new URLSearchParams(searchParams.toString());

  const setQuery = useSetQuery();

  const backStepHandler = () => {
    setQuery.deleteSingleQuery(
      [
        {
          key: "time_id",
          value: time_id,
        },
      ],
      params,
    );
    setQuery.setMultiQuery([
      { key: "step", value: "step-4" },
      { key: "city_id", value: city_id },
      {
        key: "vehicle_tip",
        value: selectedItem,
      },
      { key: "package_id", value: package_id },
      { key: "time_id", value: time_id },
    ]);
  };
  return (
    <div
      className={"w-[90%] size1000:w-[80%] size1136:w-[70%] m-auto pt-[2rem]"}
    >
      <div
        className={
          "flex items-center gap-2 size752:gap-[16px] text-BLUE_600 w-full mb-4"
        }
      >
        <i
          className={"cc-arrow-right text-24 cursor-pointer"}
          onClick={backStepHandler}
        />
        <p
          className={
            "p-[6px] text-14 size752:text-16 w-full border-b border-BLUE_600"
          }
        >
          سرویس مد نظر خود را انتخاب کنید
        </p>
      </div>
      <div className={"flex items-center my-[1.75rem]"}>
        <p>فردا ــــ یک شنبه</p>
        <p>ساعت ۱۰:۰۰</p>
      </div>
      <CarCheckLocations
        id={2}
        name={"حسام حسامی"}
        call={"0912 425-2522"}
        code={"021021"}
        address={"تهران، کوروش بزرگ، بین داریوش اول و داریوش دوم پلاک 6"}
        title={"کارشناسی خودرو ایمان"}
      />
      <div className={"mt-[36px] w-full size1000:w-[60%]"}>
        <h4 className={"mb-[18px]"}>کد تخفیف دارید ؟</h4>
        <div
          className={
            "rounded-lg border border-[#B0B0B0] h-[3rem] flex items-center relative pr-3 mb-[2rem]"
          }
        >
          <i className="cc-user border-l-[2px] border-l-[#B0B0B0] pl-2 text-[#3D3D3D] text-[20px]" />
          <Input
            autoFocus
            type={"text"}
            foc
            className={
              "w-full h-full rounded-lg outline-none pr-1 text-[#3D3D3D]"
            }
            id={"name"}
          />
          <label
            htmlFor={"name"}
            className="absolute top-[-30%] bg-white right-[3%] px-1 text-14 text-[#454545]"
          >
            کد تخفیف
            <span className={"text-red-500"}>*</span>
          </label>
          <button
            className={
              "bg-BLUE_700 text-white py-[10px] px-[3rem] rounded-lg self-end h-full"
            }
          >
            تایید
          </button>
        </div>
      </div>
      <div className={"mt-[24px] w-full size1000:w-[60%] flex flex-col  gap-4"}>
        <h5 className={"text-BLUE_600"}>جزیات قیمت سرویس</h5>
        <div className={"flex items-center justify-between"}>
          <p>قیمت سرویس</p>
          <p>۷۳۵٬۰۰۰ تومان</p>
        </div>
        <div className={"flex items-center justify-between"}>
          <p>کد تخفیف</p>
          <p></p>
        </div>
      </div>
      <div
        className={
          "w-full size1000:w-[60%] border-t pt-4 border-t-[#E8E6E6] flex items-center justify-between"
        }
      >
        <div className={"text-BLUE_600 text-16 size752:text-18"}>
          <p className={"border-b border-b-BLUE_600"}>جمع قابل پرداخت</p>
          <p>۷۳۵٬۰۰۰ تومان</p>
        </div>
        <button
          className={
            "bg-BLUE_700 text-white py-[10px] px-[3rem] rounded-lg self-end h-full"
          }
        >
          تایید
        </button>
      </div>
    </div>
  );
};

export default VerificationLastStep;
