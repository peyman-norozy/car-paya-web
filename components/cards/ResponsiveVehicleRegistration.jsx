import React, { useState } from "react";
import VehicleRegistration from "@/components/VehicleRegistration";
import Image from "next/image";

const ResponsiveVehicleRegistration = () => {
  const [RegistrationState, setRegistrationState] = useState(false);
  const vehicleRegistrationHandler = () => {
    console.log("pe");
    setRegistrationState((prev) => !prev);
  };
  return (
    <>
      <div
        className={
          "border mx-[20px] px-4 py-2 rounded-5 text-stone-500 flex items-center justify-between"
        }
        onClick={vehicleRegistrationHandler}
      >
        <span> انتخاب خودرو شما</span>
        <Image
          src={"/assets/icons/angle-right.svg"}
          alt={"icon"}
          width={20}
          height={20}
          className={"rotate-90"}
        />
      </div>
      {RegistrationState && (
        <div className={"absolute top[200px] h-[20px] bg-red-500"}>
          <VehicleRegistration
            style={
              "right-[20px] shadow-[0_0_6px_0_rgba(177,177,177,1)] w-[220px]"
            }
          />
        </div>
      )}
    </>
  );
};

export default ResponsiveVehicleRegistration;
