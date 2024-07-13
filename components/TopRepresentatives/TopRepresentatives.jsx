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
    console.log(props);
    return ( 
    <div className="discount_slider relative mt-[80px]">
      <h1 className="text-center text-[#2C5D83] text-24 my-8">مقالات</h1>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={18}
        slidesPerView={"auto"}
        effect="fade"
        pagination={{ clickable: true }}
        >
          {TopRepresentativesData.map((item, index) => (
            <SwiperSlide key={index} style={{width: 'fit-content'}}>
              <div className="border border-[#c0c0c0] flex flex-col">
                        <div className="size-[300px] bg-sky-950"></div>
                        <div className="p-6 flex flex-col gap-[6px] text-[#303030]">
                            <span className="font-semibold text-[20px]">نام نمایندگی: {item.name}</span>
                            <span className="text-[18px]">سابقه کار: {item.experience} سال</span>
                            <span className="text-[18px]">تعداد مراجعه کننده: {item.clients} نفر</span>
                            <span className="text-[18px]">میزان رضایت: {item.satisfaction}</span>
                        </div>
                    </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     );
}
 
export default TopRepresentatives;