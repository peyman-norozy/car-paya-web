import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, EffectCoverflow, Navigation, Pagination, Scrollbar} from "swiper/modules";
import CustomersCommentCard from "@/components/vehicle-verification/CustomersCommentCard";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const CustomersComment = () => {
    const data = [
        {name :'محمد محمدی' , description :'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده'},
        {name :'محمد محمدی' , description :'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده'},
        {name :'محمد محمدی' , description :'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده'},
        {name :'محمد محمدی' , description :'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده'},
        {name :'محمد محمدی' , description :'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده'},
        {name :'محمد محمدی' , description :'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده'},
    ]
    return (
        <div className="verification_slider w-full m-auto">
            <h2 className="font-bold text-18 size882:text-[22px] text-center mb-[1.5rem]">نظرات مشتریان</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y , EffectCoverflow]}
                effect="coverflow"
                pagination={{clickable: true}}
                spaceBetween={0}
                slidesPerView={3}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    scale: 0.8,
                    slideShadows: false,
                    modifier: 1,
                    depth: 10,
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CustomersCommentCard data={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CustomersComment;