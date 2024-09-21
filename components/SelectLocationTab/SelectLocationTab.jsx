import React, { useEffect } from "react";
import useSetQuery from "@/hook/useSetQuery";

const SelectLocationTab = (props) => {
  const setQuery = useSetQuery();
  const clickTabHandler = () => {
    props.setSelectAddressState(props.addressTabState);
    props.setLocationId("");
    setQuery.updateQueryParams({ type: props.addressTabState });
  };

  return (
    <div
      className={`border-b-2 ${props.selectAddressState === props.addressTabState ? "text-[#F58052] border-[#F58052]" : "text-[#FCCAAC] border-[#FCCAAC]"} w-full py-3 px-4 cursor-pointer`}
      onClick={clickTabHandler}
    >
      <h1 className={"text-[14px] text-center font-semibold"}>
        {props.headerText}
      </h1>
      <p
        className={`${props.selectAddressState === props.addressTabState ? "text-[#0E0E0E]" : "text-[#505050]"} lg:text-14 text-12`}
      >
        {props.description}
      </p>
    </div>
  );
};

export default SelectLocationTab;
