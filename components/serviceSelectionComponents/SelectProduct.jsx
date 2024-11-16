"use client";

import { API_PATHS } from "@/configs/routes.config";
import { renderInvoice } from "@/store/todoSlice";
import { postData } from "@/utils/client-api-function-utils";
import { error, numberWithCommas } from "@/utils/function-utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import nProgress from "nprogress";
import useSetQuery from "@/hook/useSetQuery";
import { ToastContainer } from "react-toastify";

const SelectProduct = (props) => {
  const [value, setValue] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const setQuery = useSetQuery();

  async function buttonClickHandler() {
    const cartData = await postData("/web/cart/add", {
      cartable_id: value,
      cartable_type: pathname.split("/")[1].toUpperCase().split("-").join("_"),
      vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
      step: "step-3",
    });

    if (cartData.status === 200 || cartData.status === 201) {
      console.log(cartData.data);
      setQuery.updateQueryParams(
        { package_id: props.data.id },
        "/periodic-service/service-selection"
      );
    } else if (cartData.response.status === 422) {
      console.log(cartData.response.data);
      error(cartData.response.data.message);
    } else if (cartData.response.status === 401) {
      nProgress.start();
      router.push("/login?backurl=" + pathname + "&" + searchParams.toString());
    }
  }

  return (
    <div className="w-full border border-[#383838A3] flex flex-col pb-5 lg:w-[calc(100%-424px)] mr-auto rounded-2xl overflow-hidden">
      <div className="bg-[#383838A3] items-start px-10 py-5 justify-start flex text-[#FFFFFF]">
        <h1 className="text-18 font-medium">تعویض روغن موتور</h1>
      </div>
      <div className="flex flex-col gap-4 p-4 xl:p-8">
        {props.data.map((item, index) => (
          <label
            key={index}
            className="bg-[#E7E7E7] hover:scale-[102%] transition-transform duration-300 rounded-lg flex flex-col sm:flex-row justify-between p-4 gap-y-4 items-start sm:items-center cursor-pointer"
            for={item.id}
          >
            <div className="gap-2 xl:gap-4 flex items-center">
              <Image
                src={
                  process.env.BASE_API +
                  "/web" +
                  API_PATHS.FILE +
                  "/" +
                  item.image_id
                }
                width={60}
                height={60}
                className="size-[80px] rounded-md"
              />
              <span className="text-14 xl:text-18">{item.name}</span>
            </div>
            <div className="gap-4 flex items-center">
              <span className="text-14 xl:text-18">قیمت</span>
              <span className="text-14 xl:text-18 line-through">
                {numberWithCommas(item.price)} تومان
              </span>
              <span className="text-14 xl:text-18">
                {numberWithCommas(item.discounted_price)} تومان
              </span>
              <input
                type="radio"
                id={item.id}
                name="radioButton"
                value={item.id}
                alt=""
                className="size-5"
                onChange={() => {
                  setValue(item.id);
                }}
                checked={value === item.id}
              />
            </div>
          </label>
        ))}
      </div>
      <div className="flex justify-end px-10 w-full">
        {/* <Link
          href={
            value !== ""
              ? `/periodic-service/service-selection?product=${value}`
              : ""
          }
        > */}
        <button
          className={`${value !== "" ? "bg-[#F66B34] cursor-pointer" : "bg-gray-400 cursor-not-allowed"} rounded-lg py-2 lg:py-3 px-4 lg:px-6`}
          disabled={value !== "" ? false : true}
          onClick={buttonClickHandler}
        >
          <span className="text-white font-bold text-14 lg:text-16">
            افزودن به سبد خرید
          </span>
        </button>
        {/* </Link> */}
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
};

export default SelectProduct;
