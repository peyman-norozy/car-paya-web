"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import SpecialOffersSliderCard from "@/components/cards/SpecialOffersSliderCard";

const SpecialOffersSlider = (props) => {
  return (
    <div className="discount_slider relative">
      <h1 className="text-center text-[#2C5D83] text-24 my-8">
        کار چک می چه خدماتی ارائه می دهد
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={18}
        slidesPerView={"auto"}
        effect="fade"
        pagination={{ clickable: true }}
      >
        {props.data.map((item, index) => (
          <SwiperSlide key={item.imgSrc + index} style={{width:"auto",height:"auto"}}>
            <SpecialOffersSliderCard
              data={item}
              backgrounColorStyles={"bg-[#453983]"}
              borderColorStyle={"border-b-[#453983]"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOffersSlider;
