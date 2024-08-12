import React from "react";

const SelectOption = (props) => {
  return (
    <div className={"flex flex-col gap-4 items-start"}>
      <label
        className={"font-medium px-1 text-[#fefefe]"}
      >
        {props.title}
      </label>
      <select
        name={props.name}
        id={props.name}
        className={`border border-1 rounded-[8px] h-[48px] w-full bg-[#FEFEFE] outline-none ${props.className ? props.className : "pr-[50px]"}`}
      >
        <option selected="true" style={{ display: "none" }}></option>
        {props.data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
