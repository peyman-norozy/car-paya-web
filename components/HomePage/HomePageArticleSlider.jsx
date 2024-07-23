"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import mechanic from "@/public/assets/images/mechanic.jpg"
const HomePageArticleSlider = () => {
    return ( 
        <div className="">
        <Swiper
          spaceBetween={16}
          breakpoints={{
            768: {
              spaceBetween: 24
            }
          }}
          className="mySwiper ArticleSlider"
          slidesPerView={"auto"}
        >
            <SwiperSlide style={{width: 'fit-content'}}>
              <div className="size-300 rounded-2xl md:rounded-[32px] overflow-hidden relative">
                <Image src={mechanic} className="size-[200px] md:size-[300px]"/>
                <div className="absolute bottom-0 right-0 w-full h-2/5 border-t border-[#5D697A] backdrop-blur-md bg-[#3838387A] flex flex-col items-start gap-1 md:gap-2 py-1 md:py-2 px-2 md:px-4">
                    <span className="font-bold text-sm md:text-base text-[#FEFEFE]">سرویس دوره ای</span>
                    <p className="text-[#FEFEFE] text-xs md:text-sm line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width: 'fit-content'}}>
              <div className="size-300 rounded-2xl md:rounded-[32px] overflow-hidden relative">
                <Image src={mechanic} className="size-[200px] md:size-[300px]"/>
                <div className="absolute bottom-0 right-0 w-full h-2/5 border-t border-[#5D697A] backdrop-blur-md bg-[#3838387A] flex flex-col items-start gap-1 md:gap-2 py-1 md:py-2 px-2 md:px-4">
                    <span className="font-bold text-sm md:text-base text-[#FEFEFE]">سرویس دوره ای</span>
                    <p className="text-[#FEFEFE] text-xs md:text-sm line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width: 'fit-content'}}>
              <div className="size-300 rounded-2xl md:rounded-[32px] overflow-hidden relative">
                <Image src={mechanic} className="size-[200px] md:size-[300px]"/>
                <div className="absolute bottom-0 right-0 w-full h-2/5 border-t border-[#5D697A] backdrop-blur-md bg-[#3838387A] flex flex-col items-start gap-1 md:gap-2 py-1 md:py-2 px-2 md:px-4">
                    <span className="font-bold text-sm md:text-base text-[#FEFEFE]">سرویس دوره ای</span>
                    <p className="text-[#FEFEFE] text-xs md:text-sm line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width: 'fit-content'}}>
              <div className="size-300 rounded-2xl md:rounded-[32px] overflow-hidden relative">
                <Image src={mechanic} className="size-[200px] md:size-[300px]"/>
                <div className="absolute bottom-0 right-0 w-full h-2/5 border-t border-[#5D697A] backdrop-blur-md bg-[#3838387A] flex flex-col items-start gap-1 md:gap-2 py-1 md:py-2 px-2 md:px-4">
                    <span className="font-bold text-sm md:text-base text-[#FEFEFE]">سرویس دوره ای</span>
                    <p className="text-[#FEFEFE] text-xs md:text-sm line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                </div>
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
     );
}
 
export default HomePageArticleSlider;