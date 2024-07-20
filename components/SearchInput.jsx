"use client";
import React from "react";
import search from "@/public/assets/icons/Search 1.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SearchInput = (props) => {
  const data = useSelector((item) => item.todo);
  console.log(data.vehicleData);
  const searchChangeHandler = (event) => {
    console.log(event.target.value);
    console.log(props.step);
    const searchFilterData = props.vehicleData.filter((item) => {
      // return item.title.search(event.target.value) !== -1;
      return item.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    props.setFilterData(searchFilterData);
  };

  // useEffect(() => {
  //   console.log("peyman");
  //   props.setFilterData(data.vehicleData);
  // }, [props]);

  return (
    <div className="border-[1px] rounded-5 border-gray_light_border py-[0.25rem] px-[1rem] flex items-center">
      <input
        type="search"
        className="outline-none h-full w-full text-14"
        placeholder={props.placeholder}
        onChange={searchChangeHandler}
      />
      <Image src={search} alt="" width={17} height={17} />
    </div>
  );
};

export default React.memo(SearchInput);
