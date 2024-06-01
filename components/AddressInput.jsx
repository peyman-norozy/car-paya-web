import React, { useEffect, useRef } from "react";

const AddressInput = (props) => {
  const inputRef = useRef();

  useEffect(() => {
    console.log(props.ItaratedAddress);
    if (props.pageType === "edite") {
      inputRef.current.value = props.editData ? props.editData : "";
      if (props.ItaratedAddress) {
        inputRef.current.value = props.ItaratedAddress;
      }
    } else {
      props.ItaratedAddress
        ? (inputRef.current.value = props.ItaratedAddress)
        : "";
    }
  }, [props.ItaratedAddress, props.editData, props.pageType]);
  return (
    <div className={`${props.containderClassName} relative`}>
      <i
        className={`${props.icon} absolute text-[20px] top-[15px] right-[10px] border-l border-l-stone-500 pl-2`}
      />
      <input
        type={props.type}
        name={props.name}
        ref={inputRef}
        id={props.id}
        className={`border border-1 border-[#B0B0B0] rounded-[8px] h-[48px] w-full outline-none ${props.icon ? "pr-[50px]" : "pr-[10px]"}`}
      />
      <label
        className={
          "text-[12px] absolute top-[-9px] right-[10px] px-1 bg-white flex items-center"
        }
      >
        {props.title}{" "}
        {props.star && (
          <span
            className={
              "inline-block text-red-500 text-[24px] absolute bg-white h-[20px] left-[-9px]"
            }
          >
            *
          </span>
        )}
      </label>
    </div>
  );
};

export default AddressInput;
