"use client";
import useSetQuery from "@/hook/useSetQuery";
import SelectServiceCard from "../periodic-service-components/SelectServiceCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";
import SelectProductModal from "../periodic-service-components/SelectProductModal";
import InvoiceModal from "./InvoiceModal";
import { getCurrentData } from "@/utils/api-function-utils";
import { numberWithCommas } from "@/utils/function-utils";

const SelectService = (props) => {
  const [productModalState, setProductModalState] = useState(false);
  const [invoiceModalState, setInvoiceModalState] = useState(false);
  const [selectedServic, setSelectedService] = useState("");
  const [invoiceData, setInvoiceData] = useState([]);

  const setQuery = useSetQuery();
  const router = useRouter();
  const renderInvoice = useSelector((item) => item.todo.renderInvoice);
  useEffect(() => {
    const sessionsData = JSON.parse(sessionStorage.getItem("periodicCart"));
    console.log(sessionsData.products);
    if (sessionsData.products !== undefined) {
      setInvoiceData(sessionsData.products);
    }
  }, []);
  // useEffect(() => {
  //   getInvoiceData()
  // }, [renderInvoice]);

  // async function getInvoiceData() {
  //   const data = await getCurrentData("/web/segmentation/cart", {
  //     cartable_type: "PERIODIC_SERVICE",
  //     vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
  //   });
  //   if (data.data?.status === "success") {
  //     let totalPrice = 0;
  //     for (let item of data.data.data) {
  //       totalPrice =
  //         totalPrice + item.item.item?.discounted_price
  //           ? item.item.item?.discounted_price
  //           : item.item.item?.price;
  //     }
  //     setInvoiceData({ data: data.data.data, totalPrice: totalPrice });
  //   }
  // }

  function nextButtonClickHandler() {
    setQuery.updateQueryParams(
      { package_id: 1 },
      "/periodic-service/time-selection"
    );
  }

  const backstopHandler = () => {
    router.back();
  };
  return (
    // <div className="w-full flex flex-col justify-between lg:w-[calc(100%-424px)] mr-auto mt-3 rounded-2xl overflow-hidden border border-[#383838A3]">
    //   <div className="flex flex-col">
    //     <div className="bg-[#383838A3] flex flex-col gap-1 items-start px-10 py-5 text-[#FFFFFF] font-medium">
    //       <h1 className="text-16 lg:text-18">خدمات سرويس دوره‌ای</h1>
    //       <span className="text-12 lg:text-14">
    //         (شامل ١٧ بخش مي‌باشد كه كاربر بنا به نیاز خود نسبت به انتخاب خدمات
    //         اقدام مي‌نمايد)
    //       </span>
    //     </div>
    //     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 lg:gap-4 p-2 sm:p-4 lg:p-8">
    //       {props.data?.map((item, index) => (
    //         <SelectServiceCard data={item} key={index} />
    //       ))}
    //     </div>
    //   </div>
    //   <button
    //     className={`w-[204px] h-10 ${!periodicServiceBasketLength ? "bg-stone-400" : "bg-[#F66B34]"} rounded-[8px] text-[#FEFEFE] mb-6 mr-2 sm:mr-4 lg:mr-8`}
    //     disabled={!periodicServiceBasketLength}
    //     onClick={buttonClickHandler}
    //   >
    //     تایید و مرحله بعد
    //   </button>
    // </div>
    <div className="mb-[7rem] w-full lg:w-[calc(100%-424px)] mr-auto overflow-hidden flex flex-col gap-4 mt-[28px] bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] px-2 lg:p-6 rounded-2xl lg:min-h-[605px] relative">
      <div
        className={
          "flex items-center gap-2 size752:gap-[16px] text-[#0E0E0E] w-full"
        }
      >
        <i
          className={"cc-arrow-right text-24 cursor-pointer"}
          onClick={backstopHandler}
        />
        <p className={"text-14 size752:text-16 w-full font-medium"}>
          خدمات سرویس دوره ایی
        </p>
      </div>
      <div className=" flex flex-col gap-4 lg:mr-8">
        <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1]">
          <i
            className="cc-car-o text-2xl text-[#518DD5]"
            onClick={() => router.push(`/periodic-service`)}
          />
          <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
          <i className="cc-location text-2xl text-[#518DD5]" />
          <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
          <i className="cc-search text-2xl text-[#D1D1D1]" />
          <div className="border-b-4 border-dotted border-[#D1D1D1] w-full"></div>
          <i className="cc-timer text-2xl text-[#D1D1D1]" />
        </div>
        <div className="w-full p-[10px] shadow-[0_0_6px_0_rgba(125,125,125,0.5)] flex justify-between rounded-lg items-center">
          <span className="font-medium text-sm">نمایندگی ایران خودرو</span>
          <div
            className="relative flex justify-center items-center shadow-[0_0_6px_0_rgba(125,125,125,0.5)] size-[36px] rounded-[4px]"
            onClick={() => {
              setInvoiceModalState(true);
            }}
          >
            <i className="cc-wallet text-xl" />
            <span
              className={`rounded-full bg-[#F66B34] text-[#FEFEFE] size-[18px] flex items-center justify-center absolute -top-[9px] -right-[9px] text-xs pt-1 ${invoiceData.length ? "" : "hidden"}`}
            >
              {invoiceData.length}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-3 gap-y-6">
          {props.data.map((item, index) => (
            <div
              className="bg-white shadow-[0_0_6px_0_rgba(125,125,125,0.5)] rounded-lg flex flex-col items-center w-full p-2 pb-1 gap-1"
              onClick={() => {
                setSelectedService(item.id);
                setProductModalState(true);
              }}
              key={index}
            >
              <Image
                className="w-full rounded-lg aspect-[67/50]"
                src={
                  process.env.BASE_API +
                  "/web" +
                  API_PATHS.FILE +
                  "/" +
                  item.image
                }
                width={67}
                height={50}
              />
              <span className="text-xs lg:text-18 h-8 line-clamp-2 flex items-center justify-center font-medium text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-full flex justify-between p-4 bg-white shadow-[0_-2px_8px_0_rgba(176,176,176,0.25)] rounded-t-2xl z-[3000]">
        <div className="flex-col flex items-start text-sm gap-1">
          <span>جمع سفارش:</span>
          <span className="font-medium text-[#518DD5]">
            {numberWithCommas(invoiceData.totalPrice)} تومان
          </span>
        </div>
        {console.log(invoiceData)}
        <button
          className={`${invoiceData.length ? "bg-[#F66B34]" : "bg-[#FCCAAC]"} rounded-lg text-[#FEFEFE] font-medium py-2 px-3`}
          disabled={invoiceData.length ? false : true}
          onClick={nextButtonClickHandler}
        >
          تایید و تکمیل سفارش
        </button>
      </div>
      <SelectProductModal
        params={props.params}
        productModalState={productModalState}
        setProductModalState={setProductModalState}
        selectedServic={selectedServic}
        setInvoiceData={setInvoiceData}
      />
      <InvoiceModal
        invoiceModalState={invoiceModalState}
        setInvoiceModalState={setInvoiceModalState}
        invoiceData={invoiceData}
        setInvoiceData={setInvoiceData}
      />
    </div>
  );
};

export default SelectService;
