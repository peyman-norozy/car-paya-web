import ToggleButton from "@/components/ToggleButton";
import React, { useState } from "react";
import SelectSearchInput from "@/components/SelectSearchInput";

const newData = [
  { id: 1, title: "پیمان", slug: "peyman" },
  { id: 2, title: "سهیل", slug: "soheil" },
];

const RecordModalCard = (props) => {
  const [newToggleClassName, setNewToggleClassName] = useState(
    "translate-x-[-52px]",
  );
  const [newEnableToggle, setNewEnableToggle] = useState(false);
  const [newSelectOptionState, setNewSelectOptionState] = useState(false);

  const toggleChangeHandler = () => {
    if (newToggleClassName === "translate-x-[-52px]") {
      setNewToggleClassName("translate-x-[-1px]");
      setNewEnableToggle(true);
      setNewSelectOptionState(true);
      //   if (props.id === "thirdPartyInsurance") {
      //     props.setNewThirdPartyInsuranceRemember(1);
      //   } else if (props.id === "bodyInsurance") {
      //     let props;
      //     props.setNewBodyInsuranceRemember(1);
      //   } else if (props.id === "technicalDiagnosis") {
      //     props.setNewTechnicalDiagnosisRemember(1);
      //   }
    } else {
      setNewToggleClassName("translate-x-[-52px]");
      setNewEnableToggle(false);
      setNewSelectOptionState(false);
      // if (props.id === "thirdPartyInsurance") {
      //   props.setNewThirdPartyInsuranceRemember(0);
      // } else if (props.id === "bodyInsurance") {
      //   props.setNewBodyInsuranceRemember(0);
      // } else if (props.id === "technicalDiagnosis") {
      //   props.setNewTechnicalDiagnosisRemember(0);
      // }
    }
  };

  const selectSearchOptionHandler = () => {};

  return (
    <div className="flex justify-between items-center shadow-[0_0_6px_0_rgba(177,177,177,1)] text-14 text-stone-800 rounded-10 px-4 py-4">
      <span className="flex-1 flex justify-center">{props.item.title}</span>
      <div className="flex-1 flex justify-center">
        <ToggleButton
          onClick={toggleChangeHandler}
          newEnableToggle={newEnableToggle}
          activeText={"تعویض"}
          InactiveText={"بازدید"}
          // editData={props.editRemember}
          newToggleClassName={newToggleClassName}
        />
      </div>
      {newSelectOptionState ? (
        <div className="flex flex-1">
          <SelectSearchInput
            data={newData}
            // pageType={props.pageType}
            // editId={newFilterEditData.length > 0 && newFilterEditData[0].id}
            // editTitle={newFilterEditData.length > 0 && newFilterEditData[0].title}
            placeholder={<span className="text-[#aaa]">نام</span>}
            onclick={selectSearchOptionHandler}
            // id={"insurancesOption"}
            // newReset={newReset}
            className={"h-[40px] bg-white"}
          />
        </div>
      ) : (
        <span className="flex-1 flex justify-center"></span>
      )}
    </div>
  );
};

export default RecordModalCard;
