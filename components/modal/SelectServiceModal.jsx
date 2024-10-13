import React, { useRef } from "react";

const SelectServiceModal = (props) => {
  console.log(props.servicesData);
  return (
    <>
      <div
        className={`${props.servicesState ? "fixed top-0 right-0" : "hidden"} bg-[#4c4c4caa] w-screen h-screen z-[2000]`}
        onClick={() => props.setServicesState(false)}
      ></div>
      <div
        className={`transition-all duration-500 lg:w-[500px] w-screen bg-white h-[435px] fixed ${props.servicesState ? "lg:bottom-1/4 lg:right-[35%] bottom-0" : "bottom-[-450px] lg:right-[35%]"} z-[20000]`}
      >
        <div
          className={
            "bg-[#F6FBFF] flex justify-between items-center py-4 px-[18.5px]"
          }
        >
          <span className={"text-16 font-medium"}>انتخاب سرویس</span>
          <i
            className={"cc-close-circle text-[24px] cursor-pointer"}
            onClick={() => props.setServicesState(false)}
          />
        </div>
        <div
          className={`flex flex-wrap gap-6 overflow-y-scroll overflow-x-hidden max-h-[200px] py-4 px-[18.5px]`}
        >
          {props.servicesData?.map((item, index) => (
            <div
              key={index}
              className="checkbox-wrapper-42 flex items-center gap-1 min-w-[210px]"
            >
              <input
                id={item.value}
                type="checkbox"
                onChange={(e) => {
                  props.checkboxChangeHandler(item.value, e.target.checked);
                }}
              />
              <label className="cbx" htmlFor={item.value}></label>
              <label
                className="lbl line-clamp-1 select-none"
                htmlFor={item.value}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
        <div
          className={
            "shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] absolute bottom-0 right-0 left-0 py-4 px-10 flex justify-center items-center"
          }
        >
          <button
            className={
              "bg-[#F66B34] px-8 py-2 text-[#FEFEFE] rounded-[8px] text-14 w-full"
            }
            onClick={props.searchClickHandler}
          >
            اعمال فیلتر
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectServiceModal;
