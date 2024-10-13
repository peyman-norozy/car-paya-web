"use client";
import DetailingSelectServiceCard from "@/components/cards/DetailingSelectServiceCard/DetailingSelectServiceCard";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import SelectLocationTab from "@/components/SelectLocationTab/SelectLocationTab";
import AddressSelection from "@/components/AddressSelection/AddressSelection";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { numberWithCommas } from "@/utils/function-utils";
import useSetQuery from "@/hook/useSetQuery";

const DetailingSelectService = (props) => {
  console.log(props.data);
  const [productId, setProductId] = useState(null);
  const [ditailingPrice, setDitailingPrice] = useState(0);

  const [childFunction, setChildFunction] = useState(null);
  const pathName = usePathname();
  const setQuery = useSetQuery();
  const router = useRouter();
  const searchParams = useSearchParams();

  const buttonClickHandler = (id) => {
    setQuery.updateQueryParams(
      { package_id: id },
      "/services/detailing/timeSelector",
    );
  };

  const attributeSlug = searchParams.get("attribute_slug");
  const attributeValue = searchParams.get("attribute_value");
  const selectTipState = searchParams.get("selectTipState");
  const typeService = searchParams.get("type_service");
  const cityId = searchParams.get("city_id");
  const type = searchParams.get("type");
  const serviceLocationId = searchParams.get("service_location_id");

  console.log(props);

  return (
    <div
      className={
        "flex flex-col relative py-4 max-w-[1772px] lg:w-[calc(100%-424px)] w-full lg:mr-auto mr-0 bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] lg:p-6 rounded-2xl min-h-[605px] mb-4 lg:mt-7"
      }
    >
      <div
        className={
          "flex items-center gap-2 size752:gap-[16px] text-[#0E0E0E] w-full"
        }
      >
        <i
          className={"cc-arrow-right text-24 cursor-pointer"}
          onClick={() =>
            router.push(
              `/services/detailing/selectLocation?type=${type}&attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&selectTipState=${selectTipState}&city_id=${cityId}`,
            )
          }
        />
        <p className={"text-14 size752:text-16 w-full font-medium"}>
          انتخاب سرویس
        </p>
      </div>
      <div
        className={
          "flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1] shadow-[0_0_4px_0_rgba(152,152,152,0.4)] lg:py-2 py-1 rounded-[16px] px-2 my-4"
        }
      >
        <i
          className="cc-car-o text-2xl text-[#1E67BF]"
          onClick={() =>
            router.push(
              `/detailing?attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&selectTipState=${selectTipState}&city_id=${cityId}`,
            )
          }
        />
        <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
        <i
          className="cc-location text-2xl text-[#1E67BF]"
          onClick={() =>
            router.push(
              `/services/detailing/selectLocation?type=${type}&attribute_slug=${attributeSlug}&attribute_value=${attributeValue}&selectTipState=${selectTipState}&city_id=${cityId}`,
            )
          }
        />
        <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
        <i className="cc-search text-2xl text-[#D1D1D1]" />

        <div className="border-b-4 border-dotted border-[#D1D1D1] w-full"></div>
        <i className="cc-timer text-2xl text-[#D1D1D1]" />
      </div>
      <div
        className={
          "flex justify-start items-center shadow-[0_0_4px_0_rgba(152,152,152,0.4)] rounded-8 px-5 py-3"
        }
      >
        <span className={"text-14 font-medium"}>نمایندگی ایران خودرو</span>
      </div>
      <div className={"py-4 flex flex-col h-full justify-between relative"}>
        <div className={"lg:h-[calc(100%-100px)] overflow-y-scroll"}>
          <div className="grid size1570:grid-cols-3 size1275:grid-cols-2 grid-cols-1 sm:gap-2 lg:gap-4 gap-4 h-fit p-1">
            {props.data?.map((item, index) => (
              <DetailingSelectServiceCard
                data={item}
                allData={props.data}
                setProductId={setProductId}
                productId={productId}
                key={index}
                setDitailingPrice={setDitailingPrice}
                // sendToParent={handleChildFunction}
              />
            ))}
          </div>
        </div>
        <div
          className={
            "lg:sticky fixed flex justify-between items-center bottom-0 right-0 left-0 z-50 bg-[#FFFFFF] h-[75px] mx-4"
          }
        >
          <div className={"flex lg:flex-row flex-col items-center gap-1"}>
            <span className={"text-16 font-medium"}>مبلغ سفارش:</span>
            <div>
              <span className={"text-[#518DD5] text-14"}>
                {numberWithCommas(ditailingPrice)}
              </span>
              <span className={"text-[#518DD5] text-14"}>تومان</span>
            </div>
          </div>
          <button
            disabled={!productId}
            className={`${!productId ? "bg-[#ecb8a3]" : "bg-[#F66B34]"} text-white text-16 py-2 px-8 rounded-5`}
            onClick={() => buttonClickHandler(productId)}
          >
            تایید و تکمیل سفارش
          </button>
        </div>
      </div>
      <ToastContainer rtl={true} />
    </div>
    // <div className="w-full flex flex-col lg:w-[calc(100%-424px)] mr-auto mt-3 rounded-2xl overflow-hidden border border-[#383838A3]">
    //   <div className="bg-[#383838A3] flex flex-col gap-1 items-start px-10 py-5 text-[#FFFFFF] font-medium">
    //     <h1 className="text-16 lg:text-18">خدمات دیتیلینگ</h1>
    //     <span className="text-12 lg:text-14">
    //       (شامل ١٧ بخش مي‌باشد كه كاربر بنا به نیاز خود نسبت به انتخاب خدمات
    //       اقدام مي‌نمايد)
    //     </span>
    //   </div>
    //   <div className={"p-2 sm:p-4 lg:p-8 flex flex-col"}>
    //     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-2 lg:gap-4">
    //       {props.data?.map((item, index) => (
    //         <DetailingSelectServiceCard
    //           data={item}
    //           allData={props.data}
    //           setProductId={setProductId}
    //           productId={productId}
    //           key={index}
    //           sendToParent={handleChildFunction}
    //         />
    //       ))}
    //     </div>
    //     <button
    //       className={
    //         "bg-[#F66B34] text-white text-14 self-end p-2 rounded-5 mt-5"
    //       }
    //       onClick={async () => await childFunction(productId)}
    //     >
    //       اضافه به سبد خرید
    //     </button>
    //   </div>
    // </div>
  );
};

export default DetailingSelectService;
