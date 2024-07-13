import React, { useState } from "react";
import ChangeServiceTime from "./ChangeServiceTime";
import SelectVerificationPlace from "./SelectVerificationPlace";
import useSetQuery from "@/hook/useSetQuery";
import { useSearchParams } from "next/navigation";

const VerificationThirdStep = (props) => {
  const [isSelected, setIsSelected] = useState(0);
  const [chosenTime, setChosenTime] = useState("");
  const searchParams = useSearchParams();
  const city_id = searchParams.get("city_id");
  const selectedItem = searchParams.get("vehicle_tip");
  const package_id = searchParams.get("package_id");
  const time_id = searchParams.get("time_id");
  const params = new URLSearchParams(searchParams.toString());
  const setQuery = useSetQuery();

  const placeData = [
    {
      title: "در محل شما",
      description: "کارشناسی در موقعیت مکان مورد نظر شما انجام می‌شود.",
    },
    {
      title: "در نمایندگی‌های کار چک",
      description: "برای کارشناسی باید به یکی از مراکز کارچک مراجعه کنید.",
    },
  ];

  const backstopHandler = () => {
    setQuery.deleteSingleQuery(
      [
        {
          key: "time_id",
          value: time_id,
        },
      ],
      params,
    );
    setQuery.updateMultiQuery([{ key: "step", value: "step-2" }], params);
  };
  return (
    <div className="pt-[2rem] mb-[7rem] size966:w-[95%] size1090:w-[85%] m-auto overflow-hidden ]">
      <div
        className={
          "flex items-center gap-2 size752:gap-[16px] text-BLUE_600 w-full"
        }
      >
        <i
          className={"cc-arrow-right text-24 cursor-pointer"}
          onClick={backstopHandler}
        />
        <p
          className={
            "p-[6px] text-14 size752:text-16 w-full border-b border-BLUE_600"
          }
        >
          چه مکانی اماده دریافت کارشناس هستید؟
        </p>
      </div>
      <div className="pb-[3rem] pt-4">
        <ChangeServiceTime
          on_click={backstopHandler}
          exact_time={time_id.split("/")[1]}
          chosenTime={chosenTime}
        />
        <div className="mt-[5rem] flex flex-col gap-[1.5rem]">
          {placeData.map((item, index) => (
            <SelectVerificationPlace
              options={index === 1 && "options"}
              isSelected={isSelected}
              id={index}
              key={index}
              setIsSelected={setIsSelected}
              title={item.title}
              description={item.description}
              setChosenTime={setChosenTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerificationThirdStep;
