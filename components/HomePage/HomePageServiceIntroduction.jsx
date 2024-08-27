"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";
import moment from "jalali-moment";
import { EffectCoverflow } from "swiper/modules";
import { serviceData } from "@/staticData/data";

const HomePageServiceIntroduction = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm sm:text-xl font-bold text-black text-start px-4">
        کار پایا چه خدماتی ارائه میدهد
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
        style={{ width: "92%", padding: "10px" }}
      >
        {serviceData.map((item, index) => (
          <SwiperSlide style={{ width: "fit-content" }} key={item.id}>
            <div className="relative w-[132px] sm:w-[264px] h-[138px] sm:h-[276px]">
              <div className="w-[126px] sm:w-[252px] h-[138px] sm:h-[276px] rounded-2xl bg-[#FFD6BD] origin-bottom-left rotate-3 absolute bottom-0 left-0 z-[1]"></div>
              <div className="w-[126px] sm:w-[252px] h-[138px] sm:h-[276px] rounded-2xl bg-[#FFD6BD] origin-bottom-left -rotate-[1.5deg] -translate-y-[2px] -translate-x-[2px] absolute bottom-0 left-0 z-[1]"></div>
              <div className="w-[132px] h-[138px] sm:w-[264px] sm:h-[276px] rounded-2xl md:rounded-[32px] overflow-hidden flex flex-col items-center gap-1 sm:gap-4 z-[2] relative bg-[#F6F6F6] shadow-[0_0_5.5px_0_rgba(174,174,174,0.25)] p-1 sm:p-4">
                <Image
                  src={item.icon}
                  className="w-[62px] sm:w-[124px] h-[51px] sm:h-[102px]"
                  width={62}
                  height={51}
                  alt=""
                />
                <span className="font-medium text-xs md:text-base text-black line-clamp-1 text-center">
                  {item.title}
                </span>
                <p className="text-[#6D6D6D] text-xs md:text-sm line-clamp-3 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageServiceIntroduction;
