"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import MapDirection from "@/components/MapDirection";
import DetailingDetailCard from "@/components/cards/DetailingDetailCard/DetailingDetailCard";
import useSetQuery from "@/hook/useSetQuery";

const NewAddressCard = ({
  status,
  item,
  nextUrl,
  setPageType,
  setModalIsOpen,
  setAddressEditId,
}) => {
  const setQuery = useSetQuery();

  const fixedFakeData = [
    "فیلتر روغن",
    "فیلتر روغن",
    "تعویض روغن گیر بکس دستی",
    "فیلتر روغن",
    "فیلتر روغن",
    "فیلتر روغن",
    "فیلتر روغن",
    "فیلتر روغن",
    "فیلتر روغن",
    "فیلتر روغن",
    "فیلتر روغن",
    "فیلتر روغن",
    "فیلتر روغن",
    "فیلتر روغن",
  ];

  function onclick() {
    setQuery.updateQueryParams({ agent_id: item.id }, nextUrl);
  }

  const clickEditHandler = (id) => {
    setPageType("edite");
    setModalIsOpen(true);
    setAddressEditId(id);
  };

  return (
    <li className={"bg-[#E7E7E7] p-4 rounded-[16px] flex gap-6"}>
      <div className={"flex-1"}>
        <section className={"flex justify-between"}>
          <span className={"font-semibold text-18"}>{item.title}</span>
          {status === "fixed" ? (
            ""
          ) : (
            <div className={"flex items-center gap-[16px]"}>
              <i
                className={"cc-edit text-[20px] cursor-pointer"}
                onClick={() => clickEditHandler(item.id)}
              />
              <i className={"cc-filter text-[20px] cursor-pointer"} />
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
          {/*<div className={"flex gap-[11px]"}>*/}
          {/*  <span className={"font-semibold"}>محله:</span>*/}
          {/*  <span>{item.area_name}</span>*/}
          {/*</div>*/}
        </section>
        <section className={"flex"}>
          <p className={"leading-7 h-14"}>
            <span className={"font-semibold"}> آدرس دقیق: </span>
            {item.address}
          </p>
        </section>
        {status === "fixed" && (
          <ul
            className={
              "flex flex-wrap gap-x-2 gap-y-4 mt-4 h-[96px] overflow-y-scroll"
            }
          >
            {fixedFakeData.map((item, index) => (
              <DetailingDetailCard key={index} item={item} />
            ))}
          </ul>
        )}

        <button
          className={
            "bg-[#F66B34] w-[132px] h-[40px] text-[#FEFEFE] rounded-[8px] mt-4 "
          }
          onClick={() => {
            onclick(item.id);
          }}
        >
          تایید
        </button>
      </div>
      <div className={"w-[328px] h-full"}>
        <MapDirection
          justShowPosition={true}
          status={status}
          editData={item.map}
        />
      </div>
    </li>
  );
};

export default NewAddressCard;
