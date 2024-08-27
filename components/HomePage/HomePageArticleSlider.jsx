"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";
import moment from "jalali-moment";
import { EffectCoverflow } from "swiper/modules";

const HomePageArticleSlider = (props) => {
  moment.locale("fa")
  return (
    <div className="flex flex-col">
      <span className="text-sm sm:text-xl font-bold text-black text-start px-4">
        تازه های خودرو
      </span>
      <Swiper
        spaceBetween={8}
        centeredSlides={true}
        breakpoints={{
          768: {
            spaceBetween: 16,
          },
        }}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.85,
      }}
        loop={true}
        modules={[EffectCoverflow]}
        className="mySwiper ArticleSlider"
        slidesPerView={"auto"}
        style={{ width: "94%" }}
      >
        {props.data.data.map((item, index) => (
          <SwiperSlide style={{ width: "fit-content" }} key={item.id}>
            <div className="rounded-lg md:rounded-[32px] overflow-hidden relative">
              <Image
                src={`${process.env.BASE_API}/web${API_PATHS.FILE}/${item.image_id}`}
                className="w-[172px] sm:w-[344px] h-[142px] sm:h-[284px]"
                width={174}
                height={142}
                alt=""
              />
              <div className="absolute bottom-0 right-0 w-full h-[27%] shadow-[0_-2px_4px_0_rgba(227,227,227,0.35)] backdrop-blur-3xl bg-[#27262660] flex flex-col items-start gap-1 md:gap-2 py-1 md:py-2 px-2 md:px-4">
                <span className="font-medium text-xs md:text-base text-[#FEFEFE] line-clamp-1">
                  {item.title}
                </span>
                <p className="text-[#FEFEFE] text-[10px] md:text-sm line-clamp-3">
                  {moment(item.created_at*1000).format("L")}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageArticleSlider;
