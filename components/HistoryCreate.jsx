import { useDispatch } from "react-redux";
import DatePickerSelection from "@/components/DatePicker";
import Input from "@/components/Input";
import RecordModalCard from "@/components/cards/RecordModalCard";
import React, { useRef, useState } from "react";
import { error, numberWithCommas } from "@/utils/function-utils";
import Button from "@/components/Button";
import { postData } from "@/utils/client-api-function-utils";
import { API_PATHS } from "@/configs/routes.config";
import { notFound, usePathname, useRouter } from "next/navigation";

const exapleArray = [
  { title: "روغن موتور", id: 0 },
  { title: "فیلتر هوا", id: 1 },
  { title: "فیلتر روغن", id: 2 },
  { title: "فیلتر کابین", id: 3 },
  { title: "فیلتر بنزین", id: 4 },
  { title: "فیلتر گیربکس اتوماتیک", id: 5 },
  { title: "روغن گیربکس دستی", id: 6 },
  { title: "روغن گیربکس اتومات", id: 7 },
  { title: "ضد یخ", id: 8 },
  { title: "روغن ترمز", id: 9 },
  { title: "روغن هیدرولیک", id: 10 },
  { title: "مکمل و اکتان", id: 11 },
  { title: "شمع", id: 12 },
  { title: "لاستیک", id: 13 },
  { title: "باتری", id: 14 },
  { title: "دینام", id: 15 },
  { title: "واسگارین", id: 16 },
  { title: "تسمه تایم", id: 17 },
  { title: "لنت جلو", id: 18 },
  { title: "لنت عقب", id: 19 },
];

const HistoryCreate = (props) => {
  const [newStartKilometerState, setNewStartKilometerState] = useState(false);
  const [newStartKilometerValue, setNewStartKilometerValue] = useState("");
  const [newAddDateHistory, setNewAddDateHistory] = useState("");
  const vehicleId = props.params[2];
  const router = useRouter();
  const pathName = usePathname();
  const newRoute = useRef(null);
  console.log(vehicleId);
  const newDetailArray = [
    { title: "روغن موتور", status: "VISIT", product_id: "" },
    { title: "فیلتر هوا", status: "VISIT", product_id: "" },
    { title: "فیلتر روغن", status: "VISIT", product_id: "" },
    { title: "فیلتر کابین", status: "VISIT", product_id: "" },
    { title: "فیلتر بنزین", status: "VISIT", product_id: "" },
    { title: "فیلتر گیربکس اتوماتیک", status: "VISIT", product_id: "" },
    { title: "روغن گیربکس دستی", status: "VISIT", product_id: "" },
    { title: "روغن گیربکس اتومات", status: "VISIT", product_id: "" },
    { title: "ضد یخ", status: "VISIT", product_id: "" },
    { title: "روغن ترمز", status: "VISIT", product_id: "" },
    { title: "روغن هیدرولیک", status: "VISIT", product_id: "" },
    { title: "مکمل و اکتان", status: "VISIT", product_id: "" },
    { title: "شمع", status: "VISIT", product_id: "" },
    { title: "لاستیک", status: "VISIT", product_id: "" },
    { title: "باتری", status: "VISIT", product_id: "" },
    { title: "دینام", status: "VISIT", product_id: "" },
    { title: "واسگارین", status: "VISIT", product_id: "" },
    { title: "تسمه تایم", status: "VISIT", product_id: "" },
    { title: "لنت جلو", status: "VISIT", product_id: "" },
    { title: "لنت عقب", status: "VISIT", product_id: "" },
  ];

  const dispatch = useDispatch();

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

  console.log(props.params);
  const sendClickHandler = async () => {
    console.log(newDetailArray);
    const formData = new FormData();
    formData.set("date", newAddDateHistory);
    formData.set("kilometers_current", newStartKilometerValue);
    for (let i = 0; i < newDetailArray.length; i++) {
      formData.set(`detail[${i}][status]`, newDetailArray[i].status);
      formData.set(`detail[${i}][product_id]`, newDetailArray[i].product_id);
      formData.set(`detail[${i}][title]`, newDetailArray[i].title);
    }

    if (props.params.includes("my-car")) {
      newRoute.current = "/car-history";
    } else if (props.params.includes("my-motorcycle")) {
      newRoute.current = "/motor-history";
    } else if (props.params.includes("my-heavy-car")) {
      newRoute.current = "/heavyCar-history";
    }
    const fetchData = await postData(
      `${API_PATHS.USERPANEL}${newRoute.current}/store/${vehicleId}`,
      formData,
    );
    if (fetchData.status === 200 || fetchData.status === 201) {
      router.push("/" + pathName.split("/").splice(1, 6).join("/"));
    } else if (fetchData.response.status === 404) {
      console.log(fetchData);
      notFound();
    } else if (fetchData.response.status === 422) {
      for (let key in fetchData.response.data.errors) {
        error(fetchData.response.data.errors[key][0]);
      }
    }
    console.log(newAddDateHistory);
    console.log(newStartKilometerValue);
  };

  const backAddHistory = () => {
    router.push("/" + pathName.split("/").splice(1, 6).join("/"));
  };

  return (
    <div className="flex flex-col size1000:flex-1 w-full rounded-[10px] px-[43px] py-6 shadow-[0_0_6px_0_rgba(180,180,180,0.3)]">
      <div className={"flex items-center gap-2 mb-[34px]"}>
        <i
          onClick={backAddHistory}
          className={"cc-arrow-right text-[30px] text-[#354597] cursor-pointer"}
        />
        <span className={"text-[#354597]"}>افزودن سابقه</span>
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
            id_state={"addHistory"}
            setNewAddDateHistory={setNewAddDateHistory}
            // setNewBodyInsuranceStartAt={props.setNewBodyInsuranceStartAt}
            // setNewTechnicalDiagnosisStartAt={
            //   props.setNewTechnicalDiagnosisStartAt
            // }
          />
        </div>

        <div className="relative flex-1">
          <span className="absolute text-12 text-[#aaa] top-[-10px] bg-white px-2 right-2">
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
            className={`border border-[#B0B0B0] outline-none ${
              newStartKilometerState ? "pl-[50px]" : "pl-2"
            } text-14 h-full placeholder:text-12 placeholder:text-right text-left w-full rounded-5`}
            on_change={InputChangeHandler}
          />
        </div>
      </div>
      <div className="mt-6 flex flex-col px-[60px]">
        <ul className="size800:flex hidden justify-between py-2 size1190:text-16 text-14 text-stone-800 rounded-10 bg-[#ECEEF8]">
          <li className="font-bold flex-1 text-center">#</li>
          <li className="font-bold flex-1 text-center">عنوان</li>
          <li className="font-bold flex-1 text-center">وضعیت</li>
          <li className="flex-1"></li>
        </ul>
        <div className="flex flex-col gap-4 overflow-y-auto py-4">
          {exapleArray.map((item, index) => (
            <RecordModalCard
              key={item.id}
              index={index}
              params={props.params}
              item={item}
              newDetailArray={newDetailArray}
            />
          ))}
        </div>
        <div className={"mt-4 flex justify-end gap-4 px-[32px]"}>
          <Button
            type={"button"}
            class_name={"bg-green-500 text-white px-10 py-2 rounded-5"}
            on_click={sendClickHandler}
          >
            ثبت
          </Button>
          <Button
            class_name={"bg-red-500 text-white px-10 py-2 rounded-5"}
            on_click={backAddHistory}
          >
            لغو
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HistoryCreate;
