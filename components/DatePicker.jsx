import React from "react";
// import DatePicker from "react-multi-date-picker";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePickerSelection = (props) => {
  const setDateHandler = (event) => {
    if (props.id_state === "thirdPartyInsurance") {
      props.id === "startDate"
        ? props.setNewThirdPartyInsuranceStartAt(event.unix)
        : props.setNewThirdPartyInsuranceEndAt(event.unix);
    } else if (props.id_state === "bodyInsurance") {
      props.id === "startDate"
        ? props.setNewBodyInsuranceStartAt(event.unix)
        : props.setNewBodyInsuranceEndAt(event.unix);
    } else if (props.id_state === "technicalDiagnosis") {
      props.id === "startDate"
        ? props.setNewTechnicalDiagnosisStartAt(event.unix)
        : props.setNewTechnicalDiagnosisEndAt(event.unix);
    } else if (props.id_state === "addHistory") {
      props.setNewAddDateHistory(event.unix);
    }
  };

  return (
    <div style={{ direction: "rtl" }} className={"flex flex-col gap-4"}>
      <label
        htmlFor={props.id}
        className={
          "font-bold text-[16px] text-[#FEFEFE]"
        }
      >
        {props.placeholder}
      </label>
      <DatePicker
        value={props.editData * 1000}
        calendar={persian}
        locale={persian_fa}
        id={props.id}
        calendarPosition="bottom-right"
        // placeholder={props.placeholder}
        containerClassName={"w-full"}
        onChange={setDateHandler}
        inputClass={
          "text-14 outline-none border border-[#B0B0B0] rounded-5 h-[48px] pr-2 w-full placeholder:text-12"
        }
      />
    </div>
  );
};

export default DatePickerSelection;
