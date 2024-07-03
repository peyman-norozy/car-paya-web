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
const ProductShowSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <div className={"flex flex-col items-center"}>
        <div
          className={
            "size460:w-[344px] w-[280px] size490:h-[244px] h-[250px] flex justify-center"
          }
        >
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
                <Image
                  src={"/assets/images/lambo.png"}
                  alt={"slider image"}
                  className={"rounded-[5px]"}
                  width={344}
                  height={344}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={"size460:w-[344px] w-[280px] mt-[16px] batteries"}>
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
                <Image
                  src={"/assets/images/lambo.png"}
                  alt={"slider image"}
                  className={"rounded-[5px]"}
                  width={344}
                  height={344}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductShowSlider;
