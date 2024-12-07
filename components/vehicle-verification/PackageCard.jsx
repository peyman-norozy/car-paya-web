import React, { useState } from "react";

const PackageCard = (props) => {
  const { title, id, isSelected, onClick, options, price, discounted_price } =
    props;
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);

  const openOptionHandler = () => {
    setOptionsIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`p-[0.75rem] size752:p-[1.5rem] rounded-lg flex flex-col gap-3 shadow-[0_0_4px_0_rgba(207,207,207,0.7)] ${isSelected === id ? "border border-[#F58052]" : ""}`}
    >
      <div
        className={"flex  items-center justify-between cursor-pointer"}
        onClick={onClick}
      >
        <div className={"flex items-center gap-2 justify-center "}>
          <div
            className={
              "rounded-[50%] border-2 border-[#F58052] size-5 flex items-center justify-center"
            }
          >
            <div
              className={`rounded-[50%] bg-[#F58052] size-[10px] transition-all duration-500 ${isSelected === id ? "scale-1" : "scale-0"}`}
            ></div>
          </div>
          <h6 className={"text-14 size752:text-16 text-[#010101]"}>{title}</h6>
        </div>
        <div className="flex items-center gap-1">
          <p
            className={
              "text-[#60ABEC] font-medium text-xs size752:text-16 line-through"
            }
          >
            {price.toLocaleString()} تومان
          </p>
          <p className={"text-[#1E67BF] text-14 size752:text-16 font-medium"}>
            {discounted_price.toLocaleString()} تومان
          </p>
        </div>
      </div>
      {options &&
        options.map((item, index) => (
          <div key={index}>
            <div
              onClick={openOptionHandler}
              className={"flex items-center justify-between cursor-pointer"}
            >
              <div className={"flex items-center gap-2 justify-center "}>
                <i className="cc-tick text-[#5D5D5D]" />
                <h6
                  className={
                    "font-medium text-12 size752:text-14 text-[#454545]"
                  }
                >
                  {item.label}
                </h6>
              </div>
              <i className={"cc-arrow-down"} />
            </div>
            {optionsIsOpen && (
              <div
                className={"p-[12px] text-12 text-[#4F4F4F]"}
                dangerouslySetInnerHTML={{ __html: item.value }}
              ></div>
            )}
          </div>
        ))}
    </div>
  );
};

export default PackageCard;
