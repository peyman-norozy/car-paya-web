"use client";

import { postData } from "@/utils/client-api-function-utils";
import { numberWithCommas } from "@/utils/function-utils";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
      operation: params.get("operation"),
      model: params.get("model"),
      tip: params.get("tip"),
      brand: params.get("brand"),
      items: params.get("items").split(","),
      image: JSON.parse(localStorage.getItem("selectedVehicle")).image,
    };
    setData(data);
    const res = await postData("/web/pricing/calculations", data);
    setPrice(res.data.carpaya_price);
  }

  return (
    <div className="p-10 flex md:flex-row flex-col items-center gap-12 justify-center ">
      <div className="flex flex-col gap-2 shadow-[0_0_6px_6px_rgba(125,125,125,0.2)] p-4 rounded-xl w-[310px]">
        <Image
          src={process.env.BASE_API + "/web/file/" + data.image}
          className="h-52 w-auto rounded-md m-auto"
          width={300}
          height={128}
          alt=""
        />
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
            {numberWithCommas(data.operation)}
            <span className="font-normal">km</span>
          </span>
        </div>
      </div>
      <div className="w-[500px] shadow-[0_0_6px_6px_rgba(125,125,125,0.2)] flex flex-col gap-6 p-4 rounded-xl h-[352px]">
        <div className="flex flex-col">
          <div className="flex items-center justify-around text-sm">
            <span>{numberWithCommas(price.max_price)} تومان</span>
            <span>{numberWithCommas(price.min_price)} تومان</span>
          </div>
          <div className="flex items-center justify-around text-sm">
            <div className="w-px h-4 bg-[#88B153]"></div>
            <div className="w-px h-4 bg-[#88B153]"></div>
          </div>
          <div className="flex items-center text-sm rounded-full overflow-hidden">
            <div className="w-1/4 p-2 bg-[#F3C14F] text-white text-center">
              گران
            </div>
            <div className="w-2/4 p-2 bg-[#88B153] text-white text-center">
              منصفانه
            </div>
            <div className="w-1/4 p-2 bg-[#467D3D] text-white text-center">
              ارزان
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium text-gray-700">
            حداکثر قیمت منصفانه
          </span>
          <span className="text-sm">
            {numberWithCommas(price.max_price)} تومان
          </span>
        </div>
        <div className="h-px bg-slate-300 w-full"></div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            حداقل قیمت منصفانه
          </span>
          <span className="text-sm">
            {numberWithCommas(price.min_price)} تومان
          </span>
        </div>
        <div className="h-px bg-slate-300 w-full"></div>
        <div className="flex items-center justify-between text-[#F66B34] mt-auto">
          <span className="font-medium">میانگین قیمت خودروی شما</span>
          <span className="font-bold">
            {numberWithCommas(price.min_price)} تومان
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
