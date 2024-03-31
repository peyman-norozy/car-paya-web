"use client"
import MainBannerCard from "@/components/cards/MainBannerCard";
import MainBannerSlider from "@/components/MainBannerSlider";
import VehicleRegistration from "@/components/VehicleRegistration";
import {useSelector} from "react-redux";
import ResponsiveVehicleRegistration from "@/components/cards/ResponsiveVehicleRegistration";

export default function MainBanner() {
    const innerWidth = useSelector((width) => width.todo.windowInnerWidth);
    console.log(innerWidth);
    const MainBannerData = [
        {
            title: "کارشناسی خودرو",
            iconSrc: "/assets/icons/Car-Inspection.png",
            href: "/vehicle-verification",
        },
        {
            title: "بیمه",
            iconSrc: "/assets/icons/Group.png",
            href: "#",
        },
        {
            title: "شناسنامه و سوابق خودرو",
            iconSrc: "/assets/icons/8.png",
            href: "profile/my-vehicle/my-car",
        },
        {
            title: "سرویس دوره ای",
            iconSrc: "/assets/icons/1.png",
            href: "/periodic-service",
        },
        {
            title: "فروشگاه باتری",
            iconSrc: "/assets/icons/battery-v3 1.png",
            href: "/batteries",
        },
        {
            title: "فیلتر روغن(لوازم یدکی)",
            iconSrc: "/assets/icons/ClutchBumpers.png",
            href: "/products",
        },
    ];
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
                className="bg-[#ffffff] w-full h-fit px-[20px] grid size1275:grid-cols-6 size666:grid-cols-3 size460:grid-cols-2 grid-cols-1 gap-4 mt-10">
                {MainBannerData.map((item, index) => (
                    <MainBannerCard key={item.title + "-" + index} data={item}/>
                ))}
            </div>
        </div>
    );
}
