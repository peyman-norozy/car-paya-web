"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";
import moment from "jalali-moment";
import { EffectCoverflow } from "swiper/modules";
import Link from "next/link";

const HomePageArticleSlider = (props) => {
  moment.locale("fa");
  if (props?.data?.error?.code === 404) {
    return "";
  }
  console.log(props);
  return (
    <div className="flex flex-col">
      <span className="text-sm sm:text-xl font-bold text-black text-start px-4 mb-3">
        تازه های خودرو
      </span>
      <Swiper
        spaceBetween={8}
        // centeredSlides={true}
        breakpoints={{
          768: {
            spaceBetween: 16,
          },
        }}
        effect={"fade"}
        // effect={"coverflow"}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: false,
        //   scale: 0.85,
        // }}
        // loop={true}
        modules={[EffectCoverflow]}
        className="mySwiper ArticleSlider"
        slidesPerView={"auto"}
        style={{
          width: "calc(100% - 32px)",
          marginRight: "4px",
          marginLeft: "16px",
        }}
      >
        {props?.data?.map((item, index) => (
          <SwiperSlide style={{ width: "fit-content" }} key={item.id}>
            <Link href={item.permalink}>
              <div className="rounded-lg md:rounded-[8px] overflow-hidden relative">
                <Image
                  src={item["featured_image"]}
                  className="w-[172px] sm:w-[303px] h-[142px] sm:h-[220px]"
                  width={174}
                  height={142}
                  alt=""
                />
                <div className="absolute bottom-0 right-0 w-full h-[27%] shadow-[0_-2px_4px_0_rgba(227,227,227,0.35)] backdrop-blur-3xl bg-[#27262660] flex flex-col items-start gap-1 md:gap-2 py-1 md:py-2 px-2 md:px-4">
                  <span className="font-medium text-xs md:text-base text-[#FEFEFE] line-clamp-1">
                    {item.title}
                  </span>
                  <p className="text-[#FEFEFE] text-[10px] md:text-sm line-clamp-3">
                    {item.date}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageArticleSlider;
