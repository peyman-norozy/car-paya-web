"use client";
import { API_PATHS } from "@/configs/routes.config";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CarSelectComponent = () => {
  const [vehicleType, setVehicleType] = useState("car");
  const [level, setLevel] = useState(1);
  const [data, setData] = useState([]);
  const [carSelected, setCarSelected] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});
  const [provienceCity, setProvienceCity] = useState([]);
  const [searchCity, setSearchCity] = useState([]);
  const [optionState, setOptionState] = useState(false);
  const [selectedCity, setSelectedCity] = useState({});
  const showHeaderData = useSelector((state) => state.todo.showHeader);
  const optionRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    getBrandData("car");
    const object = localStorage.getItem("selectedVehicle");
    if (object) {
      setSelectedCar(JSON.parse(object));
      setCarSelected(true);
    }
  }, [carSelected]);

  useEffect(() => {
    axios
      .get(process.env.BASE_API + "/web/geo/province-cities")
      .then((res) => {
        if (res.data.status === "success") {
          setProvienceCity(res.data.data);
          setSearchCity(res.data.data);
        }
      })
      .catch((err) => console.log(err));
    document.addEventListener("click", (e) => {
      if (
        e.target.parentElement !== optionRef.current &&
        e.target !== inputRef.current
      ) {
        setOptionState(false);
      }
    });
    const object = localStorage.getItem("city");
    if (object) {
      setSelectedCity(JSON.parse(object).label);
    } else {
      setSelectedCity("");
    }
  }, []);

  function vehicleTypeFetch(model) {
    setVehicleType(model);
    getBrandData(model);
  }

  function getBrandData(model) {
    axios
      .get(process.env.BASE_API + "/web/" + model + "-brands")
      .then((res) => {
        setData(res.data.data);
      });
    setLevel(2);
  }

  function optionClickHandler(id, item) {
    if (level <= 3) {
      const route = level === 2 ? "-models/" : "-tips/";
      axios
        .get(process.env.BASE_API + "/web/" + vehicleType + route + id)
        .then((res) => {
          setData(res.data.data);
        });
      setLevel(level + 1);
    } else {
      axios
        .post(process.env.BASE_API + "/web" + API_PATHS.ADDCAR, {
          car_tip_id: id,
        })
        .then((res) => {
          console.log(res.status === 200);
          if (res.status === 200) {
            localStorage.setItem(
              "selectedVehicle",
              JSON.stringify({
                id: item.id,
                title: item.title,
                image: item.image,
              }),
            );
            setCarSelected(true);
          }
        });
    }
  }
  function inputChangeHandler(value) {
    setSelectedCity(value);
    setSearchCity(provienceCity.filter((i) => i.label.includes(value)));
  }

  function cityClickHandler(item) {
    setSelectedCity(item.label);
    setOptionState(false);
    localStorage.setItem("city", JSON.stringify(item));
  }

  return (
    <div className="absolute h-full pb-24 top-0 right-auto">
      <div
        className={`bg-[#383838A3] h-[605px] rounded-2xl w-[400px] sticky ${showHeaderData ? "top-[123px]" : "top-[10px]"} right-auto z-[2] backdrop-blur-[16px] p-4 hidden lg:flex flex-col gap-4`}
      >
        {carSelected ? (
          <div className="flex flex-col gap-6">
            <Image
              src={
                process.env.BASE_API +
                "/web" +
                API_PATHS.FILE +
                "/" +
                selectedCar.image
              }
              alt={"file"}
              width={200}
              height={150}
              className="w-[60%] aspect-auto m-auto"
            />
            <div className="flex justify-between items-center">
              <span className="font-bold text-18 text-[#FEFEFE] border-r-[5px] border-[#c0c0c0] leading-6 pr-2">
                {selectedCar.title}
              </span>
              <button
                className="text-[#F66B34] text-16 cursor-pointer font-medium"
                onClick={() => {
                  setCarSelected(false),
                    localStorage.removeItem("selectedVehicle");
                }}
              >
                تغییر خودرو
              </button>
            </div>
            <div
              className="flex flex-col gap-3 items-start"
              onFocusCapture={() => {
                setOptionState(true);
              }}
            >
              <span className="text-[#FEFEFE] font-bold">
                انتخاب استان / شهر
              </span>
              <input
                className="w-full bg-[#FEFEFE] rounded-lg text-[#0E0E0E] h-10 outline-none px-2"
                value={selectedCity}
                onChange={(e) => {
                  inputChangeHandler(e.target.value);
                }}
                ref={inputRef}
              />
              {optionState && (
                <div className="absolute w-[calc(100%-32px)] overflow-y-scroll bg-[#FEFEFE] rounded-b-lg top-[calc(100%-16px)]">
                  <div className="max-h-[200px] flex flex-col" ref={optionRef}>
                    {searchCity.map((item) => (
                      <span
                        key={item.id}
                        className="cursor-pointer hover:bg-slate-200 py-1 px-2"
                        value={item.id}
                        onClick={(e) => {
                          cityClickHandler(item);
                        }}
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <span className="text-[#FEFEFE] text-20 font-bold text-center">
              ثبت وسیله نقلیه
            </span>
            <div className="rounded-lg bg-[#F66B3414] flex justify-between p-1">
              <button
                className={`${vehicleType === "car" ? "bg-[#F66B34] text-[#FEFEFE]" : "text-[#F66B34]"} rounded-[4px] w-[100px] h-10 flex justify-center items-center font-medium text-14`}
                onClick={() => {
                  vehicleTypeFetch("car");
                }}
              >
                خودرو
              </button>
              <div className="my-2 w-[1px] bg-[#F66B34]"></div>
              <button
                className={`${vehicleType === "motor" ? "bg-[#F66B34] text-[#FEFEFE]" : "text-[#F66B34]"} rounded-[4px] w-[100px] h-10 flex justify-center items-center  font-medium text-14`}
                onClick={() => {
                  vehicleTypeFetch("motor");
                }}
              >
                موتورسیکلت
              </button>
              <div className="my-2 w-[1px] bg-[#F66B34]"></div>
              <button
                className={`${vehicleType === "heavy-car" ? "bg-[#F66B34] text-[#FEFEFE]" : "text-[#F66B34]"} rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#F66B34] font-medium text-14`}
                onClick={() => {
                  vehicleTypeFetch("heavy-car");
                }}
              >
                وسیله سنگین
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-center font-bold text-[#FEFEFE]">
                انتخاب برند
              </span>
              <div className="flex gap-2 py-1 px-4 text-[#B0B0B0] bg-[#B0B0B01F] rounded-lg">
                <i className="cc-search text-xl" />
                <input
                  className="outline-none text-14 bg-[#ffffff01]"
                  placeholder="جستجو..."
                />
              </div>
              <div className="h-[363px] overflow-y-scroll mt-2">
                <div className="grid grid-cols-3 gap-x-8 gap-y-[42px]">
                  {data.map((item, index) => (
                    <div
                      className="flex flex-col items-center gap-2"
                      key={index}
                      onClick={() => {
                        optionClickHandler(item.id, item);
                      }}
                    >
                      <Image
                        src={
                          process.env.BASE_API +
                          "/web" +
                          API_PATHS.FILE +
                          "/" +
                          (item.logo ? item.logo : item.image)
                        }
                        width={64}
                        height={48}
                        className="w-16 h-12"
                      />
                      <span className="text-white font-bold line-clamp-1 text-center">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarSelectComponent;
