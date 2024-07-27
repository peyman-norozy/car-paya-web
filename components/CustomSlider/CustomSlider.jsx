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
            <button onClick={nextClickHandler} className={"hidden lg:inline-block bg-[#F66B34] rounded-lg absolute left-0 top-[calc(50%-20px)] rotate-[270deg] size-10"}>
                {/* <Image src={"/assets/icons/angle-left.svg"} alt={"angel icon"} width={24} height={24}/>s */}
                <i className='cc-arrow-up text-2xl text-white'/>
            </button>
            <ul className={"flex items-baseline gap-4 overflow-x-scroll scroll-smooth no-scrollbar w-[100%] m-auto"} ref={containerRef}>
                {props.children}
            </ul>
            <button onClick={prevClickHandler} className={"hidden lg:inline-block bg-[#F66B34] rounded-lg absolute right-0 top-[calc(50%-20px)] rotate-90 size-10"}>
                {/* <Image src={"/assets/icons/angle-right.svg"} alt={"angel icon"} width={24} height={24}/> */}
                <i className='cc-arrow-up text-2xl text-white'/>
            </button>
        </div>
    );
};

export default CustomSlider;