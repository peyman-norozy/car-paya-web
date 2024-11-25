import React, { useState, useEffect, useCallback } from "react";
import Button from "@/components/Button";
import Image from "next/image";
import AddressesCard from "@/components/cards/AddressesCard";
import AddAddressModal from "@/components/vehicle-verification/AddAddressModal";
import { getData } from "@/utils/api-function-utils";
import { API_PATHS } from "@/configs/routes.config";
import PrivateRoute from "@/routes/private-route";
import { ToastContainer } from "react-toastify";

const ProductAddress = () => {
  const [addreesModalState, setAddressModalState] = useState(false);
  const [addressEditId, setAddressEditId] = useState("");

  const [addressData, setAddressData] = useState({});
  const [pageType, setPageType] = useState("");

  const closeModalHandler = (event) => {
    if (event.target.id === "addressModal") {
      setAddressModalState(false);
    }
  };
  const openAddressModalHandler = () => {
    setAddressModalState(true);
    setPageType("create");
  };

  const getAddressFetchData = useCallback(() => {
    (async () => {
      const getAddressData = await getData(API_PATHS.DASHBOARDUSERADDRESS);
      setAddressData(getAddressData);
    })();
  }, []);

  useEffect(() => {
    getAddressFetchData();
  }, []);

  return (
    <PrivateRoute>
      <div
        className={
          "flex-1 flex flex-col gap-[40px] rounded-10 shadow-[0_0_6px_0_rgba(177,177,177,1)] py-[32px] px-[40px] min-h-[582px]"
        }
      >
        <div className={"flex justify-between items-center"}>
          <span className={"text-[#354597]"}>آدرس های من</span>
          <Button
            type={"button"}
            on_click={openAddressModalHandler}
            class_name={
              "flex gap-2 border  border-[#354597] py-[13px] px-[15px] rounded-[8px]"
            }
          >
            <Image
              src={"/assets/icons/location-add.svg"}
              alt={"icon"}
              width={20}
              height={20}
            />
            <span className={"text-[#354597] font-light"}>ثبت آدرس جدید</span>
          </Button>
        </div>
        {addressData.data && addressData.data.length > 0 ? (
          <ul className={"flex flex-col gap-4"}>
            {addressData.data.map((item, index) => (
              <AddressesCard
                key={index}
                item={item}
                getAddressFetchData={getAddressFetchData}
                setAddressModalState={setAddressModalState}
                setPageType={setPageType}
                setAddressEditId={setAddressEditId}
              />
            ))}
          </ul>
        ) : (
          <div className={"flex-1 flex justify-center items-center"}>
            <div className={"flex flex-col justify-center items-center gap-4"}>
              <Image
                src={"/assets/icons/location-slash.svg"}
                alt={"icon"}
                width={135}
                height={135}
              />
              <p className={"text-[#A5A0A0]"}>
                شما تا به حال آدرسی ثبت نکرده اید.
              </p>
            </div>
          </div>
        )}
        {addreesModalState && (
          <div
            className={
              "fixed top-0 right-0 w-full h-full z-[10000] bg-[#00000035]"
            }
            id={"addressModal"}
            onClick={closeModalHandler}
          >
            <AddAddressModal
              // getDataFetch={getDataFetch}
              getAddressFetchData={getAddressFetchData}
              setAddressModalState={setAddressModalState}
              pageType={pageType}
              addressEditId={addressEditId}
            />
          </div>
        )}{" "}
      </div>
      <ToastContainer rtl={true} />
    </PrivateRoute>
  );
};

export default ProductAddress;
