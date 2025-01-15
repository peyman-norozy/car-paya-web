"use client";

import React, { useState } from "react";
import Image from "next/image";
import { numberWithCommas } from "@/utils/function-utils";
import { usePathname } from "next/navigation";

const FacktorCard = ({ item, removeHandler }) => {
  const [modalState, setModalState] = useState(false);
  const pathName = usePathname();

  function removeProduct(id) {
    if (sessionStorage) {
      let session = JSON.parse(sessionStorage.getItem("periodicCart"));
      const newProducts = session.products.filter((item) => {
        return item.id !== id;
      });
      session.products = newProducts;
      sessionStorage.setItem("periodicCart", JSON.stringify(session));
      if (removeHandler) {
        removeHandler(newProducts);
      }
    }
  }

  return (
    <li className={"p-2 shadow-custom1 rounded-lg min-w-[197px]  relative"}>
      <section className={"flex flex-row lg:flex-col items-center gap-4"}>
        <div>
          <Image
            src={process.env.BASE_API + "/web/file/" + item?.image_ids}
            className={"w-[120px] h-[114px] bg-slate-200 rounded"}
            alt={"service product"}
            width={120}
            height={114}
          />
        </div>
        <div className={"text-12 flex flex-col flex-1 gap-2"}>
          <span>{item?.name}</span>
          <div className={"flex items-center gap-1"}>
            <span
              className={"inline-block w-[15px] h-[15px] bg-gray-300"}
            ></span>
            <span className={"text-10 text-[#B0B0B0]"}>
              گارانتی اصالت و سلامت فیزیکی کالا
            </span>
          </div>
          <div
            className={
              "flex items-center gap-1 line-through text-10 text-[#B0B0B0]"
            }
          >
            {item?.discounted_salary || item?.discounted_price
              ? numberWithCommas(
                  pathName.includes("/detailing") ? item?.salary : item?.price
                ) + " تومان "
              : ""}
          </div>
          <div className={"flex justify-between items-center w-full"}>
            <div className={"flex items-center gap-1 text-[12px]"}>
              <span>قیمت:</span>
              <span>
                {numberWithCommas(
                  pathName.includes("/detailing")
                    ? item?.discounted_salary
                      ? item?.discounted_salary
                      : item?.salary
                    : item?.discount_price
                      ? item?.discount_price
                      : item?.price
                ) + " تومان "}
              </span>
            </div>
            <section className={"text-left"}>
              <span
                className={"text-red-600 text-12 cursor-pointer"}
                onClick={() => {
                  setModalState(true);
                }}
              >
                حذف
              </span>
            </section>
          </div>
        </div>
      </section>
      <div
        className={`absolute -top-1 -left-1 ${item?.discounted_percent ? "block" : "hidden"}`}
      >
        <Image
          src={"/assets/icons/image85.svg"}
          alt={"percent"}
          width={52}
          height={51}
        />
        <span
          className={
            "absolute top-[7px] left-[8px] text-12 text-white -rotate-45"
          }
        >
          {item?.discounted_percent}%
        </span>
      </div>
      {modalState && (
        <div
          className="fixed bg-[#00000050] w-screen h-screen top-0 right-0 z-[2000] flex items-center justify-center"
          onClick={() => setModalState(false)}
        >
          <div
            className="py-8 px-6 flex flex-col gap-8 items-center bg-white w-[280px] rounded-xl"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <span className="text-sm font-medium">
              آیا مایل به حذف این سرویس هستید؟
            </span>
            <div className="flex gap-9 w-full">
              <button
                className="font-medium text-sm text-[#f66b34]  border border-[#f66b34] rounded-lg py-[10px] w-full"
                onClick={() => setModalState(false)}
              >
                خیر
              </button>
              <button
                className="font-medium text-sm text-white bg-[#f66b34] rounded-lg py-[10px] w-full"
                onClick={() => {
                  removeProduct(item.id);
                }}
              >
                بله
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default FacktorCard;
