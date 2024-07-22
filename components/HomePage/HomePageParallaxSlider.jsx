"use client";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import blackCar from "@/public/assets/images/blackCar.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useCallback, useRef } from "react";

const HomePageParallaxSlider = () => {
    const sliderRef = useRef()
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

  return (
    <div className="w-full home_paralox_slider overflow-hidden rounded-[32px]">
      <Swiper
      ref={sliderRef}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          height:"440px"
        }}
        speed={1000}
        parallax={true}
        modules={[Autoplay, Parallax]}
        className="mySwiper relative"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image": `url(${blackCar.src})`,
          }}
          data-swiper-parallax="-10%"
        ></div>
        <div className="absolute bottom-6 right-[150px] flex gap-4">
            <button className="border border-[#F66B34] rounded-md bg-[#F66B3429] flex justify-center items-center size-14 z-[2]" onClick={handlePrev}><i className="cc-arrow-up text-2xl text-[#F66B34] rotate-90"/></button>
            <button className="border border-[#F66B34] rounded-md bg-[#F66B3429] flex justify-center items-center size-14 z-[2]" onClick={handleNext}><i className="cc-arrow-up text-2xl text-[#F66B34] rotate-[270deg]"/></button>
        </div>
        <SwiperSlide>
            <div className="w-[300px] p-4 h-full backdrop-blur-lg bg-[#5D697A52] rounded-r-[32px]">
                <div className="text-2xl font-semibold" data-swiper-parallax="-200">
                    چرا کار چک؟!
                </div>
                <div className="mt-6" data-swiper-parallax="-100">
                    <p className="text-base">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                    در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                    نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-[300px] p-4 h-full backdrop-blur-lg bg-[#5D697A52] rounded-r-[32px]">
                <div className="text-2xl font-semibold" data-swiper-parallax="-200">
                    چرا کار چک؟!
                </div>
                <div className="mt-6" data-swiper-parallax="-100">
                    <p className="text-base">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                    در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                    نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-[300px] p-4 h-full backdrop-blur-lg bg-[#5D697A52] rounded-r-[32px]">
                <div className="text-2xl font-semibold" data-swiper-parallax="-200">
                    چرا کار چک؟!
                </div>
                <div className="mt-6" data-swiper-parallax="-100">
                    <p className="text-base">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                    در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                    نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePageParallaxSlider;
