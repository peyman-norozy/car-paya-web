"use client"
import React, {useState} from 'react';
import PeriodicServiceTabCard from "@/components/cards/PeriodicServiceTabCard";
import CustomSlider from "@/components/CustomSlider/CustomSlider";
const CarServicesSlider = (props) => {
    const [isClicked, setIsClicked] = useState(3);

    const selectTabHandler = (index) => {
        setIsClicked(index);
    };
    return (
            <CustomSlider>
                {props.data.map((item, index) => (
                    <PeriodicServiceTabCard
                        href={item.href}
                        isClicked={isClicked}
                        onClick={() => selectTabHandler(index)}
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