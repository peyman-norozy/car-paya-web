"use client";

import { renderUserAddrress, setDeleteModal } from "@/store/todoSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Portal from "../Portal/Portal";
import axios from "axios";
import { getCookie } from "cookies-next";
import { success } from "@/utils/function-utils";

const DeleteModal = (props) => {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.todo.DeleteModalState);
  const id = useSelector((state) => state.todo.DeleteModalId);

  useEffect(() => {    
    setIsClient(true);
  }, []);

  function closeModal() {
    dispatch(setDeleteModal(false));
  }

  function deleteHandler() {
    axios.delete(process.env.BASE_API + "/user-panel/user-address/"+id , {
        headers:{
            Authorization: "Bearer " + getCookie("Authorization")
        }
    }).then((res)=>{
        success("اطلاعات با موفقیت حذف شد")
        dispatch(renderUserAddrress())
        closeModal()
    }).catch((err)=>{
        console.log(err);
    })
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
          className="absolute bg-white bottom-0 right-0 sm:inset-0 sm:m-auto w-full rounded-t-3xl sm:rounded-3xl py-16 flex flex-col items-center gap-10 px-9 sm:max-w-[560px] h-fit"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <span className="text-sm sm:text-base font-medium">
            آیا از حذف این مورد اطمینان دارید ؟
          </span>
          <div className="flex items-center gap-9 w-full justify-center">
            <button
              className="text-[#FEFEFE] text-sm font-medium flex items-center justify-center bg-[#F66B34] rounded-lg py-3 w-32"
              onClick={()=>closeModal()}
            >
              انصراف
            </button>
            <button className="text-[#F58052] text-sm font-medium flex items-center justify-center border border-[#F66B34] rounded-lg py-3 w-32" onClick={deleteHandler}>
              تایید
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default DeleteModal;
