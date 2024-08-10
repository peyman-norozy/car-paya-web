"use client";
import React, { useCallback, useEffect } from "react";
import Portal from "@/components/Portal/Portal";
import Image from "next/image";
import useSetQuery from "@/hook/useSetQuery";
import { useDispatch } from "react-redux";
import { setCityModalState } from "@/store/todoSlice";

const fakeData = [
  { city: "تهران", id: 87 },
  { city: "آذربایجان شرقی-جلفا", id: 7 },
];

const CityModal = ({ isOpen, onClose }) => {
  const setQuery = useSetQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling by setting overflow hidden on body
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when modal is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset the scroll style on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const cityClickHandler = (id, city) => {
    setQuery.updateQueryParams({ city_id: id }, "");
    localStorage.setItem("city", JSON.stringify({ label: city, cityId: id }));
    dispatch(setCityModalState(false));
  };

  // if (!isOpen) return null;

  const modalContainer = document.getElementById("modal-root"); // Ensure you have this div in your index.html

  return (
    <Portal container={modalContainer}>
      <div
        className={`${!isOpen ? "hidden" : "fixed"} inset-0 h-full w-full bg-[#4c4c4caa] z-[20000] transition-all`}
        onClick={() => onClose()}
      ></div>
      <div
        className={`bg-[#eee] absolute top-[10%] left-0 right-0 m-auto w-[80%] ${isOpen ? "h-[80%]" : "h-0"} transition-all duration-500 z-[200000] overflow-hidden rounded-10`}
      >
        <div className={"p-6"}>
          <div className={"flex justify-between items-center"}>
            <p className={"text-[24px] font-medium"}>شهر خود را انتخاب کنید</p>
            <div className={"rotate-45 w-fit h-fit"}>
              <i className={"cc-add text-[24px]"} onClick={() => onClose()} />
            </div>
          </div>
          <p className={"mt-4"}>
            این به ما در ارائه خدمات سریع به شما کمک می کند
          </p>
          <div
            className={
              "flex items-center gap-2 mt-4 border-b-2 pb-1 border-b-[#f66b34] w-[87px]"
            }
          >
            <div className={"rounded-5 overflow-hidden w-fit"}>
              <Image
                src={"/assets/images/iransFlag.png"}
                alt={"iranFlag"}
                width={2000}
                height={1144}
                className={"w-[32px] h-[20px]"}
              />
            </div>
            <span className={"font-semibold text-16"}>ایران</span>
          </div>
          <ul className={"flex gap-2 mt-4"}>
            {fakeData.map((item, index) => (
              <li
                key={index}
                className={
                  "min-w-[100px] h-[100px] bg-stone-400 flex justify-center items-center rounded-5 cursor-pointer p-2"
                }
                onClick={() => cityClickHandler(item.id, item.city)}
              >
                {item.city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Portal>
  );
};

export default CityModal;
