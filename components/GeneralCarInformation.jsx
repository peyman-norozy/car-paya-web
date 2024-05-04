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
            if (props.editFinePrice !== undefined) {
                const finePriceWithCommas = numberWithCommas(props.editFinePrice);
                setNewfinePriceValue(finePriceWithCommas);
                props.setNewFinePrice(finePriceWithCommas?finePriceWithCommas.split(",").join(""):"");
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
        console.log(props.editCompany)
        if (
            props.pageType === "edit" &&
            props.editCompany !== undefined &&
            props.editCompany !== ""
        ) {
            const filterData = newInsurance.filter(
                (item) => item.slug === props.editCompany,
            );
            setNewFilterEditData(filterData);
        }
    }, [props, newInsurance]);
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex justify-between"}>
               <span className={"border-r border-red-500 text-[#354597] text-14 pr-2 flex items-center"}>
                    {props.title}
                </span>
                    {props.allSelectInputState && (
                        <div className="flex items-center gap-2">
                            <span className="text-14 text-[#354597]">یادآوری:</span>
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
            <div className={`grid ${props.id === "technicalDiagnosis"?"grid-cols-2":"grid-cols-3"} gap-[32px]`}>
                {props.violationState && (
                    <div className="relative col-span-2">
                        {newTomanState && (
                            <span className="absolute left-2 top-3 text-12">تومان</span>
                        )}
                        <label htmlFor={props.id} className={"bg-white px-2 font-light text-[12px] text-[#454545] absolute top-[-11px] right-[10px]"}>{props.title}</label>
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
                            newFilterEditData.length > 0 ? newFilterEditData[0].title:<span className="text-[#aaa]">نام شرکت بیمه</span>
                        }
                        // placeholder={<span className="text-[#aaa]">نام شرکت بیمه</span>}
                        onclick={selectSearchOptionHandler}
                        id={"insurancesOption"}
                        // newReset={newReset}
                        className={"h-[48px] bg-white"}
                        lable={"نام شرکت بیمه"}

                    />
                    // <SelectInput
                    //   data={insuranceData}
                    //   onclick={selectOptionHandler}
                    //   // newReset={newReset}
                    //   className={"h-[40px] bg-white"}
                    // />
                )}
            </div>
        </div>
            );
};

export default GeneralCarInformation;
