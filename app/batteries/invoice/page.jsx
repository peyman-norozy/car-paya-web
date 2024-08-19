"use client";
import { API_PATHS } from "@/configs/routes.config";
import Image from "next/image";
import { useEffect, useState } from "react";

const InvoicePage = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return;
  }
  return (
    <div className="w-full flex rounded-2xl text-[#FEFEFE] mt-32 mb-6 overflow-hidden gap-px">
      <div className="w-[400px] flex flex-col gap-px">
        <div className="h-12 flex items-center justify-center bg-[#47505D] font-bold">
          مشخصات
        </div>
        <div className="flex flex-col gap-4 p-6 bg-[#707070] h-[calc(100%-49px)]">
          <Image
            src={
              process.env.BASE_API +
              "/web" +
              API_PATHS.FILE +
              "/" +
              JSON.parse(localStorage.getItem("selectedVehicle")).image
            }
            width={270}
            height={190}
          />
          <div className="font-normal">
            <span className="font-semibold ml-1">نوع وسیله نقلیه:</span>
            <span className="font-normal">خودرو</span>
          </div>
          <div className="font-normal">
            <span className="font-semibold ml-1">نام وسیله نقلیه:</span>
            <span className="font-normal">بی ام وه ام 5 پترول 2022</span>
          </div>
          <div className="font-normal">
            <span className="font-semibold ml-1">نام مشتری:</span>
            <span className="font-normal">حسام نژاد</span>
          </div>
          <div className="font-normal">
            <span className="font-semibold ml-1">شماره موبایل:</span>
            <span className="font-normal">09123622427</span>
          </div>
          <div className="font-normal">
            <span className="font-semibold ml-1">آدرس:</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          </div>
          <div className="font-normal">
            <span className="font-semibold ml-1">کد فاکتور:</span>
            <span className="font-normal">02165804056</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-px w-full">
        <div className="flex flex-row gap-px w-full font-bold">
          <div className="h-12 flex items-center justify-center bg-[#47505D] flex-1">
            ردیف
          </div>
          <div className="h-12 flex items-center justify-center bg-[#47505D] flex-[3_3_0%]">
            کد کالا و خدمات
          </div>
          <div className="h-12 flex items-center justify-center bg-[#47505D] flex-[3_3_0%]">
            شرح خدمات
          </div>
          <div className="h-12 flex items-center justify-center bg-[#47505D] flex-[3_3_0%]">
            عنوان
          </div>
          <div className="h-12 flex items-center justify-center bg-[#47505D] flex-1">
            واحد
          </div>
          <div className="h-12 flex items-center justify-center bg-[#47505D] flex-1">
            تعداد
          </div>
          <div className="h-12 flex items-center justify-center bg-[#47505D] flex-[3_3_0%]">
            قیمت واحد
          </div>
          <div className="h-12 flex items-center justify-center bg-[#47505D] flex-[3_3_0%]">
            مبلغ
          </div>
        </div>
        <div className="flex flex-row gap-px w-full font-normal">
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            1
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            8964521
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            تعویض روغن
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            روغن موتور اسپیدی
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            عدد
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            1
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            1،500،000
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            1،500،000
          </div>
        </div>
        <div className="flex flex-row gap-px w-full font-normal">
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            2
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            8964521
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            تعویض روغن
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            روغن موتور اسپیدی
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            عدد
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            1
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            1،500،000
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            1،500،000
          </div>
        </div>
        <div className="flex flex-row gap-px w-full font-normal">
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            3
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            8964521
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            تعویض روغن
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            روغن موتور اسپیدی
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            عدد
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            1
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            1،500،000
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]">
            1،500،000
          </div>
        </div>
        <div className="flex flex-row gap-px w-full font-normal">
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            4
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
        </div>
        <div className="flex flex-row gap-px w-full font-normal">
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            5
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
        </div>
        <div className="flex flex-row gap-px w-full font-normal">
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            6
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
        </div>
        <div className="flex flex-row gap-px w-full font-normal">
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            8
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
        </div>
        <div className="flex flex-row gap-px w-full font-normal">
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1">
            9
          </div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-1"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
          <div className="h-12 flex items-center justify-center bg-[#5B5B5B] flex-[3_3_0%]"></div>
        </div>
        <div className="flex flex-row gap-px w-full font-bold">
          <div className="h-12 flex items-center justify-center bg-[#383838] flex-[15_15_0%]">
            مبلغ کل
          </div>
          <div className="h-12 flex items-center justify-center bg-[#383838] flex-[3_3_0%]">
            2,000,000 تومان
          </div>
        </div>
        <div className="flex flex-row gap-px w-full font-bold">
          <div className="h-12 flex items-center justify-center bg-[#383838] flex-[15_15_0%]">
            تخفیف
          </div>
          <div className="h-12 flex items-center justify-center bg-[#383838] flex-[3_3_0%]">
            2,000,000 تومان
          </div>
        </div>
        <div className="flex flex-row gap-px w-full font-bold">
          <div className="h-12 flex items-center justify-center bg-[#383838] flex-[15_15_0%]">
            مبلغ نهایی
          </div>
          <div className="h-12 flex items-center justify-center bg-[#383838] flex-[3_3_0%]">
            2,000,000 تومان
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
