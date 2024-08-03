"use client";
import React from "react";
import useSetQuery from "@/hook/useSetQuery";

const SubFilterCard = (props) => {
  const setQuery = useSetQuery();
  const clickAmpFilterHandler = (event) => {
    console.log(props.filterId);
    props.setFilter(event.target.innerText);

    setQuery.setQuery(
      props.filterId === "getAmp" ? "amp" : "brand",
      props.item.value,
    );
    props.setFilterModalState(false);
  };

  return (
    <li
      className="p-[0.5rem] w-full rounded-[8px] hover:bg-[#9d9d9d] flex items-center justify-between"
      onClick={clickAmpFilterHandler}
    >
      {props.item.label}
    </li>
  );
};

export default SubFilterCard;
