import ToggleButton from "@/components/ToggleButton";
import React, { useEffect, useState } from "react";
import SelectSearchInput from "@/components/SelectSearchInput";
import { getData } from "@/utils/client-api-function-utils";
import { API_PATHS } from "@/configs/routes.config";
import { notFound } from "next/navigation";
import { error } from "@/utils/function-utils";
import { router } from "next/client";
import nProgress from "nprogress";

// const newData = [
//   { id: 1, title: "پیمان", slug: "peyman" },
//   { id: 2, title: "سهیل", slug: "soheil" },
// ];

const RecordModalCard = (props) => {
  const [newToggleClassName, setNewToggleClassName] = useState(
    "translate-x-[-52px]"
  );
  const [newEnableToggle, setNewEnableToggle] = useState(false);
  const [newSelectOptionState, setNewSelectOptionState] = useState(false);
  const [newProductOption, setNewProductOption] = useState([]);
  const tipId = props.params[3];

  useEffect(() => {
    if (newSelectOptionState) {
      (async () => {
        const productOptionData = await getData(
          `${API_PATHS.USERPANEL}/history${API_PATHS.GETPRODUCT}?title=${props.item.title}&tip_id=${tipId}`
        );
        if (
          productOptionData.status === 200 ||
          productOptionData.status === 201
        ) {
          const newProductData = productOptionData.data.data.map((item) => {
            return { id: item.id, title: item.name, slug: item.name };
          });
          setNewProductOption(newProductData);
        } else if (productOptionData.response.status === 404) {
          notFound();
        } else if (productOptionData.response.status === 401) {
          nProgress.start();
          await router.push("/login");
        } else if (productOptionData.response.status === 422) {
          for (let key in productOptionData.response.data.errors) {
            error(productOptionData.response.data.errors[key][0]);
          }
        }
      })();
    }
  }, [props.item.title, tipId, newSelectOptionState]);

  const toggleChangeHandler = (id) => {
    if (newToggleClassName === "translate-x-[-52px]") {
      setNewToggleClassName("translate-x-[-1px]");
      setNewEnableToggle(true);
      setNewSelectOptionState(true);
      props.newDetailArray[id].status = "REPLACE";
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
      props.newDetailArray[id].status = "VISIT";
      props.newDetailArray[id].product_id = "";
      // if (props.id === "thirdPartyInsurance") {
      //   props.setNewThirdPartyInsuranceRemember(0);
      // } else if (props.id === "bodyInsurance") {
      //   props.setNewBodyInsuranceRemember(0);
      // } else if (props.id === "technicalDiagnosis") {
      //   props.setNewTechnicalDiagnosisRemember(0);
      // }
    }
  };

  const selectSearchOptionHandler = (event) => {
    props.newDetailArray[props.item.id].product_id =
      event.target.getAttribute("value");
  };

  return (
    <div className="flex justify-between items-center text-14 text-[#FEFEFE] gap-px">
      <span className="flex-1 flex justify-center items-center h-14 bg-[#444444]">
        {props.index}
      </span>
      <span className="flex-1 flex justify-center items-center h-14 bg-[#444444]">
        {props.item.title}
      </span>
      <div className="flex-1 flex justify-center items-center h-14 bg-[#444444]">
        <ToggleButton
          onClick={() => toggleChangeHandler(props.item.id)}
          newEnableToggle={newEnableToggle}
          activeText={"تعویض"}
          InactiveText={"بازدید"}
          // editData={props.editRemember}
          newToggleClassName={newToggleClassName}
        />
      </div>
      {newSelectOptionState ? (
        <div className="flex flex-1 bg-[#444444]">
          <SelectSearchInput
            data={newProductOption}
            // pageType={props.pageType}
            // editId={newFilterEditData.length > 0 && newFilterEditData[0].id}
            // editTitle={newFilterEditData.length > 0 && newFilterEditData[0].title}
            placeholder={<span className="text-[#aaa]">نام</span>}
            onclick={selectSearchOptionHandler}
            id={"productOption"}
            // newReset={newReset}
            className={"h-[40px] bg-white"}
          />
        </div>
      ) : (
        <span className="flex-1 flex justify-center bg-[#444444]"></span>
      )}
    </div>
  );
};

export default RecordModalCard;
