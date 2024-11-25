import { API_PATHS } from "@/configs/routes.config";
import { deleteData } from "@/utils/api-function-utils";
import { success } from "@/utils/function-utils";
import React from "react";

const DeleteAddressModal = (props) => {
  const exiteClcikHandler = () => {
    props.setDeleteModalState(false);
  };

  const deleteClickHandler = async () => {
    const deleteResponse = await deleteData(
      API_PATHS.DASHBOARDUSERADDRESS + "/" + props.id
    );

    if (deleteResponse.status === 200) {
      props.getAddressFetchData();
      props.setDeleteModalState(false);
      success(deleteResponse.data.message);
    }
  };

  return (
    <>
      <div
        className={
          "fixed top-0 right-0 z-[9999] w-full h-full bg-stone-600 bg-opacity-30"
        }
      >
        <div className="bg-white absolute inset-0 m-auto w-[464px] h-[213px] flex flex-col justify-around items-center p-[28px] rounded-10">
          <i
            className={"cc-close-circle text-[20px] self-end cursor-pointer"}
            onClick={exiteClcikHandler}
          />
          <p>{props.title}</p>
          <section className={"flex gap-[4px]"}>
            <button
              type={"button"}
              className={
                "w-[121px] h-[44px] border border-[#E73C33] rounded-5 text-[#E73C33]"
              }
              onClick={exiteClcikHandler}
            >
              انصراف
            </button>
            <button
              type={"button"}
              className={"bg-[#E73C33] w-[121px] h-[44px] text-white rounded-5"}
              onClick={deleteClickHandler}
            >
              حذف
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default DeleteAddressModal;
