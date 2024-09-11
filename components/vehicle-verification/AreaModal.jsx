"use client";

import { renderUserAddrress, setAreaeModalState, setDeleteModal } from "@/store/todoSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Portal from "../Portal/Portal";
import axios from "axios";
import { getCookie } from "cookies-next";
import { success } from "@/utils/function-utils";

const AreaModal = () => {
    const [isClient, setIsClient] = useState(false);
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.todo.areaModalState);
    useEffect(() => {    
      setIsClient(true);
    }, []);
  
    function closeModal() {
      dispatch(setAreaeModalState(false));
    }
  
  
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
            className="absolute bg-white bottom-0 right-0 w-full rounded-t-3xl flex flex-col gap-10 p-4"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div className="flex items-center justify-between">
                <span className="text-[#3C3C3C] font-medium">فیلتر</span>
                <i className="cc-twitter text-xl"/>
            </div>
            <div className="px-2 overflow-y-scroll">
            {/* {servicesData?.map((item, index) => (
                  <div
                    key={index}
                    className="checkbox-wrapper-42 flex items-center gap-1 min-w-[210px]"
                  >
                    <input
                      id={item.value}
                      type="checkbox"
                      onChange={(e) => {
                        checkboxChangeHandler(item.value, e.target.checked);
                      }}
                    />
                    <label className="cbx" for={item.value}></label>
                    <label
                      className="lbl line-clamp-1 select-none"
                      for={item.value}
                    >
                      {item.label}
                    </label>
                  </div>
                ))} */}
            </div>
          </div>
        </div>
      </Portal>
    );
}
 
export default AreaModal;