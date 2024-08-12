"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { useSearchParams } from "next/navigation";

const BatteriesMainPage = () => {
  const [client, setClient] = useState(false);
  let TipId = "";

  useEffect(() => {
    setClient(true);
    TipId = JSON.parse(localStorage.getItem("selectedVehicle"))?.id
      ? `&selectTipState=${JSON.parse(localStorage.getItem("selectedVehicle")).id}`
      : "";
  }, []);

  if (!client) {
    return null;
  }

  return (
    <>
      <Link
        href={`batteries/products?attribute_slug=type_vehicle&attribute_value=car${TipId}`}
        className={"bg-red-600 text-white p-2"}
      >
        batteries product
      </Link>
      <ToastContainer rtl={true} />
    </>
  );
};

export default BatteriesMainPage;
