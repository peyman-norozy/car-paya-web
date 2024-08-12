import React from "react";

const ProfileEditeInput = (props) => {
  return (
    <div className={"flex flex-col items-start gap-4"}>
      <label
        className={"font-medium px-1 text-[#FEFEFE]"}
      >
        {props.title}
      </label>
      {/* <i
        className={`${props.icon} absolute text-[20px] top-[15px] right-[10px] border-l border-l-stone-500 pl-2`}
      /> */}
      <input
        type={"text"}
        name={props.name}
        id={props.id}
        className={`border border-1 bg-[#FEFEFE] rounded-[8px] h-[48px] w-full outline-none ${props.className ? props.className : "pr-[50px]"}`}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
      />
    </div>
  );
};

export default ProfileEditeInput;
