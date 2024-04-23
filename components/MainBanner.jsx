"use client"
import MainBannerSlider from "@/components/MainBannerSlider";
import VehicleRegistration from "@/components/VehicleRegistration";
import {useSelector} from "react-redux";
export default function MainBanner(props) {
    const innerWidth = useSelector((width) => width.todo.windowInnerWidth);
    return (
        <div>
            <div className="size-1000:pb-[40px] pb-6 ">
                <div className="w-full h-full relative">
                    {innerWidth >= 1000 && <VehicleRegistration/>}
                </div>
                <MainBannerSlider/>
            </div>
            <div
                className="bg-[#ffffff] w-full h-fit px-[20px] grid size1228:grid-cols-5 size882:grid-cols-4 grid-cols-3 gap-4 mt-10">
                {props.children}
            </div>
        </div>
    );
}
