import SelectSearchInput from "@/components/SelectSearchInput";
import Input from "@/components/Input";
import React, {useEffect, useState} from "react";
import {forceOnlyNumberInput} from "@/utils/function-utils";
import Image from "next/image";

const MachinTagInput = (props) => {
    const [newPlaque_1_editId, setNewPlaque_1_editId] = useState(-1);
    const carTagData = {
        placeholder: "",
        id: "productYearDataSelected",
        options: [
            {title: "الف", id: 1},
            {title: "ب", id: 2},
            {title: "پ", id: 3},
            {title: "ت", id: 4},
            {title: "ث", id: 5},
            {title: "ج", id: 6},
            {title: "ت", id: 7},
            {title: "ح", id: 8},
            {title: "خ", id: 9},
            {title: "د", id: 10},
            {title: "ذ", id: 11},
            {title: "ر", id: 12},
            {title: "ز", id: 13},
            {title: "ژ", id: 14},
            {title: "س", id: 15},
            {title: "ش", id: 16},
            {title: "ص", id: 17},
            {title: "ض", id: 18},
            {title: "ط", id: 19},
            {title: "ظ", id: 20},
            {title: "ع", id: 21},
            {title: "غ", id: 22},
            {title: "ف", id: 23},
            {title: "ق", id: 24},
            {title: "ک", id: 25},
            {title: "گ", id: 26},
            {title: "ل", id: 27},
            {title: "م", id: 28},
            {title: "ن", id: 29},
            {title: "و", id: 30},
            {title: "ه", id: 31},
            {title: "ی", id: 32},
        ],
    };
    const selectSearchOptionHandler = (event) => {
        if (event.target.id === "carTagOption") {
            props.setNewPlaque_1(event.target.innerText);
        }
    };

    const selectJustNumberHandler = (event) => {
        forceOnlyNumberInput(event);
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
        <div className="flex rounded-5 h-[48px] relative bg-[#FEFEFE]">
            <div className="flex flex-col w-full items-center justify-center">
                <Image src={"/assets/icons/iran.svg"} alt={"iran icon"} width={30} height={20} className="mt-1"/>
                <Input
                    type="text"
                    value={props.newPlaque_3 !== "null" ? props.newPlaque_3 : ""}
                    className="text-center text-12 outline-none w-[90%] h-[90%] rounded-5 mb-1 border"
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
                    value={props.newPlaque_2 !== "null" ? props.newPlaque_2 : ""}
                    plaqueid="Plaque"
                    className="text-center text-12 outline-none border w-[90%] h-[90%] rounded-5"
                    on_change={selectJustNumberHandler}
                    id={"plaque_2"}
                    name={"plaque_2"}
                    placeholder={"555"}
                    maxlength="3"
                />
            </div>
            <div className="w-[220px] mt-1">
                <SelectSearchInput
                    data={carTagData.options}
                    newPlaque_1={props.newPlaque_1 !== "null" ? props.newPlaque_1 : ""}
                    editId={newPlaque_1_editId}
                    pageType={props.pageType}
                    placeholder={<span className="text-[#aaa]">الف</span>}
                    onclick={selectSearchOptionHandler}
                    id={"carTagOption"}
                    // newReset={newReset}
                    placeholderStyle={"placeholder:text-10 pr-[4px]"}
                    chevronStyle={"top-[9px]"}
                    chevronDisabled={true}
                    className={"border w-[100%] h-[90%] rounded-5"}
                />
            </div>
            <div className="flex w-full justify-center items-center">
                <Input
                    type="text"
                    value={props.newPlaque_0 !== "null" ? props.newPlaque_0 : ""}
                    plaqueid="Plaque"
                    className="text-center text-12 outline-none border w-[90%] h-[90%] rounded-5"
                    on_change={selectJustNumberHandler}
                    id={"plaque_0"}
                    name={"plaque_0"}
                    placeholder={"55"}
                    maxlength="2"
                />
            </div>
            <div className="overflow-hidden w-[230px] h-[48px] rounded-l-5">
                <Image
                    src="/assets/icons/plaqueFrame.svg"
                    alt={"machine tag"}
                    className={"w-full h-full"}
                    width={240}
                    height={48}
                />
            </div>
            {/* <span className="inline-block bg-white px-2 font-light text-[12px] text-[#FEFEFE]">پلاک</span> */}
        </div>
    );
};

export default MachinTagInput;
