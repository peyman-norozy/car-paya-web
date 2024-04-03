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
  const [motorBrands,setMotorBrands] = useState([])
  const [carModel,setCarModel] = useState([])
  const [motorModel,setMotorModel] = useState([])
  const [selectedItem, setSelectedItem] = useState(null);
  const [step, setStep] = useState("car-brands");
  const [motorStep,setMotorStep] = useState('motor-brands')
  const [isLoading,setIsLoading] = useState(false)

  const myVehicleData = [];
  
  const backStepHandler =() => {
   if(step === 'car-models') {
    setStep("car-brands")
   }else if(step === 'car-tips') {
    setStep('car-models')
    setSelectedItem(carModel)
   }
   if(step === 'motor-models') {
    setMotorStep("motor-brands")
   }else if(step === 'motor-tips') {
    setMotorStep('motor-models')
    setSelectedItem(motorModel)
   }
  }
  useEffect(() => {
     setIsLoading(true)
    if (step === "car-brands") {
      axios
        .get(process.env.BASE_API + "/web" + "/car-brands")
        .then((res) => {
          setIsLoading(false)
          setCarBrands(res.data.data);
        })
        .catch((err) => console.log(err));
    } else if (step === "car-models") {
      axios
        .get(process.env.BASE_API + "/web" + "/car-models/" + selectedItem)
        .then((res) => {
          setCarBrands(res.data.data);
          setCarModel(selectedItem)
          console.log(res);
          setIsLoading(false)
        })
        .catch((err) => console.log(err));
    } else if (step === "car-tips") {
      axios
        .get(process.env.BASE_API + "/web" + "/car-tips/" + selectedItem)
        .then((res) => {
          setCarBrands(res.data.data);
          console.log(res);
          setIsLoading(false)
        })
        .catch((err) => console.log(err));
    }
    if (motorStep === "motor-brands") {
      
      axios
        .get(process.env.BASE_API + "/web" + "/motor-brands")
        .then((res) => {
          console.log(res);
          setMotorBrands(res.data.data);
          setIsLoading(false)
        })
        .catch((err) => console.log(err));
    } else if (motorStep === "motor-models") {
      axios
        .get(process.env.BASE_API + "/web" + "/motor-models/" + selectedItem)
        .then((res) => {
          setMotorBrands(res.data.data);
          setMotorModel(selectedItem)
          console.log(res);
          setIsLoading(false)
        })
        .catch((err) => console.log(err));
    } else if (motorStep === "motor-tips") {
      axios
        .get(process.env.BASE_API + "/web" + "/motor-tips/" + selectedItem)
        .then((res) => {
          setMotorBrands(res.data.data);
          console.log(res);
          setIsLoading(false)
        })
        .catch((err) => console.log(err));
    }
  }, [step,motorStep]);

  console.log(motorBrands);

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
          />
        </div>
        <div className="flex items-start justify-between">
          <Image src='/assets/icons/Arrow-Left 1.svg' alt="" width={20} height={20} className={`${step === 'car-brands' ? "hidden" : "rotate-180"} `} onClick={backStepHandler}/>
        <h1 className="text-text_gray w-full self-center text-center mb-[1.25rem]">
          {step || motorStep === "car-brands"
            ? "انتخاب برند"
            : step || motorStep === "car-models"
              ? "انتخاب مدل"
              : "انتخاب خودرو"}
        </h1>
        </div>
        <div className="mb-[1.5rem]">
          <SearchInput placeholder="جستجو برند، مدل، تیپ" />
        </div>
        {isLoading ?  <div className={"flex justify-center items-center h-[100px]"}>
                                    <Spinner width={"w-[44px]"} height={"h-[44px]"}/>
                                </div> : <ShowMyVehicles
          setSelectedItem={setSelectedItem}
          setStep={setStep}
          step={step}
          motorStep={motorStep}
          setMotorStep={setMotorStep}
          data={
            isClicked === 0
              ? carBrands
              : isClicked === 1
                ? motorBrands
                : myVehicleData
          }
        />}
      
      </div>
    </div>
  );
};

export default SelectVehicleBox;
