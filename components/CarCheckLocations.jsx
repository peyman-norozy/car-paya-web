import React from "react";
import GreenCheckInput from "./GreenCheckInput";
import Map from "./Map";
import MapSelection from "./MapSelection";

const CarCheckLocations = (props) => {
  const { isSelected, on_click, id, title, name, call, code , address } =
    props;
  return (
    <div
      className={`p-[1rem] flex flex-col gap-[0.5rem] size900:gap-0 size900:flex-row justify-between rounded-10 shadow-[0_0_7px_0_rgba(0,0,0,0.5)] border cursor-pointer ${
        isSelected === id && "border-green-500"
      }`}
      onClick={on_click}
    >
      <div>
        <div className="flex items-center gap-[0.25rem] mb-[1.5rem]">
          <GreenCheckInput
            isSelected={isSelected === id}
            class_name="rounded-[50%] w-[1.35rem] h-[1.35rem]"
          />
          <h2 className="text-18">{title}</h2>
        </div>
        <ul className="text-14 flex flex-col gap-[0.5rem]">
            <li><span className="font-bold">نام و نام خانوادگی مسئول:</span>{name}</li>
            <li><span className="font-bold">شماره تماس:</span>{call}</li>
            <li><span className="font-bold">کد نمایندگی:</span>{code}</li>
            <li><span className="font-bold">آدرس:</span>{address}</li>
        </ul>
      </div>
      <div className="h-[150px] w-full size900:w-[360px] overflow-hidden rounded-[0.5rem]">
      <div className="h-full w-full">
      <MapSelection setLocation={null} />
    </div>
      </div>
    </div>
  );
};

export default CarCheckLocations;
