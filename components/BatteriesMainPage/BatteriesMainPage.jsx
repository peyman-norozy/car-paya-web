"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { error } from "@/utils/function-utils";

const BatteriesMainPage = () => {
  const carSelectToastState = useSelector(
    (state) => state.todo.carSelectToastState,
  );
  console.log(carSelectToastState);

  useEffect(() => {
    if (carSelectToastState) {
      error("لطفا خودرو خود را انتخاب کنید");
    }
  }, [carSelectToastState]);
  return (
    <>
      <Link
        href={
          "batteries/products?attribute_slug=type_vehicle&attribute_value=car"
        }
        className={"bg-red-600 text-white p-2"}
      >
        batteries product
      </Link>
      <ToastContainer rtl={true} />
    </>
  );
};

export default BatteriesMainPage;
