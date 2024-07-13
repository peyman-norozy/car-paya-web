import React from "react";
import Link from "next/link";
import Button from "./Button";

const ConfirmAndBackButton = (props) => {
  return (
    <div className="absolute bottom-[10%] left-[5%] flex gap-[1rem]">
      <Button on_click={props.back} class_name="px-[1.5rem] py-[0.5rem] border-[1px] border-red_shop text-red_shop rounded-[0.5rem] text-[0.75rem] size870:text-[1rem] size870:px-[2rem]">
        بازگشت
      </Button>

      <Button
      on_click={props.continue}
        class_name={`px-[1rem] py-[0.5rem] bg-red_shop text-white rounded-[0.5rem] text-[0.75rem]  size870:text-[1rem]`}
      >
        تایید و ادامه
      </Button>
    </div>
  );
};

export default ConfirmAndBackButton;
