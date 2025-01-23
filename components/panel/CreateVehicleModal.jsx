"use client";
import React, { useEffect, useState } from "react";
import CarAndCityInput from "@/components/CarAndCityInput";
import { API_PATHS } from "@/configs/routes.config";
import Image from "next/image";
import iransFlag from "@/public/assets/images/iransFlag.png";
import { postData } from "@/utils/client-api-function-utils";

const CreateVehicleModal = (props) => {
  const [carSelectInputState, setCarSelectInputState] = useState(false);
  const [validation, setValidation] = useState([]);
  const [plaque, setPlaque] = useState({
    plaque0: "",
    plaque1: "",
    plaque2: "",
    plaque3: "",
  });
  const carBrand = JSON.parse(localStorage.getItem("selectedVehicle"))?.brand;
  const carModel = JSON.parse(localStorage.getItem("selectedVehicle"))?.model;
  const carTitle = JSON.parse(localStorage.getItem("selectedVehicle"))?.title;

  const handlePlaqueChange = (key, value) => {
    const data = { ...plaque, [key]: value };
    const plaqueArray = [
      data.plaque0,
      data.plaque1,
      data.plaque2,
      data.plaque3,
    ];
    setPlaque(data);
    props.setCarData({
      ...props.carData,
      plaque: plaqueArray,
      title: `${plaqueArray[0]} | ${plaqueArray[1]} ${plaqueArray[2]} ${plaqueArray[3]}`,
    });
  };
  const carAndCityHandler = () => {
    props.setAsideStatus("carSelection");
    localStorage.removeItem("selectedVehicle");
  };

  function inputChangeHandler(e) {
    props.setCarData({ ...props.carData, [e.target.id]: e.target.value });
  }

  async function onClick() {
    const object = {
      ...props.carData,
      vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))?.id,
      type: JSON.parse(localStorage.getItem("selectedVehicle"))?.type,
    };
    console.log(object);

    let array = [];
    [, "color", "kilometers_use", "kilometers_now", "year", "title"].map(
      (item) => {
        props.carData[item] ? "" : array.push(item);
      }
    );
    setValidation(array);
    if (array.length === 0) {
      await postData("/user/my-vehicles", object);
      props.getMyVehicleData();
      props.setDispaly(false);
    }
  }

  return (
    <section
      className={
        "bg-[#FDFDFD] lg:w-[409px] w-full p-4 lg:pt-6 rounded-xl lg:rounded-2xl sticky right-2 top-32 flex flex-col justify-between overflow-hidden gap-4 shadow-[0_0_4px_0_rgba(207,207,207,0.7)] z-50 "
      }
    >
      <div className={" flex flex-col gap-4"}>
        <span>برای ثبت وسیله نقلیه اطلاعات زیر را کامل کنید</span>
        {/* <input
          className={`${validation.includes("title") ? "border-red-500" : "border-[#B0B0B0]"} outline-none border bg-[#fdfdfd] rounded-8 flex justify-between h-[48px] w-full text-14 pr-2 text-[#757575]`}
          placeholder="نام"
          id="title"
          onChange={inputChangeHandler}
        /> */}
        {/* <CarAndCityInput
          placeHolder={"شهر خود را انتخاب کنید"}
          setAsideStatus={props.setAsideStatus}
          onClick={cityAsidHandler}
          inputStatus={"select_city"}
          value={cityLabel}
          /> */}
        <CarAndCityInput
          placeHolder={"وسیله نقلیه خود را انتخاب کنید"}
          onClick={carAndCityHandler}
          disabled={false}
          inputStatus={"select_car"}
          setCarSelectInputState={setCarSelectInputState}
          value={carTitle ? `${carBrand} ${carModel} (${carTitle})` : ""}
        />
        <div className={"relative"}>
          <select
            className={`${validation.includes("year") ? "border-red-500" : "border-[#B0B0B0]"} outline-none border appearance-none bg-[#fdfdfd] rounded-8 flex justify-between h-[48px] w-full text-14 pr-2 caret-transparent text-[#757575]`}
            id="year"
            onChange={inputChangeHandler}
          >
            <option value={null}>سال ساخت وسیله نقلیه</option>
            <option value={"1403-2024"}>1403-2024</option>
            <option value={"1402-2023"}>1402-2023</option>
            <option value={"1401-2022"}>1401-2022</option>
            <option value={"1400-2021"}>1400-2021</option>
            <option value={"1399-2020"}>1399-2020</option>
            <option value={"1398-2019"}>1398-2019</option>
            <option value={"1397-2018"}>1397-2018</option>
            <option value={"1396-2017"}>1396-2017</option>
            <option value={"1395-2016"}>1395-2016</option>
            <option value={"1394-2015"}>1394-2015</option>
            {/* <option value={"2014"}>2014</option>
            <option value={"2013"}>2013</option>
            <option value={"2012"}>2012</option>
            <option value={"2011"}>2011</option>
            <option value={"2010"}>2010</option>
            <option value={"2009"}>2009</option>
            <option value={"2008"}>2008</option>
            <option value={"2007"}>2007</option>
            <option value={"2006"}>2006</option>
            <option value={"2005"}>2005</option>
            <option value={"2004"}>2004</option>
            <option value={"2003"}>2003</option>
            <option value={"2002"}>2002</option>
            <option value={"2001"}>2001</option>
            <option value={"2000"}>2000</option> */}
          </select>
          <i
            className={
              "cc-arrow-down text-24 absolute top-3 left-2 text-[#858585]"
            }
          />
        </div>
        <div className={"relative"}>
          <select
            className={`${validation.includes("color") ? "border-red-500" : "border-[#B0B0B0]"} outline-none border appearance-none bg-[#fdfdfd] rounded-8 flex justify-between h-[48px] w-full text-14 pr-2 caret-transparent text-[#757575]`}
            id="color"
            onChange={inputChangeHandler}
          >
            <option value={null}>رنگ وسیله نقلیه</option>
            <option value={"سفید"}>سفید</option>
            <option value={"مشکی"}>مشکی</option>
            <option value={"نوک مدادی"}>نوک مدادی</option>
            <option value={"خاکستری"}>خاکستری</option>
            <option value={"قرمز"}>قرمز</option>
            <option value={"ابی"}>آبی</option>
            <option value={"سبز"}>سبز</option>
            <option value={"زرد"}>زرد</option>
          </select>
          <i
            className={
              "cc-arrow-down text-24 absolute top-3 left-2 text-[#858585]"
            }
          />
        </div>
        <input
          className={`${validation.includes("kilometers_now") ? "border-red-500" : "border-[#B0B0B0]"} outline-none border bg-[#fdfdfd] rounded-8 flex justify-between h-[48px] w-full text-14 pr-2 text-[#757575]`}
          placeholder="کیلومتر وسیله نقلیه"
          id="kilometers_now"
          onChange={inputChangeHandler}
        />
        <input
          className={`${validation.includes("kilometers_use") ? "border-red-500" : "border-[#B0B0B0]"} outline-none border bg-[#fdfdfd] rounded-8 flex justify-between h-[48px] w-full text-14 pr-2 text-[#757575]`}
          placeholder="کیلومتر مصرفی ماهانه"
          id="kilometers_use"
          onChange={inputChangeHandler}
        />
      </div>
      {JSON.parse(localStorage.getItem("selectedVehicle"))?.type === "motor" ? (
        <div className="bg-[#FEFEFE] text-[#0E0E0E] flex-col w-28 rounded-md overflow-hidden border border-[#B0B0B0]">
          <div className="flex">
            <input
              className="w-full tracking-[16px] flex justify-center items-center pl-2 font-bold outline-none text-center"
              placeholder="999"
              type="number"
              value={plaque.plaque0}
              onChange={(e) =>
                handlePlaqueChange("plaque0", e.target.value.slice(0, 3))
              }
            />
            <Image
              className=""
              src={iransFlag}
              width={15}
              height={30}
              alt="پلاک"
            />
          </div>
          <input
            className="w-full tracking-[11px] flex justify-center items-center pl-2 font-bold outline-none text-center"
            placeholder="99999"
            type="number"
            value={plaque.plaque1}
            onChange={(e) =>
              handlePlaqueChange("plaque1", e.target.value.slice(0, 5))
            }
          />
        </div>
      ) : (
        <div className="w-full flex items-center justify-between border border-[#B0B0B0] rounded-lg h-10 pr-[11px] overflow-hidden">
          <input
            className="outline-none w-10 text-center"
            placeholder="99"
            type="number"
            value={plaque.plaque0}
            onChange={(e) =>
              handlePlaqueChange("plaque0", e.target.value.slice(0, 2))
            }
          />
          <div className="h-6 w-px bg-slate-400 my-2"></div>
          <input
            className="outline-none w-10 text-center"
            placeholder="999"
            value={plaque.plaque1}
            onChange={(e) =>
              handlePlaqueChange("plaque1", e.target.value.slice(0, 3))
            }
          />
          <select
            className="outline-none w-10 text-center bg-transparent text-sm"
            value={plaque.plaque2}
            onChange={(e) =>
              handlePlaqueChange("plaque2", e.target.value.slice(0, 2))
            }
          >
            <option value={"الف"}>الف</option>
            <option value={"ب"}>ب</option>
            <option value={"پ"}>پ</option>
            <option value={"ت"}>ت</option>
            <option value={"ث"}>ث</option>
            <option value={"ج"}>ج</option>
            <option value={"ج"}>ج</option>
            <option value={"چ"}>چ</option>
            <option value={"ح"}>ح</option>
            <option value={"خ"}>خ</option>
            <option value={"د"}>د</option>
            <option value={"ذ"}>ذ</option>
            <option value={"ر"}>ر</option>
            <option value={"ز"}>ز</option>
            <option value={"ژ"}>ژ</option>
            <option value={"س"}>س</option>
            <option value={"ش"}>ش</option>
            <option value={"ص"}>ص</option>
            <option value={"ض"}>ض</option>
            <option value={"ط"}>ط</option>
            <option value={"ظ"}>ظ</option>
            <option value={"ع"}>ع</option>
            <option value={"غ"}>غ</option>
            <option value={"ف"}>ف</option>
            <option value={"ق"}>ق</option>
            <option value={"ک"}>ک</option>
            <option value={"گ"}>گ</option>
            <option value={"ل"}>ل</option>
            <option value={"م"}>م</option>
            <option value={"ن"}>ن</option>
            <option value={"و"}>و</option>
            <option value={"ه"}>ه</option>
            <option value={"ی"}>ی</option>
          </select>
          <input
            className="outline-none w-10 text-center"
            placeholder="99"
            value={plaque.plaque3}
            onChange={(e) =>
              handlePlaqueChange("plaque3", e.target.value.slice(0, 2))
            }
          />
          <div className="w-12 px-2 h-full bg-[#3360FF] flex items-center justify-center">
            <Image src={iransFlag} className="" />
          </div>
        </div>
      )}
      {/* {JSON.parse(localStorage.getItem("selectedVehicle"))?.image ? (
        <div className={"w-full h-[150px]"}>
          <Image
            src={
              process.env.BASE_API +
              "/web" +
              API_PATHS.FILE +
              "/" +
              JSON.parse(localStorage.getItem("selectedVehicle"))?.image
            }
            width={200}
            height={150}
            className="lg:w-[60%] aspect-auto mx-auto"
          />
        </div>
      ) : (
        <Image
          src={"/assets/icons/Doorstep-Pick-up.png"}
          width={120}
          height={120}
          className="aspect-auto mx-auto"
        />
      )} */}
      <button
        onClick={onClick}
        className={`w-full h-[40px] ${carSelectInputState ? "bg-[#F66B34]" : "bg-[#F66B3433]"} text-[#FEFEFE] flex justify-center items-center font-medium rounded-[8px]`}
      >
        تکمیل اطلاعات
      </button>
    </section>
  );
};

export default CreateVehicleModal;
