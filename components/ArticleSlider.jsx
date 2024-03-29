import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import ArticleSliderCard from "@/components/cards/ArticleSliderCard";

const carProductsData = [
  {
    discount: "تخفیف ۲۰٪",
    imgSrc: "/assets/images/hiclipart.com (2).png",
    alt: "oil",
    title: "روغن موتور بوش مدل لاکچری SN حجم ۴ لیتر",
    newPrice: "",
    oldPrice: "",
  },
  {
    discount: "تخفیف ۲۰٪",
    imgSrc: "/assets/images/hiclipart.com (3).png",
    alt: "oil",
    title: "روغن موتور بوش مدل لاکچری SN حجم ۴ لیتر",
    newPrice: "",
    oldPrice: "",
  },
  {
    discount: "تخفیف ۲۰٪",
    imgSrc: "/assets/images/hiclipart.com.png",
    alt: "oil",
    title: "فیلتر هوا جک 3s 65746",
    newPrice: "",
    oldPrice: "",
  },
  {
    discount: "تخفیف ۲۰٪",
    imgSrc: "/assets/images/hiclipart.com (1).png",
    alt: "oil",
    title: "فیلتر هوا جک 3s 65746",
    newPrice: "",
    oldPrice: "",
  },
  {
    discount: "تخفیف ۲۰٪",
    imgSrc: "/assets/images/hiclipart.com (1).png",
    alt: "oil",
    title: "فیلتر هوا جک 3s 65746",
    newPrice: "",
    oldPrice: "",
  },
  {
    discount: "تخفیف ۲۰٪",
    imgSrc: "/assets/images/hiclipart.com (1).png",
    alt: "oil",
    title: "فیلتر هوا جک 3s 65746",
    newPrice: "",
    oldPrice: "",
  },
  {
    discount: "تخفیف ۲۰٪",
    imgSrc: "/assets/images/hiclipart.com (1).png",
    alt: "oil",
    title: "فیلتر هوا جک 3s 65746",
    newPrice: "",
    oldPrice: "",
  },
];

const ArticleSlider = () => {
  return (
    <div className="discount_slider relative mt-[80px]">
      <h1 className="text-center text-[#2C5D83] text-24 my-8">مقالات</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={18}
        slidesPerView={1}
        effect="fade"
        pagination={{ clickable: true }}
        breakpoints={{
          1000: {
            slidesPerView: 4,
          },
          748: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 2,
          },
        }}
      >
        {carProductsData.map((item, index) => (
          <SwiperSlide key={item.imgSrc + index}>
            <ArticleSliderCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArticleSlider;
