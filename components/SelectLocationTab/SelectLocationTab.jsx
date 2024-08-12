import React, { useEffect } from "react";
import useSetQuery from "@/hook/useSetQuery";

const SelectLocationTab = (props) => {
  const setQuery = useSetQuery();
  const clickTabHandler = () => {
    props.setSelectAddressState(props.addressTabState);
    setQuery.updateQueryParams({ type: props.addressTabState });
  };

  return (
    <div
      className={`${props.selectAddressState === props.addressTabState ? "bg-[#B0B0B0]" : "bg-[#E7E7E7]"} flex-1 rounded-[12px] size540:w-[416px] w-full min-h-[118px] py-3 px-4 cursor-pointer`}
      onClick={clickTabHandler}
    >
      <h1 className={"lg:text-[24px] text-[20px] mb-4 font-semibold"}>
        {props.headerText}
      </h1>
      <p
        className={`${props.selectAddressState === props.addressTabState ? "text-[#0E0E0E]" : "text-[#505050]"} text-14`}
      >
        {props.description}
      </p>
    </div>
  );
};

export default SelectLocationTab;
