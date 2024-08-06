"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const MapDirection = dynamic(() => import("@/components/MapDirection"), {
  ssr: false,
});
import DetailingDetailCard from "@/components/cards/DetailingDetailCard/DetailingDetailCard";
import useSetQuery from "@/hook/useSetQuery";
import AddressDeleteModal from "@/components/modal/AddressDeleteModal";

const NewAddressCard = ({
  status,
  item,
  nextUrl,
  setPageType,
  setModalIsOpen,
  setAddressEditId,
  timeData,
}) => {
  const [isOpenDeleteModal, setModalIsOpenDeleteModal] = useState(false);
  const setQuery = useSetQuery();

  function onclick() {
    setQuery.updateQueryParams({ service_location_id: item.id }, nextUrl);
  }

  const clickEditHandler = (id) => {
    setPageType("edite");
    setModalIsOpen(true);
    setAddressEditId(id);
  };

  const openDeleteModal = (id) => {
    setModalIsOpenDeleteModal(true);
  };

  const ToggleDeleteModal = () => {
    setModalIsOpenDeleteModal((prev) => !prev);
  };

  return (
    <li
      className={`bg-[#E7E7E7] p-4 rounded-[16px] flex size720:flex-row flex-col-reverse gap-6 ${status === "FIXED" ? "size720:h-[335px] h-fit" : "size1228:h-[232px] lg:h-[270px] size830:h-[232px] size720:h-[270px] h-fit"}`}
    >
      <div className={"flex-1"}>
        <section className={"flex justify-between"}>
          <span className={"font-semibold text-18"}>{item.title}</span>
          {status === "FIXED" ? (
            ""
          ) : (
            <div className={"flex items-center gap-[16px]"}>
              <i
                className={"cc-edit text-[20px] cursor-pointer"}
                onClick={() => clickEditHandler(item.id)}
              />
              <i
                className={"cc-filter text-[20px] cursor-pointer"}
                onClick={() => openDeleteModal(item.id)}
              />
            </div>
          )}
        </section>
        <section className={"flex gap-6 mb-4 mt-3"}>
          <div className={"flex gap-[11px]"}>
            <span className={"font-semibold"}>استان:</span>
            <span>{item.province_name}</span>
          </div>
          <div className={"flex gap-[11px]"}>
            <span className={"font-semibold"}>شهر:</span>
            <span>{item.city_name}</span>
          </div>
          <div className={"flex gap-[11px]"}>
           <span className={"font-semibold"}>محله:</span>
           <span>{item.area_name}</span>
          </div>
        </section>
        <section className={"flex"}>
          <p className={"leading-7 h-14"}>
            <span className={"font-semibold"}> آدرس دقیق: </span>
            {item.address}
          </p>
        </section>
        {status === "FIXED" && (
          <ul
            className={
              "flex flex-wrap gap-x-2 gap-y-4 mt-4 h-[96px] overflow-y-scroll"
            }
          >
            {item.services.map((item, index) => (
              <DetailingDetailCard key={index} item={item} />
            ))}
          </ul>
        )}

        <button
          className={`bg-[#F66B34] w-[132px] h-[40px] text-[#FEFEFE] rounded-[8px] ${status === "MOVING" ? "size1228:mt-4 lg:mt-16 size830:mt-4 mt-16" : "mt-4"}`}
          onClick={() => {
            onclick(item.id);
          }}
        >
          تایید
        </button>
      </div>
      <div className={"size720:w-[328px] w-full h-full"}>
        <MapDirection
          justShowPosition={true}
          status={status}
          editData={item.map}
        />
      </div>
      <AddressDeleteModal
        isOpen={isOpenDeleteModal}
        onClose={ToggleDeleteModal}
        timeData={timeData}
        title={item.title}
        id={item.id}
      />
    </li>
  );
};

export default NewAddressCard;
