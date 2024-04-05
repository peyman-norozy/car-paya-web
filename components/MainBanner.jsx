"use client"
import MainBannerSlider from "@/components/MainBannerSlider";
import VehicleRegistration from "@/components/VehicleRegistration";
import {useSelector} from "react-redux";
import ResponsiveVehicleRegistration from "@/components/cards/ResponsiveVehicleRegistration";

export default function MainBanner(props) {
    const innerWidth = useSelector((width) => width.todo.windowInnerWidth);
    console.log(innerWidth);
    return (
        <div>
            <div className="size-1000:pb-[40px] pb-6 ">
                <div className="w-full h-full relative">
                    {innerWidth >= 1000 && <VehicleRegistration/>}
                </div>
                <MainBannerSlider/>
            </div>
            {innerWidth < 1000 && <ResponsiveVehicleRegistration/>}
            <div
                className="bg-[#ffffff] w-full h-fit px-[20px] grid size1275:grid-cols-6 grid-cols-3 gap-4 mt-10">
                {props.children}
            </div>
        </div>
    );
}
