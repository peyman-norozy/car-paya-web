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
        "bg-[#FDFDFD] w-[409px] h-[485px] sticky right-2 top-32 rounded-[16px] flex flex-col justify-between overflow-hidden gap-4 shadow-[0_0_6px_6px_rgba(125,125,125,0.5)] z-50"
      }
    >
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
