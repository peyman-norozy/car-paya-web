"use client";

import CreateVehicleModal from "@/components/panel/CreateVehicleModal";
import MyVehicleCard from "@/components/panel/MyVehicleCard";
import CarSelect from "@/components/public/CarSelect";
import VehiclePriceModal from "@/components/vehiclePrice/VehiclePriceModal";
import { API_PATHS } from "@/configs/routes.config";
import PanelContainer from "@/layouts/PanelContainer";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MyVehicle = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const [filteredVehicleData, srtFilteredVehicleData] = useState([]);
  const [display, setDispaly] = useState(false);
  const [asideStatus, setAsideStatus] = useState("car_city");
  const [carData, setCarData] = useState({});

  useEffect(() => {
    getMyVehicleData();
  }, []);

  async function getMyVehicleData() {
    const res = await getDataWithFullErrorRes("/user/my-vehicles");
    setVehicleData(res.data);
    srtFilteredVehicleData(res.data);
  }

  function filterChangeHandler(e) {
    if (e.target.value === "ALL") {
      srtFilteredVehicleData(vehicleData);
    } else {
      srtFilteredVehicleData(
        vehicleData.filter((item) => {
          return item.type === e.target.value;
        })
      );
    }
  }
  return (
    <PanelContainer>
      <div className="bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-[500px] flex flex-col gap-6 lg:gap-9 p-4 lg:p-12">
        <span className="text-[#0F0F0F] text-sm font-medium hidden lg:inline-block">
          وسیله نقلیه من
        </span>
        <div className="flex gap-2 items-center lg:hidden">
          <Link href={"/panel"} className="flex items-center">
            <i className="cc-arrow-right text-xl leading-3" />
          </Link>
          <span className="font-medium text-sm">پروفایل</span>
        </div>
        <div className="flex justify-between items-center">
          <select
            className="bg-inherit w-32 sm:w-40 text-[#0F0F0F] p-2 rounded-lg text-12 sm:text-16 shadow-[0_0_5px_0_rgba(160,160,160,0.7)] outline-none"
            onChange={filterChangeHandler}
          >
            <option value="ALL">همه وسایل نقلیه</option>
            <option value="CAR">ماشین</option>
            <option value="MOTOR">موتور</option>
            <option value="HEAVY_CAR">ماشین سنگین</option>
          </select>
          <div
            className="bg-inherit text-[#0F0F0F] p-2 rounded-lg text-12 sm:text-16 shadow-[0_0_5px_0_rgba(160,160,160,0.7)] flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setDispaly(true);
            }}
          >
            <i className="cc-add" />
            <span>افزودن وسیله نقلیه</span>
          </div>
        </div>
        <div className="grid grid-cols-1 size830:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredVehicleData.map((item, index) => (
            <MyVehicleCard
              item={item}
              key={index}
              getMyVehicleData={getMyVehicleData}
            />
          ))}
        </div>
        {display && (
          <div
            className="fixed w-screen h-screen flex items-center justify-center top-0 right-0 bg-[#0000004d] z-[10000]"
            onClick={() => {
              setDispaly(false);
            }}
          >
            <div
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              {(() => {
                switch (asideStatus) {
                  case "car_city":
                    return (
                      <CreateVehicleModal
                        buttonTitle={"تخمین قیمت"}
                        onClick={() => {
                          console.log(carData);
                        }}
                        setAsideStatus={setAsideStatus}
                        setModalClickState={() => {}}
                        setCarData={setCarData}
                        carData={carData}
                        setDispaly={setDispaly}
                        getMyVehicleData={getMyVehicleData}
                      />
                    );
                  case "carSelection":
                    return <CarSelect setAsideStatus={setAsideStatus} />;
                  default:
                    return null;
                }
              })()}
            </div>
          </div>
        )}
      </div>
    </PanelContainer>
  );
};

export default MyVehicle;
