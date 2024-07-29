import React, { useState } from "react";
import Button from "@/components/Button";
import MapDirection from "@/components/MapDirection";
import DetailingDetailCard from "@/components/cards/DetailingDetailCard/DetailingDetailCard";

const NewAddressCard = (props) => {
  console.log(props);
  return (
    <li className={"bg-[#E7E7E7] p-4 rounded-[16px] flex gap-6"}>
      <div className={"flex-1"}>
        <section className={"flex justify-between"}>
          <span className={"font-semibold"}>آدرس اول</span>
          {props.status === "fixed" ? (
            ""
          ) : (
            <div className={"flex items-center gap-[16px]"}>
              <i className={"cc-edit text-[20px] cursor-pointer"} />
              <i className={"cc-filter text-[20px] cursor-pointer"} />
            </div>
          )}
        </section>
        <section className={"flex gap-6 mb-4 mt-3"}>
          <div className={"flex gap-[11px]"}>
            <span className={"font-semibold"}>استان:</span>
            <span>تهران</span>
          </div>
          <div className={"flex gap-[11px]"}>
            <span className={"font-semibold"}>شهر:</span>
            <span>تهران</span>
          </div>
          <div className={"flex gap-[11px]"}>
            <span className={"font-semibold"}>محله:</span>
            <span>نیاوران</span>
          </div>
        </section>
        <section className={"flex"}>
          <p className={"leading-8"}>
            <span className={"font-semibold"}> آدرس دقیق: </span>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است .
          </p>
        </section>
        {props.status === "fixed" && (
          <ul
            className={"flex flex-wrap gap-2 mt-4 h-[88px] overflow-y-scroll"}
          >
            {props.item.services.map((item, index) => (
              <DetailingDetailCard key={index} item={item} />
            ))}
          </ul>
        )}

        <Button
          class_name={
            "bg-[#F66B34] w-[132px] h-[40px] text-[#FEFEFE] rounded-[8px] mt-4"
          }
        >
          تایید
        </Button>
      </div>
      <div className={"w-[328px] h-full"}>
        <MapDirection
          justShowPosition={true}
          status={props.status}
          editData={"35.771726,51.557294"}
        />
      </div>
    </li>
  );
};

export default NewAddressCard;
