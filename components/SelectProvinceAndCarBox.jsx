import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Input from "@/components/Input";
import ShowMyVehicles from "@/components/ShowMyVehicles";
import Spinner from "@/components/Spinner";
import useSetQuery from "@/hook/useSetQuery";
import { error } from "@/utils/function-utils";
import { getCookie } from "cookies-next";
import { setVehicleData } from "@/store/todoSlice";
import { useDispatch } from "react-redux";

const SelectProvinceAndCarBox = (props) => {
  const { cityData } = props;
  const [province, setProvince] = useState([]);
  const [city, setCity] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [cityName, setCityName] = useState("");
  const [isClicked, setIsClicked] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [carBrands, setCarBrands] = useState([]);
  const [motorBrands, setMotorBrands] = useState([]);
  const [carModel, setCarModel] = useState([]);
  const [motorModel, setMotorModel] = useState([]);
  const [heavyCarBrands, setHeavyCarBrands] = useState([]);
  const [heavyCarModel, setHeavyCarModel] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [myVehicleData, setMyVehicleData] = useState([]);
  const [myVehicleIsChecked, setMyVehicleIsChecked] = useState(false);
  const [step, setStep] = useState("car-brands");
  const [motorStep, setMotorStep] = useState("motor-brands");
  const [heavyCarStep, setHeavyCarStep] = useState("heavy-car-brands");
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [image, setImage] = useState("");
  const [provienceCity, setProvienceCity] = useState([]);
  const [cityId, setCityId] = useState("");
  const dispatch = useDispatch();

  const cityRef = useRef();
  const setQuery = useSetQuery();

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
    if (heavyCarStep === "heavy-car-models") {
      setHeavyCarStep("heavy-car-brands");
    } else if (heavyCarStep === "heavy-car-tips") {
      setHeavyCarStep("heavy-car-models");
      setSelectedItem(heavyCarModel);
    }
  };

  const myVehicleChangeHandler = (event) => {
    setIsLoading(true);
    if (event.target.checked) {
      setMyVehicleIsChecked(true);
      axios
        .get(process.env.BASE_API + "/web/vehicles", {
          headers: {
            Authorization: `Bearer ${getCookie("Authorization")}`,
          },
        })
        .then((res) => {
          setMyVehicleData(res.data.data);
          setStep("car-tips");
          setMotorStep("motor-tips");
          setHeavyCarStep("heavy-car-tips");
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          if (err.response.status === 401) {
            error("برای نمایش وسیله های من ابتدا وارد حساب کاربری شوید");
          }
        });
    } else {
      setMyVehicleIsChecked(false);
      setIsLoading(false);
      setStep("car-brands");
      setMotorStep("motor-brands");
      setHeavyCarStep("heavy-car-brands");
    }
  };

  const searchVehicleHandler = (e) => {
    if (isClicked === 0) {
      setSearchInputValue(e.target.value);
      const result = searchValue.filter((i) =>
        i.title.includes(e.target.value),
      );
      setCarBrands(result);
      console.log(result);
    } else if (isClicked === 1) {
      setSearchInputValue(e.target.value);
      const result = searchValue.filter((i) =>
        i.title.includes(e.target.value),
      );
      setMotorBrands(result);
    } else if (isClicked === 2) {
      setSearchInputValue(e.target.value);
      const result = searchValue.filter((i) =>
        i.title.includes(e.target.value),
      );
      setHeavyCarBrands(result);
    }
  };

  useEffect(() => {
    setSearchInputValue("");
  }, [isClicked, selectedItem]);

  const selectCityHandler = (e, cityId) => {
    setCityName(e.target.innerHTML);
    setCityId(cityId);
    setIsSelected(false);
  };

  const cityChangeHandler = (e) => {
    setCityName(e.target.value);
    setCity(provienceCity.filter((i) => i.label.includes(e.target.value)));

    if (e.target.value.length >= 1) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  const selectTabHandler = (index) => {
    setIsClicked(index);
    setMotorStep("motor-brands");
    setStep("car-brands");
    setHeavyCarStep("heavy-car-brands");
    setMyVehicleIsChecked(false);
    document.getElementById("checkbox").checked = false;
  };

  const packageStepHandler = () => {
    const city = "&city_id=" + cityId;
    const vehicle_tip =
      selectedItem === null ? "" : "&vehicle_tip_id=" + selectedItem;
    console.log(vehicle_tip, city);
    axios
      .get(
        process.env.BASE_API +
          "/web/expert/reservation?step=step-1" +
          vehicle_tip +
          city,
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.data.length === 0) {
          error("پکبجی برای این وسیله نقلیه وجود ندارد");
        } else {
          setQuery.setMultiQuery([
            { key: "city_id", value: cityId },
            { key: "vehicle_tip", value: selectedItem },
            { key: "step", value: "step-1" },
          ]);
        }
      })
      .catch((err) => {
        if (err.response.status) {
          error(err.response.data.message.vehicle_tip_id[0]);
        }
        console.log(err);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    if (isClicked === 0) {
      if (step === "car-brands") {
        axios
          .get(process.env.BASE_API + "/web" + "/car-brands")
          .then((res) => {
            setIsLoading(false);
            setSearchValue(res.data.data);
            setCarBrands(res.data.data);
          })
          .catch((err) => console.log(err));
      } else if (step === "car-models") {
        axios
          .get(process.env.BASE_API + "/web" + "/car-models/" + selectedItem)
          .then((res) => {
            setCarBrands(res.data.data);
            setSearchValue(res.data.data);
            setCarModel(selectedItem);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      } else if (step === "car-tips") {
        axios
          .get(process.env.BASE_API + "/web" + "/car-tips/" + selectedItem)
          .then((res) => {
            setCarBrands(res.data.data);
            setSearchValue(res.data.data);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      }
    } else if (isClicked === 1) {
      if (motorStep === "motor-brands") {
        axios
          .get(process.env.BASE_API + "/web" + "/motor-brands")
          .then((res) => {
            setMotorBrands(res.data.data);
            setSearchValue(res.data.data);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      } else if (motorStep === "motor-models") {
        axios
          .get(process.env.BASE_API + "/web" + "/motor-models/" + selectedItem)
          .then((res) => {
            setMotorBrands(res.data.data);
            setSearchValue(res.data.data);
            setMotorModel(selectedItem);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      } else if (motorStep === "motor-tips") {
        axios
          .get(process.env.BASE_API + "/web" + "/motor-tips/" + selectedItem)
          .then((res) => {
            setMotorBrands(res.data.data);
            setSearchValue(res.data.data);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      }
    } else if (isClicked === 2) {
      if (heavyCarStep === "heavy-car-brands") {
        axios
          .get(process.env.BASE_API + "/web" + "/heavy-car-brands")
          .then((res) => {
            setIsLoading(false);
            setSearchValue(res.data.data);
            setHeavyCarBrands(res.data.data);
          })
          .catch((err) => console.log(err));
      } else if (heavyCarStep === "heavy-car-models") {
        axios
          .get(
            process.env.BASE_API + "/web" + "/heavy-car-models/" + selectedItem,
          )
          .then((res) => {
            setHeavyCarBrands(res.data.data);
            setSearchValue(res.data.data);
            setHeavyCarModel(selectedItem);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      } else if (heavyCarStep === "heavy-car-tips") {
        axios
          .get(
            process.env.BASE_API + "/web" + "/heavy-car-tips/" + selectedItem,
          )
          .then((res) => {
            setHeavyCarBrands(res.data.data);
            setSearchValue(res.data.data);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      }
    }
  }, [step, motorStep, isClicked, myVehicleIsChecked, heavyCarStep]);

  const tabTitle = [
    { name: "خودرو" },
    { name: "موتور سیکلت" },
    { name: "ماشین سنگین" },
  ];

  useEffect(() => {
    axios
      .get(process.env.BASE_API + "/web/geo/province-cities")
      .then((res) => {
        if (res.data.status === "success") {
          setProvienceCity([res.data.data[98]]);
          // setCity(res.data.data[98]);
        }
      })
      .catch((err) => console.log(err));
  }, [selectedProvince]);

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (event.target !== cityRef.current) {
        setIsSelected(false);
      }
    });
    return () => {
      document.body.removeEventListener("click", (event) => {
        if (event.target !== cityRef.current) {
          setIsSelected(false);
        }
      });
    };
  }, []);

  useEffect(() => {
    dispatch(
      setVehicleData(
        myVehicleIsChecked
          ? myVehicleData
          : isClicked === 0
            ? carBrands
            : isClicked === 1
              ? motorBrands
              : isClicked === 2
                ? heavyCarBrands
                : "",
      ),
    );
  }, [
    dispatch,
    heavyCarBrands,
    carBrands,
    isClicked,
    motorBrands,
    myVehicleData,
    myVehicleIsChecked,
  ]);

  console.log(provienceCity);
  console.log(cityId);
  console.log(selectedItem);

  return (
    <div
      className={
        "rounded-2xl bg-white flex flex-col shadow-[0_0_8px_rgba(226,226,226,0.5)] px-[26px] pt-5 pb-2"
      }
    >
      <h2 className={"text-14 font-medium mb-5"}>
        {"برای ثبت کارشناسی استان و شهر خود را انتخاب کنید"}
      </h2>
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
          ref={cityRef}
          className={`${isSelected ? cityRef.current.scrollHeight + "px px-[12px] py-2" : "h-0"}  shadow-[0_0_12px_rgba(226,226,226,0.8)] bg-white absolute bottom-[-50px] right-0 w-full overflow-scroll max-h-[10rem]`}
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
      <h3 className={"text-14 mb-2 font-medium"}>انتخاب وسیله نقلیه</h3>
      <div className={"flex items-center gap-4 mb-2"}>
        {tabTitle.map((item, i) => (
          <div
            onClick={() => selectTabHandler(i)}
            className={`bg-[#F9FAFF99] text-BLUE_800 text-14 py-[10px] text-center w-full rounded-lg cursor-pointer ${
              isClicked === i
                ? "shadow-[0_0_8px_rgba(15,69,247,0.5)]"
                : "shadow-[0_0_4px_rgba(180,180,180,0.25)]"
            }`}
            key={i}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className={"flex items-center gap-2 mb-4"}>
        <p className={"text-14 font-medium"}>کارشناسی وسیله من</p>
        <Input
          type={"checkbox"}
          on_change={myVehicleChangeHandler}
          className={"h-[22px] w-[22px]"}
          id={"checkbox"}
        />
      </div>
      <div className={"flex gap-2"}>
        {!myVehicleIsChecked && (
          <i
            className={`cc-arrow-right text-18 ${(step === "car-brands" && "hidden") || (motorStep === "motor-brands" && "hidden")}`}
            onClick={backStepHandler}
          />
        )}
        <h4 className={"text-14 font-medium mb-5"}>
          {step === "car-brands" || motorStep === "motor-brands"
            ? "انتخاب برند"
            : step === "car-models" || motorStep === "motor-models"
              ? "انتخاب مدل"
              : "انتخاب وسیله نقلیه"}
        </h4>
      </div>
      <div
        className={
          "rounded-lg flex items-center border border-[#B0B0B0] p-[10px] text-[#3D3D3D] relative h-[2.5rem] mb-2"
        }
      >
        <input
          id={"brand"}
          type={"text"}
          onChange={searchVehicleHandler}
          value={searchInputValue}
          className={"w-full h-full outline-none text-[#3D3D3D]"}
        />
        <label
          htmlFor={"brand"}
          className={
            "text-[#454545] text-14 absolute top-[-30%] bg-white right-[5%] px-1"
          }
        >
          {step === "car-brands" || motorStep === "motor-brands"
            ? "انتخاب برند"
            : step === "car-models" || motorStep === "motor-models"
              ? "انتخاب مدل"
              : "انتخاب وسیله نقلیه"}
          <span className={"text-RED_400"}> * </span>
        </label>
      </div>
      {isLoading ? (
        <div className={"flex justify-center items-center h-[100px]"}>
          <Spinner width={"w-[44px]"} height={"h-[44px]"} />
        </div>
      ) : (
        <ShowMyVehicles
          selectedItem={selectedItem}
          setSelectedVehicle={props.setSelectedItem}
          setSelectedItem={setSelectedItem}
          setStep={setStep}
          step={step}
          setImage={setImage}
          image={image}
          motorStep={motorStep}
          setMotorStep={setMotorStep}
          heavyCarStep={heavyCarStep}
          setHeavyCarStep={setHeavyCarStep}
          myVehicleIsChecked={myVehicleIsChecked}
          // data={
          //   myVehicleIsChecked
          //     ? myVehicleData
          //     : isClicked === 0
          //       ? carBrands
          //       : isClicked === 1
          //         ? motorBrands
          //         : isClicked === 2
          //           ? heavyCarBrands
          //           : ""
          // }
        />
      )}
      <button
        onClick={packageStepHandler}
        className={
          "bg-BLUE_700 mt-1 w-fit text-12 p-[8px] text-white self-end rounded-[4px]"
        }
      >
        درخواست کارشناسی
      </button>
    </div>
  );
};

export default SelectProvinceAndCarBox;
