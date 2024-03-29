import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import SpecialOffersSliderCard from "@/components/cards/SpecialOffersSliderCard";

const SpecialOffersSlider = () => {
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
  return (
    <div className="discount_slider relative mt-[80px]">
      <h1 className="text-center text-[#2C5D83] text-24 my-8">
        کار چک می چه خدماتی ارائه می دهد
      </h1>
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
            <SpecialOffersSliderCard
              data={item}
              backgrounColorStyles={"bg-[#453983]"}
              borderColorStyle={"border-b-[#453983]"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOffersSlider;
