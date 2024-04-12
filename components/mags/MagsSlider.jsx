'use client'
import MagSliderCard from "./MagSliderCard";
import {  Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

const MagsSlider = (props) => {
  const { title , data } = props;
  return (
    <div className="mag_slider mt-[4.7rem]">
      <h2 className="font-bold text-[22px] text-[#212B5E] px-[0.5rem] border-r-[3px] border-r-RED_500 mb-[1.5rem]">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        effect="fade"
        pagination={{ clickable: true }}
       spaceBetween={10}
       slidesPerView={2}
       className="swiper-horizontal"
       breakpoints={{
        650 : {slidesPerView: 2.5},
        900 : {slidesPerView : 3},
        1200 : {slidesPerView : 3.5},
        1340: {slidesPerView : 4}
       }}
      >
        {data &&data.map((item, index) => (
          <SwiperSlide key={index}>
            <MagSliderCard data={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
  );
};

export default MagsSlider;
