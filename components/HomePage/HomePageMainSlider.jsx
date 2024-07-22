'use client'
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide ,Swiper} from "swiper/react";
import sliderCar from "@/public/assets/images/sliderCar.png"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Image from "next/image";

const HomePageMainSlider = () => {
    return ( 
        <div className="w-full home_banner_slider overflow-hidden rounded-[32px]">
                <Swiper
                cssMode={true}
                autoplay={true}
                pagination={{clickable: true}}
                click
                mousewheel={true}
                keyboard={true}
                modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
                >
                <SwiperSlide className="relative">
                    <Image src={sliderCar} className="w-full aspect-[1344/574]"/>
                    <div className="w-1/3 absolute bg-[#5D697A52] backdrop-blur-[16px] h-fit left-8 top-8 flex flex-col z-[2] gap-6 p-4 rounded-lg">
                    <span className="text-[#FEFEFE] font-bold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                    <button className="bg-[#F66B34] text-[rgb(254,254,254)] px-4 py-[8px] w-fit rounded-[6px] self-end text-xs">مشاهده بیشتر</button>
                </div>
                </SwiperSlide> 
                <SwiperSlide className="relative">
                    <Image src={sliderCar} className="w-full aspect-[1344/574]"/>
                    <div className="w-1/3 absolute bg-[#5D697A52] backdrop-blur-[16px] h-fit left-8 top-8 flex flex-col z-[2] gap-6 p-4 rounded-lg">
                    <span className="text-[#FEFEFE] font-bold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                    <button className="bg-[#F66B34] text-[rgb(254,254,254)] px-4 py-[8px] w-fit rounded-[6px] self-end text-xs">مشاهده بیشتر</button>
                </div>
                </SwiperSlide> 
                <SwiperSlide className="relative">
                    <Image src={sliderCar} className="w-full aspect-[1344/574]"/>
                    <div className="w-1/3 absolute bg-[#5D697A52] backdrop-blur-[16px] h-fit left-8 top-8 flex flex-col z-[2] gap-6 p-4 rounded-lg">
                    <span className="text-[#FEFEFE] font-bold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                    <button className="bg-[#F66B34] text-[rgb(254,254,254)] px-4 py-[8px] w-fit rounded-[6px] self-end text-xs">مشاهده بیشتر</button>
                </div>
                </SwiperSlide> 
            </Swiper>
        </div>
     );
}
 
export default HomePageMainSlider;