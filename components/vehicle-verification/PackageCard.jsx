import React, { useState } from "react";

const PackageCard = (props) => {
  const { title, id, isSelected, onClick, options, price } = props;
  console.log(props);
  const [optionsIsOpen, setOptionsIsOpen] = useState(true);

  const openOptionHandler = () => {
    setOptionsIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className={
        "p-[0.75rem] size752:p-[1.5rem] border border-[#848484] rounded-lg flex flex-col gap-3 "
      }
    >
      <div
        className={"flex  items-center justify-between cursor-pointer"}
        onClick={onClick}
      >
        <div className={"flex items-center gap-2 justify-center "}>
          <div
            className={
              "rounded-[50%] border border-black w-[24px] h-[24px] flex items-center justify-center"
            }
          >
            <div
              className={`rounded-[50%] bg-BLUE_600 w-[16px] h-[16px] transition-all duration-500 ${isSelected === id ? "scale-1" : "scale-0"}`}
            ></div>
          </div>
          <h6 className={"font-medium text-14 size752:text-16"}>{title}</h6>
        </div>
        <p className={"text-BLUE_600 text-14 size752:text-16"}>
          {price.toLocaleString()} تومان
        </p>
      </div>
      {options &&
        options.map((item, index) => (
          <div key={index}>
            <div
              onClick={openOptionHandler}
              className={"flex items-center justify-between cursor-pointer"}
            >
              <div className={"flex items-center gap-2 justify-center "}>
                <p>-</p>
                <h6
                  className={
                    "font-medium text-12 size752:text-14 text-[#303030]"
                  }
                >
                  {item.label}
                </h6>
              </div>
              <i className={"cc-arrow-down"} />
            </div>
            {optionsIsOpen && (
              <div
                className={"p-[12px] text-12 text-gray-500"}
                dangerouslySetInnerHTML={{ __html: item.value }}
              ></div>
            )}
          </div>
        ))}
    </div>
  );
};

export default PackageCard;
