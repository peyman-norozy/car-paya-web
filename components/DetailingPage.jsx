"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { error } from "@/utils/function-utils";
import { ToastContainer } from "react-toastify";

const DetailingPage = (props) => {
  const [toastieDisplay, setToastieDisplay] = useState(false);
  useEffect(() => {
    if (!props.searchParams.selectTipState) {
      error("لطفا خودرو خود را انتخاب کنید");
      console.log("peyman");
    } else if (!props.searchParams.city_id) {
      error("لطفا شهر خود را انتخاب کنید");
    }
  }, [props.searchParams, toastieDisplay]);
  return (
    <div>
      <Link
        href={{
          pathname:
            props.searchParams.selectTipState && props.searchParams.city_id
              ? "/detailing/services"
              : "/detailing",
          query: { ...props.searchParams, type: "MOVING" },
        }}
        className={"inline-block mt-[200px] mr-[400px] bg-red-600"}
        onClick={() => setToastieDisplay((prev) => !prev)}
      >
        Moving
      </Link>
      <Link
        href={{
          pathname: "/detailing/services",
          query: { ...props.searchParams, type: "FIXED" },
        }}
        className={"inline-block mt-[200px] mr-[400px] bg-red-600"}
      >
        fixed
      </Link>
      <ToastContainer rtl={true} />
    </div>
  );
};

export default DetailingPage;
