"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import ProductSliderCard from "@/components/cards/ProductSliderCard/ProductSliderCard";

const fakeArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const ProductSlider = () => {
  return (
    <div className="product_slider relative mt-[80px] pb-[56px]">
      <h1 className="text-right text-[#2C5D83] text-24 py-4 mb-8 border-r-2 border-[#2C5D83] pr-2">
        محصولات چک کار می
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={18}
        slidesPerView={"auto"}
        effect="fade"
        pagination={{ clickable: true }}
      >
        {fakeArray.map((item, index) => (
          <SwiperSlide
            key={item.slug}
            style={{ width: "auto", height: "auto" }}
          >
            <ProductSliderCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
