import RedChevron from "@/components/RedChevron";
import { useEffect, useRef, useState } from "react";
import SelectInputCard from "@/components/cards/SelectInputCard";

const SelectInput = (props) => {
  const [newHeightOptions, setNewHeightOptions] = useState(false);
  const [newOption, setNewOption] = useState(props.data.placeholder);
  const inputRef = useRef();
  const optionsRef = useRef();

  const setHeightHandler = () => {
    setNewHeightOptions((preveState) => !preveState);
  };

  useEffect(() => {
    const closePopUp = (event) => {
      if (event.target.offsetParent === optionsRef.current) {
        return "";
      } else if (event.target.offsetParent !== inputRef.current) {
        setNewHeightOptions(false);
      }
    };

    document.addEventListener("click", closePopUp);
    return () => {
      document.removeEventListener("click", closePopUp);
    };
  }, []);

  useEffect(() => {
    if (props.newReset === true) {
      setNewOption("انتخاب کنید");
    }
  }, [props.newReset]);

  return (
    <div
      className={`border border-[#d1d1d1] rounded-5 ${props.className} w-full cursor-text relative`}
      ref={inputRef}
    >
      <div className="z-20 h-full flex items-center" onClick={setHeightHandler}>
        <span className="text-12 inline-block mr-2 mt-1">{newOption}</span>
        <RedChevron
          custoCllasses={`absolute left-[4px] top-[12px] ${
            newHeightOptions ? "rotate-[-90deg]" : "rotate-0"
          }`}
        />
      </div>
      <ul
        className={`transition-all duration-700 absolute w-full opacity-100 bg-[#eee] z-10 mt-[10px] overflow-hidden top-[24px] text-12 font-light ${
          newHeightOptions ? "max-h-[240px]" : "max-h-0"
        }`}
        ref={optionsRef}
      >
        {props.data.options.map((item, index) => (
          <SelectInputCard
            key={item + index}
            item={item}
            id={props.id}
            setNewHeightOptions={setNewHeightOptions}
            setNewOption={setNewOption}
            onclick={props.onclick}
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectInput;
