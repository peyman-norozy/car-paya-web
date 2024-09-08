"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ReserveTimeVerification from "@/components/vehicle-verification/ReserveTimeVerification";
import useSetQuery from "@/hook/useSetQuery";
import { useDispatch } from "react-redux";
import { error } from "@/utils/function-utils";
import { ToastContainer } from "react-toastify";
import { getCookie } from "cookies-next";
import nProgress from "nprogress";

const VerificationSecondStep = (props) => {
  const { setStep } = props;
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const city_id = searchParams.get("city_id");
  const selectedItem = searchParams.get("vehicle_tip");
  const package_id = searchParams.get("package_id");

  const [loginState, setLoginState] = useState();
  const [optionIsOpen, setOptionIsOpen] = useState(false);
  const [timeIsSelected, setTimeIsSelected] = useState(null);
  const [buttonIsdisabled, setButtonIsdisabled] = useState(false);

  const [data, setData] = useState([]);
  const [isSelected, setIsSelected] = useState(null);
  const setQuery = useSetQuery();
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
      setQuery.setMultiQuery([
        { key: "step", value: "step-4" },
        { key: "city_id", value: city_id },
        { key: "vehicle_tip", value: selectedItem },
        { key: "package_id", value: package_id },
        {
          key: "reservation_time_slice_id",
          value: timeIsSelected.split("/")[0],
        },
        { key: "exact_time", value: timeIsSelected.split("/")[1] },
      ]);
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

  const backStepHandler = () => {
    if (props.backUrl === "/batteries") {
      nProgress.start();
      router.push(props.backUrl);
    } else {
      setQuery.deleteSingleQuery(
        [{ key: "package_id", value: package_id }],
        params
      );
      setQuery.updateMultiQuery([{ key: "step", value: "step-1" }], params);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        process.env.BASE_API +
          `${props.fetchUrl ? props.fetchUrl : "/web/expert/reservation?step=step-2"}`,
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        }
      )
      .then((res) => {
        setLoginState(res.data["check_auth"]);
        console.log(res.data["check_auth"]);
        setData(
          Object.keys(res.data["time-reserve"]).map((key) => [
            key,
            res.data["time-reserve"][key],
          ])
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className={
        "flex items-start justify-between pt-[28px] lg:w-[calc(100%-424px)] mr-auto mb-4"
      }
    >
      <div
        className={"w-full size1570:w-[50%] flex flex-col mx-4 sm:mx-0 gap-4"}
      >
        <div
          className={
            "flex items-center gap-2 size752:gap-[16px] text-[#0E0E0E] w-full"
          }
        >
          <i
            className={"cc-arrow-right text-24 cursor-pointer"}
            onClick={backStepHandler}
          />
          <p className={"text-14 size752:text-16 w-full font-medium"}>
            انتخاب زمان
          </p>
        </div>
        <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1]">
          <i className="cc-search text-2xl text-[#518DD5]" />
          <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
          <i className="cc-timer text-2xl text-[#518DD5]" />
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
        <div className={"flex flex-col gap-[2rem]"}>
          {data.map((item, index) => (
            <ReserveTimeVerification
              data={item}
              timeIsSelected={timeIsSelected}
              setTimeIsSelected={setTimeIsSelected}
              setOptionIsOpen={setOptionIsOpen}
              optionIsOpen={optionIsOpen}
              accordionState={props.accordionState}
              key={item.id + index}
            />
          ))}
        </div>
        <button
          disabled={buttonIsdisabled}
          onClick={continueSecondStepHandler}
          className={`${buttonIsdisabled ? "bg-[#F66B34] bg-opacity-[0.5] cursor-not-allowed" : "bg-[#F66B34]"} self-end hidden lg:flex items-center gap-2 mt-4 size690:mt-3 w-fit text-12 size690:text-[16px] p-[8px] text-white rounded-[4px]`}
        >
          <p>تایید و ادامه</p>
          <i className={"cc-left text-[20px]"} />
        </button>
        <div
          className="fixed w-full rounded-t-2xl shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] flex justify-center pt-4 pb-6 items-start bottom-0 right-0 bg-white z-[2000] px-10 lg:hidden"
          onClick={continueSecondStepHandler}
          disabled={buttonIsdisabled}
        >
          <button className="bg-[#F66B34] rounded-lg w-full sm:max-w-[400px] text-[#FEFEFE] text-sm font-medium py-3">
            تایید ادامه
          </button>
        </div>
      </div>
      <Image
        src={"/assets/images/reserveTimePic.svg"}
        alt={"reserveTime"}
        width={544}
        height={544}
        className={"hidden size1570:block"}
      />
      <ToastContainer />
    </div>
  );
};

export default VerificationSecondStep;
