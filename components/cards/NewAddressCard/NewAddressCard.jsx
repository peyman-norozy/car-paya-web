"use client";
import React, { useState } from "react";
// import dynamic from "next/dynamic";
// const MapDirection = dynamic(() => import("@/components/MapDirection"), {
//   ssr: false,
// });
// import DetailingDetailCard from "@/components/cards/DetailingDetailCard/DetailingDetailCard";
import useSetQuery from "@/hook/useSetQuery";
import AddressDeleteModal from "@/components/modal/AddressDeleteModal";
import AddressCheckInput from "@/components/AddressCheckInput/AddressCheckInput";
import { setDeleteModal, setDeleteModalId } from "@/store/todoSlice";

const NewAddressCard = ({
  status,
  item,
  setPageType,
  setModalIsOpen,
  setAddressEditId,
  timeData,
  setLocationId,
  locationId,
}) => {
  const [isOpenDeleteModal, setModalIsOpenDeleteModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const setQuery = useSetQuery();

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

  const clickRadioButtonHandler = () => {
    console.log(item.id);
    setLocationId(item.id);
  };

  return (
    <li
      className={`bg-white shadow-[0_0_10px_0_rgba(152,152,152,0.4)] p-4 rounded-[16px] flex xl:flex-row flex-col-reverse gap-6 ${status === "FIXED" ? "h-fit" : status === "MOVING" ? "h-fit" : "size1228:h-[232px] lg:h-[270px] size830:h-[232px] xl:h-[270px] h-fit"}`}
    >
      <div className={"flex-1"}>
        <section className={"flex justify-between"}>
          <div
            className={"flex gap-2 items-center cursor-pointer"}
            onClick={clickRadioButtonHandler}
          >
            <AddressCheckInput id={item.id} locationId={locationId} />
            <span className={"font-semibold lg:text-18 text-14"}>
              {item.title}
            </span>
          </div>

          {status === "FIXED" ? (
            ""
          ) : (
            <div
              className="relative"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <i
                className="cc-menu-kebab text-2xl bg-white relative z-[2] cursor-pointer"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              />
              <i
                className={`cc-edit text-2xl absolute ${openMenu ? "left-12" : "left-0"} top-0 transition-all text-[#22A137] cursor-pointer`}
                onClick={() => {
                  // props.setEditModalIsOpen(true);
                  clickEditHandler(item.id);
                }}
              />
              <i
                className={`cc-filter text-2xl absolute ${openMenu ? "left-24" : "left-0"} transition-all top-0 text-[#DB3737] cursor-pointer`}
                onClick={() => {
                  // dispatch(setDeleteModal(true));
                  // dispatch(setDeleteModalId(props.data.id));
                  openDeleteModal(item.id);
                }}
              />
            </div>
            // <div className={"flex items-center gap-[16px]"}>
            //   <i
            //     className={"cc-edit text-[20px] cursor-pointer"}
            //     onClick={() => clickEditHandler(item.id)}
            //   />
            //   <i
            //     className={"cc-filter text-[20px] cursor-pointer"}
            //     onClick={() => openDeleteModal(item.id)}
            //   />
            // </div>
          )}
        </section>
        <section className={"flex lg:gap-6 gap-2 mb-4 mt-3"}>
          <div className={"flex lg:gap-[11px] gap-1 lg:text-16 text-12"}>
            <span className={"font-semibold"}>استان:</span>
            <span>{item.province_name}</span>
          </div>
          <div className={"flex lg:gap-[11px] gap-1 lg:text-16 text-12"}>
            <span className={"font-semibold"}>شهر:</span>
            <span>{item.city_name}</span>
          </div>
          <div className={"flex lg:gap-[11px] gap-1 lg:text-16 text-12"}>
            <span className={"font-semibold"}>محله:</span>
            <span>{item.area_name}</span>
          </div>
        </section>
        <section className={"flex"}>
          <p className={"leading-7 h-14 lg:text-16 text-12"}>
            <span className={"font-semibold"}> آدرس دقیق: </span>
            {item.address}
          </p>
        </section>
        {/*{status === "FIXED" && (*/}
        {/*  <ul*/}
        {/*    className={*/}
        {/*      "flex flex-wrap gap-x-2 gap-y-4 mt-4 h-[96px] overflow-y-scroll"*/}
        {/*    }*/}
        {/*  >*/}
        {/*    {item.services.map((item) => (*/}
        {/*      <DetailingDetailCard key={item.key} {...item} />*/}
        {/*    ))}*/}
        {/*  </ul>*/}
        {/*)}*/}
      </div>
      {/*<div className={"xl:w-[328px] w-full h-full"}>*/}
      {/*  <MapDirection*/}
      {/*    justShowPosition={true}*/}
      {/*    status={status}*/}
      {/*    editData={item.map}*/}
      {/*    dragging={false}*/}
      {/*  />*/}
      {/*</div>*/}
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
