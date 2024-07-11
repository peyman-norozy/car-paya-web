import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSetQuery from "@/hook/useSetQuery";
import { useSelector } from "react-redux";

const ShowMyVehicles = (props) => {
  const query = useSetQuery();
  const [vehicleData, setVehicleData] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(false);
  const data = useSelector((item) => item.todo.vehicleData);
  console.log(data);
  const selectItemHandler = (e, id) => {
    if (e.currentTarget.getAttribute("image") !== null) {
      props.setImage(e.currentTarget.getAttribute("image"));
    }
    console.log(id);
    setSelectedVehicle(id);

    // const newUrl =
    //   "/" +
    //   pathname.split("/")[1] +
    //   "/" +
    //   e.currentTarget.getAttribute("title");
    // window.history.replaceState(
    //   { ...window.history.state, as: newUrl, url: newUrl },
    //   "",
    //   newUrl,
    // );

    if (
      props.step === "car-tips" ||
      props.step === "motor-tips" ||
      props.step === "heavy-car-tips"
    ) {
      query.setQuery("selectTipState", `${true},${props.selectedItem}`);
    }

    props.setSelectedItem(e.currentTarget.id);
    if (props.step === "car-brands") {
      props.setStep("car-models");
    } else if (props.step === "car-models") {
      props.setStep("car-tips");
    } else {
      props.setSelectedVehicle && props.setSelectedVehicle(e.currentTarget.id);
    }
    if (props.motorStep === "motor-brands") {
      props.setMotorStep("motor-models");
    } else if (props.motorStep === "motor-models") {
      props.setMotorStep("motor-tips");
    } else {
      props.setSelectedVehicle && props.setSelectedVehicle(e.currentTarget.id);
    }
    if (props.heavyCarStep === "heavy-car-brands") {
      props.setHeavyCarStep("heavy-car-models");
    } else if (props.heavyCarStep === "heavy-car-models") {
      props.setHeavyCarStep("heavy-car-tips");
    } else {
      props.setSelectedVehicle && props.setSelectedVehicle(e.currentTarget.id);
    }
  };

  useEffect(() => {
    query.deleteQuery("selectTipState");
  }, []);

  useEffect(() => {
    setVehicleData([...data]);
  }, [data]);
  console.log(vehicleData);
  return (
    <div className="relative grid grid-cols-3 gap-x-[0.5rem] gap-y-[0.5rem] rounded-10 border-gray_light_border border-[1px] w-full h-[16rem] p-[1rem] overflow-y-scroll">
      {vehicleData.length > 0 ? (
        vehicleData.map((item, index) => (
          <div
            key={index}
            title={item.slug}
            id={item.id}
            image={item.image}
            onClick={(event) => selectItemHandler(event, item.id)}
            className={`flex flex-col items-center gap-[0.25rem] h-fit w-full cursor-pointer ${selectedVehicle === item.id && "bg-gray-300 w-fit rounded-lg"}`}
          >
            <div className={`h-[50px] w-[50px] rounded-5 overflow-hidden `}>
              <Image
                src={
                  props.myVehicleIsChecked
                    ? process.env.BASE_API + "/web/file/" + item.car_image_id
                    : props.step === "car-brands"
                      ? process.env.BASE_API + "/web/file/" + item.logo
                      : props.step === "car-models"
                        ? process.env.BASE_API + "/web/file/" + item.image
                        : process.env.BASE_API + "/web/file/" + props.image
                }
                alt={item.name}
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <p className="text-12 line-clamp-1">{item.title}</p>
          </div>
        ))
      ) : (
        <p className={"col-span-full"}>وسیله نقلیه ای برای نمایش وجود ندارد</p>
      )}
    </div>
  );
};

export default ShowMyVehicles;
