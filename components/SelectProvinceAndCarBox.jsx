import React, { useEffect, useState } from "react";
import SelectCityInput from "./SelectCityInput";
import SelectVehicleBox from "./cards/SelectVehicleBox";
import SelectVehicleTab from "./SelectVehicleTab";
import SearchInput from "./SearchInput";
import ShowMyVehicles from "./ShowMyVehicles";
import car from "@/public/assets/images/hoeny-Hyundai-car.png";
import motor from "@/public/assets/images/motor.png";
import axios from "axios";
import { API_PATHS } from "@/configs/routes.config";
import Image from "next/image";
import Spinner from "@/components/Spinner";

const SelectProvinceAndCarBox = (props) => {
const { cityData } = props
   const [province, setProvince] = useState([]);
  const [city, setCity] = useState([]);
  const [selectedProvince,setSelectedProvince] = useState(null)
  const [selectedCity,setSelectedCity] = useState(null)
  const [provinceName,setProvinceName] = useState(null)
  const [cityName,setCityName] = useState(null)
  const [isClicked, setIsClicked] = useState(0);
  const [carBrands, setCarBrands] = useState([]);
  const [motorBrands, setMotorBrands] = useState([]);
  const [carModel, setCarModel] = useState([]);
  const [motorModel, setMotorModel] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [step, setStep] = useState("car-brands");
  const [motorStep, setMotorStep] = useState("motor-brands");
  const [isLoading, setIsLoading] = useState(false);

  const myVehicleData = [];

  const backStepHandler = () => {
    if (step === "car-models") {
      setStep("car-brands");
    } else if (step === "car-tips") {
      setStep("car-models");
      setSelectedItem(carModel);
    }
    if (motorStep === "motor-models") {
      setMotorStep("motor-brands");
    } else if (motorStep === "motor-tips") {
      setMotorStep("motor-models");
      setSelectedItem(motorModel);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if (step === "car-brands") {
      axios
          .get(process.env.BASE_API + "/web" + "/car-brands")
          .then((res) => {
            setIsLoading(false);
            setCarBrands(res.data.data);
          })
          .catch((err) => console.log(err));
    } else if (step === "car-models") {
      axios
          .get(process.env.BASE_API + "/web" + "/car-models/" + selectedItem)
          .then((res) => {
            setCarBrands(res.data.data);
            setCarModel(selectedItem);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
    } else if (step === "car-tips") {
      axios
          .get(process.env.BASE_API + "/web" + "/car-tips/" + selectedItem)
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
          .get(process.env.BASE_API + "/web" + "/motor-models/" + selectedItem)
          .then((res) => {
            setMotorBrands(res.data.data);
            setMotorModel(selectedItem);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
    } else if (motorStep === "motor-tips") {
      axios
          .get(process.env.BASE_API + "/web" + "/motor-tips/" + selectedItem)
          .then((res) => {
            setMotorBrands(res.data.data);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
    }
  }, [step, motorStep,isClicked]);

  const tabTitle = [
    { name: "خودرو" },
    { name: "ماشین سنگین" },
    { name: "موتور سیکلت" },
    { name: "وسیله من" },
  ];

  const provinceData = [{ name: "انتخاب استان" }, { name: "انتخاب شهر " }];

  useEffect(() => {
    axios
      .get(process.env.BASE_API + "/web" + API_PATHS.GEOPROVINCES)
      .then((res) => {
        const tehran = res.data.data.filter(item => item.title === 'تهران')
        setProvince(tehran);
      })
      .catch((err) => console.log(err));
    axios
      .get(process.env.BASE_API + "/web" + API_PATHS.GEOCITIES + '/' + selectedProvince)
      .then((res) => {
        const tehran = res.data.data.filter(item => item.title === 'تهران')

        setCity(tehran);
      })
      .catch((err) => console.log(err));
  }, [selectedProvince]);


  return (
      <div className="w-full border-[1px]  rounded-10 shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="py-[1rem] bg-RED_500 text-white">
          <h1 className="text-center mb-[0.75rem]">انتخاب شهر و استان</h1>
          <div className="flex items-center justify-center gap-[0.5rem]">
            <SelectCityInput setProvinceName={setProvinceName} setSelectedProvince={setSelectedProvince}
                             name={provinceName === null ? "انتخاب استان" : provinceName} data={province}
                             id="province"/>
            <SelectCityInput setCityName={setCityName} setSelectedCity={setSelectedCity}
                             name={cityName === null ? 'انتخاب شهر' : cityName} data={city} id="city"/>
          </div>
        </div>
        <div className="shadow-[0_0_6px_0_rgba(177,177,177,1)] rounded-b-10">
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
                  setStep={setStep}

              />
            </div>
            <div className="flex items-start justify-between">
              <Image
                  src="/assets/icons/Arrow-Left 1.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={`${step === "car-brands" ? "hidden" : "rotate-180"} `}
                  onClick={backStepHandler}
              />
              <h1 className="text-text_gray w-full self-center text-center mb-[1.25rem]">
                {step === "car-brands" || motorStep === "motor-brands"
                    ? "انتخاب برند"
                    : step === "car-models" || motorStep === "motor-models"
                        ? "انتخاب مدل"
                        : "انتخاب وسیله نقلیه"}
              </h1>
            </div>
            <div className="mb-[1.5rem]">
              <SearchInput placeholder="جستجو برند، مدل، تیپ"/>
            </div>
            {isLoading ? (
                <div className={"flex justify-center items-center h-[100px]"}>
                  <Spinner width={"w-[44px]"} height={"h-[44px]"}/>
                </div>
            ) : (
                <ShowMyVehicles
                    setSelectedVehicle={props.setSelectedItem}
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
                />
            )}
          </div>
        </div>
      </div>
  );
};

export default SelectProvinceAndCarBox;
