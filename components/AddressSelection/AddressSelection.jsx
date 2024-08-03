import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
// import NewAddressCard from "@/components/cards/NewAddressCard/NewAddressCard";
import AddAddressModal from "@/components/vehicle-verification/AddAddressModal";
import Spinner from "@/components/Spinner";

const AddressSelection = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageType, setPageType] = useState("");
  const [addressEditId, setAddressEditId] = useState("");

  const openModalHandler = () => {
    setModalIsOpen(true);
    setPageType("create");
  };

  return (
    <>
      {props.status === "fixed" ? (
        <span>محله</span>
      ) : (
        <Button
          class_name={
            "bg-[#5D697A] text-[#FEFEFE] py-2 px-3 text-[16px] flex item-center gap-2 rounded-[8px]"
          }
          on_click={openModalHandler}
        >
          <span className={"text-[24px]"}>+</span>
          <span className={"mt-1.5"}>افزودن آدرس جدید</span>
        </Button>
      )}
      {props.status === "fixed" ? (
        <ul className={"mt-7 flex flex-col gap-6"}>
          {/*{props.carCheckLocations.map((item, index) => (*/}
          {/*  <NewAddressCard key={index} status={props.status} item={item} />*/}
          {/*))}*/}
        </ul>
      ) : (
        <ul className={"mt-7 flex flex-col gap-6"}>
          {/*{props.myLocationData &&props.myLocationData.map((item, index) => (*/}
          {/*  <NewAddressCard*/}
          {/*    key={index}*/}
          {/*    status={props.status}*/}
          {/*    item={item}*/}
          {/*    setPageType={setPageType}*/}
          {/*    setModalIsOpen={setModalIsOpen}*/}
          {/*    setAddressEditId={setAddressEditId}*/}
          {/*  />*/}
          {/*))}*/}
        </ul>
      )}

      {modalIsOpen && props.status === "MOVING" && (
        <div>
          <div>
            <div className={"fixed  w-[45%] m-auto inset-0 z-[10000000000]"}>
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
