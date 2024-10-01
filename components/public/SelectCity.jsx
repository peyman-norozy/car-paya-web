import React, { useEffect } from "react";
import Image from "next/image";
import { setCityModalState } from "@/store/todoSlice";
import useSetQuery from "@/hook/useSetQuery";
import { useDispatch } from "react-redux";

const SelectCity = (props) => {
  const setQuery = useSetQuery();
  const dispatch = useDispatch();
  const cityId = JSON.parse(localStorage.getItem("city"))?.cityId;
  const fakeData = [
    { city: "تهران", id: 87, image: "/assets/images/azadi.png" },
    { city: "آبادان", id: 139, image: "/assets/images/hafez.png" },
    { city: "نوشهر", id: 309, image: "/assets/images/hafez.png" },
    { city: "نکا", id: 307, image: "/assets/images/hafez.png" },
    { city: "قم", id: 211, image: "/assets/images/hafez.png" },
    { city: "قم", id: 211, image: "/assets/images/hafez.png" },
    { city: "قم", id: 211, image: "/assets/images/hafez.png" },
    { city: "قم", id: 211, image: "/assets/images/hafez.png" },
  ];
  const cityClickHandler = (id, city) => {
    setQuery.updateQueryParams({ city_id: id }, "");
    localStorage.setItem("city", JSON.stringify({ label: city, cityId: id }));
    dispatch(setCityModalState(false));
    props.setAsideStatus("car_city");
  };

  return (
    <section
      className={
        "bg-[#FDFDFD] lg:w-[409px] w-full h-screen sticky right-2 top-32 flex flex-col justify-start overflow-hidden gap-4 shadow-[0_0_6px_6px_rgba(125,125,125,0.5)] z-50"
      }
    >
      <div className="shadow-[0_2px_8px_0_rgba(148,148,148,0.25)] flex items-center justify-between h-14 px-4 ">
        <span className="text-sm font-medium">انتخاب شهر</span>
        <i
          className="cc-arrow-right rotate-180 text-20 z-[10001]"
          onClick={() => {
            props.setAsideStatus("car_city");
          }}
        />
      </div>
      <ul className={"grid grid-cols-3 gap-y-9 px-4 py-4"}>
        {fakeData.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col items-center cursor-pointer font-medium gap-2 ${cityId === item.id ? "bg-stone-200" : ""} py-1 rounded-8`}
            onClick={() => cityClickHandler(item.id, item.city)}
          >
            <Image
              className="size-[60px]"
              width={60}
              height={60}
              src={item.image}
              alt={"city icon"}
            />
            {item.city}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SelectCity;
