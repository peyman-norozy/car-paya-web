"use client";
import React from "react";
import useSetQuery from "@/hook/useSetQuery";
import { useSearchParams } from "next/navigation";

const SubFilterCard = (props) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const setQuery = useSetQuery();
  const clickAmpFilterHandler = (event) => {
    setQuery.setQuery(
      props.filterId === "getAmp" ? "amp" : "brand",
      props.item.value
    );
    props.setFilterModalState(false);
  };

  const setBrandHandler = () => {
    setQuery.deleteSingleQuery(
      [{ key: "brand", value: searchParams.get("brand") }],
      params,
      ""
    );
  };

  const setAmperHandler = () => {
    setQuery.deleteSingleQuery(
      [{ key: "amp", value: searchParams.get("amp") }],
      params,
      ""
    );
  };

  return (
    <>
      {props.filterId === "brand" && props.index === 0 ? (
        <li
          className="p-[0.5rem] w-full rounded-[8px] hover:bg-[#9d9d9d] flex items-center justify-between cursor-pointer"
          onClick={() => setBrandHandler()}
        >
          همه برندها
        </li>
      ) : props.filterId === "getAmp" && props.index === 0 ? (
        <li
          className="p-[0.5rem] w-full rounded-[8px] hover:bg-[#9d9d9d] flex items-center justify-between cursor-pointer"
          onClick={() => setAmperHandler()}
        >
          هم آمپرها
        </li>
      ) : (
        <li
          className="p-[0.5rem] w-full rounded-[8px] hover:bg-[#9d9d9d] flex items-center justify-between cursor-pointer"
          onClick={clickAmpFilterHandler}
        >
          {props.item.label}
        </li>
      )}
    </>
  );
};

export default SubFilterCard;
