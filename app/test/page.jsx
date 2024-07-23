'use client'
import HomePageMainSlider from "@/components/HomePage/HomePageMainSlider";
import Image from "next/image";
import bmw from "@/public/assets/images/bmw.png"
import carachar from "@/public/assets/images/carachar.png"
import { useEffect, useRef, useState } from "react";
import HomePageParallaxSlider from "@/components/HomePage/HomePageParallaxSlider";
import HomePageArticleSlider from "@/components/HomePage/HomePageArticleSlider";

const HomePage = () => {
    const array10 = [1,2,3,4,5,6,7,8,9,10]
    const [openService,setOpenService] = useState(false)
    const serviceRef = useRef()

    useEffect(()=>{
        console.log(serviceRef.current.offsetHeight);
    },[])
    return ( 
        <div className="flex flex-col gap-4 lg:gap-9 w-full max-w-[1676px] md:p-12 m-auto">
                <div className="bg-[#383838A3] h-[570px] rounded-2xl w-[360px] fixed top-[123px] right-auto z-[2] backdrop-blur-[16px] py-4 px-4 hidden lg:flex flex-col gap-4">
                    <span className="text-[#FEFEFE] text-20 font-bold text-center">ثبت وسیله نقلیه</span>
                    <div className="rounded-lg bg-[#F66B3414] flex justify-between p-1">
                        <button className="bg-[#F66B34] rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#FEFEFE] font-medium text-14">خودرو</button>
                        <div className="my-2 w-[1px] bg-[#F66B34]"></div>
                        <button className="rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#F66B34] font-medium text-14">موتورسیکلت</button>
                        <div className="my-2 w-[1px] bg-[#F66B34]"></div>
                        <button className="rounded-[4px] w-[100px] h-10 flex justify-center items-center text-[#F66B34] font-medium text-14">وسیله سنگین</button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-center font-bold text-[#FEFEFE]">انتخاب برند</span>
                        <div className="flex gap-2 py-1 px-4 text-[#B0B0B0] bg-[#B0B0B01F] rounded-lg">
                            <i className="cc-search text-xl"/>
                            <input className="outline-none text-14 bg-[#ffffff01]" placeholder="جستجو..."/>
                        </div>
                        <div className="h-[336px] overflow-y-scroll">
                            <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                            {array10.map((item,index)=>(
                                <div className="flex flex-col items-center gap-2" key={index}>
                                    <Image src={bmw} width={64} height={64}/>
                                    <span className="text-white font-bold">بی ام وه</span>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                <HomePageMainSlider/>
                {/* right-[calc(50%-790px)] */}
            <div className="flex gap-6 justify-end">
                <div className="flex flex-col gap-4 lg:gap-9 w-full lg:w-[calc(100%-384px)]">
                    <div className={`transition-all duration-700 overflow-y-hidden mx-4 md:mx-0 h-[180px] sm:h-[260px]`} style={{height:`${openService?`${serviceRef.current.offsetHeight}px`:""}`}}>
                        <div className="grid grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6" ref={serviceRef}>
                            {array10.map((item,index)=>(
                                <div className="w-full p-3 sm:p-4 flex flex-col bg-[#E7E7E7] items-center gap-2 sm:gap-3 rounded-lg" key={index} >
                                    <Image className="size-8  sm:size-12" src={carachar} height={48} width={48} alt="carachar"/>
                                    <span className="text-12 sm:text-base text-[#0E0E0E]">کارشناسی</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="text-[#F66B34] flex items-center gap-2 mx-auto" onClick={()=>{setOpenService(!openService)}}><span className="font-medium text-14 sm:text-base">مشاهده {openService?"کمتر":"بیشتر"}</span><i className={`cc-arrow-down text-lg sm:text-2xl transition-transform duration-700 ${openService?"rotate-180":"rotate-0"}`}/></button>
                    <HomePageParallaxSlider/>
                    <span className="text-2xl font-bold text-[#383838] text-center">مقالات</span>
                    <HomePageArticleSlider/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;