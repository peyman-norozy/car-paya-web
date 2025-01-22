"use client";

import {
  renderUserAddrress,
  setAreaeModalState,
  setDeleteModal,
} from "@/store/todoSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Portal from "../Portal/Portal";
import axios from "axios";
import { getCookie } from "cookies-next";
import { success } from "@/utils/function-utils";
import GreenCheckInput from "@/components/GreenCheckInput";

const BatteryAreaModal = (props) => {
  const [isClient, setIsClient] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [batteryProductid, setBatteryProductid] = useState({});

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.todo.areaModalState);
  useEffect(() => {
    setIsClient(true);
  }, []);

  function closeModal() {
    dispatch(setAreaeModalState(false));
  }

  const selectOptionHandler = (index, id) => {
    setIsSelected(index);
    setBatteryProductid({ area_id: id });
  };

  const areaFilterHandler = () => {
    props.timeData(batteryProductid);
  };

  if (!isClient) return null;

  const modalContainer = document.getElementById("modal-root");

  if (!modalContainer) return null;

  return (
    <Portal container={modalContainer}>
      <div
        className={`${!isOpen ? "hidden" : "fixed"} fixed top-0 right-0 w-screen h-screen bg-[#000000b2] z-[3000]`}
        onClick={() => closeModal()}
      >
        <div
          className="absolute bg-white bottom-0 right-0 sm:inset-0 sm:m-auto h-fit sm:max-w-[560px] sm:rounded-2xl w-full rounded-t-3xl flex flex-col gap-4 p-4 pb-28 sm:pb-4"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[#3C3C3C] font-medium">فیلتر</span>
            <i className="i-close-circle text-xl" onClick={closeModal} />
          </div>
          <div className="overflow-y-scroll h-[300px]">
            <div className="px-2 h-fit gap-4 flex flex-col ">
              <div className="checkbox-wrapper-42 flex items-center gap-1 w-full">
                <div className="checkbox-wrapper-37 flex justify-center items-center h-full">
                  <GreenCheckInput
                    isSelected={isSelected === "all_area"}
                    on_click={() => selectOptionHandler("all_area", "")}
                    class_name="rounded-[50%] cursor-pointer self-start"
                  />
                </div>
                <span
                  className="lbl font-medium text-sm text-[#3C3C3C] line-clamp-1 select-none"
                  onClick={() => selectOptionHandler("all_area", "")}
                >
                  همه محله ها
                </span>
              </div>
              {props.data?.map((item, index) => (
                // <div
                //   key={index}
                //   className="flex items-center justify-start font-medium text-sm text-[#3C3C3C] py-2"
                // >
                //   {item.label}
                // </div>
                <div
                  key={index}
                  className="checkbox-wrapper-42 flex items-center gap-1 w-full"
                >
                  <div className="checkbox-wrapper-37 flex justify-center items-center h-full">
                    <GreenCheckInput
                      isSelected={isSelected === index}
                      on_click={() => selectOptionHandler(index, item.id)}
                      class_name="rounded-[50%] cursor-pointer self-start"
                    />
                  </div>
                  <span
                    className="lbl font-medium text-sm text-[#3C3C3C] line-clamp-1 select-none"
                    onClick={() => selectOptionHandler(index, item.id)}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="fixed sm:static w-full rounded-t-2xl shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] flex justify-center pt-4 pb-6 items-start bottom-0 right-0 bg-white z-[2000] px-10">
            <button
              className={`bg-[#F66B34] rounded-lg w-full sm:max-w-[400px] text-[#FEFEFE] text-sm font-medium py-3`}
              onClick={areaFilterHandler}
            >
              اعمال فیلتر
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default BatteryAreaModal;
