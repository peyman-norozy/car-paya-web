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
          spaceBetween={24}
          className="mySwiper"
          style={{ padding: "5px" }}
          slidesPerView={"auto"}
        >
            <SwiperSlide style={{width: 'fit-content'}}>
              <div className="size-300 rounded-[32px] overflow-hidden relative">
                <Image src={mechanic} className="size-[300px]"/>
                <div className="absolute bottom-0 right-0 w-full h-2/5 border-t border-[#5D697A] backdrop-blur-md bg-[#3838387A] flex flex-col items-start gap-2 py-2 px-4">
                    <span className="font-bold text-base text-[#FEFEFE]">سرویس دوره ای</span>
                    <p className="text-[#FEFEFE] text-sm line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width: 'fit-content'}}>
              <div className="size-300 rounded-[32px] overflow-hidden relative">
                <Image src={mechanic} className="size-[300px]"/>
                <div className="absolute bottom-0 right-0 w-full h-2/5 border-t border-[#5D697A] backdrop-blur-md bg-[#3838387A] flex flex-col items-start gap-2 py-2 px-4">
                    <span className="font-bold text-base text-[#FEFEFE]">سرویس دوره ای</span>
                    <p className="text-[#FEFEFE] text-sm line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width: 'fit-content'}}>
              <div className="size-300 rounded-[32px] overflow-hidden relative">
                <Image src={mechanic} className="size-[300px]"/>
                <div className="absolute bottom-0 right-0 w-full h-2/5 border-t border-[#5D697A] backdrop-blur-md bg-[#3838387A] flex flex-col items-start gap-2 py-2 px-4">
                    <span className="font-bold text-base text-[#FEFEFE]">سرویس دوره ای</span>
                    <p className="text-[#FEFEFE] text-sm line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width: 'fit-content'}}>
              <div className="size-300 rounded-[32px] overflow-hidden relative">
                <Image src={mechanic} className="size-[300px]"/>
                <div className="absolute bottom-0 right-0 w-full h-2/5 border-t border-[#5D697A] backdrop-blur-md bg-[#3838387A] flex flex-col items-start gap-2 py-2 px-4">
                    <span className="font-bold text-base text-[#FEFEFE]">سرویس دوره ای</span>
                    <p className="text-[#FEFEFE] text-sm line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width: 'fit-content'}}>
              <div className="size-300 rounded-[32px] overflow-hidden relative">
                <Image src={mechanic} className="size-[300px]"/>
                <div className="absolute bottom-0 right-0 w-full h-2/5 border-t border-[#5D697A] backdrop-blur-md bg-[#3838387A] flex flex-col items-start gap-2 py-2 px-4">
                    <span className="font-bold text-base text-[#FEFEFE]">سرویس دوره ای</span>
                    <p className="text-[#FEFEFE] text-sm line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{width: 'fit-content'}}>
              <div className="size-300 rounded-[32px] overflow-hidden relative">
                <Image src={mechanic} className="size-[300px]"/>
                <div className="absolute bottom-0 right-0 w-full h-2/5 border-t border-[#5D697A] backdrop-blur-md bg-[#3838387A] flex flex-col items-start gap-2 py-2 px-4">
                    <span className="font-bold text-base text-[#FEFEFE]">سرویس دوره ای</span>
                    <p className="text-[#FEFEFE] text-sm line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                </div>
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
     );
}
 
export default HomePageArticleSlider;