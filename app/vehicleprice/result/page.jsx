"use client";

import { postData } from "@/utils/client-api-function-utils";
import { numberWithCommas } from "@/utils/function-utils";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import carParts from "@/public/assets/images/carParts.png";

const ResultPage = () => {
  const [data, setData] = useState({});
  const [price, setPrice] = useState({});
  const params = useSearchParams();
  useEffect(() => {
    getResult();
  }, []);

  async function getResult() {
    const data = {
      color: params.get("color"),
      year: params.get("year"),
      kilometers: params.get("operation"),
      model: params.get("model"),
      tip: params.get("tip"),
      brand: params.get("brand"),
      items: params.get("items").split(","),
      image: JSON.parse(localStorage.getItem("selectedVehicle")).image,
      dots: JSON.parse(sessionStorage.getItem("dotsData")),
      vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle")).id,
    };
    console.log(data);

    setData(data);
    const res = await postData("/web/pricing/calculations", data);
    setPrice(res.data.carpaya_price);
  }

  return (
    <div className="py-10 px-4 flex flex-col lg:grid grid-cols-7 xl:grid-cols-4 items-start gap-4 justify-center ">
      <div className="flex flex-col gap-4 shadow-[0_0_6px_6px_rgba(125,125,125,0.2)] p-4 rounded-xl w-full col-span-2 xl:col-span-1">
        <div className="flex items-center gap-1">
          <span className="text-sm text-dark-500">خودرو:</span>
          <span className="text-sm font-medium">{data.tip}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-dark-500">سال ساخت:</span>
          <span className="text-sm font-medium">{data.year}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-dark-500">رنگ:</span>
          <span className="text-sm font-medium">{data.color}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-dark-500">کیلومتر مصرفی:</span>
          <span className="text-sm font-medium flex gap-1 flex-row-reverse">
            {numberWithCommas(data.kilometers)}
            <span className="font-normal">km</span>
          </span>
        </div>
        <div className="w-full h-px bg-[#bbbbbb] mt-4"></div>
        <Image
          src={process.env.BASE_API + "/web/file/" + data.image}
          className="h-52 w-auto rounded-md m-auto"
          width={300}
          height={128}
          alt=""
        />
      </div>
      <div className="w-full shadow-[0_0_6px_6px_rgba(125,125,125,0.2)] flex flex-col gap-6 p-4 rounded-xl h-fit col-span-5 xl:col-span-3">
        <div className="flex flex-col gap-12">
          <span className="text-[#0f0f0f] font-medium">
            براورد قیمت خودرو شما
          </span>
          <div className="flex flex-col items-center gap-1">
            <div className="bg-gradient-to-r from-[#10adf9] from-15% via-[#15f851] via-50% to-[#ff7d37] to-85% h-6 w-11/12 lg:w-4/5 rounded-xl"></div>
            <div className="flex items-center justify-around text-sm w-10/12">
              <span className="w-px h-6 bg-green-950"></span>
              <span className="w-px h-6 bg-green-950"></span>
            </div>
            <div className="flex items-center justify-around text-sm w-full lg:w-10/12">
              <span>
                حداکثر قیمت: {numberWithCommas(price.max_price)} تومان
              </span>
              <span>حداقل قیمت: {numberWithCommas(price.min_price)} تومان</span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center gap-4">
            <span className="font-medium text-[#0f0f0f]">
              کارشناسی خودرو شمکارشناسی خودروکارشناسی خودرو شما شماا
            </span>
            <button className="rounded-lg border w-fit border-[#F66B34] text-[#F66B34] flex items-center justify-center py-2 px-8">
              کارشناسی خودرو
            </button>
          </div>
        </div>
        <div className="w-full h-px bg-[#bbbbbb]"></div>
        <span className="text-[#0f0f0f] font-medium">وضعیت خودرو شما</span>
        <div className="flex justify-between size830:flex-row flex-col gap-y-8">
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-x-12 gap-y-2 overflow-y-scroll max-h-[215px]">
            {data.dots?.map((item, index) => (
              <div className="flex gap-1" key={index}>
                <div
                  className="size-4 rounded-full"
                  style={{ background: item.color }}
                ></div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="relative w-[360px] h-auto self-end m-auto">
            <Image src={carParts} />
            {data.dots?.map((item, index) => (
              <div
                key={item.name + index}
                style={{
                  backgroundColor: item.color,
                  top: `${item.top}%`,
                  right: `${item.right}%`,
                }}
                className="size-3 rounded-full absolute z-[2]"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
