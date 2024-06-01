import React, { useEffect, useState } from "react";
import GreenCheckInput from "./GreenCheckInput";
import MyLocations from "./MyLocations";
import Button from "./Button";
import CarCheckLocations from "./CarCheckLocations";
import Input from "@/components/Input";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useSetQuery from "@/hook/useSetQuery";
import axios from "axios";
import AddAddressModal from "@/components/vehicle-verification/AddAddressModal";
import { getCookie } from "cookies-next";

const SelectVerificationPlace = (props) => {
  const { title, description, id, onClick, isSelected } = props;
  const [isClicked, setIsClicked] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [carCheckLocations, setCarCheckLocations] = useState([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const searchParams = useSearchParams();
  const setQuery = useSetQuery();
  const city_id = searchParams.get("city_id");
  const selectedItem = searchParams.get("vehicle_tip");

  const myLocationData = [];

  const openModalHandler = () => {
    setModalIsOpen(true);
  };

  const selectLocationHandler = (index) => {
    setIsClicked(index);
  };

  const continueStepHandler = () => {
    setQuery.setMultiQuery([
      { key: "step", value: "step-5" },
      { key: "city_id", value: city_id },
      {
        key: "vehicle_tip",
        value: selectedItem,
      },
      { key: "package_id", value: 2 },
    ]);
  };

  const checkRulesHandler = () => {
    setIsChecked((prevState) => !prevState);
  };

  useEffect(() => {
    //   verification in carcheck place
    axios
      .get(
        process.env.BASE_API +
          "/web/expert/reservation?step=step-5&type=DELEGATE&city_id=" +
          city_id,
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        },
      )
      .then((res) => {
        setCarCheckLocations(res.data.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
    //   ///////////////////////////////////
    //   verification in costumers place
    axios
      .get(
        process.env.BASE_API +
          "/web/expert/reservation?step=step-5&type=Expert&city_id=" +
          city_id,
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        },
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"w-[95%] m-auto size690:w-full relative"}>
      {modalIsOpen && (
        <div>
          <div>
            <div className={"fixed  w-[45%] m-auto inset-0 z-[10000000000]"}>
              <AddAddressModal
                pageType={"create"}
                setModalIsOpen={setModalIsOpen}
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
      <div
        className={`relative bg-[#ECEEF8] px-[1rem] py-[1rem] rounded-10 flex flex-col gap-5 size690:gap-0 size690:flex-row justify-between ${
          isSelected === id ? "opacity-[1]" : "opacity-[0.5]"
        }`}
        onClick={onClick}
      >
        <div>
          <div className="flex items-center gap-[0.5rem] mb-[0.25rem]">
            <GreenCheckInput
              isSelected={isSelected === id}
              class_name="rounded-[50%] w-[1.35rem] h-[1.35rem]"
            />
            <h1 className="font-bold text-18">{title}</h1>
          </div>
          <p className="text-14 text-[#505050]">{description}</p>
        </div>
        {isSelected === 0 && (
          <button
            onClick={openModalHandler}
            className={
              "rounded-lg self-end w-fit border border-BLUE_600 py-3 px-2 text-BLUE_600  bg-white flex items-center gap-2"
            }
          >
            <i className={"cc-location text-18"} />
            <p className={"text-14"}>ثبت آدرس جدید</p>
          </button>
        )}
      </div>
      {isSelected === id && (
        <div className=" w-full flex flex-col gap-[1.5rem] mt-[1.5rem]">
          {isSelected === 0
            ? myLocationData.map((item, index) => (
                <MyLocations
                  province={item.province}
                  city={item.city}
                  neighborhood={item.neighborhood}
                  title={item.title}
                  id={index}
                  key={index}
                  isSelected={isClicked}
                  on_click={() => selectLocationHandler(index)}
                />
              ))
            : carCheckLocations.length > 0 &&
              carCheckLocations.map((item, index) => (
                <CarCheckLocations
                  key={index}
                  id={index}
                  name={item.name}
                  longitude={item.longitude}
                  latitude={item.latitude}
                  code={item.code_delegate}
                  address={item.address}
                  title={item.name}
                  isSelected={isClicked}
                  on_click={() => selectLocationHandler(index)}
                />
              ))}

          <div>
            <div className="flex flex-col items-start gap-[1rem] size525:flex-row size525:gap-0 size525:items-center justify-between mb-[3rem]">
              <div className={"flex items-center gap-1 mb-[1rem]"}>
                <Input type={"checkbox"} className={"h-[22px] w-[22px]"} />
                <p className={"text-14"}>
                  <Link href="#" className={"text-RED_400"}>
                    قوانین کارچک
                  </Link>{" "}
                  و{" "}
                  <Link href="#" className={"text-BLUE_600"}>
                    {" "}
                    سياست نامه حريم خصوصی
                  </Link>
                  . را میپذیرم.
                </p>
              </div>
              <Button
                on_click={continueStepHandler}
                class_name={
                  "bg-BLUE_600 py-[10px] px-3 rounded-lg flex items-center gap-1 text-white w-fit self-end"
                }
              >
                <p className={"text-14"}>تایید و ادامه</p>
                <i className={"cc-left text-[24px]"} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectVerificationPlace;
