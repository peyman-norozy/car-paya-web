import Image from 'next/image';
import React, { useState } from 'react';
import check from '@/public/assets/icons/check.svg'

const SelectVehicleTab = (props) => {
    

    const selectTabHandler = (index) => {
        props.setIsClicked(index)
        props.setMotorStep('motor-brands')
        props.setStep('car-brands')
    }
    return (
        <div className='w-full overflow-x-scroll pb-1'>
            <div className={`${props.className} min-w-[395px] w-full `}>
            {props.tabTitle.map((item,index) => <div onClick={() => selectTabHandler(index)} key={index} className={`flex items-center justify-center gap-[0.25rem] cursor-pointer px-[0.25rem] py-[0.25rem] border-gray_light_border  rounded-5 size870:w-full text-text_gray text-[13px] ${props.isClicked === index ? 'bg-RED_500 text-white' : 'border-gray_light_border border-[1px]'}`}>
                {props.isClicked === index ? <Image src={check} alt='' height={10} width={10} /> : <div></div>}
                <p>{item.name}</p>
                </div>)}
            </div>
        </div>
    );
};

export default SelectVehicleTab;