import React, { useState } from "react";
import Button from "@/components/Button";
import NewAddressCard from "@/components/cards/NewAddressCard/NewAddressCard";

const AddressSelection = (props) => {
  return (
    <>
      {props.status === "fixed" ? (
        <span>محله</span>
      ) : (
        <Button
          class_name={
            "bg-[#5D697A] text-[#FEFEFE] py-2 px-3 text-[16px] flex item-center gap-2 rounded-[8px]"
          }
        >
          <span className={"text-[24px]"}>+</span>
          <span className={"mt-1.5"}>افزودن آدرس جدید</span>
        </Button>
      )}
      <ul className={"mt-7 flex flex-col gap-6"}>
        {props.data.map((item, index) => (
          <NewAddressCard key={index} status={props.status} item={item} />
        ))}
      </ul>
    </>
  );
};

export default AddressSelection;
