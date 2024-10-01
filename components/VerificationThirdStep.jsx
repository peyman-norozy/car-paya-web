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
import { postData } from "@/utils/client-api-function-utils";
import { useDispatch, useSelector } from "react-redux";
import { setAreaeModalState, setLoginModal } from "@/store/todoSlice";
import DeleteModal from "./public/DeleteModal";
import AreaModal from "./vehicle-verification/AreaModal";

const VerificationThirdStep = (props) => {
  // const [isSelected, setIsSelected] = useState(0);
  // const [chosenTime, setChosenTime] = useState("");
  const [tab, setTab] = useState(1);
  const searchParams = useSearchParams();
  const [agentData, setAgentData] = useState([]);
  const [searchedAgentData, setSearchedAgentData] = useState([]);
  const [filter, setFilter] = useState();
  const [checkedArea, setCheckedArea] = useState([]);
  const [userAdressData, setUserAdressData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [type, setType] = useState("MOVING");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedAddressText, setSelectedAddressText] = useState("");
  const [areaModal, setAreaModal] = useState();
  const city_id = searchParams.get("city_id");
  const selectedItem = searchParams.get("vehicle_tip");
  const package_id = searchParams.get("package_id");
  const vehicle_tip = searchParams.get("vehicle_tip");
  const reservation_time_slice_id = searchParams.get(
    "reservation_time_slice_id"
  );
  const exact_time = searchParams.get("exact_time");
  const params = new URLSearchParams(searchParams.toString());
  const pathname = usePathname();
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
          "/web/expert/reservation?step=step-5&type=DELEGATE&city_id=" +
          city_id +
          "&reservation_time_slice_id=" +
          reservation_time_slice_id +
          "&package_id=" +
          package_id,
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setFilter(res?.data?.filter?.area);
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
          "/web/expert/reservation?step=step-5&type=EXPERT&city_id=" +
          city_id +
          "&reservation_time_slice_id=" +
          reservation_time_slice_id +
          "&package_id=" +
          package_id,
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
      let cart = JSON.parse(sessionStorage.getItem("verificationCart"));
      cart.selectedAddressText = selectedAddressText;
      sessionStorage.setItem("verificationCart", JSON.stringify(cart));
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

  return (
    <div className="mb-[7rem] lg:w-[calc(100%-424px)] mr-auto overflow-hidden flex flex-col gap-4 mt-[28px] bg-[#FDFDFD] lg:shadow-[0_0_6px_0_rgba(125,125,125,0.5)] px-2 lg:p-6 rounded-2xl min-h-[605px]">
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
        <div className="flex gap-2 items-center w-full bg-[#FFFFFF] text-[#D1D1D1]">
          <i
            className="cc-car-o text-2xl text-[#518DD5] cursor-pointer"
            onClick={() => router.push(`/vehicle-verification`)}
          />
          <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
          <i
            className="cc-search text-2xl text-[#518DD5] cursor-pointer"
            onClick={() =>
              router.push(
                `/vehicle-verification?step=step-1&city_id=${city_id}&vehicle_tip=${selectedItem}`
              )
            }
          />
          <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
          <i
            className="cc-timer text-2xl text-[#518DD5] cursor-pointer"
            onClick={() =>
              router.push(
                `/vehicle-verification?city_id=${city_id}&vehicle_tip=${selectedItem}&step=step-2&package_id=${package_id}`
              )
            }
          />
          <div className="border-b-4 border-dotted border-[#518DD5] w-full"></div>
          <i className="cc-location text-2xl text-[#D1D1D1]" />
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
          <button
            className="flex w-fit p-2 gap-2 items-center text-xs text-[#3C3C3C] bg-[#FEFEFE] shadow-[0_0_4px_0_rgba(224,222,222,0.7)] rounded-[4px]"
            onClick={() => {
              dispatch(setAreaeModalState(true));
            }}
          >
            <i className="cc-filter" />
            <span>انتخاب محله</span>
          </button>
        )}
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
                />
              ))
            : searchedAgentData?.map((item, index) => (
                <AgentAdressCard
                  key={index}
                  data={item}
                  selectedAddress={selectedAddress}
                  setSelectedAddress={setSelectedAddress}
                  setSelectedAddressText={setSelectedAddressText}
                />
              ))}
        </div>
        <button
          onClick={continueSecondStepHandler}
          className={`${selectedAddress === "" ? "bg-[#FCCAAC]" : "bg-[#F66B34]"} self-end hidden lg:flex items-center gap-2 mt-4 size690:mt-3 w-fit text-12 size690:text-[16px] p-[8px] text-white rounded-[4px]`}
          disabled={selectedAddress === "" ? true : false}
        >
          <p>تایید و ادامه</p>
          <i className={"cc-left text-[20px]"} />
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
                "w-full h-[100vh] fixed top-0 right-0 bg-black opacity-[0.7] z-[100000000]"
              }
            ></div>
          </div>
        )}
      </div>
      <AreaModal
        data={filter}
        checkboxChangeHandler={checkboxChangeHandler}
        areaFilterHandler={areaFilterHandler}
      />
      <ToastContainer />
      <DeleteModal />
    </div>
  );
};

export default VerificationThirdStep;
