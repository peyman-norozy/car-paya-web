'use client'
import React from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
const TopRepresentatives = (props) => {
    const TopRepresentativesData = [{
        image:"",
        name:"سامن",
        experience:"10+",
        clients:"+200",
        satisfaction:5
      },
      {
        image:"",
        name:"سامن",
        experience:"10+",
        clients:"+200",
        satisfaction:5
      },
      {
        image:"",
        name:"سامن",
        experience:"10+",
        clients:"+200",
        satisfaction:5
      },
      {
        image:"",
        name:"سامن",
        experience:"10+",
        clients:"+200",
        satisfaction:5
      },
      {
        image:"",
        name:"سامن",
        experience:"10+",
        clients:"+200",
        satisfaction:5
      }]
    return ( 
    <div className="discount_slider relative">
      <h1 className="text-center text-[#2C5D83] text-24 my-5 md:my-8">مقالات</h1>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={18}
        slidesPerView={"auto"}
        effect="fade"
        pagination={{ clickable: true }}
        >
          {TopRepresentativesData.map((item, index) => (
            <SwiperSlide key={index} style={{width: 'fit-content'}}>
              <div className="border border-[#c0c0c0] flex flex-col w-[200px] md:w-[300px] h-auto aspect-[300/480]">
                        <div className="size-[200px] md:size-[300px] aspect-auto bg-sky-950"></div>
                        <div className="p-2 md:p-6 flex flex-col gap-[6px] text-[#303030]">
                            <span className="font-semibold text-base md:text-[20px] line-clamp-1">نام نمایندگی: {item.name}</span>
                            <span className="text-sm md:text-[18px] line-clamp-1">سابقه کار: {item.experience} سال</span>
                            <span className="text-sm md:text-[18px] line-clamp-1">تعداد مراجعه کننده: {item.clients} نفر</span>
                            <span className="text-sm md:text-[18px] line-clamp-1">میزان رضایت: {item.satisfaction}</span>
                        </div>
                    </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     );
}
 
export default TopRepresentatives;