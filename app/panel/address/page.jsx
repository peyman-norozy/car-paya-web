"use client";
import PanelContainer from "@/layouts/PanelContainer";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import AddAddressModal from "@/components/vehicle-verification/AddAddressModal";
import PanelAddressCard from "@/components/panel/PanelAddressCard";
import DeleteModal from "@/components/public/DeleteModal";
import { useSelector } from "react-redux";

const AddressPage = () => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalType, setModalType] = useState("create");
  const [addressEditId, setAddressEditId] = useState("");
  const renderUserAddrressState = useSelector(
    (state) => state.todo.renderUserAddrressState,
  );
  useEffect(() => {
    axios
      .get(process.env.BASE_API + `/user/user-address`, {
        headers: {
          Authorization: "Bearer " + getCookie("Authorization"),
        },
      })
      .then((res) => {
        setData(res.data.data);
      });
  }, [renderUserAddrressState]);
  return (
    <PanelContainer>
      <div className="bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-[500px] flex flex-col gap-6 lg:gap-9 p-4 lg:p-12">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 items-center ">
            <Link href={"/panel"} className="flex items-center lg:hidden">
              <i className="cc-arrow-right text-xl leading-3" />
            </Link>
            <span className="font-medium">ادرس ها</span>
          </div>
          <div
            className="bg-inherit text-[#0F0F0F] p-2 rounded-lg text-12 sm:text-sm shadow-[0_0_3px_0_rgba(160,160,160,0.7)] flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setModalType("create");
              setModalIsOpen(true);
            }}
          >
            <i className="cc-add" />
            <span>افزودن ادرس</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((item, index) => (
            <PanelAddressCard
              key={item.address_id}
              item={item}
              setModalType={setModalType}
              setModalIsOpen={setModalIsOpen}
              setAddressEditId={setAddressEditId}
            />
          ))}
        </div>
        {modalIsOpen && (
          <div
            className={"fixed m-auto inset-0 z-[10000000000] bg-[#0000009a]"}
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            <AddAddressModal
              getDataFetch={setData}
              pageType={modalType}
              setModalIsOpen={setModalIsOpen}
              setIsLoading={setIsLoading}
              addressEditId={addressEditId}
            />
          </div>
        )}
        <DeleteModal />
      </div>
    </PanelContainer>
  );
};

export default AddressPage;
