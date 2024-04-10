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

const SelectProvinceAndCarBox = ({ cityData }) => {
  const [isClicked, setIsClicked] = useState(0);

  const [province, setProvince] = useState([]);
  const [city, setCity] = useState([]);
  const [selectedProvince,setSelectedProvince] = useState(null)
  const [selectedCity,setSelectedCity] = useState(null)
  const [provinceName,setProvinceName] = useState(null)
  const [cityName,setCityName] = useState(null)

  const tabTitle = [
    { name: "خودرو" },
    { name: "ماشین سنگین" },
    { name: "موتور سیکلت" },
    { name: "وسیله من" },
  ];
  const myVehicleData = [
    { src: motor, name: "i10" },
    { src: car, name: "i10" },
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
          <SelectCityInput setProvinceName={setProvinceName} setSelectedProvince={setSelectedProvince} name={provinceName === null ? "انتخاب استان" : provinceName} data={province} id="province" />
          <SelectCityInput setCityName={setCityName} setSelectedCity={setSelectedCity} name={cityName === null ? 'انتخاب شهر' : cityName} data={city} id="city" />
        </div>
      </div>
      <div>
        <div className="w-[95%] m-auto py-[1rem]">
          <h1 className="text-text_gray w-full text-center mb-[0.5rem]">
            انتخاب وسیله نقلیه
          </h1>
          <div className="mb-[1.5rem]">
            <SelectVehicleTab
              className="size1570:flex items-center justify-center size1570:gap-[0.5rem] grid grid-cols-2 gap-x-[0.5rem] gap-y-[0.75rem]"
              tabTitle={tabTitle}
              setIsClicked={setIsClicked}
              isClicked={isClicked}
            />
          </div>
          <h1 className="text-text_gray w-full text-center mb-[1.25rem]">
            انتخاب برند
          </h1>
          <div className="mb-[1.5rem]">
            <SearchInput placeholder="جستجو برند، مدل، تیپ" />
          </div>
          <ShowMyVehicles data={isClicked === 3 ? myVehicleData : []} />
        </div>
      </div>
      {/* <SelectVehicleBox  myTehicleTab={3} tabTitle={tabTitle} title="انتخاب وسیله نقلیه" /> */}
    </div>
  );
};

export default SelectProvinceAndCarBox;
