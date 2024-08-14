import RedChevron from "@/components/RedChevron";
import { useEffect, useRef, useState } from "react";
import Input from "@/components/Input";
import SelectSearchInputCard from "@/components/cards/SelectSearchInputCard";

const SelectSearchInput = (props) => {
  const [newHeight, setNewHeight] = useState(false);
  const [newOption, setNewOption] = useState("");
  const [newFilterOptions, setNewFilterOptions] = useState([]);
  const [newOptionId, setNewOptionId] = useState(-1);
  const inputRef = useRef();
  const optionsRef = useRef();
  const setHeightHandler = () => {
    if(!props.disabledSelectOption){
      setNewHeight((preveState) => !preveState);
    }else{
      return null
    }
  };

  const searchChangeHandler = (event) => {
    const searchArray = props.data.filter((item) => {
      return item.title.search(event.target.value) !== -1;
    });
    setNewFilterOptions(searchArray);
  };

  useEffect(() => {
    const closePopUp = (event) => {
      if (event.target.offsetParent === optionsRef.current) {
        return "";
      } else if (event.target.offsetParent !== inputRef.current) {
        setNewHeight(false);
      }
    };

    document.addEventListener("click", closePopUp);
    return () => {
      document.removeEventListener("click", closePopUp);
    };
  }, []);

  useEffect(() => {
    setNewFilterOptions(props.data);
    if (props.pageType !== "edit") {
      setNewOption(props.placeholder);
    }
  }, [props.data]);

  useEffect(() => {
    if (props.newReset === true) {
      setNewOption(props.placeholder);
    }
  }, [props.newReset, props.placeholder]);

  useEffect(() => {
    if (props.pageType === "edit") {
      const editId = props.editId;
      const editTitle = props.editTitle;
      // if (editId && editTitle) {
      setNewOption(editTitle);
      setNewOptionId(editId);
      // }
    }
  }, [props.editId, props.editTitle, props.pageType]);

  return (
    <div className={`flex flex-col ${props.lable?"gap-4":""} h-full`}>
      <span className={`inline-block px-2 text-[#FEFEFE] top-[-9px] right-[10px] font-bold ${props.labelCalssName}`}>{props.lable}</span>
    <div
      className={`border rounded-5 ${props.className} bg-[#FEFEFE] w-full cursor-text relative ${props.disabledSelectOption&&"bg-[#F6F6F6]"}`}
      ref={inputRef}
    >
      <div className="z-20 h-full w-full flex items-center justify-center" onClick={setHeightHandler}>
        <span className={`text-12 inline-block font-medium ${props.disabledSelectOption&&"text-[#696969]"}`}>
          {props.newPlaque_1 ? props.newPlaque_1 : newOption}
        </span>
        {!props.disabledSelectOption&&!props.chevronDisabled&&
          <RedChevron
              custoCllasses={`absolute left-[4px] top-[16px] ${
                  props.chevronStyle
              } ${newHeight ? "rotate-[-90deg]" : "rotate-0"}`}
          />
        }
      </div>
      <div
        className={`transition-all shadow duration-700 overflow-hidden absolute w-full opacity-100 bg-[#eee] z-10 mt-[10px]  top-[24px] text-12 font-light ${
          newHeight ? "max-h-[240px]" : "max-h-0"
        }`}
        ref={optionsRef}
      >
        <div>
          <Input
            type={"text"}
            placeholder={"جستوجو"}
            className={`w-full outline-none pr-2 py-2 ${props.placeholderStyle}`}
            on_change={searchChangeHandler}
          />
        </div>
        <ul className={`overflow-y-scroll max-h-[208px]`}>
          {newFilterOptions&&newFilterOptions.length > 0 &&
            newFilterOptions.map((item, index) => {
              return (
                <SelectSearchInputCard
                  key={item + index}
                  item={item}
                  id={props.id}
                  imageid={item.image}
                  selected={newOptionId === item.id}
                  setNewOption={setNewOption}
                  setNewHeight={setNewHeight}
                  setNewOptionId={setNewOptionId}
                  onclick={props.onclick}
                />
              );
            })}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default SelectSearchInput;
