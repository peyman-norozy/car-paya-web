import React from "react";

const SelectSearchInput = (props) => {
  const { value, onClick, label, search, placeholder } = props;
  return (
    <div
      className={
        "rounded-lg flex items-center border border-[#B0B0B0] p-[10px] text-[#3D3D3D] h-[2.5rem] mb-[1rem] relative"
      }
    >
      <input
        // ref={cityRef}
        value={value}
        id={"city"}
        placeholder={placeholder}
        type={"text"}
        className={"w-full h-full text-14 outline-none text-[#3D3D3D]"}
        onClick={onClick}
      />
      {search && <i className={"cc-arrow-down"} />}
      <label
        htmlFor={"city"}
        className={
          "text-[#454545] text-14 absolute top-[-30%] bg-white right-[10px] px-1"
        }
      >
        {" "}
        {label} <span className={"text-RED_400"}> * </span>
      </label>
      {/*<ul*/}
      {/*    ref={cityRef}*/}
      {/*    className={`${isSelected ? cityRef.current.scrollHeight + "px px-[12px] py-2" : "h-0"}  shadow-[0_0_12px_rgba(226,226,226,0.8)] bg-white absolute bottom-[-50px] right-0 w-full overflow-scroll max-h-[10rem]`}*/}
      {/*>*/}
      {/*    {cityData.map((item, index) => (*/}
      {/*        <li*/}
      {/*            className={"py-[6px] pr-[12px] hover:bg-BLUE_100 rounded-lg"}*/}
      {/*            onClick={selectCityHandler}*/}
      {/*            key={index}*/}
      {/*        >*/}
      {/*            {item.name}*/}
      {/*        </li>*/}
      {/*    ))}*/}
      {/*</ul>*/}
    </div>
  );
};

export default SelectSearchInput;
