import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  setRecordModalCreateState,
  setRecordModalState,
} from "@/store/HandleSlice";
import React from "react";
import Button from "@/components/Button";
import RecordModalCreatedCard from "@/components/cards/RecordModalCreatedCard";

const m = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const RecordModal = () => {
  const dispatch = useDispatch();
  const closeRecordModalHandler = () => {
    dispatch(setRecordModalState(false));
  };

  const addRecordHandler = () => {
    dispatch(setRecordModalCreateState(true));
    dispatch(setRecordModalState(false));
  };

  return (
    <div className="fixed w-full h-full bg-[#ffffff69] inset-0 m-auto z-[99999]">
      <div className="fixed w-[90%] h-[90%] bg-white shadow-[0_0_6px_0_rgba(177,177,177,1)] inset-0 top-[-10px] m-auto rounded-10">
        <div>
          <Image
            src={"/assets/icons/close 1.svg"}
            className="m-2 cursor-pointer"
            alt={"close icon"}
            width={24}
            height={24}
            onClick={closeRecordModalHandler}
          />
        </div>
        <div className="flex flex-col">
          <div className="pr-[60px] pt-[10px]">
            <Button
              type="button"
              class_name="flex items-center gap-2 bg-[#d52826] text-white px-[20px] py-[5px] rounded-5 w-[160px]"
              on_click={addRecordHandler}
            >
              <span>افزودن سابقه</span>
              <span className="text-20">+</span>
            </Button>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <ul className="size800:flex hidden justify-between px-4 py-2 size1190:text-16 text-14 text-stone-800 rounded-10">
              <li className="font-bold flex-1 text-center">تاریخ</li>
              <li className="font-bold flex-1 text-center">
                کیلومتر فعلی خودرو
              </li>
              <li className="font-bold flex-1 text-center"></li>
              <li className="font-bold flex-1 text-center"></li>
              <li className="font-bold flex-1 text-center"></li>
              <li className="font-bold flex-1 text-center"></li>
            </ul>
            <div
              className={
                "h-[calc(100vh-250px)] overflow-y-auto flex flex-col gap-4 px-8"
              }
            >
              {m.map((item, index) => (
                <RecordModalCreatedCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordModal;
