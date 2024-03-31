import React, { useState } from "react";
import SelectVehicleTab from "../SelectVehicleTab";
import SearchInput from "../SearchInput";
import car from "@/public/assets/images/hoeny-Hyundai-car.png";
import motor from "@/public/assets/images/motor.png";
import ShowMyVehicles from "../ShowMyVehicles";

const SelectVehicleBox = (props) => {
  const [isClicked, setIsClicked] = useState(0);

  const myVehicleData = [
    { src: motor, name: "i10" },
    { src: car, name: "i10" },
  ];

  return (
    <div className="shadow-[0_0_6px_0_rgba(177,177,177,1)] rounded-10">
      <div className="w-[95%] m-auto py-[1rem]">
        <h1 className="text-text_gray w-full text-center mb-[0.5rem]">
          {props.title}
        </h1>
        <div className="mb-[1.5rem]">
          <SelectVehicleTab
          className='flex items-center justify-center gap-[0.5rem]'
            tabTitle={props.tabTitle}
            setIsClicked={setIsClicked}
            isClicked={isClicked}
          />
        </div>
        <h1 className="text-text_gray w-full text-center mb-[1.25rem]">
          انتخاب برند
        </h1>
        <div className="mb-[1.5rem]">
          <SearchInput placeholder="جستجو برند، مدل، تیپ" />
        </div>
        <ShowMyVehicles
          data={isClicked === props.myTehicleTab ? myVehicleData : []}
        />
      </div>
    </div>
  );
};

export default SelectVehicleBox;
