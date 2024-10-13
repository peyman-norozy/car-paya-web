"use client";
import { API_PATHS } from "@/configs/routes.config";
import Image from "next/image";
import { numberWithCommas } from "@/utils/function-utils";
import React from "react";

const SelectServiceCard = (props) => {
  const selectProductHandler = () => {
    console.log(props.data);
    const ditailingCart = JSON.parse(sessionStorage.getItem("ditailingCart"));

    if (props.data.discounted_percent) {
      ditailingCart.servicePrice = props.data.discounted_salary;
      props.setDitailingPrice(props.data.discounted_salary);
    } else {
      ditailingCart.servicePrice = props.data.salary;
      props.setDitailingPrice(props.data.salary);
    }
    ditailingCart.serviceName = props.data.selected
      ? props.data.product
      : props.data.name;
    sessionStorage.setItem("ditailingCart", JSON.stringify(ditailingCart));
    props.setProductId(props.data.id);
  };

  console.log(props);

  return (
    <div
      className={`rounded-lg flex flex-col p-2 gap-1 cursor-pointer transition-transform duration-300 relative shadow-[0_0_4px_0_rgba(152,152,152,0.4)] ${props.data.id === props.productId ? "border-2 border-[#F66B34]" : ""}`}
      onClick={selectProductHandler}
    >
      <section className={"flex gap-2 justify-between"}>
        <div>
          <div className={"flex items-center gap-1"}>
            <div>
              <div
                className={
                  "border-2 border-[#F66B34] size-[20px] rounded-full relative"
                }
              >
                {props.data.id === props.productId && (
                  <div
                    className={
                      "bg-[#F66B34] size-3 rounded-full absolute top-[2px] right-[2px]"
                    }
                  ></div>
                )}
              </div>
            </div>
            <div className={"flex w-full"}>
              <span className="text-14 lg:text-18 font-medium">
                {props.data.selected ? props.data.product : props.data.name}
              </span>
            </div>
          </div>
          <div>
            <ul
              className={
                "text-[12px] font-medium flex flex-col gap-2 list-disc pr-4 mt-2"
              }
            >
              <li>سرامیک خودرو / محافظ کننده خودرو</li>
              <li>سرامیک خودرو / محافظ کننده خودرو</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={"w-[95px] h-[80px] ml-4 mt-2"}>
            <Image
              className="bg-amber-600 rounded-lg size-full"
              src={
                process.env.BASE_API +
                "/web" +
                API_PATHS.FILE +
                "/" +
                props.data.image_id
              }
              alt={"detailing service image"}
              width={95}
              height={80}
            />
          </div>
        </div>
      </section>
      <section className={"flex-1"}>
        <div className={"w-full h-[1px] bg-[#BBBBBB] my-2"}></div>
        {props.data?.discounted_percent ? (
          <div className={"flex items-center gap-3"}>
            <div
              className={
                "flex items-center gap-1 text-12 font-medium lg:text-14 text-12"
              }
            >
              <span>قیمت :</span>
              <div className={"flex items-center gap-1 text-12 font-medium"}>
                <span>{numberWithCommas(props.data?.salary)}</span>
                <span className={"text-[12px] font-semibold"}>تومان</span>
              </div>
            </div>
            <div className={"line-through lg:text-14 text-12 text-[#888888]"}>
              <span>{numberWithCommas(props.data?.discounted_salary)}</span>
              <span className={"text-[12px] font-semibold"}>تومان</span>
            </div>
          </div>
        ) : (
          <div className={"flex items-center gap-1 text-12 font-medium"}>
            <span>{numberWithCommas(props.data?.salary)}</span>
            <span className={"text-[12px] font-semibold"}>تومان</span>
          </div>
        )}
        {/*{props.data?.discount_salary && props.data?.discounted_percent && (*/}
        {/*  <div*/}
        {/*    className={*/}
        {/*      "flex items-center gap-1 line-through text-12 font-medium"*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <span>{numberWithCommas(props.data?.discounted_salary)}</span>*/}
        {/*    <span className={"text-[12px] font-semibold"}>تومان</span>*/}
        {/*  </div>*/}
        {/*)}*/}
        {/*{props.data?.salary && (*/}
        {/*  <div className={"flex items-center gap-1 text-12 font-medium"}>*/}
        {/*    <span>{numberWithCommas(props.data?.salary)}</span>*/}
        {/*    <span className={"text-[12px] font-semibold"}>تومان</span>*/}
        {/*  </div>*/}
        {/*)}*/}
      </section>
      {props.data.discounted_percent && (
        <div className={`absolute -top-1 -left-1`}>
          <Image
            src={"/assets/icons/image85.svg"}
            alt={"percent"}
            width={52}
            height={51}
          />
          <span
            className={
              "absolute top-[7px] left-[8px] text-12 text-white -rotate-45"
            }
          >
            {props.data.discounted_percent}%
          </span>
        </div>
      )}
    </div>
  );
};

export default SelectServiceCard;
