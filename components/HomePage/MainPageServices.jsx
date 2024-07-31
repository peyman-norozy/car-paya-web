'use client'
import { useRef, useState } from "react";
import carachar from "@/public/assets/images/carachar.png"
import Image from "next/image";
import { serviceData } from "@/staticData/data";
import Link from "next/link";

const MainPageServices = (props) => {
    const serviceRef = useRef()
    const [openService,setOpenService] = useState(false)

    return ( 
        <>
        <div className={`transition-all duration-700 overflow-y-hidden mx-4 md:mx-0 h-[270px] sm:h-[260px]`} style={{height:`${openService?`${serviceRef.current.offsetHeight}px`:""}`}}>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6" ref={serviceRef}>
                {serviceData.map((item,index)=>(
                    <Link href={item.href}>
                        <div className="w-full p-3 sm:p-4 flex flex-col bg-[#E7E7E7] items-center gap-2 sm:gap-3 rounded-lg" key={index} >
                            <Image className="size-8  sm:size-12" src={carachar} height={48} width={48} alt="carachar"/>
                            <span className="text-12 sm:text-base text-[#0E0E0E]">{item.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        <button className="text-[#F66B34] flex items-center gap-2 mx-auto" onClick={()=>{setOpenService(!openService)}}><span className="font-medium text-14 sm:text-base">مشاهده {openService?"کمتر":"بیشتر"}</span><i className={`cc-arrow-down text-lg sm:text-2xl transition-transform duration-700 ${openService?"rotate-180":"rotate-0"}`}/></button>
        </>
     );
}
 
export default MainPageServices;