"use client"
import React, {useState} from 'react';
import PeriodicServiceTabCard from "@/components/cards/PeriodicServiceTabCard";
import CustomSlider from "@/components/CustomSlider/CustomSlider";
import { usePathname } from 'next/navigation';
const CarServicesSlider = (props) => {
    const pathname = usePathname()
    console.log(pathname);
    const [isClicked, setIsClicked] = useState(pathname);

    const selectTabHandler = (index) => {
        setIsClicked(index);
    };

    console.log(props.data);
    return (
            <CustomSlider>
                {props.data.map((item, index) => (
                    <PeriodicServiceTabCard
                        href={item.href}
                        isClicked={isClicked}
                        onClick={() => selectTabHandler(item.href)}
                        index={index}
                        key={index}
                        title={item.title}
                        src={item.icon}
                        width={60}
                        height={60}
                    />
                ))}
            </CustomSlider>
    );
};

export default CarServicesSlider;