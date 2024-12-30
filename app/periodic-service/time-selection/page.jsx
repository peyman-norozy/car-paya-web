"use client";
import React, { useEffect, useState } from "react";
import TimeSelectorCard from "@/components/TimeSelectorCard/TimeSelectorCard";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import useSetQuery from "@/hook/useSetQuery";
import { useRouter, useSearchParams } from "next/navigation";
import { persianDate, persianDateCovertor } from "@/utils/function-utils";
import ReserveTimeVerification from "@/components/TimeSelectorCard/TimeSelectorCard";
import { ToastContainer } from "react-toastify";
import nProgress, { start } from "nprogress";
import PeriodicOrderDataCard from "@/components/periodic-service-components/PeriodicOrderDataCard";
const Page = (props) => {
  const [selectedTime, setSelectedTime] = useState();
  const [date, setDate] = useState(0);
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([]);
  const [packagePrice, setPackagePrice] = useState(0);
  const [timeIsSelected, setTimeIsSelected] = useState(null);
  const [uniqueTitle, setUniqueTitle] = useState([]);
  const [dayTitleTab, setDayTitleTab] = useState("");

  const setQuery = useSetQuery();
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    async function getTimeData() {
      const data = await getDataWithFullErrorRes(
        `/web/service-periodical?step=step-3&type=${searchParams.get("type")}&city_id=${searchParams.get("city_id")}&vehicle_tip_id=${JSON.parse(localStorage.getItem("selectedVehicle")).id}&service_location_id=${searchParams.get("service_location_id")}&package_id=${searchParams.get("package_id")}`
      );
      setData(data.data);
      const uniqueTitles = Array.from(
        new Set(data.data?.map((item) => item.title))
      );
      setUniqueTitle(uniqueTitles);
      setDayTitleTab(uniqueTitles[0]);
      // setData(
      //   Object.keys(data["time-reserve"]).map((key) => {
      //     return {
      //       day: key,
      //       hour: data["time-reserve"][key],
      //     };
      //   })
      // );
    }
    getTimeData();
  }, []);

  function onclick() {
    setQuery.updateQueryParams(
      { time_id: selectedTime },
      "/periodic-service/invoice"
    );
  }

  const continueSecondStepHandler = () => {
    // setButtonIsdisabled(true);
    if (timeIsSelected === null) {
      // setButtonIsdisabled(false);
      error("زمان مورد نظر را انتخاب کنید");
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    } else {
      // setButtonIsdisabled(false);
      // if (loginState) {
      nProgress.start();
      router.push(
        `/periodic-service/invoice?step=step-4&city_id=${searchParams.get("city_id")}&vehicle_tip_id=${searchParams.get("selectTipState")}&package_id=${searchParams.get("package_id")}&reservation_time_slice_id=${timeIsSelected?.id}&type=${searchParams.get("type")}&service_location_id=${searchParams.get("service_location_id")}&registrationable_id=${searchParams.get("service_location_id")}`
      );

      const sessionData = JSON.parse(sessionStorage.getItem("periodicCart"));
      sessionData.time = {
        id: timeIsSelected.id,
        title: timeIsSelected.title,
        start: timeIsSelected.start,
        end: timeIsSelected.end,
      };
      sessionStorage.setItem("periodicCart", JSON.stringify(sessionData));
      // setQuery.setMultiQuery([
      //   { key: "step", value: "step-4" },
      //   { key: "city_id", value: props.searchParams.city_id },
      //   { key: "vehicle_tip_id", value: props.searchParams.selectTipState.split(",")[1] },
      //   { key: "package_id", value: props.searchParams.package_id },
      //   {
      //     key: "reservation_time_slice_id",
      //     value: timeIsSelected,
      //   },
      //   { key: "exact_time", value: timeIsSelected.split("/")[1] },
      // ]);
    }
  };

  return (
    // <div className={"mt-4 min-h-screen lg:mr-[420px] mb-6"}>
    //   <h1 className={"text-center text-[24px]"}>انتخاب زمان دریافت خدمات</h1>
    //   <ul className={"flex flex-col gap-4 mt-9"}>
    //     {data.map((item, index) => (
    //       <TimeSelectorCard
    //         key={index}
    //         data={item}
    //         selectedTime={selectedTime}
    //         setSelectedTime={setSelectedTime}
    //       />
    //     ))}
    //   </ul>
    //   <button
    //     type={"button"}
    //     disabled={!selectedTime}
    //     className={`lg:w-[204px] w-[130px] h-10 ${!selectedTime ? "bg-stone-400" : "bg-[#F66B34]"} rounded-[8px] text-[#FEFEFE] mt-6 lg:text-14 text-12`}
    //     onClick={onclick}
    //   >
    //     تایید و مرحله بعد
    //   </button>
    // </div>
    <div className="flex w-full pt-[28px] items-stretch pb-[6rem]">
      <PeriodicOrderDataCard step={3} />
      <div
        className={
          "flex items-start justify-between w-full lg:w-[calc(100%-424px)] lg:mr-auto bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] lg:p-6 rounded-2xl min-h-[605px]"
        }
      >
        <div className={"w-full flex flex-col px-4 sm:px-0 gap-4"}>
          <div
            className={
              "flex items-center gap-2 size752:gap-[16px] text-[#0E0E0E] w-full"
            }
          >
            <i
              className={"cc-arrow-right text-24 cursor-pointer"}
              onClick={() => {
                router.back();
              }}
            />
            <p className={"text-14 size752:text-16 w-full font-medium"}>
              انتخاب زمان
            </p>
          </div>
          <div className=" flex flex-col gap-4 lg:mr-8">
            <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1]">
              <i
                className="cc-car-o text-2xl text-[#518DD5] cursor-pointer"
                onClick={() => {
                  nProgress.start();
                  router.push(`/periodic-service`);
                }}
              />
              <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
              <i
                className="cc-location text-2xl text-[#518DD5] cursor-pointer"
                onClick={() => {
                  nProgress.start();
                  router.push(
                    `/periodic-service/location-selection?selectTipState=${searchParams.get("selectTipState")}&city_id=${searchParams.get("city_id")}&type=${searchParams.get("type")}`
                  );
                }}
              />
              <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
              <i
                className="cc-search text-2xl text-[#518DD5] cursor-pointer"
                onClick={() => {
                  nProgress.start();
                  router.push(
                    `/periodic-service/service-selection?selectTipState=${searchParams.get("selectTipState")}&city_id=${searchParams.get("city_id")}&service_location_id=${searchParams.get("service_location_id")}&type=${searchParams.get("type")}`
                  );
                }}
              />
              <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
              <i className="cc-timer text-2xl text-[#D1D1D1]" />
            </div>
            <p
              className={
                "text-14 size752:text-16 w-full font-medium text-[#454545]"
              }
            >
              زمان خود را انتخاب کنید:
            </p>
            <div className="w-fit flex justify-around items-center gap-6 min-w-full relative border-b border-[#FCCAAC] pb-2">
              {uniqueTitle.map((item, index) => (
                <div
                  key={item + index}
                  className={`flex items-end gap-2 text-sm font-medium cursor-pointer ${dayTitleTab === item ? "text-[#F58052]" : "text-[#FCCAAC]"}`}
                  onClick={() => {
                    setDate(index);
                    setDayTitleTab(item);
                  }}
                >
                  {/* <p>{persianDate(item.day, "dddd")}</p>
                <p>{persianDateCovertor(item.day)}</p> */}
                  <p>{item}</p>
                </div>
              ))}
              <div
                className={`${dayTitleTab === uniqueTitle[1] ? "right-1/2" : "right-0"} w-1/2 h-[2px] bg-[#F58052] mt-[-2px] transition-all absolute bottom-0`}
              ></div>
            </div>
            <div className={"flex flex-col gap-[2rem]"}>
              {/* <ReserveTimeVerification
              data={data[date]}
              packagePrice={packagePrice}
              timeIsSelected={timeIsSelected}
              setTimeIsSelected={setTimeIsSelected}
              setOptionIsOpen={setOptionIsOpen}
              optionIsOpen={optionIsOpen}
              accordionState={props.accordionState}
              /> */}
              <div className={"grid grid-cols-1 size666:grid-cols-2 gap-4"}>
                {/* <div
        className={
          "col-span-full py-2 px-3 flex items-center justify-between border-r-2 border-[#F58052]"
          }
          >
          <div className={"flex items-end gap-2 text-sm font-medium"}>
          <p>{weekDay}</p>
          <p>{persianDateCovertor(data[0])}</p>
          </div>
          </div> */}
                {data
                  .filter((item) => {
                    return item.title === dayTitleTab;
                  })
                  .map((item, index) => (
                    <div
                      className={`shadow-[0_0_4px_0_rgba(152,152,152,0.4)] rounded-lg h-fit border transition-all cursor-pointer duration-500 ${timeIsSelected?.id === item.id ? "border-[#F58052]" : ""}`}
                      key={index + item.id}
                    >
                      <div
                        onClick={() =>
                          // openOptionHandler(item.id)
                          setTimeIsSelected(item)
                        }
                        className={
                          "flex flex-col items-start px-4 py-5 gap-1 border-b border-[#F2F2F2]"
                        }
                      >
                        <div
                          className={"flex items-center justify-between w-full"}
                        >
                          <p className={"text-sm text-[#1E67BF] font-medium"}>
                            {item.start}:00 تا {item.end}:00
                          </p>
                          <div
                            className={
                              "rounded-[50%] border-2 border-[#F58052] size-5 flex items-center justify-center"
                            }
                          >
                            <div
                              className={`rounded-[50%] bg-[#F58052] size-[10px] transition-all duration-500 ${timeIsSelected?.id === item.id ? "scale-1" : "scale-0"}`}
                            ></div>
                          </div>
                        </div>
                        {item.swing_type === "INCREASE" ? (
                          <p className={"text-[12px] flex items-center gap-px"}>
                            <span className="text-red-600">*</span>
                            <span className="text-[#010101]">
                              {numberWithCommas(
                                (packagePrice * item.diff_percent) / 100
                              )}{" "}
                              تومان افزایش قیمت به دلیل پیک درخواست
                            </span>
                          </p>
                        ) : item.swing_type === "DECREASE" ? (
                          <p className={"text-[12px] flex items-center gap-px"}>
                            <span className="text-red-600">*</span>
                            <span className="text-[#010101]">
                              {numberWithCommas(
                                (packagePrice * item.diff_percent) / 100
                              )}{" "}
                              تومان تخفیف کارچک
                            </span>
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <button
              disabled={timeIsSelected ? false : true}
              onClick={continueSecondStepHandler}
              className={`${timeIsSelected ? "bg-[#F66B34]" : "bg-[#FCCAAC]"} self-end hidden lg:flex items-center gap-2 mt-4 size690:mt-3 w-fit text-12 size690:text-[16px] p-[8px] text-white rounded-[4px]`}
            >
              <p>تایید و ادامه</p>
              <i className={"cc-left text-[20px]"} />
            </button>
            <div
              className="fixed w-full rounded-t-2xl shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] flex justify-center pt-4 pb-6 items-start bottom-0 right-0 bg-white z-[2000] px-10 lg:hidden"
              onClick={continueSecondStepHandler}
            >
              <button
                className={`${timeIsSelected ? "bg-[#F66B34]" : "bg-[#FCCAAC]"} rounded-lg w-full sm:max-w-[400px] text-[#FEFEFE] text-sm font-medium py-3`}
                disabled={timeIsSelected ? false : true}
              >
                تایید ادامه
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Page;
