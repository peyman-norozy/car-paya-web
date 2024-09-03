import React, { useEffect, useState } from "react";
import ChangeServiceTime from "./ChangeServiceTime";
import SelectVerificationPlace from "./SelectVerificationPlace";
import useSetQuery from "@/hook/useSetQuery";
import AddAddressModal from "@/components/vehicle-verification/AddAddressModal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import UserAddressCard from "./vehicle-verification/UserAddressCard";
import AgentAdressCard from "./vehicle-verification/AgentAdressCard";
import axios from "axios";
import { getCookie } from "cookies-next";
import { error } from "@/utils/function-utils";
import { ToastContainer } from "react-toastify";

const VerificationThirdStep = (props) => {
  // const [isSelected, setIsSelected] = useState(0);
  // const [chosenTime, setChosenTime] = useState("");
  const [tab, setTab] = useState(1);
  const searchParams = useSearchParams();
  const [agentData, setAgentData] = useState([]);
  const [userAdressData, setUserAdressData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [type, setType] = useState("FIXED");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const city_id = searchParams.get("city_id");
  const selectedItem = searchParams.get("vehicle_tip");
  const package_id = searchParams.get("package_id");
  const reservation_time_slice_id = searchParams.get(
    "reservation_time_slice_id"
  );
  const exact_time = searchParams.get("exact_time");
  const params = new URLSearchParams(searchParams.toString());
  const pathname = usePathname();
  const router = useRouter();
  const setQuery = useSetQuery();
  useEffect(() => {
    //   verification in carcheck place
    axios
      .get(
        process.env.BASE_API +
          "/web/expert/reservation?step=step-5&type=DELEGATE&city_id=" +
          city_id +
          "&reservation_time_slice_id=" +
          reservation_time_slice_id,
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);

        setAgentData(res.data.data);
        // setCarCheckLocations(res.data.data);
        // setChosenTime(res.data.time);
      })
      .catch((err) => {
        router.push(
          `login?backUrl=${pathname + "?" + searchParams.toString()}`
        );
      });
    //   ///////////////////////////////////
    //   verification in costumers place
    axios
      .get(
        process.env.BASE_API +
          "/web/expert/reservation?step=step-5&type=EXPERT&city_id=" +
          city_id +
          "&reservation_time_slice_id=" +
          reservation_time_slice_id,
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setUserAdressData(res.data.data);
        // setMyLocationData(res.data.data);
        // setIsLoading(false);
        // setChosenTime(res.data.time);
      })
      .catch((err) => console.log(err));
  }, [modalIsOpen]);

  const placeData = [
    {
      title: "در محل شما",
      description: "کارشناسی در موقعیت مکان مورد نظر شما انجام می‌شود.",
    },
    {
      title: "در نمایندگی‌های کار چک",
      description: "برای کارشناسی باید به یکی از مراکز کارچک مراجعه کنید.",
    },
  ];

  const backstopHandler = () => {
    setQuery.deleteSingleQuery(
      [
        {
          key: "reservation_time_slice_id",
          value: reservation_time_slice_id,
        },
      ],
      params
    );
    setQuery.updateMultiQuery([{ key: "step", value: "step-2" }], params);
  };

  const continueSecondStepHandler = () => {
    // setButtonIsdisabled(true);
    if (selectedAddress === "") {
      // setButtonIsdisabled(false);
      error("مکان مورد نظر را انتخاب کنید");
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    } else {
      // setButtonIsdisabled(false);
      setQuery.setMultiQuery([
        { key: "step", value: "step-5" },
        { key: "city_id", value: city_id },
        { key: "vehicle_tip", value: selectedItem },
        { key: "package_id", value: package_id },
        { key: "reservation_time_slice_id", value: reservation_time_slice_id },
        { key: "exact_time", value: exact_time },
        { key: "type_service", value: type },
        { key: "registrationable_id", value: selectedAddress },
      ]);
    }
  };

  return (
    <div className="pt-[2rem] mb-[7rem] lg:w-[calc(100%-424px)] mr-auto overflow-hidden flex flex-col gap-4 px-4">
      <div
        className={
          "flex items-center gap-2 size752:gap-[16px] text-[#0E0E0E] w-full"
        }
      >
        <i
          className={"cc-arrow-right text-24 cursor-pointer"}
          onClick={backstopHandler}
        />
        <p className={"text-14 size752:text-16 w-full font-medium"}>
          انتخاب مکان
        </p>
      </div>
      <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1]">
        <i className="cc-search text-2xl text-[#518DD5]" />
        <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
        <i className="cc-timer text-2xl text-[#518DD5]" />
        <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
        <i className="cc-location text-2xl text-[#518DD5]" />
      </div>
      <div className="flex justify-between items-center h-10">
        <p
          className={
            "text-14 size752:text-16 w-full font-medium text-[#454545]"
          }
        >
          مکان خود را انتخاب کنید:
        </p>
        {tab === 1 && (
          <button
            className="border border-[#F58052] text-[#F58052] flex gap-1 rounded-lg py-3 px-5 items-center"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            <i className="cc-add" />
            <p className="text-xs font-medium w-max">آدرس جدید</p>
          </button>
        )}
      </div>
      <div className="flex flex-col relative">
        <div className="flex items-center border-b border-[#D1D1D1]">
          <div
            className="w-1/2 flex justify-center items-center text-sm py-3"
            onClick={() => {
              setTab(1);
              setType("MOVING");
              setSelectedAddress("");
            }}
          >
            در محل شما
          </div>
          <div
            className="w-1/2 flex justify-center items-center text-sm py-3"
            onClick={() => {
              setTab(0);
              setType("FIXED");
              setSelectedAddress("");
            }}
          >
            در مراکز کار پایا
          </div>
        </div>
        <div
          className={`${tab ? "right-0" : "right-1/2"} w-1/2 h-[2px] bg-[#F58052] mt-[-2px] transition-all absolute bottom-0`}
        ></div>
      </div>
      <div className="flex flex-col gap-2 pb-2">
        {tab
          ? userAdressData.map((item, index) => (
              <UserAddressCard
                key={index}
                data={item}
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
              />
            ))
          : agentData.map((item, index) => (
              <AgentAdressCard
                key={index}
                data={item}
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
              />
            ))}
      </div>
      <div
        className="fixed w-full rounded-t-2xl shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] flex justify-center pt-4 pb-6 items-start bottom-0 right-0 bg-white z-[2000] px-10 lg:hidden"
        onClick={continueSecondStepHandler}
      >
        <button className="bg-[#F66B34] rounded-lg w-full sm:max-w-[400px] text-[#FEFEFE] text-sm font-medium py-3">
          تایید ادامه
        </button>
      </div>
      {/* <div className="pb-[3rem] pt-4">
        <ChangeServiceTime
          on_click={backstopHandler}
          exact_time={time_id?.split("/")[1]}
          chosenTime={chosenTime}
        />
        <div className="mt-[5rem] flex flex-col gap-[1.5rem]">
          {placeData.map((item, index) => (
            <SelectVerificationPlace
              options={index === 1 && "options"}
              isSelected={isSelected}
              id={index}
              key={index}
              setIsSelected={setIsSelected}
              title={item.title}
              description={item.description}
              setChosenTime={setChosenTime}
            />
          ))}
        </div>
      </div> */}
      {modalIsOpen && (
        <div>
          <div>
            <div className={"fixed m-auto inset-0 z-[10000000000]"}>
              <AddAddressModal
                getDataFetch={setUserAdressData}
                pageType={"create"}
                setModalIsOpen={setModalIsOpen}
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
      <ToastContainer />
    </div>
  );
};

export default VerificationThirdStep;
