"use client";
import { useEffect, useState } from "react";
import { error } from "@/utils/function-utils";
import VehiclePriceModal from "@/components/vehiclePrice/VehiclePriceModal";
import CarSelect from "@/components/public/CarSelect";
import { car_parts } from "@/staticData/car_parts";
import RadioInput from "@/components/vehiclePrice/RadioInput";
import { postData } from "@/utils/client-api-function-utils";
import { useRouter } from "next/navigation";

const vehicleprice = (props) => {
  const [client, setClient] = useState(false);
  const [asideStatus, setAsideStatus] = useState("car_city");
  const [toastieDisplay, setToastieDisplay] = useState(false);
  const [preventFirstRender, setPreventFirstRender] = useState(false);
  const [carData, setCarData] = useState({});
  const [partsData, setPartsData] = useState({});
  const [display, setDispaly] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setClient(true);
    if (typeof window !== "undefined") {
      const selectedVehicle = JSON.parse(
        localStorage.getItem("selectedVehicle")
      );
      if (preventFirstRender) {
        if (!selectedVehicle) {
          error("لطفا خودرو خود را انتخاب کنید");
        }
      }
    }
  }, [preventFirstRender, toastieDisplay]);

  function tabClickHandler(key, value) {
    setPartsData({ ...partsData, [key]: value });
  }

  async function calculate() {
    const data = {
      ...carData,
      model: JSON.parse(localStorage.getItem("selectedVehicle"))?.model,
      tip: JSON.parse(localStorage.getItem("selectedVehicle"))?.title,
      brand: JSON.parse(localStorage.getItem("selectedVehicle"))?.brand,
      items: Object.values(partsData),
    };
    console.log(JSON.stringify(data));
    router.push(
      `/vehicleprice/result?year=${data.year}&year=${data.year}&color=${data.color}&operation=${data.operation}&model=${data.model}&tip=${data.tip}&brand=${data.brand}&items=${data.items.join(",")}`
    );
    // const res = await postData("/web/pricing/calculations", data);
    // console.log(res);
  }
  //{"color":"2023","year":"2022","operation":"10000","model":"Q5","tip":"آئودی Q5","brand":"آئودی","items":["RightFrontChassisMinorDamaged","TrunkPartialColored","RightFrontDoorChanged"]}

  if (!client) {
    return null;
  }
  return (
    <div className="w-full min-h-screen flex">
      <div
        className={` ${display ? "hidden lg:flex" : "flex"} mt-10 lg:mt-0 lg:absolute transition-all duration-500 ${props.modalClickState ? "bottom-0 right-0 left-0" : "-bottom-[100vh]"} w-full lg:top-0 lg:right-0.5 lg:h-full lg:z-0`}
      >
        {(() => {
          switch (asideStatus) {
            case "car_city":
              return (
                <VehiclePriceModal
                  buttonTitle={"تخمین قیمت"}
                  onClick={() => setDispaly(true)}
                  setAsideStatus={setAsideStatus}
                  setToastieDisplay={setToastieDisplay}
                  setPreventFirstRender={setPreventFirstRender}
                  setModalClickState={props.setModalClickState}
                  setCarData={setCarData}
                  carData={carData}
                  setDispaly={setDispaly}
                />
              );
            case "carSelection":
              return <CarSelect setAsideStatus={setAsideStatus} />;
            default:
              return null;
          }
        })()}
      </div>
      <div
        className={`${!display ? "hidden lg:flex" : "flex"} flex-col gap-6 w-full lg:w-[calc(100%-410px)] shadow-[0_0_6px_0_rgba(125,125,125,0.5)] mt-[52px] rounded-2xl h-fit p-4 relative bg-white mr-auto`}
      >
        {!display && (
          <div className="w-full h-full bg-[#cfcfcf75] absolute top-0 right-0 rounded-2xl z-10 cursor-not-allowed hidden lg:block"></div>
        )}
        <div className=" grid sm:grid-cols-2 size1400:grid-cols-3 size1770:grid-cols-4 gap-4 ">
          {car_parts.map((item) => (
            <RadioInput
              options={item.options}
              name={item.persian_name}
              tabClickHandler={tabClickHandler}
            />
          ))}
        </div>
        <button
          className="px-4 py-2 text-[#fefefe] bg-[#F66B34] w-fit h-fit rounded-lg"
          onClick={() => {
            calculate();
          }}
        >
          تخمین قیمت خودرو
        </button>
      </div>
    </div>
  );
};

export default vehicleprice;
