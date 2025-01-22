"use client";
import React, { useEffect, useState } from "react";
import useSetQuery from "@/hook/useSetQuery";
import AddAddressModal from "@/components/vehicle-verification/AddAddressModal";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getCookie } from "cookies-next";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setAreaeModalState, setLoginModal } from "@/store/todoSlice";
import UserAddressCard from "@/components/vehicle-verification/UserAddressCard";
import AgentAdressCard from "@/components/vehicle-verification/AgentAdressCard";
import AreaModal from "@/components/vehicle-verification/AreaModal";
import DeleteModal from "@/components/public/DeleteModal";
import ServicesModal from "@/components/periodic-service-components/ServicesModal";
import nProgress from "nprogress";
import PeriodicOrderDataCard from "@/components/periodic-service-components/PeriodicOrderDataCard";
import dynamic from "next/dynamic";

const LeafletMarker = dynamic(() => import("@/components/LeafletMarker"), {
  ssr: false,
});

const Dealership = (props) => {
  // const [isSelected, setIsSelected] = useState(0);
  // const [chosenTime, setChosenTime] = useState("");
  const [tab, setTab] = useState(1);
  const [agentData, setAgentData] = useState([]);
  const [searchedAgentData, setSearchedAgentData] = useState([]);
  const [filter, setFilter] = useState();
  const [checkedArea, setCheckedArea] = useState([]);
  const [userAdressData, setUserAdressData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [locationModalIsOpen, setLocationModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [type, setType] = useState("MOVING");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [selectedAddressText, setSelectedAddressText] = useState({});
  const [serviceModal, setServiceModal] = useState(false);
  const [checkedService, setCheckedService] = useState([]);
  const router = useRouter();
  const setQuery = useSetQuery();
  const dispatch = useDispatch();
  const renderUserAddrressState = useSelector(
    (state) => state.todo.renderUserAddrressState
  );

  useEffect(() => {
    //   verification in carcheck place
    axios
      .get(
        process.env.BASE_API +
          `/web/service-periodical?step=step-1&city_id=` +
          JSON.parse(localStorage.getItem("city"))?.cityId +
          "&type=FIXED&vehicle_tip_id=" +
          JSON.parse(localStorage.getItem("selectedVehicle")).id,
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        }
      )
      .then((res) => {
        setFilter(res?.data?.filter);
        setAgentData(res.data.data);
        setSearchedAgentData(res.data.data);
        // setCarCheckLocations(res.data.data);
        // setChosenTime(res.data.time);
      })
      .catch((err) => {
        // router.push(
        //   `login?backUrl=${pathname + "?" + searchParams.toString()}`
        // );
        dispatch(setLoginModal(true));
      });
    //   ///////////////////////////////////
    //   verification in costumers place
    axios
      .get(
        process.env.BASE_API +
          `/web/service-periodical?step=step-1&city_id=` +
          JSON.parse(localStorage.getItem("city"))?.cityId +
          "&type=MOVING&vehicle_tip_id=" +
          JSON.parse(localStorage.getItem("selectedVehicle")).id,
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        }
      )
      .then((res) => {
        setUserAdressData(res.data.data);
        // setMyLocationData(res.data.data);
        // setIsLoading(false);
        // setChosenTime(res.data.time);
      })
      .catch((err) => console.log(err));
    // setSelectedVehicle(JSON.parse(localStorage.getItem("selectedVehicle")));
  }, [modalIsOpen, renderUserAddrressState, editModalIsOpen]);

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
    nProgress.start();
    router.push("/periodic-service");
  };

  const continueSecondStepHandler = () => {
    // // setButtonIsdisabled(true);
    // if (selectedAddress === "") {
    //   // setButtonIsdisabled(false);
    //   error("مکان مورد نظر را انتخاب کنید");
    //   window.scroll({ top: 0, left: 0, behavior: "smooth" });
    // } else {
    //   // setButtonIsdisabled(false);
    //   setQuery.setMultiQuery([
    //     { key: "step", value: "step-5" },
    //     { key: "city_id", value: city_id },
    //     { key: "vehicle_tip", value: selectedItem },
    //     { key: "package_id", value: package_id },
    //     { key: "reservation_time_slice_id", value: reservation_time_slice_id },
    //     { key: "exact_time", value: exact_time },
    //     { key: "type_service", value: type },
    //     { key: "registrationable_id", value: selectedAddress },
    //   ]);
    // }
    sessionStorage.setItem(
      "periodicCart",
      JSON.stringify({
        location_id: selectedAddressId,
        location_address_id: selectedAddress,
        location_title: selectedAddressText?.title,
        location_name: selectedAddressText?.name,
      })
    );
    setQuery.updateQueryParams(
      { service_location_id: selectedAddressId, type: type },
      "/periodic-service/service-selection"
    );
  };

  function checkboxChangeHandler(id, checked) {
    if (checked) {
      setCheckedArea([...checkedArea, id]);
    } else {
      setCheckedArea(
        checkedArea.filter((item) => {
          return item !== id;
        })
      );
    }
  }

  function areaFilterHandler() {
    if (checkedArea.length === 0) {
      setSearchedAgentData(agentData);
    } else {
      const array = checkedArea.map((item) => {
        return agentData.filter((item2) => {
          return item2.area_id === item;
        });
      });
      setSearchedAgentData(array.flat());
    }
  }

  function servicesCheckboxChangeHandler(id, checked) {
    if (checked) {
      setCheckedService([...checkedService, id]);
    } else {
      setCheckedService(
        checkedService.filter((item) => {
          return item !== id;
        })
      );
    }
  }

  function serviceFilterHandler() {
    if (checkedService.length === 0) {
      setSearchedAgentData(agentData);
    } else {
      const filteredData = agentData.filter((agent) =>
        checkedService.every((key) =>
          agent.services.some((service) => service.key === key && service.value)
        )
      );
      console.log(filteredData);

      setSearchedAgentData(filteredData);
    }
  }

  function agentClickHandler(item) {
    sessionStorage.setItem(
      "periodicCart",
      JSON.stringify({
        location_id: item.id,
        location_address_id: item.address_id,
        location_title: item.address,
        location_name: item.title,
      })
    );
    setQuery.updateQueryParams(
      { service_location_id: item.id, type: "FIXED" },
      "/periodic-service/service-selection"
    );
  }

  return (
    <div className="flex w-full pt-[28px] items-stretch pb-[6rem]">
      <PeriodicOrderDataCard step={1} />
      <div className="w-full lg:w-[calc(100%-424px)] mr-auto overflow-hidden flex flex-col gap-4 bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] px-4 lg:p-6 rounded-2xl min-h-[605px]">
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
        <div className=" flex flex-col gap-4 lg:mr-8">
          <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1] shadow-[0_0_4px_0_rgba(207,207,207,0.7)] py-1 px-2 rounded-full">
            <i
              className="cc-car-o text-2xl text-[#518DD5] cursor-pointer"
              onClick={() => {
                nProgress.start();
                router.push(`/periodic-service`);
              }}
            />
            <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
            <i className="cc-location text-2xl text-[#D1D1D1]" />
            <div className="border-b-4 border-dotted border-[#D1D1D1] w-full"></div>
            <i className="cc-search text-2xl text-[#D1D1D1]" />
            <div className="border-b-4 border-dotted border-[#D1D1D1] w-full"></div>
            <i className="cc-timer text-2xl text-[#D1D1D1]" />
          </div>
          <div className="flex justify-between items-center h-10">
            <p
              className={
                "text-14 size752:text-16 w-full font-medium text-[#454545]"
              }
            >
              مکان خود را انتخاب کنید:
            </p>
            {tab === 0 ? (
              <button
                className="border border-[#F58052] text-[#F58052] flex gap-1 rounded-lg py-3 px-5 items-center"
                onClick={() => {
                  setLocationModalIsOpen(true);
                }}
              >
                <p className="text-xs font-medium w-max">انتخاب از روی نقشه</p>
              </button>
            ) : (
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
                className="w-1/2 flex justify-center items-center text-sm py-3 cursor-pointer"
                onClick={() => {
                  setTab(1);
                  setType("MOVING");
                  setSelectedAddress("");
                }}
              >
                در محل شما
              </div>
              <div
                className="w-1/2 flex justify-center items-center text-sm py-3 cursor-pointer"
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
          {type === "FIXED" && (
            <div className="justify-between flex">
              <button
                className="flex w-fit p-2 gap-2 items-center text-xs text-[#3C3C3C] bg-[#FEFEFE] shadow-[0_0_4px_0_rgba(224,222,222,0.7)] rounded-[4px] relative"
                onClick={() => {
                  dispatch(setAreaeModalState(true));
                }}
              >
                {/* <i className="cc-filter" /> */}
                <span className="font-medium">انتخاب محله</span>
                {checkedArea.length ? (
                  <span className="size-4 flex items-center justify-center text-white text-12 bg-[#F58052] absolute -top-1 -right-1 rounded-full">
                    {checkedArea.length}
                  </span>
                ) : (
                  ""
                )}
              </button>
              <button
                className="flex w-fit p-2 gap-2 items-center text-xs text-[#3C3C3C] bg-[#FEFEFE] shadow-[0_0_4px_0_rgba(224,222,222,0.7)] rounded-[4px] relative"
                onClick={() => {
                  setServiceModal(true);
                }}
              >
                {/* <i className="cc-filter" /> */}
                <span className="font-medium">انتخاب سرویس</span>
                {checkedService.length ? (
                  <span className="size-4 flex items-center justify-center text-white text-12 bg-[#F58052] absolute -top-1 -right-1 rounded-full">
                    {checkedService.length}
                  </span>
                ) : (
                  ""
                )}
              </button>
            </div>
          )}
          <div className="lg:overflow-y-scroll lg:max-h-[calc(100vh-460px)] p-1">
            <div className="flex flex-col gap-2 pb-2">
              {tab
                ? userAdressData.map((item, index) => (
                    <UserAddressCard
                      key={index}
                      data={item}
                      selectedAddress={selectedAddress}
                      setSelectedAddress={setSelectedAddress}
                      getDataFetch={setUserAdressData}
                      setModalIsOpen={setModalIsOpen}
                      setIsLoading={setIsLoading}
                      editModalIsOpen={editModalIsOpen}
                      setEditModalIsOpen={setEditModalIsOpen}
                      setSelectedAddressText={setSelectedAddressText}
                      setSelectedAddressId={setSelectedAddressId}
                    />
                  ))
                : searchedAgentData?.map((item, index) => (
                    <AgentAdressCard
                      setSelectedAddressId={setSelectedAddressId}
                      key={index}
                      data={item}
                      selectedAddress={selectedAddress}
                      setSelectedAddress={setSelectedAddress}
                      setSelectedAddressText={setSelectedAddressText}
                    />
                  ))}
            </div>
          </div>
          <button
            onClick={continueSecondStepHandler}
            className={`${selectedAddress === "" ? "bg-[#FCCAAC]" : "bg-[#F66B34]"} self-end hidden lg:flex items-center gap-2 mt-4 size690:mt-3 w-fit text-12 size690:text-[16px] p-[8px] text-white rounded-[8px] min-w-[200px] justify-center`}
            disabled={selectedAddress === "" ? true : false}
          >
            <p>تایید و ادامه</p>
          </button>
          <div
            className="fixed w-full rounded-t-2xl shadow-[0_-2px_4px_0_rgba(199,199,199,0.25)] flex justify-center pt-4 pb-6 items-start bottom-0 right-0 bg-white z-[2000] px-10 lg:hidden"
            onClick={continueSecondStepHandler}
          >
            <button
              className={`${selectedAddress === "" ? "bg-[#FCCAAC]" : "bg-[#F66B34]"} rounded-lg w-full sm:max-w-[400px] text-[#FEFEFE] text-sm font-medium py-3`}
              disabled={selectedAddress === "" ? true : false}
            >
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
              <div
                className={
                  "fixed m-auto inset-0 z-[10000000000] bg-[#0000009a]"
                }
                onClick={() => {
                  setModalIsOpen(false);
                }}
              >
                <AddAddressModal
                  getDataFetch={setUserAdressData}
                  pageType={"create"}
                  setModalIsOpen={setModalIsOpen}
                  setIsLoading={setIsLoading}
                />
              </div>
              {/* <div
              onClick={() => {
                setModalIsOpen(false);
                console.log(modalIsOpen);
              }}
              className={
                "w-full h-[100vh] fixed top-0 right-0 bg-black opacity-[0.7] z-[100000000]"
              }
            ></div> */}
            </div>
          )}
        </div>
        <AreaModal
          data={filter?.area}
          checkboxChangeHandler={checkboxChangeHandler}
          areaFilterHandler={areaFilterHandler}
        />
        <ServicesModal
          data={filter?.service}
          serviceFilterHandler={serviceFilterHandler}
          servicesCheckboxChangeHandler={servicesCheckboxChangeHandler}
          setServiceModal={setServiceModal}
          serviceModal={serviceModal}
        />
        <ToastContainer />

        <DeleteModal />
        {locationModalIsOpen && (
          <div
            onClick={() => {
              setLocationModalIsOpen(false);
            }}
            oncapture
            className={
              "w-full h-[100vh] fixed top-0 right-0 bg-[#000000b0] z-[100000000]"
            }
          >
            <div
              className="fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 marker_Map"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <LeafletMarker
                dragging={true}
                agentData={agentData}
                agentClickHandler={agentClickHandler}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dealership;
