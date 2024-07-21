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
        <div className="w-full home_banner_slider">
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
                <SwiperSlide>
                    <Image src={sliderCar} className="w-full aspect-[1344/574] rounded-[32px]"/>
                </SwiperSlide> 
                <SwiperSlide>
                 <Image src={sliderCar} className="w-full aspect-[1344/574] rounded-[32px]"/>
                </SwiperSlide> 
                <SwiperSlide>
                    <Image src={sliderCar} className="w-full aspect-[1344/574] rounded-[32px]"/>
                </SwiperSlide> 
            </Swiper>
        </div>
     );
}
 
export default HomePageMainSlider;