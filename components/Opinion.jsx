import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const OpinionData = [
  {
    name: "محمد محمدی",
    description:
      "کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات بهمون",
    date: "1378/10/10",
  },
  {
    name: "محمد محمدی",
    description:
      "کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات بهمون",
    date: "1378/10/10",
  },
  {
    name: "محمد محمدی",
    description:
      "کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات بهمون",
    date: "1378/10/10",
  },
  {
    name: "محمد محمدی",
    description:
      "کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات بهمون",
    date: "1378/10/10",
  },
  {
    name: "محمد محمدی",
    description:
      "کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات بهمون",
    date: "1378/10/10",
  },
  {
    name: "محمد محمدی",
    description:
      "کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات بهمون",
    date: "1378/10/10",
  },
  {
    name: "محمد محمدی",
    description:
      "کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات بهمون",
    date: "1378/10/10",
  },
  {
    name: "محمد محمدی",
    description:
      "کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و عیب‌های ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با جزئیات بهمون",
    date: "1378/10/10",
  },
];

const Opinion = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#F8F8F8] pt-[24px]">
      <span className="text-sm sm:text-xl font-bold text-black text-start px-4">
        دیدگاه کارپایا
      </span>
      <Swiper
        spaceBetween={16}
        breakpoints={{
          768: {
            spaceBetween: 24,
            marginRight: "4px",
            paddingBottom: "4px",
          },
        }}
        className="mySwiper ArticleSlider"
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // کلاس سفارشی برای pagination
          renderBullet: (index, className) =>
            `<span class="${className}" style="
              background-color: #F66B34;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              margin: 0 4px;
              display: inline-block;">
            </span>`,
        }}
        modules={[Pagination]}
        style={{
          width: "100%",
          paddingRight: "4px",
          paddingLeft: "4px",
        }}
        // centeredSlides={true}
        // loop={true}
      >
        {OpinionData?.map((item) => (
          <SwiperSlide style={{ width: "fit-content" }} key={item.id}>
            <div className="w-[242px] h-[154px] sm:w-[359px]  sm:h-[217px] rounded-2xl md:rounded-[32px] overflow-hidden flex flex-col items-center gap-[10px] bg-[#FFFFFF] shadow-[0_0_8px_0_rgba(162,162,162,0.25)] lg:py-[34px] py-[20px] px-3 sm:p-4">
              <div className={"flex justify-between w-full"}>
                <span className={"text-[#0F0F0F] font-bold lg-text-16 text-14"}>
                  {item.name}
                </span>
                <div className={"flex items-center gap-2"}>
                  <span className={"lg:text-16 text-12 font-medium"}>4.2</span>
                  <i className={"cc-star text-[#FDB022] text-20"} />
                </div>
              </div>
              <p className={"lg:text-16 text-12"}>{item.description}</p>
              <div className={"w-full flex justify-end gap-2"}>
                <span className={"lg:text-16 text-12"}>تاریخ:</span>
                <span className={"lg:text-16 text-12"}>{item.date}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination" style={{ textAlign: "center" }}></div>
    </div>
  );
};

export default Opinion;
