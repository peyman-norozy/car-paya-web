"use client";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import sliderCar from "@/public/assets/images/sliderCar.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_PATHS } from "@/configs/routes.config";
import Link from "next/link";

const HomePageMainSlider = () => {
  const [newSlider, setNewSlider] = useState([]);
  useEffect(() => {
    axios
      .get(
        process.env.BASE_API +
          "/web" +
          API_PATHS.SLIDERS +
          `?type=${window.innerWidth > 768 ? "DESKTOP" : "MOBILE"}`
      )
      .then((res) => {
        // const m = res.data.data;
        // m.push(res.data.data);
        // m.push({});
        setNewSlider(res.data.data);
        // setSliderShowState(true)
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-full home_banner_slider overflow-hidden md:rounded-[32px] relative">
      <Swiper
        cssMode={true}
        autoplay={true}
        pagination={{ clickable: true }}
        click
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {newSlider.map((item, index) => (
          <SwiperSlide className="relative" key={"mainSlider" + index}>
            <Image
              src={
                process.env.BASE_API +
                "/web" +
                API_PATHS.FILE +
                "/" +
                item.image_id
              }
              width={1600}
              height={400}
              alt={"slider"}
              className="w-full aspect-[1344/750] sm:aspect-[4/1]"
            />
            {item.description && (
              <div className="w-1/2 sm:w-2/5 lg:w-1/3 absolute bg-[#5D697A52] backdrop-blur-[16px] h-fit left-4 lg:left-8 top-4 lg:top-8 flex flex-col z-[2] gap-2 lg:gap-6 p-2 sm:p-4 rounded-lg">
                <span className="text-[#FEFEFE] text-12 lg:text-16 font-bold">
                  {item.description}
                </span>
                <Link
                  href={item.link}
                  className="bg-[#F66B34] text-[rgb(254,254,254)] px-2 lg:px-4 py-[6px] lg:py-[8px] w-fit rounded-[6px] self-end text-[10px] lg:text-xs"
                >
                  مشاهده بیشتر
                </Link>
              </div>
            )}
          </SwiperSlide>
        ))}
        {/* <SwiperSlide className="relative">
                    <Image src={sliderCar} className="w-full aspect-[1344/574]"/>
                    <div className="w-1/2 sm:w-2/5 lg:w-1/3 absolute bg-[#5D697A52] backdrop-blur-[16px] h-fit left-4 lg:left-8 top-4 lg:top-8 flex flex-col z-[2] gap-2 lg:gap-6 p-2 sm:p-4">
                        <span className="text-[#FEFEFE] text-12 lg:text-16 font-bold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                        <button className="bg-[#F66B34] text-[rgb(254,254,254)] px-2 lg:px-4 py-[6px] lg:py-[8px] w-fit rounded-[6px] self-end text-[10px] lg:text-xs">مشاهده بیشتر</button>
                    </div>
                </SwiperSlide>  */}
      </Swiper>
      {/*<Image*/}
      {/*  src={"/assets/icons/Rectangle.svg"}*/}
      {/*  alt={"bullet background"}*/}
      {/*  width={200}*/}
      {/*  height={13}*/}
      {/*  className={*/}
      {/*    "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[20px] z-[10]"*/}
      {/*  }*/}
      {/*/>*/}
    </div>
  );
};

export default HomePageMainSlider;
