"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SelectVehicleTab from "../SelectVehicleTab";
import SearchInput from "../SearchInput";
import car from "@/public/assets/images/hoeny-Hyundai-car.png";
import motor from "@/public/assets/images/motor.png";
import ShowMyVehicles from "../ShowMyVehicles";
import axios from "axios";
import Image from "next/image";
import Spinner from "../Spinner";
import { useDispatch } from "react-redux";
import { setVehicleData } from "@/store/todoSlice";
import { usePathname } from "next/navigation";
import useClickOutside from "@/hook/useClickOutside";
import useSetQuery from "@/hook/useSetQuery";

const SelectVehicleBox = (props) => {
  const pathName = usePathname();
  const [carBrands, setCarBrands] = useState([]);
  const [motorBrands, setMotorBrands] = useState([]);
  const [heavyCarBrands, setHeavyCarBrands] = useState([]);
  const [carModel, setCarModel] = useState([]);
  const [motorModel, setMotorModel] = useState([]);
  const [heavyCarModel, setHeavyCarModel] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [vehicleData, setVehicleData] = useState([]);
  const [provienceCity, setProvienceCity] = useState([]);
  const [city, setCity] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  // const [step, setStep] = useState("car-brands");
  const [motorStep, setMotorStep] = useState("motor-brands");
  const [heavyCarStep, setHeavyCarStep] = useState("heavy-car-brands");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const cityRef = useRef();
  const close = useCallback(() => setIsSelected(false), []);
  useClickOutside(cityRef, close);
  const query = useSetQuery();

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
    if (heavyCarStep === "heavy-car-brands") {
      axios
        .get(process.env.BASE_API + "/web" + "/heavy-car-brands")
        .then((res) => {
          setHeavyCarBrands(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else if (heavyCarStep === "heavy-car-models") {
      axios
        .get(
          process.env.BASE_API +
            "/web" +
            "/heavy-car-models/" +
            props.selectedItem,
        )
        .then((res) => {
          setHeavyCarBrands(res.data.data);
          setHeavyCarModel(props.selectedItem);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else if (heavyCarStep === "heavy-car-tips") {
      axios
        .get(
          process.env.BASE_API +
            "/web" +
            "/heavy-car-tips/" +
            props.selectedItem,
        )
        .then((res) => {
          setHeavyCarBrands(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [props.step, motorStep]);

  useEffect(() => {
    axios
      .get(process.env.BASE_API + "/web/geo/province-cities")
      .then((res) => {
        if (res.data.status === "success") {
          setProvienceCity(res.data.data);
          setCity(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setVehicleData(
      props.searchParams["attribute_value"] === "car"
        ? carBrands
        : props.searchParams["attribute_value"] === "motor"
          ? motorBrands
          : props.searchParams["attribute_value"] === "heavy_car"
            ? heavyCarBrands
            : myVehicleData,
    );
  }, [
    carBrands,
    dispatch,
    motorBrands,
    heavyCarBrands,
    // myVehicleData,
    props.searchParams,
  ]);

  console.log(filterData);
  console.log(pathName);

  useEffect(() => {
    console.log(vehicleData);
    setFilterData(vehicleData);
  }, [vehicleData]);

  const cityChangeHandler = (e) => {
    setCityName(e.target.value);
    setCity(provienceCity.filter((i) => i.label.includes(e.target.value)));

    if (e.target.value.length >= 1) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  const focusInputHandler = () => {
    setIsSelected(true);
  };

  const selectCityHandler = (e, cityId) => {
    setCityName(e.target.innerHTML);
    query.setQuery("provience_city_id", 87);
    setIsSelected(false);
  };

  return (
    <div className="shadow-[0_0_6px_0_rgba(177,177,177,1)] rounded-10">
      <div className="w-[95%] m-auto py-[1rem]">
        {props.cityProvincesTitle && (
          <p className={"text-14 font-medium mb-5"}>
            {props.cityProvincesTitle}
          </p>
        )}
        <div
          className={
            "rounded-lg flex items-center border border-[#B0B0B0] p-[10px] text-[#3D3D3D] h-[2.5rem] mb-[1rem] relative"
          }
        >
          <input
            ref={cityRef}
            value={cityName}
            id={"city"}
            type={"text"}
            className={"w-full h-full outline-none text-[#3D3D3D]"}
            autoComplete={"off"}
            onChange={cityChangeHandler}
            onFocus={focusInputHandler}
          />
          <i className={"cc-arrow-down"} />
          <label
            htmlFor={"city"}
            className={
              "text-[#454545] text-14 absolute top-[-30%] bg-white right-[5%] px-1"
            }
          >
            استان/شهر <span className={"text-RED_400"}> * </span>
          </label>
          <ul
            // ref={cityRef}
            className={`${isSelected ? cityRef.current.scrollHeight + "px px-[12px] py-2" : "h-0"}  shadow-[0_0_12px_rgba(226,226,226,0.8)] bg-white absolute right-0 top-[40px] w-full overflow-scroll max-h-[10rem]`}
          >
            {city.length > 0 ? (
              city.map((item, index) => (
                <li
                  className={"py-[6px] pr-[12px] hover:bg-BLUE_100 rounded-lg"}
                  onClick={(event) => selectCityHandler(event, item.cityId)}
                  key={index}
                >
                  {item.label}
                </li>
              ))
            ) : (
              <p className={"py-[6px] pr-[12px] text-12 rounded-lg"}>
                شهر یا استان مورد نظر یافت نشد
              </p>
            )}
          </ul>
        </div>
        <h1 className="text-text_gray w-full text-center mb-[0.5rem]">
          {props.title}
        </h1>
        <div className="mb-[1.5rem]">
          <SelectVehicleTab
            className="flex items-center justify-center gap-[0.5rem]"
            tabTitle={props.tabTitle}
            searchParams={props.searchParams}
            setMotorStep={setMotorStep}
            setHeavyCarStep={setHeavyCarStep}
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
          <SearchInput
            placeholder="جستجو برند، مدل، تیپ"
            setFilterData={setFilterData}
            vehicleData={vehicleData}
          />
        </div>
        {isLoading ? (
          <div className={"flex justify-center items-center h-[100px]"}>
            <Spinner width={"w-[44px]"} height={"h-[44px]"} />
          </div>
        ) : (
          <ShowMyVehicles
            setSelectedItem={props.setSelectedItem}
            selectedItem={props.selectedItem}
            filterData={filterData}
            setStep={props.setStep}
            step={props.step}
            setImage={setImage}
            image={image}
            motorStep={motorStep}
            setMotorStep={setMotorStep}
            setHeavyCarStep={setHeavyCarStep}
            heavyCarStep={heavyCarStep}
          />
        )}
      </div>
    </div>
  );
};

export default SelectVehicleBox;
