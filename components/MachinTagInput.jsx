import SelectSearchInput from "@/components/SelectSearchInput";
import Input from "@/components/Input";
import React, { useEffect, useState } from "react";
import { forceOnlyNumberInput } from "@/utils/function-utils";
import Image from "next/image";

const MachinTagInput = (props) => {
  const [newPlaque_1_editId, setNewPlaque_1_editId] = useState(-1);
  const carTagData = {
    placeholder: "",
    id: "productYearDataSelected",
    options: [
      { title: "الف", id: 1 },
      { title: "ب", id: 2 },
      { title: "پ", id: 3 },
      { title: "ت", id: 4 },
      { title: "ث", id: 5 },
      { title: "ج", id: 6 },
      { title: "ت", id: 7 },
      { title: "ح", id: 8 },
      { title: "خ", id: 9 },
      { title: "د", id: 10 },
      { title: "ذ", id: 11 },
      { title: "ر", id: 12 },
      { title: "ز", id: 13 },
      { title: "ژ", id: 14 },
      { title: "س", id: 15 },
      { title: "ش", id: 16 },
      { title: "ص", id: 17 },
      { title: "ض", id: 18 },
      { title: "ط", id: 19 },
      { title: "ظ", id: 20 },
      { title: "ع", id: 21 },
      { title: "غ", id: 22 },
      { title: "ف", id: 23 },
      { title: "ق", id: 24 },
      { title: "ک", id: 25 },
      { title: "گ", id: 26 },
      { title: "ل", id: 27 },
      { title: "م", id: 28 },
      { title: "ن", id: 29 },
      { title: "و", id: 30 },
      { title: "ه", id: 31 },
      { title: "ی", id: 32 },
    ],
  };
  const selectSearchOptionHandler = (event) => {
    if (event.target.id === "carTagOption") {
      props.setNewPlaque_1(event.target.innerText);
    }
  };

  const selectJustNumberHandler = (event) => {
    forceOnlyNumberInput(event);
    console.log(event.target.id);
    const id = event.target.id;
    if (id === "plaque_0") {
      props.setNewPlaque_0(event.target.value);
    } else if (id === "plaque_2") {
      props.setNewPlaque_2(event.target.value);
    } else if (id === "plaque_3") {
      props.setNewPlaque_3(event.target.value);
    }
  };

  useEffect(() => {
    if (props.pageType === "edit" && props.editPlaqueData !== undefined) {
      props.setNewPlaque_0(props.editPlaqueData[0]);
      props.setNewPlaque_1(props.editPlaqueData[1]);
      props.setNewPlaque_2(props.editPlaqueData[2]);
      props.setNewPlaque_3(props.editPlaqueData[3]);
    }
  }, [props.editPlaqueData]);

  useEffect(() => {
    if (props.pageType === "edit") {
      const plaque_1_editId = carTagData.options.filter(
        (item) => item.title === props.newPlaque_1,
      );
      if (plaque_1_editId.length > 0) {
        setNewPlaque_1_editId(plaque_1_editId[0].id);
      }
    }
  }, [props.newPlaque_1, carTagData.options]);

  return (
    <div className="flex border-2 border-[#d1d1d1] rounded-5 h-[40px]">
      <div className="flex flex-col w-full border-l-2 border-[#d1d1d1] items-center justify-center">
        <span className="text-10">ایران</span>
        <Input
          type="text"
          value={props.newPlaque_3}
          className="text-center text-12 outline-none border border-[#aaa] w-[90%] h-[90%] rounded-5"
          on_change={selectJustNumberHandler}
          id={"plaque_3"}
          name={"plaque_3"}
          placeholder={"55"}
          maxlength="2"
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <Input
          type="text"
          value={props.newPlaque_2}
          plaqueid="Plaque"
          className="text-center text-12 outline-none border border-[#aaa] w-[90%] h-[90%] rounded-5"
          on_change={selectJustNumberHandler}
          id={"plaque_2"}
          name={"plaque_2"}
          placeholder={"555"}
          maxlength="3"
        />
      </div>
      <div className="w-[220px] flex justify-center items-center">
        <SelectSearchInput
          data={carTagData.options}
          newPlaque_1={props.newPlaque_1}
          editId={newPlaque_1_editId}
          pageType={props.pageType}
          placeholder={<span className="text-[#aaa]">الف</span>}
          onclick={selectSearchOptionHandler}
          id={"carTagOption"}
          // newReset={newReset}
          placeholderStyle={"placeholder:text-10 pr-[4px]"}
          chevronStyle={"top-[9px]"}
          className={"border border-[#aaa] w-[100%] h-[90%] rounded-5"}
        />
      </div>
      <div className="flex w-full justify-center items-center">
        <Input
          type="text"
          value={props.newPlaque_0}
          plaqueid="Plaque"
          className="text-center text-12 outline-none border border-[#aaa] w-[90%] h-[90%] rounded-5"
          on_change={selectJustNumberHandler}
          id={"plaque_0"}
          name={"plaque_0"}
          placeholder={"55"}
          maxlength="2"
        />
      </div>
      <div className="rounded-l-[5px] overflow-hidden">
        <Image
          src="/assets/icons/machinTag.svg"
          alt={"machine tag"}
          width={84}
          height={40}
        />
      </div>
    </div>
  );
};

export default MachinTagInput;
