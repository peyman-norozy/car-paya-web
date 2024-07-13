"use client"

import React, {useRef} from 'react';
import Image from "next/image";
const CustomSlider = (props) => {
    const containerRef = useRef()
    const nextClickHandler = ()=>{
        console.log(containerRef.current.scrollLeft -= 100)
    }

    const prevClickHandler = ()=>{
        console.log(containerRef.current.scrollLeft += 100)

    }
    return (
        <div className={"relative w-full"}>
            <button onClick={nextClickHandler} className={"bg-stone-200 p-2 rounded-full absolute left-0 top-[50%] translate-y-[-50%]"}>
                <Image src={"/assets/icons/angle-left.svg"} alt={"angel icon"} width={24} height={24}/>
            </button>
            <ul className={"flex items-baseline gap-4 overflow-x-scroll scroll-smooth no-scrollbar w-[100%] m-auto px-12"} ref={containerRef}>
                {props.children}
            </ul>
            <button onClick={prevClickHandler} className={"bg-stone-200 p-2 rounded-full absolute right-0 top-[50%] translate-y-[-50%]"}>
                <Image src={"/assets/icons/angle-right.svg"} alt={"angel icon"} width={24} height={24}/>
            </button>
        </div>
    );
};

export default CustomSlider;