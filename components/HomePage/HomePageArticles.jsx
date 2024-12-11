"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { API_PATHS } from "@/configs/routes.config";
import moment from "jalali-moment";
import { notFound } from "next/navigation";

const HomePageArticles = (props) => {
  if (props?.data?.error?.code === 404) {
    return <div>اطلاعاتی یافت نشد ۴۰۴</div>;
  }
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm sm:text-xl font-bold text-black text-start px-4">
        مجله ها
      </span>
      <Swiper
        spaceBetween={16}
        breakpoints={{
          768: {
            spaceBetween: 24,
          },
        }}
        className="mySwiper ArticleSlider"
        slidesPerView={"auto"}
        style={{
          width: "calc(100% - 32px)",
          marginRight: "4px",
          marginLeft: "16px",
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
        // centeredSlides={true}
        // loop={true}
      >
        {props?.data?.map((item, index) => (
          <SwiperSlide
            style={{ width: "fit-content" }}
            key={`${item.id}-${index}`}
          >
            <Link href={item.permalink}>
              <div className="w-[190px] sm:w-[380px] h-[226px] sm:h-[400px] rounded-2xl md:rounded-[32px] overflow-hidden flex flex-col items-center gap-[10px] bg-[#FFFFFF] shadow-[0_0_8px_0_rgba(162,162,162,0.25)] p-2 sm:p-4">
                <Image
                  src={item["featured_image"]}
                  className="w-full aspect-[174/135] rounded-lg"
                  width={174}
                  height={135}
                  alt=""
                />
                <span className="font-medium text-xs md:text-base text-black line-clamp-2 text-start h-8">
                  {item.title}
                </span>
                <div className="flex justify-between items-center w-full ">
                  {/*<p className="text-[#6D6D6D] text-xs md:text-sm">*/}
                  {/*  {moment(item.created_at * 1000).format("L")}*/}
                  {/*</p>*/}
                  <p className="text-[#6D6D6D] text-xs md:text-sm">
                    {item.date}
                  </p>
                  <button className="text-[#F66B34] flex items-center gap-1">
                    <span className="font-medium text-xs sm:text-base">
                      ادامه
                    </span>
                    <i
                      className={`cc-arrow-down text-base sm:text-xl rotate-90`}
                    />
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageArticles;
