"use client";
import React, { useState } from "react";
import Image from "next/image";
import { numberWithCommas } from "@/utils/function-utils";
import Button from "@/components/Button";
import DetailingDetailCard from "@/components/cards/DetailingDetailCard/DetailingDetailCard";
import DetailingResponsiveButton from "@/components/DetailingResponsiveButton/DetailingResponsiveButton";

const fakeData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const ServicesCard = () => {
  const [morDetail, setMorDetail] = useState(false);

  const moreClickHandler = () => {
    setMorDetail(true);
  };
  return (
    <li
      className={
        "bg-[#E7E7E7] size666:rounded-[16px] rounded-none shadow-lg p-[16px]"
      }
    >
      <div className={"flex gap-[16px]"}>
        <div
          className={
            "size666:w-[240px] w-[140px] size666:h-[240px] h-[144px] bg-[#eee] rounded-[8px] relative overflow-hidden"
          }
        >
          <Image
            src={"/assets/images/detailing.jpg"}
            alt={"detailing"}
            width={240}
            height={240}
          />
          <span
            className={
              "absolute top-0 right-0 flex justify-center items-center text-white text-[14px] rounded-bl-[20px] bg-[#E61919] w-[60px] h-[40px]"
            }
          >
            30%
          </span>
        </div>
        <div className={"flex-1"}>
          <div className={"flex flex-col justify-end gap-[8px]"}>
            <h1 className={" font-semibold size690:text-[20px] text-[14px]"}>
              پولیش و صافکاری
            </h1>
            <p
              className={
                "text-[#47505D] size690:text-[14px] text-[12px] flex size666:flex-row flex-col size666:items-center gap-[8px]"
              }
            >
              <span>۶ ساعت طول می کشد</span>
              <span
                className={
                  "size666:inline-block hidden w-[5px] h-[5px] bg-[#B0B0B0] rounded-full "
                }
              ></span>
              <span>هر شش ماه (توصیه می شود)</span>
            </p>
          </div>
          <ul
            className={`size1142:grid hidden grid-cols-2 gap-y-[16px] text-[12px] text-[#47505D] mt-[24px]`}
          >
            {fakeData.map((item, index) =>
              index <= 4 && !morDetail ? (
                <DetailingDetailCard key={index} />
              ) : index === 5 && !morDetail ? (
                <li>
                  <Button
                    key={index}
                    class_name={"flex item-center gap-[5px] text-green-600"}
                    on_click={moreClickHandler}
                  >
                    <span className={"text-[20px]"}>+</span>
                    <span className={"pt-[6px]"}>مشاهده بیشتر</span>
                  </Button>
                </li>
              ) : (
                morDetail && <DetailingDetailCard key={index} />
              ),
            )}
          </ul>
          <div className={"mt-[24px] flex justify-between"}>
            <div
              className={
                "flex items-center gap-[8px] size666:text-[14px] text-[12px]"
              }
            >
              <span>{numberWithCommas(4000000)}</span>
              <span
                className={
                  "bg-[#B0B0B0] rounded-full size666:w-[10px] w-[5px] size666:h-[10px] h-[5px]"
                }
              ></span>
              <span>{numberWithCommas(2000000)} تومان </span>
            </div>
            <div className={"size1142:block hidden"}>
              <Button
                class_name={
                  "bg-[#F66B34] text-white w-[160px] h-[40px] font-[14px] rounded-[8px]"
                }
              >
                افزودن به سفارش
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={"size1142:hidden block"}>
        {<DetailingResponsiveButton />}
      </div>
    </li>
  );
};

export default ServicesCard;
