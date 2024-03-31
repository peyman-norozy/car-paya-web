import Image from "next/image";
import { useDispatch } from "react-redux";
import {setRecordModalCreateState,setRecordModalState} from "@/store/todoSlice";
import DatePickerSelection from "@/components/DatePicker";
import Input from "@/components/Input";
import RecordModalCard from "@/components/cards/RecordModalCard";
import React, { useState } from "react";
import { numberWithCommas } from "@/utils/function-utils";
import Button from "@/components/Button";

const exapleArray = [
  { title: "روغن موتور" },
  { title: "فیلتر هوا" },
  { title: "فیلتر روغن" },
  { title: "ضد یخ" },
  { title: "روغن ترمز" },
  { title: "روغن هیدرولیک" },
  { title: "شمع" },
  { title: "لاستیک" },
  { title: "تسمه تایم" },
  { title: "لنت جلو" },
];

const RecordModalCreate = () => {
  const [newStartKilometerState, setNewStartKilometerState] = useState(false);
  const [newStartKilometerValue, setNewStartKilometerValue] = useState("");

  const dispatch = useDispatch();
  const clickBackHandler = () => {
    dispatch(setRecordModalCreateState(false));
    dispatch(setRecordModalState(true));
  };

  const InputChangeHandler = (event) => {
    const id = event.target.getAttribute("id");
    const changeStringToNumber = +event.target.value.split(",").join("");

    if (id === "kilometerStart") {
      if (event.target.value.length > 0) {
        setNewStartKilometerState(true);
      } else {
        setNewStartKilometerState(false);
      }
      if (isNaN(changeStringToNumber)) {
        return;
      }
      changeStringToNumber === 0
        ? setNewStartKilometerValue("")
        : setNewStartKilometerValue(numberWithCommas(changeStringToNumber));
    }
  };

  return (
    <div className="fixed w-full h-full bg-[#ffffff69] inset-0 m-auto z-[99999]">
      <div className="fixed w-[90%] h-[80%] bg-white shadow-[0_0_6px_0_rgba(177,177,177,1)] inset-0 top-[-10px] m-auto rounded-10 px-4 py-4">
        <div>
          <Image
            src={"/assets/icons/back.svg"}
            alt={"back icon"}
            className="cursor-pointer"
            onClick={clickBackHandler}
            width={24}
            height={24}
          />
        </div>
        <div className="flex gap-4 px-[60px] mt-[20px]">
          <div className="flex-1">
            <DatePickerSelection
              placeholder={"تاریخ"}
              id={"startDate"}
              // pageType={props.pageType}
              // editData={props.editStartAt}
              // editCompany={props.editCompany}
              // editRemember={props.editRemember}
              // id_state={props.id}
              // setNewThirdPartyInsuranceStartAt={
              //   props.setNewThirdPartyInsuranceStartAt
              // }
              // setNewBodyInsuranceStartAt={props.setNewBodyInsuranceStartAt}
              // setNewTechnicalDiagnosisStartAt={
              //   props.setNewTechnicalDiagnosisStartAt
              // }
            />
          </div>

          <div className="relative flex-1">
            <span className="absolute text-12 text-[#aaa] top-3 right-2">
              کیلومتر فعلی خودرو
            </span>
            {newStartKilometerState && (
              <span className="absolute left-2 top-3 text-12">کیلومتر</span>
            )}
            <Input
              type="text"
              value={newStartKilometerValue}
              id={"kilometerStart"}
              name={"kilometerStart"}
              className={`border outline-none ${
                newStartKilometerState ? "pl-[50px]" : "pl-2"
              } text-14 h-[40px] placeholder:text-12 placeholder:text-right text-left w-full rounded-5`}
              on_change={InputChangeHandler}
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col px-[60px]">
          <ul className="size800:flex hidden justify-between py-2 px-[50px] size1190:text-16 text-14 text-stone-800 rounded-10">
            <li className="font-bold flex-1 text-center">عنوان</li>
            <li className="font-bold flex-1 text-center">وضعیت</li>
            <li className="flex-1"></li>
          </ul>
          <div className="h-[calc(100vh-390px)] flex flex-col gap-4 overflow-y-auto px-8 py-4">
            {exapleArray.map((item, index) => (
              <RecordModalCard key={index} item={item} />
            ))}
          </div>
          <div className={"mt-4 flex justify-end gap-4 px-[32px]"}>
            <Button class_name={"bg-green-500 text-white px-10 py-2 rounded-5"}>
              ثبت
            </Button>
            <Button
              class_name={"bg-red-500 text-white px-10 py-2 rounded-5"}
              on_click={clickBackHandler}
            >
              لغو
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordModalCreate;
