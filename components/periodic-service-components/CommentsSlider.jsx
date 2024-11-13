"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const CommentsSlider = (props) => {
  return (
    <div className="flex flex-col gap-4 bg-[#F8F8F8] p-6 overflow-hidden">
      <span className="text-sm sm:text-xl font-bold text-black text-start px-4">
        دیدگاه کارپایا
      </span>
      <Swiper
        spaceBetween={16}
        breakpoints={{
          768: {
            spaceBetween: 24,
          },
        }}
        className="mySwiper"
        slidesPerView={"auto"}
        style={{
          padding: "8px",
        }}
        // centeredSlides={true}
        // loop={true}
      >
        <SwiperSlide style={{ width: "fit-content" }}>
          <div className="shadow-[0_0_6px_0_rgba(125,125,125,0.5)] bg-white rounded-2xl px-3 py-8 flex flex-col gap-4 w-[360px]">
            <div className="flex items-center justify-between">
              <span className="font-medium text-[#0F0F0F]">محمد محمدی</span>
              <div className="flex items-center gap-1">
                <span className="font-medium pt-1">4.2</span>
                <i className="cc-star text-lg text-[#FDB022]" />
              </div>
            </div>
            <p className="font-medium text-[#4B4B4B]">
              کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های
              ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات
              بهمون
            </p>
            <span className="w-full text-end font-medium">
              تاریخ: 1378/10/10
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <div className="shadow-[0_0_6px_0_rgba(125,125,125,0.5)] bg-white rounded-2xl px-3 py-8 flex flex-col gap-4 w-[360px]">
            <div className="flex items-center justify-between">
              <span className="font-medium text-[#0F0F0F]">محمد محمدی</span>
              <div className="flex items-center gap-1">
                <span className="font-medium pt-1">4.2</span>
                <i className="cc-star text-lg text-[#FDB022]" />
              </div>
            </div>
            <p className="font-medium text-[#4B4B4B]">
              کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های
              ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات
              بهمون
            </p>
            <span className="w-full text-end font-medium">
              تاریخ: 1378/10/10
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <div className="shadow-[0_0_6px_0_rgba(125,125,125,0.5)] bg-white rounded-2xl px-3 py-8 flex flex-col gap-4 w-[360px]">
            <div className="flex items-center justify-between">
              <span className="font-medium text-[#0F0F0F]">محمد محمدی</span>
              <div className="flex items-center gap-1">
                <span className="font-medium pt-1">4.2</span>
                <i className="cc-star text-lg text-[#FDB022]" />
              </div>
            </div>
            <p className="font-medium text-[#4B4B4B]">
              کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های
              ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات
              بهمون
            </p>
            <span className="w-full text-end font-medium">
              تاریخ: 1378/10/10
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <div className="shadow-[0_0_6px_0_rgba(125,125,125,0.5)] bg-white rounded-2xl px-3 py-8 flex flex-col gap-4 w-[360px]">
            <div className="flex items-center justify-between">
              <span className="font-medium text-[#0F0F0F]">محمد محمدی</span>
              <div className="flex items-center gap-1">
                <span className="font-medium pt-1">4.2</span>
                <i className="cc-star text-lg text-[#FDB022]" />
              </div>
            </div>
            <p className="font-medium text-[#4B4B4B]">
              کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های
              ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات
              بهمون
            </p>
            <span className="w-full text-end font-medium">
              تاریخ: 1378/10/10
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <div className="shadow-[0_0_6px_0_rgba(125,125,125,0.5)] bg-white rounded-2xl px-3 py-8 flex flex-col gap-4 w-[360px]">
            <div className="flex items-center justify-between">
              <span className="font-medium text-[#0F0F0F]">محمد محمدی</span>
              <div className="flex items-center gap-1">
                <span className="font-medium pt-1">4.2</span>
                <i className="cc-star text-lg text-[#FDB022]" />
              </div>
            </div>
            <p className="font-medium text-[#4B4B4B]">
              کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های
              ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات
              بهمون
            </p>
            <span className="w-full text-end font-medium">
              تاریخ: 1378/10/10
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CommentsSlider;
