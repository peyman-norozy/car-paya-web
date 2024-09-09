import React, { useEffect } from "react";
import Portal from "@/components/Portal/Portal";
import { deleteData, getData } from "@/utils/api-function-utils";

const AddressDeleteModal = ({ isOpen, onClose, title, id, timeData }) => {
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

  const deleteAddressHandler = async () => {
    const deleteAddress = await deleteData(`/user-panel/user-address/${id}`);
    if (deleteAddress.status === 200) {
      onClose();
      timeData();
    }
  };

  const modalContainer = document.getElementById("modal-root"); // Ensure you have this div in your index.html

  return (
    <Portal container={modalContainer}>
      <div
        className={`${!isOpen ? "hidden" : "fixed"} inset-0 h-full w-full bg-[#4c4c4caa] z-[20000] transition-all`}
        onClick={() => onClose()}
      ></div>
      <div
        className={`bg-[#eee] fixed inset-0 m-auto w-[400px] ${isOpen ? "h-[200px]" : "h-0"} transition-all duration-500 z-[200000] overflow-hidden rounded-10`}
      >
        <div className={"p-6 h-full flex flex-col justify-between"}>
          <p>
            آیا از حذف <span>{title}</span> مطمئن هستید؟
          </p>
          <div className={"flex items-center gap-2"}>
            <button
              className={
                "bg-[#5D697A] text-[#FEFEFE] w-[90px] h-[30px] text-14 rounded-5"
              }
              onClick={() => onClose()}
            >
              انصراف
            </button>
            <button
              className={
                "bg-[#F66B34] text-[#FEFEFE] w-[90px] h-[30px] text-14 rounded-5"
              }
              onClick={deleteAddressHandler}
            >
              حذف
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default AddressDeleteModal;
