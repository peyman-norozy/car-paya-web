import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import NewAddressCard from "@/components/cards/NewAddressCard/NewAddressCard";
import AddAddressModal from "@/components/vehicle-verification/AddAddressModal";
import Spinner from "@/components/Spinner";
import { usePathname } from "next/navigation";
import useSetQuery from "@/hook/useSetQuery";
import { setAreaeModalState } from "@/store/todoSlice";
import { useDispatch } from "react-redux";
import BatteryAreaModal from "@/components/modal/BatteryAreaModal";
import SelectServiceModal from "@/components/modal/SelectServiceModal";

const AddressSelection = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageType, setPageType] = useState("");
  const [addressEditId, setAddressEditId] = useState("");
  const [servicesState, setServicesState] = useState(false);
  const [servicesData, setServicesData] = useState([]);
  const [srviceQuery, setServiceQuery] = useState([]);
  const [filter, setFilter] = useState();

  const serviceButtenRef = useRef(null);
  const serviceDropDownRef = useRef(null);
  const pathName = usePathname();
  const dispatch = useDispatch();
  const setQuery = useSetQuery();

  const nextUrl = pathName.startsWith("/services/detailing")
    ? "/services/detailing/selected-services"
    : pathName.startsWith("/services/periodic-service")
      ? "/services/periodic-service/service-selection"
      : pathName.startsWith("/services/batteries")
        ? "/services/batteries/products/newTimeSelector"
        : "";

  useEffect(() => {
    if (props.filter && props.filter.area) {
      setFilter(props.filter.area);
      setServicesData(props.filter.service);
    }
  }, [props.filter]);

  const openModalHandler = () => {
    setModalIsOpen(true);
    setPageType("create");
  };

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
    setServicesState(false);
  }

  const confirmAndContinue = () => {
    setQuery.updateQueryParams(
      { service_location_id: props.locationId },
      nextUrl,
    );
  };

  return (
    <>
      {props.status === "FIXED" ? (
        <div className=" flex items-center justify-between">
          <div className="relative">
            <button
              className="flex w-fit p-2 gap-2 items-center lg:text-14 text-12 text-[#3C3C3C] bg-[#FEFEFE] shadow-[0_0_6px_0_rgba(125,125,125,0.5)] rounded-[4px]"
              onClick={() => {
                dispatch(setAreaeModalState(true));
              }}
            >
              <i className="cc-filter text-[20px]" />
              <span className={"font-medium"}>انتخاب محله</span>
            </button>
          </div>
          <div className="relative">
            {pathName !== "/batteries/products/newSelectLocation" && (
              <button
                className="flex w-fit p-2 gap-2 items-center lg:text-14 text-12 text-[#3C3C3C] bg-[#FEFEFE] shadow-[0_0_6px_0_rgba(125,125,125,0.5)] rounded-[4px] font-medium"
                onClick={() => {
                  setServicesState(true);
                }}
                ref={serviceButtenRef}
              >
                انتخاب سرویس ها
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={"flex justify-end items-center"}>
          <Button
            class_name={
              "bg-[#FFFFFF] text-[#F66B34] py-2 px-3 lg:text-[16px] text-14 flex item-center gap-2 rounded-[8px] self-start border border-[#F66B34]"
            }
            on_click={openModalHandler}
          >
            <span className={"text-12 flex justify-center items-center"}>
              +
            </span>
            <span className={"text-12"}>آدرس جدید</span>
          </Button>
        </div>
      )}
      {props.status === "FIXED" ? (
        <ul
          className={
            "grid size1362:grid-cols-2 lg:grid-cols-1 size460:grid-cols-2 grid-cols-1 gap-6"
          }
        >
          {props.carCheckLocations?.map((item) => (
            <NewAddressCard
              key={item.id}
              status={props.status}
              item={item}
              setLocationId={props.setLocationId}
              locationId={props.locationId}
            />
          ))}
        </ul>
      ) : (
        <ul
          className={
            "grid size1362:grid-cols-2 lg:grid-cols-1 size460:grid-cols-2 grid-cols-1 gap-6"
          }
        >
          {props.myLocationData &&
            props.myLocationData?.map((item) => (
              <NewAddressCard
                key={item.address_id}
                status={props.status}
                timeData={props.timeData}
                item={item}
                setPageType={setPageType}
                setModalIsOpen={setModalIsOpen}
                setAddressEditId={setAddressEditId}
                setLocationId={props.setLocationId}
                locationId={props.locationId}
              />
            ))}
        </ul>
      )}
      <div
        className={
          "flex justify-center lg:justify-end fixed bottom-0 right-0 left-0 lg:relative w-full z-50 bg-white py-4 px-10 rounded-t-[16px] lg:rounded-none lg:shadow-none shadow-[0_0_6px_0_rgba(125,125,125,0.5)]"
        }
      >
        <button
          className={`${!Boolean(props.locationId) ? "bg-[#ecb8a3]" : "bg-[#F66B34]"} text-white text-14 lg:w-[199px] w-full h-[40px] rounded-[8px]`}
          disabled={!Boolean(props.locationId)}
          onClick={confirmAndContinue}
        >
          تایید و ادامه
        </button>
      </div>
      {modalIsOpen && props.status === "MOVING" && (
        <div>
          <div>
            <div className={"fixed m-auto inset-0 z-[10000000000]"}>
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
      <BatteryAreaModal data={filter} timeData={props.timeData} />
      <SelectServiceModal
        servicesState={servicesState}
        servicesData={servicesData}
        setServicesData={setServicesData}
        setServicesState={setServicesState}
        checkboxChangeHandler={checkboxChangeHandler}
        searchClickHandler={searchClickHandler}
      />
      {/*<AreaModal*/}
      {/*  data={filter}*/}
      {/*  checkboxChangeHandler={checkboxChangeHandler}*/}
      {/*  // areaFilterHandler={areaFilterHandler}*/}
      {/*/>*/}
    </>
  );
};

export default AddressSelection;
