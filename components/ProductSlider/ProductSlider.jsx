"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

const fakeData = [0, 0, 0];

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <div>
        <div className={"w-[344px] h-[344px]"}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {fakeData.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  className={"rounded-[5px]"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={"w-[344px] mt-[16px] batteries"}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={16}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {fakeData.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  className={"rounded-[5px]"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>sdfsd</div>
    </div>
  );
};

export default ProductSlider;
