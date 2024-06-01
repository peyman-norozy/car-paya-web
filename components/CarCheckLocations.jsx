import React, { useState } from "react";
import GreenCheckInput from "./GreenCheckInput";
import Map from "./Map";
import MapSelection from "./MapSelection";

const CarCheckLocations = (props) => {
  const {
    isSelected,
    on_click,
    id,
    title,
    name,
    call,
    code,
    address,
    latitude,
    longitude,
  } = props;
  const [location, setLocation] = useState();
  if (latitude && longitude) {
    setLocation(latitude.toString() + "," + longitude.toString());
  }
  return (
    <div
      className={`p-[1rem] flex flex-col gap-[0.5rem] size900:gap-0 size900:flex-row justify-between rounded-10 border shadow-[0_0_10px_0_rgba(209,209,209,0.3)] cursor-pointer ${
        isSelected === id && ""
      }`}
      onClick={on_click}
    >
      <div>
        <div className="flex items-center gap-[0.25rem] mb-[1.5rem]">
          <GreenCheckInput
            isSelected={isSelected === id}
            class_name="rounded-[50%] w-[1.35rem] h-[1.35rem]"
          />
          <h2 className="text-18 text-BLUE_600">{title}</h2>
        </div>
        <ul className="text-14 flex flex-col gap-[0.5rem]">
          <li>
            <span className="font-bold">نام و نام خانوادگی مسئول:</span>
            {name}
          </li>
          <li>
            <span className="font-bold">کد نمایندگی:</span>
            {code}
          </li>
          <li>
            <span className="font-bold">آدرس:</span>
            {address}
          </li>
        </ul>
      </div>
      <div className="h-[150px] w-full size900:w-[360px] overflow-hidden rounded-[0.5rem]">
        <div className="h-full w-full">
          <MapSelection setLocation={null} location={location} />
        </div>
      </div>
    </div>
  );
};

export default CarCheckLocations;
