import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import NewAddressCard from "@/components/cards/NewAddressCard/NewAddressCard";
import AddAddressModal from "@/components/vehicle-verification/AddAddressModal";
import Spinner from "@/components/Spinner";

const AddressSelection = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModalHandler = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      {props.status === "MOVING"&&
        <button
          className={
            "bg-[#5D697A] text-[#FEFEFE] py-2 px-3 text-[16px] flex item-center gap-2 rounded-[8px] self-start"
          }
          onClick={openModalHandler}
        >
          <span className={"text-[24px]"}>+</span>
          <span className={"mt-1.5"}>افزودن آدرس جدید</span>
        </button>
      }
      {props.status === "FIXED" ? (
        <ul className={"mt-7 flex flex-col gap-6"}>
          {props.carCheckLocations.map((item, index) => (
            <NewAddressCard key={index} status={props.status} item={item} nextUrl={"/periodic-service/service-selection"}/>
          ))}
        </ul>
      ) : (
        <ul className={"mt-7 flex flex-col gap-6"}>
          {props.myLocationData.map((item, index) => (
            <NewAddressCard key={index} status={props.status} item={item} nextUrl={"/periodic-service/service-selection"}/>
          ))}
        </ul>
      )}

      {modalIsOpen && props.status === "MOVING" && (
        <div>
          <div>
            <div className={"fixed  w-[45%] m-auto inset-0 z-[10000000000]"}>
              <AddAddressModal
                getDataFetch={props.setMyLocationData}
                pageType={"create"}
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
