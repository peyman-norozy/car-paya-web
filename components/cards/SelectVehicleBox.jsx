import React, { useEffect, useState } from "react";
import SelectVehicleTab from "../SelectVehicleTab";
import SearchInput from "../SearchInput";
import car from "@/public/assets/images/hoeny-Hyundai-car.png";
import motor from "@/public/assets/images/motor.png";
import ShowMyVehicles from "../ShowMyVehicles";
import axios from "axios";
import Image from "next/image";
import Spinner from "../Spinner";

const SelectVehicleBox = (props) => {
  const [isClicked, setIsClicked] = useState(0);
  const [carBrands, setCarBrands] = useState([]);
  const [motorBrands, setMotorBrands] = useState([]);
  const [carModel, setCarModel] = useState([]);
  const [motorModel, setMotorModel] = useState([]);
  // const [step, setStep] = useState("car-brands");
  const [motorStep, setMotorStep] = useState("motor-brands");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");

  const myVehicleData = [];

  const backStepHandler = () => {
    if (props.step === "car-models") {
      props.setStep("car-brands");
    } else if (props.step === "car-tips") {
      props.setStep("car-models");
      props.setSelectedItem(carModel);
    }
    if (motorStep === "motor-models") {
      setMotorStep("motor-brands");
    } else if (motorStep === "motor-tips") {
      setMotorStep("motor-models");
      props.setSelectedItem(motorModel);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if (props.step === "car-brands") {
      axios
        .get(process.env.BASE_API + "/web" + "/car-brands")
        .then((res) => {
          setIsLoading(false);
          setCarBrands(res.data.data);
        })
        .catch((err) => console.log(err));
    } else if (props.step === "car-models") {
      axios
        .get(
          process.env.BASE_API + "/web" + "/car-models/" + props.selectedItem,
        )
        .then((res) => {
          setCarBrands(res.data.data);
          setCarModel(props.selectedItem);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else if (props.step === "car-tips") {
      axios
        .get(process.env.BASE_API + "/web" + "/car-tips/" + props.selectedItem)
        .then((res) => {
          setCarBrands(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
    if (motorStep === "motor-brands") {
      axios
        .get(process.env.BASE_API + "/web" + "/motor-brands")
        .then((res) => {
          setMotorBrands(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else if (motorStep === "motor-models") {
      axios
        .get(
          process.env.BASE_API + "/web" + "/motor-models/" + props.selectedItem,
        )
        .then((res) => {
          setMotorBrands(res.data.data);
          setMotorModel(props.selectedItem);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else if (motorStep === "motor-tips") {
      axios
        .get(
          process.env.BASE_API + "/web" + "/motor-tips/" + props.selectedItem,
        )
        .then((res) => {
          setMotorBrands(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [props.step, motorStep, isClicked]);

  return (
    <div className="shadow-[0_0_6px_0_rgba(177,177,177,1)] rounded-10">
      <div className="w-[95%] m-auto py-[1rem]">
        <h1 className="text-text_gray w-full text-center mb-[0.5rem]">
          {props.title}
        </h1>
        <div className="mb-[1.5rem]">
          <SelectVehicleTab
            className="flex items-center justify-center gap-[0.5rem]"
            tabTitle={props.tabTitle}
            setIsClicked={setIsClicked}
            isClicked={isClicked}
            setMotorStep={setMotorStep}
            setStep={props.setStep}
          />
        </div>
        <div className="flex items-start justify-between">
          <Image
            src="/assets/icons/Arrow-Left 1.svg"
            alt=""
            width={20}
            height={20}
            className={`${props.step === "car-brands" ? "hidden" : "rotate-180"} `}
            onClick={backStepHandler}
          />
          <h1 className="text-text_gray w-full self-center text-center mb-[1.25rem]">
            {props.step === "car-brands" || motorStep === "motor-brands"
              ? "انتخاب برند"
              : props.step === "car-models" || motorStep === "motor-models"
                ? "انتخاب مدل"
                : "انتخاب وسیله نقلیه"}
          </h1>
        </div>
        <div className="mb-[1.5rem]">
          <SearchInput placeholder="جستجو برند، مدل، تیپ" />
        </div>
        {isLoading ? (
          <div className={"flex justify-center items-center h-[100px]"}>
            <Spinner width={"w-[44px]"} height={"h-[44px]"} />
          </div>
        ) : (
          <ShowMyVehicles
            setSelectedItem={props.setSelectedItem}
            setStep={props.setStep}
            step={props.step}
            setImage={setImage}
            image={image}
            motorStep={motorStep}
            setMotorStep={setMotorStep}
            data={
              isClicked === 0
                ? carBrands
                : isClicked === 1
                  ? motorBrands
                  : myVehicleData
            }
          />
        )}
      </div>
    </div>
  );
};

export default SelectVehicleBox;
