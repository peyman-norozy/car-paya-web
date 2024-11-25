import React from "react";

const DitailModal = (props) => {
  const closeModalHandler = () => {
    props.setEditModalIsOpen(false);
  };
  return (
    <>
      <div
        className={
          "bg-[#4c4c4caa] opacity-50 fixed right-0 top-0 w-full h-full z-[10000]"
        }
      ></div>
      <div
        className={
          "fixed m-auto inset-0 z-[10000] w-fit h-fit rounded-8 overflow-hidden"
        }
      >
        <div
          className={"bg-[#F6FBFF] p-[10px] flex justify-between items-center"}
        >
          <span className={"text-14"}>خدمات نمایندگی محمدی</span>
          <i
            className={"cc-close-circle text-24"}
            onClick={closeModalHandler}
          />
        </div>
        <ul
          className={
            "grid grid-cols-2 gap-x-[86px] gap-y-4 w-full bg-white px-5 pt-2 pb-3 text-[#47505D] text-14 font-medium"
          }
        >
          {props.item.map((item) => {
            return item.value ? (
              <li key={item.key} className={"flex items-center gap-2"}>
                <i
                  className={
                    "cc-tick text-[#24D34B] bg-[#24D34B40] w-[17px] h-[17px] rounded-full text-14 flex items-center justify-center"
                  }
                />
                <span className={"lg:text-14 text-12"}>{item.label}</span>
              </li>
            ) : (
              <li key={item.key} className={"flex items-center gap-2"}>
                <i
                  className={
                    "cc-add rotate-45 text-[#DB3737] bg-[#DC2A2A66] w-[17px] h-[17px] rounded-full text-10 flex items-center justify-center"
                  }
                />
                <span className={"lg:text-14 text-12"}>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DitailModal;
