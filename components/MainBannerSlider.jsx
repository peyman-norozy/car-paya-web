import Image from "next/image";
import Link from "next/link";
import {Fragment, useEffect, useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Keyboard, Mousewheel, Navigation, Pagination,} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {API_PATHS} from "@/configs/routes.config";

const MainBannerSlider = () => {
    const [newSlider, setNewSlider] = useState([]);
    const [sliderShowState, setSliderShowState] = useState(false)

    useEffect(() => {
        setSliderShowState(false)
        axios
            .get(process.env.BASE_API + "/web" + API_PATHS.SLIDERS)
            .then((res) => {
                // const m = res.data.data;
                // m.push(res.data.data);
                // m.push({});
                console.log(res.data.data);
                setNewSlider(res.data.data);
                setSliderShowState(true)
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="main_banner_slider">
            <Swiper
                cssMode={true}
                navigation={true}
                autoplay={true}
                pagination={{clickable: true}}
                click
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                {
                    !sliderShowState ?
                        <SwiperSlide>
                            <div className={`w-full h-[405px] flex justify-center items-center py-8 bg-stone-300`}>
                            </div>
                        </SwiperSlide> :
                        newSlider.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Fragment>
                                    <Link href={"/contact-us"} className={`block w-full h-[405px]`}>
                                        <Image
                                            src={
                                                process.env.BASE_API +
                                                "/web" +
                                                API_PATHS.FILE +
                                                "/" +
                                                item.image_id
                                            }
                                            alt={item.title}
                                            priority={true}
                                            width={900}
                                            height={900}
                                        />
                                    </Link>
                                </Fragment>
                            </SwiperSlide>
                        ))

                }
            </Swiper>
        </div>
    );
};

export default MainBannerSlider;
