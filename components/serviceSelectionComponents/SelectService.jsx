"use client";
import useSetQuery from "@/hook/useSetQuery";
import SelectServiceCard from "../periodic-service-components/SelectServiceCard";

const SelectService = (props) => {
  console.log(props.data);

  const setQuery = useSetQuery();

  function buttonClickHandler() {
    setQuery.updateQueryParams(
      { package_id: 1 },
      "/periodic-service/time-selection",
    );
  }
  return (
    <div className="w-full flex flex-col lg:w-[calc(100%-424px)] mr-auto mt-3 rounded-2xl overflow-hidden border border-[#383838A3]">
      <div className="bg-[#383838A3] flex flex-col gap-1 items-start px-10 py-5 text-[#FFFFFF] font-medium">
        <h1 className="text-16 lg:text-18">خدمات سرويس دوره‌ای</h1>
        <span className="text-12 lg:text-14">
          (شامل ١٧ بخش مي‌باشد كه كاربر بنا به نیاز خود نسبت به انتخاب خدمات
          اقدام مي‌نمايد)
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-2 lg:gap-4 p-2 sm:p-4 lg:p-8">
        {props.data?.map((item, index) => (
          <SelectServiceCard data={item} key={index} />
        ))}
      </div>
      <button
        className={
          "w-[204px] h-10 bg-[#F66B34] rounded-[8px] text-[#FEFEFE] mb-6 mr-8"
        }
        onClick={buttonClickHandler}
      >
        تایید و مرحله بعد
      </button>
    </div>
  );
};

export default SelectService;
