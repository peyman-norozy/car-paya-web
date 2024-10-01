import React, { useEffect, useState } from "react";
import GreenCheckInput from "@/components/GreenCheckInput";

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
    disabled,
    inputMode,
  } = props;
  const [optionAccordionState, setOptionAccordionState] = useState(false);
  const [preventFirstRender, setPreventFirstRender] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
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

  const optionClickHandler = (index, innerText, value) => {
    setIsSelected(index);
    setSearchInputValue(innerText);
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
          disabled={disabled}
          inputMode={inputMode}
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
          className={`${optionContainerStyle} ${optionAccordionState ? "h-[300px]" : "h-0"}`}
        >
          {options?.map((item, index) => {
            console.log(item.value, selectedOption);
            // ${item.value === selectedOption ? "even:bg-green-500 odd:bg-green-500 text-white" : ""}
            return (
              <li
                key={item.value}
                className={`${optionStyle}`}
                onClick={(event) =>
                  optionClickHandler(index, item.label, item.value)
                }
              >
                <GreenCheckInput
                  isSelected={isSelected === index}
                  on_click={() =>
                    optionClickHandler(index, item.label, item.value)
                  }
                  class_name="rounded-[50%] cursor-pointer self-start"
                />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CustomSearchInput;
