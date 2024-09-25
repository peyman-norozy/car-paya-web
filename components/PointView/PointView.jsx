import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

const PointView = () => {
  const TopRepresentativesData = [
    {
      image: "",
      name: "سامن",
      experience: "10+",
      clients: "+200",
      satisfaction: 5,
    },
    {
      image: "",
      name: "سامن",
      experience: "10+",
      clients: "+200",
      satisfaction: 5,
    },
    {
      image: "",
      name: "سامن",
      experience: "10+",
      clients: "+200",
      satisfaction: 5,
    },
    {
      image: "",
      name: "سامن",
      experience: "10+",
      clients: "+200",
      satisfaction: 5,
    },
    {
      image: "",
      name: "سامن",
      experience: "10+",
      clients: "+200",
      satisfaction: 5,
    },
    {
      image: "",
      name: "سامن",
      experience: "10+",
      clients: "+200",
      satisfaction: 5,
    },
    {
      image: "",
      name: "سامن",
      experience: "10+",
      clients: "+200",
      satisfaction: 5,
    },
    {
      image: "",
      name: "سامن",
      experience: "10+",
      clients: "+200",
      satisfaction: 5,
    },
  ];
  return (
    <div className="discount_slider relative">
      <h1 className=" text-18 py-3 md:py-4 mt-4 font-medium">دیدگاه کارپایا</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={18}
        slidesPerView={"auto"}
        effect="fade"
        pagination={{ clickable: true }}
      >
        {TopRepresentativesData.map((item, index) => (
          <SwiperSlide key={index} style={{ width: "fit-content" }}>
            <div className="flex flex-col w-[300px] md:w-[416px] rounded-2xl shadow-[0_0_4px_0_rgba(152,152,152,0.4)] overflow-hidden my-1">
              <div className={"py-11 px-4 flex flex-col gap-4"}>
                <span>محمد محمدی</span>
                <p>
                  کارشناس عزیز همهٔ قسمت‌های ماشین رو به خوبی کارشناسی کرد و
                  عیب‌های ماشین رو با جزئیات بهمون گفت.کرد و عیب‌های ماشین رو با
                  جزئیات بهمون گفت.
                </p>
                <div className={"flex justify-between items-center"}>
                  <div>
                    <span>تاریخ:</span>
                    <span>1378/10/10</span>
                  </div>
                  <div className={"flex items-center gap-[3px]"}>
                    <Image
                      src={"/assets/icons/Star icon.svg"}
                      alt={"star icon"}
                      width={20}
                      height={20}
                    />
                    <Image
                      src={"/assets/icons/Star icon.svg"}
                      alt={"star icon"}
                      width={20}
                      height={20}
                    />
                    <Image
                      src={"/assets/icons/Star icon.svg"}
                      alt={"star icon"}
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PointView;
