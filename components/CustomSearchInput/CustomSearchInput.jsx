import React, { useEffect, useState } from "react";

const CustomSearchInput = (props) => {
  const {
    title,
    labelStyle,
    inputStyle,
    iconStyle,
    placeHolder,
    value,
    optionContainerStyle,
    optionStyle,
    options,
    onClick,
    deleteInputValueHandler,
  } = props;
  const [optionAccordionState, setOptionAccordionState] = useState(false);
  const [preventFirstRender, setPreventFirstRender] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const windowClick = (event) => {
      // Close the dropdown if clicking outside the input
      if (!event.target.closest(`#${value}`)) {
        setOptionAccordionState(false);
      }
    };
    window.addEventListener("click", windowClick);
    return () => {
      window.removeEventListener("click", windowClick);
    };
  }, []);

  useEffect(() => {
    console.log(selectedOption);
    setPreventFirstRender(true);
    preventFirstRender ? onClick(selectedOption) : null;
  }, [selectedOption]);

  const inputClickHandler = () => {
    setOptionAccordionState((prev) => !prev);
  };

  const optionClickHandler = (event, value) => {
    setSearchInputValue(event.target.innerText);
    setSelectedOption(value);
    // onClick(value);
  };

  const deleteInputValue = (slug) => {
    setSearchInputValue("");
    deleteInputValueHandler(slug);
  };

  console.log(value);

  return (
    <div className={"flex flex-col gap-2"}>
      <label className={labelStyle}>{title}</label>
      <div className={"relative"}>
        <input
          type={"text"}
          autoComplete={"off"}
          id={value}
          value={searchInputValue}
          className={inputStyle}
          placeholder={placeHolder}
          onClick={inputClickHandler}
        />
        <i
          className={`${iconStyle} transition-all duration-500 ${optionAccordionState ? "rotate-180" : "rotate-0"}`}
          id={value}
          onClick={inputClickHandler}
        />
        {searchInputValue && (
          <span
            className={"absolute top-2.5 left-9 cursor-pointer"}
            onClick={() => {
              setSelectedOption("");
              deleteInputValue(value);
            }}
          >
            X
          </span>
        )}
        <ul
          className={`${optionContainerStyle} ${optionAccordionState ? "h-[90px]" : "h-0"}`}
        >
          {options?.map((item) => {
            console.log(item.value, selectedOption);
            return (
              <li
                key={item.value}
                className={`${optionStyle} ${item.value === selectedOption ? "bg-red-500" : ""}`}
                onClick={(event) => optionClickHandler(event, item.value)}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CustomSearchInput;
