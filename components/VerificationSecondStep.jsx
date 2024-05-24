import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import ReserveTimeVerification from "@/components/vehicle-verification/ReserveTimeVerification";
import useSetQuery from "@/hook/useSetQuery";
import { useDispatch } from "react-redux";
import { setVerificationLogin } from "@/store/todoSlice";

const VerificationSecondStep = (props) => {
  const { setStep } = props;

  const [selectWeek, setSelectWeek] = useState(0);
  const [optionIsOpen, setOptionIsOpen] = useState(false);
  const [timeIsSelected, setTimeIsSelected] = useState(null);

  const [data, setData] = useState([]);
  const [isSelected, setIsSelected] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const setQuery = useSetQuery();
  const dispatch = useDispatch();

  const continueSecondStepHandler = () => {
    axios
      .get(process.env.BASE_API + "/web/expert/reservation?step=step-3")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(setVerificationLogin(true));
        }
      });
  };

  const backStepHandler = () => {
    setQuery.deleteQuery(["package_id"]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(process.env.BASE_API + "/web/expert/reservation?step=step-2")
      .then((res) => {
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
    </div>
  );
};

export default VerificationSecondStep;
