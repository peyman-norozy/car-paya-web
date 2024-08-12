'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";

const HomePageArticleSlider = (props) => {

    return ( 
      <div>
        <Swiper
          spaceBetween={16}
          breakpoints={{
            768: {
              spaceBetween: 24
            }
          }}
          className="mySwiper ArticleSlider"
          slidesPerView={"auto"}
          style={{width: "auto"}}
        >
          {props.data.data.map((item , index)=>(
            <SwiperSlide style={{width: 'fit-content'}} key={item.id}>
              <div className="size-300 rounded-2xl md:rounded-[32px] overflow-hidden relative">
                <Image src={`${process.env.BASE_API}/web${API_PATHS.FILE}/${item.image_id}`} className="size-[200px] md:size-[300px]" width={300} height={300} alt=""/>
                <div className="absolute bottom-0 right-0 w-full h-2/5 border-t border-[#5D697A] backdrop-blur-md bg-[#3838387A] flex flex-col items-start gap-1 md:gap-2 py-1 md:py-2 px-2 md:px-4">
                    <span className="font-bold text-sm md:text-base text-[#FEFEFE] line-clamp-1">{item.title}</span>
                    <p className="text-[#FEFEFE] text-xs md:text-sm line-clamp-3">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     );
}
 
export default HomePageArticleSlider;