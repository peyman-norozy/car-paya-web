import DatePickerSelection from "@/components/DatePicker";
import React, {useEffect, useState} from "react";
import Input from "@/components/Input";
import ToggleButton from "@/components/ToggleButton";
import {numberWithCommas} from "@/utils/function-utils";
import axios from "axios";
import {API_PATHS} from "@/configs/routes.config";
import SelectSearchInput from "@/components/SelectSearchInput"; // const insuranceData = {
// const insuranceData = {

// const insuranceData = {
// const insuranceData = {
//   placeholder: <span className="text-[#aaa]">نام شرکت بیمه</span>,
//   id: "insuranceDataSelected",
//   options: [
//     { option: "ایران", value: "IRAN" },
//     { option: "رازی", value: "RAZI" },
//   ],
// };

const GeneralCarInformation = (props) => {
  const [newToggleClassName, setNewToggleClassName] = useState(
    "translate-x-[-52px]",
  );
  const [newEnableToggle, setNewEnableToggle] = useState(false);
  const [newTomanState, setNewTomanState] = useState(false);
  const [newfinePriceValue, setNewfinePriceValue] = useState("");
  const [newInsurance, setNewInsurance] = useState([]);
  const [newFilterEditData, setNewFilterEditData] = useState([]);

  useEffect(() => {
    if (props.pageType === "edit" && props.editRemember !== undefined) {
      if (props.editRemember === 1) {
        setNewEnableToggle(props.editRemember);
        setNewToggleClassName("translate-x-[-1px]");
      } else if (props.editRemember === 0) {
        setNewEnableToggle(props.editRemember);
        setNewToggleClassName("translate-x-[-52px]");
      }
    }
    if (props.pageType === "edit") {
      console.log(props.editFinePrice);
      if (props.editFinePrice !== undefined) {
        const finePriceWithCommas = numberWithCommas(props.editFinePrice);
        setNewfinePriceValue(finePriceWithCommas);
        props.setNewFinePrice(finePriceWithCommas.split(",").join(""));
        setNewTomanState(true);
      }
    }
  }, [props]);

  // const selectOptionHandler = (event) => {
  //   const value = event.target.getAttribute("value");
  //   if (props.id === "thirdPartyInsurance") {
  //     props.setNewThirdPartyInsuranceCompany(value);
  //   } else if (props.id === "bodyInsurance") {
  //     props.setNewBodyInsuranceCompany(value);
  //   } else if (event.target.id === "tipOption") {
  //     // setGearboxSuctionState(String(event.target.value));
  //   }
  // };

  const selectSearchOptionHandler = (event) => {
    const slug = event.target.getAttribute("slug");
    if (props.id === "thirdPartyInsurance") {
      props.setNewThirdPartyInsuranceCompany(slug);
    } else if (props.id === "bodyInsurance") {
      props.setNewBodyInsuranceCompany(slug);
    } else if (event.target.id === "tipOption") {
      // setGearboxSuctionState(String(event.target.value));
    }
  };

  const toggleChangeHandler = () => {
    if (newToggleClassName === "translate-x-[-52px]") {
      setNewToggleClassName("translate-x-[-1px]");
      setNewEnableToggle(true);
      if (props.id === "thirdPartyInsurance") {
        props.setNewThirdPartyInsuranceRemember(1);
      } else if (props.id === "bodyInsurance") {
        props.setNewBodyInsuranceRemember(1);
      } else if (props.id === "technicalDiagnosis") {
        props.setNewTechnicalDiagnosisRemember(1);
      }
    } else {
      setNewToggleClassName("translate-x-[-52px]");
      setNewEnableToggle(false);
      if (props.id === "thirdPartyInsurance") {
        props.setNewThirdPartyInsuranceRemember(0);
      } else if (props.id === "bodyInsurance") {
        props.setNewBodyInsuranceRemember(0);
      } else if (props.id === "technicalDiagnosis") {
        props.setNewTechnicalDiagnosisRemember(0);
      }
    }
  };

  const finePriceChangeHandler = (event) => {
    const changeStringToNumber = +event.target.value.split(",").join("");
    if (event.target.value.length > 0) {
      setNewTomanState(true);
    } else {
      setNewTomanState(false);
    }
    if (isNaN(changeStringToNumber)) {
      return null;
    }
    changeStringToNumber === 0
      ? setNewfinePriceValue("")
      : setNewfinePriceValue(numberWithCommas(changeStringToNumber));
  };

  useEffect(() => {
    axios
      .get(process.env.BASE_API + "/web" + API_PATHS.INSURANCES)
      .then((res) => {
        setNewInsurance(res.data.data);
      });
  }, []);

  useEffect(() => {
    if (
      props.pageType === "edit" &&
      props.editCompany !== undefined &&
      props.editCompany.length > 0
    ) {
      const filterData = newInsurance.filter(
        (item) => item.slug === props.editCompany,
      );
      setNewFilterEditData(filterData);
    }
  }, [props, newInsurance]);
  console.log(newInsurance);
  return (
    <div className="flex flex-col gap-4 size411:flex-row items-center size617:gap-16 mt-6 bg-[#f4f4f4] py-4 px-3">
      <span className="text-red_shop inline-block w-full size411:w-[100px] size617:text-14 text-12">
        {props.title}
      </span>
      <div className="grid size1228:grid-cols-4 size617:grid-cols-2 grid-cols-1 gap-4 flex-1 items-center">
        {props.violationState && (
          <div className="relative col-span-2">
            {newTomanState && (
              <span className="absolute left-2 top-3 text-12">تومان</span>
            )}
            <Input
              type="text"
              value={newfinePriceValue}
              id={props.id}
              className={
                "h-[40px] outline-none rounded-5 border border-[#d1d1d1] pr-2 w-full"
              }
              on_change={finePriceChangeHandler}
            />
          </div>
        )}

        {props.allSelectInputState && (
          <DatePickerSelection
            placeholder={"تاریخ شروع"}
            id={"startDate"}
            pageType={props.pageType}
            editData={props.editStartAt}
            // editCompany={props.editCompany}
            // editRemember={props.editRemember}
            id_state={props.id}
            setNewThirdPartyInsuranceStartAt={
              props.setNewThirdPartyInsuranceStartAt
            }
            setNewBodyInsuranceStartAt={props.setNewBodyInsuranceStartAt}
            setNewTechnicalDiagnosisStartAt={
              props.setNewTechnicalDiagnosisStartAt
            }
          />
        )}
        {props.allSelectInputState && (
          <DatePickerSelection
            placeholder={"تاریخ پایان"}
            id={"endDate"}
            pageType={props.pageType}
            editData={props.editEndAt}
            editInformationData={props.editInformationData}
            id_state={props.id}
            setNewThirdPartyInsuranceEndAt={
              props.setNewThirdPartyInsuranceEndAt
            }
            setNewBodyInsuranceEndAt={props.setNewBodyInsuranceEndAt}
            setNewTechnicalDiagnosisEndAt={props.setNewTechnicalDiagnosisEndAt}
          />
        )}
        {props.insuranceState && props.allSelectInputState && (
          <SelectSearchInput
            data={newInsurance}
            pageType={props.pageType}
            editId={newFilterEditData.length > 0 && newFilterEditData[0].id}
            editTitle={
              newFilterEditData.length > 0 && newFilterEditData[0].title
            }
            placeholder={<span className="text-[#aaa]">نام شرکت بیمه</span>}
            onclick={selectSearchOptionHandler}
            id={"insurancesOption"}
            // newReset={newReset}
            className={"h-[40px] bg-white"}
          />
          // <SelectInput
          //   data={insuranceData}
          //   onclick={selectOptionHandler}
          //   // newReset={newReset}
          //   className={"h-[40px] bg-white"}
          // />
        )}
        {props.allSelectInputState && (
          <div className="flex items-center gap-2">
            <span className="text-14">یادآوری:</span>
            <ToggleButton
              onClick={toggleChangeHandler}
              newEnableToggle={newEnableToggle}
              activeText={"فعال"}
              InactiveText={"غیرفعال"}
              editData={props.editRemember}
              newToggleClassName={newToggleClassName}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralCarInformation;
