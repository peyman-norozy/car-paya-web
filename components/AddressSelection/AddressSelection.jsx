import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import NewAddressCard from "@/components/cards/NewAddressCard/NewAddressCard";
import AddAddressModal from "@/components/vehicle-verification/AddAddressModal";
import Spinner from "@/components/Spinner";
import { usePathname } from "next/navigation";

const AddressSelection = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageType, setPageType] = useState("");
  const [addressEditId, setAddressEditId] = useState("");
  const [searchCity, setSearchCity] = useState([]);
  const [optionState, setOptionState] = useState(false);
  const [servicesState, setServicesState] = useState(false);
  const [servicesData, setServicesData] = useState([]);
  const [srviceQuery, setServiceQuery] = useState([]);

  const optionRef = useRef(null);
  const inputRef = useRef(null);
  const serviceButtenRef = useRef(null);
  const serviceDropDownRef = useRef(null);
  const pathName = usePathname();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target !== optionRef.current &&
        e.target.parentElement !== optionRef.current &&
        e.target !== inputRef.current
      ) {
        setOptionState(false);
      }
      if (
        e.target !== serviceButtenRef.current &&
        e.target.parentElement.parentElement !== serviceDropDownRef.current &&
        e.target !== serviceDropDownRef.current
      ) {
        setServicesState(false);
      }
    });
    if (props.filter && props.filter.area) {
      setSearchCity(props.filter.area);
      setServicesData(props.filter.service);
    }
  }, [props.filter]);

  const openModalHandler = () => {
    setModalIsOpen(true);
    setPageType("create");
  };

  function inputChangeHandler(value) {
    setSearchCity(props.filter.area.filter((i) => i.label.includes(value)));
  }

  function checkboxChangeHandler(value, checked) {
    if (checked) {
      setServiceQuery([value, ...srviceQuery]);
    } else {
      setServiceQuery(
        srviceQuery.filter((item) => {
          return item !== value;
        }),
      );
    }
  }

  function searchClickHandler() {
    props.timeData({ services: srviceQuery.join(",") });
  }
  return (
    <>
      {props.status === "FIXED" ? (
        <div className=" flex items-center justify-between">
          <div className="relative">
            <span
              className="text-[#FEFEFE] font-bold cursor-pointer bg-[#5D697A] w-40 flex items-center justify-center rounded-lg py-2"
              onClick={() => {
                setOptionState(true);
              }}
              ref={inputRef}
            >
              انتخاب محله
            </span>
            <div
              className={`absolute overflow-y-scroll rounded-lg top-[42px] z-[2] bg-[#5D697A] ${optionState ? "w-40" : "w-0"} overflow-hidden transition-all`}
            >
              <div
                className="max-h-[200px] flex flex-col p-2 gap-1 w-40"
                ref={optionRef}
              >
                <input
                  className="w-full bg-[#FEFEFE] rounded-lg text-[#0E0E0E] h-8 outline-none mb-1 px-2"
                  onChange={(e) => {
                    inputChangeHandler(e.target.value);
                  }}
                />
                <span
                  className="cursor-pointer hover:bg-[#6e7c91] py-1 px-2 text-[#FEFEFE] text-14"
                  onClick={(e) => {
                    props.timeData();
                    setOptionState(false);
                  }}
                >
                  همه محله ها
                </span>
                {searchCity.map((item, index) => (
                  <span
                    className="cursor-pointer hover:bg-[#6e7c91] py-1 px-2 text-[#FEFEFE] text-14"
                    value={item.id}
                    onClick={(e) => {
                      props.timeData({ area_id: item.id });
                      setOptionState(false);
                    }}
                    key={index}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <span
              className="text-[#FEFEFE] font-bold cursor-pointer bg-[#5D697A] w-40 flex items-center justify-center rounded-lg py-2"
              onClick={() => {
                setServicesState(true);
              }}
              ref={serviceButtenRef}
            >
              انتخاب سرویس ها
            </span>
            <div
              className={`absolute rounded-lg top-[42px] left-0 bg-[#5D697A] z-[1010] ${servicesState ? `w-[240px] sm:w-[calc(100vw*2/5)] p-4` : `w-0`} transition-all duration-500 flex flex-col gap-4 overflow-hidden`}
            >
              <div
                className={`flex flex-wrap gap-6 overflow-y-scroll overflow-x-hidden max-h-[200px]`}
                ref={serviceDropDownRef}
              >
                {servicesData?.map((item, index) => (
                  <div
                    key={index}
                    className="checkbox-wrapper-42 flex items-center gap-1 min-w-[210px]"
                  >
                    <input
                      id={item.value}
                      type="checkbox"
                      onChange={(e) => {
                        checkboxChangeHandler(item.value, e.target.checked);
                      }}
                    />
                    <label className="cbx" for={item.value}></label>
                    <label
                      className="lbl line-clamp-1 select-none"
                      for={item.value}
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
              <button
                className={
                  "bg-[#F66B34] px-8 py-2 text-[#FEFEFE] rounded-[8px] text-14 w-fit"
                }
                onClick={searchClickHandler}
              >
                جستجو
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Button
          class_name={
            "bg-[#5D697A] text-[#FEFEFE] py-2 px-3 text-[16px] flex item-center gap-2 rounded-[8px] self-start"
          }
          on_click={openModalHandler}
        >
          <span className={"text-[24px]"}>+</span>
          <span className={"mt-1.5"}>افزودن آدرس جدید</span>
        </Button>
      )}
      {props.status === "FIXED" ? (
        <ul className={" flex flex-col gap-6"}>
          {props.carCheckLocations?.map((item) => (
            <NewAddressCard
              key={item.id}
              status={props.status}
              item={item}
              nextUrl={
                pathName.startsWith("/detailing")
                  ? "/detailing/selected-services"
                  : pathName.startsWith("/periodic-service")
                    ? "/periodic-service/service-selection"
                    : pathName.startsWith("/batteries")
                      ? "/batteries/products/newTimeSelector"
                      : ""
              }
            />
          ))}
        </ul>
      ) : (
        <ul className={"flex flex-col gap-6"}>
          {props.myLocationData &&
            props.myLocationData?.map((item) => (
              <NewAddressCard
                key={item.id}
                status={props.status}
                timeData={props.timeData}
                item={item}
                setPageType={setPageType}
                setModalIsOpen={setModalIsOpen}
                setAddressEditId={setAddressEditId}
                nextUrl={
                  pathName.startsWith("/detailing")
                    ? "/detailing/selected-services"
                    : pathName.startsWith("/periodic-service")
                      ? "/periodic-service/service-selection"
                      : pathName.startsWith("/batteries")
                        ? "/batteries/products/newTimeSelector"
                        : ""
                }
              />
            ))}
        </ul>
      )}

      {modalIsOpen && props.status === "MOVING" && (
        <div>
          <div>
            <div className={"fixed w-[45%] m-auto inset-0 z-[10000000000]"}>
              <AddAddressModal
                getDataFetch={props.setMyLocationData}
                pageType={pageType}
                addressEditId={addressEditId}
                setModalIsOpen={setModalIsOpen}
                timeData={props.timeData}
                setIsLoading={setIsLoading}
              />
            </div>
            <div
              onClick={() => {
                setModalIsOpen(false);
              }}
              className={
                "w-full h-[100vh] fixed top-0 right-0 bg-black opacity-[0.5] z-[100000000]"
              }
            ></div>
          </div>
        </div>
      )}
      {isLoading && (
        <div>
          <div
            className={
              "fixed flex items-center justify-center flex-col gap-4  w-fit h-[100px] m-auto inset-0 z-[10000000000]"
            }
          >
            <Spinner width={"w-[44px]"} height={"h-[44px]"} />
            <p className={"text-white text-18 font-bold"}>
              درحال دریافت اطلاعات
            </p>
          </div>
          <div
            className={
              "w-full h-[100vh] fixed top-0 right-0 bg-black opacity-[0.5] z-[100000000]"
            }
          ></div>
        </div>
      )}
    </>
  );
};

export default AddressSelection;
