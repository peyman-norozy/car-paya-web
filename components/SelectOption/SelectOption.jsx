import React from "react";

const SelectOption = (props) => {
  return (
    <div className={"relative"}>
      <select
        name={props.name}
        id={props.name}
        className={`border border-1 border-[#B0B0B0] rounded-[8px] h-[48px] w-full bg-white outline-none ${props.className ? props.className : "pr-[50px]"}`}
      >
        <option selected="true" style={{ display: "none" }}></option>

        {props.data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
      <label
        className={"text-[12px] absolute top-[-9px] right-[10px] px-1 bg-white"}
      >
        {props.title}
      </label>
    </div>
  );
};

export default SelectOption;
