"use client";
import React, { useEffect, useState } from "react";
import Portal from "@/components/Portal/Portal";
import Image from "next/image";
import useSetQuery from "@/hook/useSetQuery";
import { useDispatch } from "react-redux";
import { setCityModalState } from "@/store/todoSlice";
import azadi from "@/public/assets/images/azadi.png"
const fakeData = [
  { city: "تهران", id: 87 },
];

const CityModal = ({ isOpen, onClose }) => {
  const setQuery = useSetQuery();
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true once the component has mounted on the client side
  useEffect(() => {
    setIsClient(true);
    localStorage.setItem(
      "city",
      JSON.stringify({ label: "تهران", cityId: 87 }),
    );

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const cityClickHandler = (id, city) => {
    setQuery.updateQueryParams({ city_id: id }, "");
    localStorage.setItem("city", JSON.stringify({ label: city, cityId: id }));
    dispatch(setCityModalState(false));
  };

  // Only render the modal if isClient is true
  if (!isClient) return null;

  const modalContainer = document.getElementById("modal-root");

  if (!modalContainer) return null;

  return (
    <Portal container={modalContainer}>
      <div
        className={`${!isOpen ? "hidden" : "fixed"} inset-0 h-full w-full bg-[#4c4c4caa] z-[20000] transition-all`}
        onClick={() => onClose()}
      ></div>
      <div
        className={`bg-[#eee] absolute bottom-0 right-0 m-auto w-full max-w-[500px] ${
          isOpen ? "h-[80%]" : "h-0"
        } transition-all duration-500 z-[200000] overflow-hidden rounded-10`}
      >
        <div className={"p-6"}>
          <div className={"flex justify-between items-center"}>
            <p className={"font-medium text-[#3C3C3C]"}>انتخاب شهر</p>
            <div className={"rotate-45 w-fit h-fit"}>
              <i className={"cc-add text-[20px]"} onClick={() => onClose()} />
            </div>
          </div>
          {/* <div
            className={
              "flex items-center gap-2 mt-4 border-b-2 pb-1 border-b-[#f66b34] w-[87px]"
            }
          >
            <div className={"rounded-5 overflow-hidden w-fit"}>
              <Image
                src={"/assets/images/iransFlag.png"}
                alt={"iranFlag"}
                width={2000}
                height={1144}
                className={"w-[32px] h-[20px]"}
              />
            </div>
            <span className={"font-semibold text-16"}>ایران</span>
          </div> */}
          <ul className={"grid grid-cols-3 gap-2 mt-4"}>
            {fakeData.map((item, index) => (
              <li
                key={index}
                className={
                  "flex flex-col items-center cursor-pointer gap-2"
                }
                onClick={() => cityClickHandler(item.id, item.city)}
              >
                <Image className="w-[60px] h-auto" width={60} height={60} src={azadi}/>
                {item.city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Portal>
  );
};

export default CityModal;
