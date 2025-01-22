"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import ReserveTimeVerification from "@/components/vehicle-verification/ReserveTimeVerification";
import useSetQuery from "@/hook/useSetQuery";
import { error } from "@/utils/function-utils";
import { ToastContainer } from "react-toastify";
import { getCookie, getCookies } from "cookies-next";
import nProgress from "nprogress";
import { setLoginModal } from "@/store/todoSlice";
import { useDispatch } from "react-redux";
import ServiceInformation from "@/components/ServiceInformation/ServiceInformation";

const VerificationSecondStep = (props) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const [client, setClient] = useState(false);
  const city_id = searchParams.get("city_id");
  const selectedItem = searchParams.get("vehicle_tip");
  const package_id = searchParams.get("package_id");
  const [packagePrice, setPackagePrice] = useState(0);
  const [date, setDate] = useState(0);
  const [tab, setTab] = useState(0);
  const [optionIsOpen, setOptionIsOpen] = useState(false);
  const [timeIsSelected, setTimeIsSelected] = useState(null);
  const [buttonIsdisabled, setButtonIsdisabled] = useState(false);
  const [fluctuation, setFluctuation] = useState(null);
  const [data, setData] = useState([]);
  const [timeStamp, setTimeStamp] = useState(null);
  const [uniqueTitle, setUniqueTitle] = useState([]);
  const [dayTitleTab, setDayTitleTab] = useState("");

  const router = useRouter();

  const continueSecondStepHandler = () => {
    setButtonIsdisabled(true);
    if (timeIsSelected === null) {
      setButtonIsdisabled(false);
      error("زمان مورد نظر را انتخاب کنید");
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    } else {
      setButtonIsdisabled(false);
      // if (loginState) {
      let cart = JSON.parse(sessionStorage.getItem("verificationCart"));
      cart.time_id = timeIsSelected.split("/")[0];
      cart.exact_time = timeIsSelected.split("/")[1];
      cart.time_stamp = timeStamp;
      cart.price_fluctuation = fluctuation;
      sessionStorage.setItem("verificationCart", JSON.stringify(cart));
      nProgress.start();
      router.push(
        `/services/vehicle-inspection/location-selection?city_id=${city_id}&vehicle_tip=${selectedItem}&package_id=${package_id}&reservation_time_slice_id=${timeIsSelected.split("/")[0]}&exact_time=${timeIsSelected.split("/")[1]}&step=step-4`
      );
      //   setQuery.setMultiQuery([
      //     { key: "step", value: "step-4" },
      //     { key: "city_id", value: city_id },
      //     { key: "vehicle_tip", value: selectedItem },
      //     { key: "package_id", value: package_id },
      //     {
      //       key: "reservation_time_slice_id",
      //       value: timeIsSelected.split("/")[0],
      //     },
      //     { key: "exact_time", value: timeIsSelected.split("/")[1] },
      //   ]);
      // } else {
      //   setQuery.setMultiQuery([
      //     { key: "step", value: "step-3" },
      //     { key: "city_id", value: city_id },
      //     {
      //       key: "vehicle_tip",
      //       value: selectedItem,
      //     },
      //     { key: "package_id", value: package_id },
      //     { key: "time_id", value: timeIsSelected },
      //   ]);
      // }
    }
  };

  // const backStepHandler = () => {
  //   if (props.backUrl === "/batteries") {
  //     nProgress.start();
  //     router.push(props.backUrl);
  //   } else {
  //     setQuery.deleteSingleQuery(
  //       [{ key: "package_id", value: package_id }],
  //       params
  //     );
  //     setQuery.updateMultiQuery([{ key: "step", value: "step-1" }], params);
  //   }
  // };

  useEffect(() => {
    setClient(true);
    window.scrollTo(0, 0);
    axios
      .get(
        process.env.BASE_API +
          `${props.fetchUrl ? props.fetchUrl : `/web/expert/reservation?step=step-2&city_id=${city_id}&vehicle_tip_id=${selectedItem}&package_id=${package_id}`}`,
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        }
      )
      .then((res) => {
        setData(res?.data?.data);
        const uniqueTitles = Array.from(
          new Set(res?.data?.data?.map((item) => item.title))
        );
        setUniqueTitle(uniqueTitles);
        setDayTitleTab(uniqueTitles[0]);
        // setData(
        //   Object.keys(res.data["time-reserve"]).map((key) => [
        //     key,
        //     res.data["time-reserve"][key],
        //   ]),
        // );
        // setPackagePrice(res?.data?.price_service?.discounted_price);
        setPackagePrice(
          JSON.parse(sessionStorage.getItem("verificationCart")).price
        );
      })
      .catch((err) => console.log(err));
  }, []);

  if (!client) {
    return null;
  }

  const verificationCart = JSON.parse(
    sessionStorage.getItem("verificationCart")
  );

  return (
    <div className={"relative"}>
      <ServiceInformation
        serviceData={[
          {
            key: "نوع خدمات :",
            value: verificationCart?.package_title,
            icon: "cc-search",
          },
        ]}
      />
      <div
        className={
          "flex items-start justify-between lg:w-[calc(100%-424px)] mr-auto mb-12 lg:mb-4 mt-[28px] bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] lg:p-6 rounded-2xl min-h-[605px] relative"
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
            <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1] border border-[#F2F2F2] rounded-full px-2">
              <i
                className="cc-car-o text-2xl text-[#1E67BF] cursor-pointer"
                onClick={() => {
                  nProgress.start();
                  router.push(`/vehicle-inspection`);
                }}
              />
              <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
              <i
                className="cc-search text-2xl text-[#1E67BF] cursor-pointer"
                onClick={() => {
                  nProgress.start();
                  router.push(
                    `/services/vehicle-inspection/service-selection?step=step-1&city_id=${city_id}&vehicle_tip=${selectedItem}`
                  );
                }}
              />
              <div className="border-b-4 border-dotted border-[#1E67BF] w-full"></div>
              <i className="cc-timer text-2xl text-[#D1D1D1]" />
              <div className="border-b-4 border-dotted border-[#D1D1D1] w-full"></div>
              <i className="cc-location text-2xl text-[#D1D1D1]" />
            </div>
            <p
              className={
                "text-14 size752:text-16 w-full font-medium text-[#454545]"
              }
            >
              زمان خود را انتخاب کنید:
            </p>

            <div className="w-fit flex justify-around items-center gap-6 min-w-full relative border-b border-[#FCCAAC] pb-2">
              {uniqueTitle?.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-end gap-2 text-sm font-medium cursor-pointer ${dayTitleTab === item ? "text-[#F58052]" : "text-[#FCCAAC]"}`}
                  onClick={() => {
                    // setDate(index);
                    setTab(index);
                    setDayTitleTab(item);
                  }}
                >
                  <p>{item}</p>
                </div>
              ))}
              <div
                className={`${tab ? "right-1/2" : "right-0"} w-1/2 h-[2px] bg-[#F58052] mt-[-2px] transition-all absolute bottom-0`}
              ></div>
            </div>
            <div className={"flex flex-col gap-[2rem]"}>
              <ReserveTimeVerification
                data={data}
                setTimeStamp={setTimeStamp}
                packagePrice={packagePrice}
                timeIsSelected={timeIsSelected}
                setTimeIsSelected={setTimeIsSelected}
                setOptionIsOpen={setOptionIsOpen}
                optionIsOpen={optionIsOpen}
                accordionState={props.accordionState}
                setFluctuation={setFluctuation}
                dayTitleTab={dayTitleTab}
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full justify-end flex bg-white p-4 rounded-2xl">
              <button
                disabled={timeIsSelected ? false : true}
                onClick={continueSecondStepHandler}
                className={`${timeIsSelected ? "bg-[#F66B34]" : "bg-[#FCCAAC]"} self-end hidden lg:flex items-center gap-2 mt-4 size690:mt-3 w-fit text-12 size690:text-[16px] p-[8px] text-white rounded-[8px] min-w-[200px] justify-center`}
              >
                <p>تایید و ادامه</p>
                <i className={"cc-left text-[20px]"} />
              </button>
            </div>
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

export default VerificationSecondStep;
