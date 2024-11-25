"use client";

import {
  renderUserAddrress,
  setAreaeModalState,
  setDeleteModal,
} from "@/store/todoSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Portal from "../Portal/Portal";
import axios from "axios";
import { getCookie } from "cookies-next";
import { success } from "@/utils/function-utils";

const ServicesModal = (props) => {
  function closeModal() {
    props.setServiceModal(false);
  }

  return (
    <div
      className={`${!props.serviceModal ? "hidden" : "fixed"} fixed top-0 right-0 w-screen h-screen bg-[#000000b2] z-[3000]`}
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
          <i className="cc-twitter text-xl" onClick={closeModal} />
        </div>
        <div className="overflow-y-scroll h-[300px]">
          <div className="px-2 h-fit gap-4 flex flex-col ">
            {props.data?.map((item, index) => (
              // <div
              //   key={index}
              //   className="flex items-center justify-start font-medium text-sm text-[#3C3C3C] py-2"
              // >
              //   {item.label}
              // </div>
              <div
                key={"service" + index}
                className="checkbox-wrapper-42 flex items-center gap-1 w-full"
              >
                <input
                  id={item.value}
                  type="checkbox"
                  onChange={(e) => {
                    props.servicesCheckboxChangeHandler(
                      item.value,
                      e.target.checked
                    );
                  }}
                />
                <label className="cbx" for={item.value}></label>
                <label
                  className="lbl font-medium text-sm text-[#3C3C3C] line-clamp-1 select-none"
                  for={item.value}
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="fixed sm:static w-full rounded-t-2xl shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] flex justify-center pt-4 pb-6 items-start bottom-0 right-0 bg-white z-[2000] px-10">
          <button
            className={`bg-[#F66B34] rounded-lg w-full sm:max-w-[400px] text-[#FEFEFE] text-sm font-medium py-3`}
            onClick={() => {
              props.serviceFilterHandler();
              closeModal();
            }}
          >
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;
