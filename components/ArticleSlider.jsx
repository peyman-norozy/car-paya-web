"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import ArticleSliderCard from "@/components/cards/ArticleSliderCard";

const ArticleSlider = (props) => {
  return (
    <div className="discount_slider relative mt-[80px]">
      <h1 className="text-center text-[#2C5D83] text-24 my-8">مقالات</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={18}
        slidesPerView={1}
        effect="fade"
        pagination={{ clickable: true }}
        breakpoints={{
          1000: {
            slidesPerView: 4,
          },
          748: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 2,
          },
        }}
      >
        {props.data.data.map((item, index) => (
          <SwiperSlide key={item.slug}>
            <ArticleSliderCard item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArticleSlider;
