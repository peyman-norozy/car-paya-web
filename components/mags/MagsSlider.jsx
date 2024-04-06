import MagSliderCard from "./MagSliderCard";
import {  Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

const MagsSlider = (props) => {
  const { title } = props;
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="mag_slider mt-[4.7rem]">
      <h2 className="font-bold text-[22px] text-[#212B5E] px-[0.5rem] border-r-[3px] border-r-RED_500 mb-[1.5rem]">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        effect="fade"
        pagination={{ clickable: true }}
       spaceBetween={18}
       slidesPerView={4}
       className="swiper-horizontal"
      >
        {fakeData.map((item, index) => (
          <SwiperSlide key={index}>
            <MagSliderCard data={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
  );
};

export default MagsSlider;
