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

const VerificationSecondStep = (props) => {
  const { setStep } = props;
  const searchParams = useSearchParams();
  const city_id = searchParams.get("city_id");
  const selectedItem = searchParams.get("vehicle_tip");
  const package_id = searchParams.get("package_id");

  const [loginState, setLoginState] = useState();
  const [optionIsOpen, setOptionIsOpen] = useState(false);
  const [timeIsSelected, setTimeIsSelected] = useState(null);

  const [data, setData] = useState([]);
  const [isSelected, setIsSelected] = useState(null);
  const setQuery = useSetQuery();

  const continueSecondStepHandler = () => {
    if (timeIsSelected === null) {
      error("زمان مورد نظر را انتخاب کنید");
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    } else {
      if (loginState) {
        setQuery.setMultiQuery([
          { key: "step", value: "step-4" },
          { key: "city_id", value: city_id },
          {
            key: "vehicle_tip",
            value: selectedItem,
          },
          { key: "package_id", value: package_id },
          { key: "time_id", value: timeIsSelected },
        ]);
      } else {
        setQuery.setMultiQuery([
          { key: "step", value: "step-3" },
          { key: "city_id", value: city_id },
          {
            key: "vehicle_tip",
            value: selectedItem,
          },
          { key: "package_id", value: package_id },
          { key: "time_id", value: timeIsSelected },
        ]);
      }
    }
  };

  const backStepHandler = () => {
    setQuery.setMultiQuery([
      { key: "step", value: "step-1" },
      { key: "city_id", value: city_id },
      {
        key: "vehicle_tip",
        value: selectedItem,
      },
      { key: "package_id", value: package_id },
    ]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(process.env.BASE_API + "/web/expert/reservation?step=step-2", {
        headers: {
          Authorization: "Bearer " + getCookie("Authorization"),
        },
      })
      .then((res) => {
        setLoginState(res.data["check_auth"]);
        console.log(res.data["check_auth"]);
        setData(
          Object.keys(res.data["time-reserve"]).map((key) => [
            key,
            res.data["time-reserve"][key],
          ]),
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className={
        "flex items-start justify-between pt-[28px] w-[95%] size1190:w-[90%] m-auto"
      }
    >
      <div className={"w-full lg:w-[50%] flex flex-col"}>
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
            چه زمانی اماده دریافت کارشناس هستید؟
          </p>
        </div>
        <div className={"flex flex-col gap-[2rem]"}>
          {data.map((item, index) => (
            <ReserveTimeVerification
              data={item}
              timeIsSelected={timeIsSelected}
              setTimeIsSelected={setTimeIsSelected}
              setOptionIsOpen={setOptionIsOpen}
              optionIsOpen={optionIsOpen}
              key={index}
            />
          ))}
        </div>
        <button
          onClick={continueSecondStepHandler}
          className={
            "bg-BLUE_700 self-end flex items-center gap-2 mt-4 size690:mt-3 w-fit text-12 size690:text-[16px] p-[8px] text-white rounded-[4px]"
          }
        >
          <p>تایید و ادامه</p>
          <i className={"cc-left text-[20px]"} />
        </button>
      </div>
      <Image
        src={"assets/images/reserveTimePic.svg"}
        alt={""}
        width={544}
        height={544}
        className={"hidden size1000:block"}
      />
      <ToastContainer />
    </div>
  );
};

export default VerificationSecondStep;
