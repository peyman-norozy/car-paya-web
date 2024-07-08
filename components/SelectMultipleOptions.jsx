import React, { useState } from 'react';
import down_black from '@/public/assets/icons/Arrow-Down.svg'
import down_white from '@/public/assets/icons/Arrow-Down-white.svg'
import Image from 'next/image';

const SelectMultipleOptions = (props) => {
    const {id,name , isSelected , on_click} = props

    
    return (
        <div className={`w-max border-[1px] border-[#dedede] rounded-5 shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] py-[0.35rem] px-[1rem] flex items-center gap-[0.25rem] text-[13px] text-text_gray cursor-pointer hover:shadow-lg ${isSelected === id ? 'bg-[#3aab38] text-white' : ''}`} onClick={on_click}>
            
            <p>{name}</p>
            <Image src={isSelected === id ? down_white : down_black} alt='' height={15} width={15} />
        </div>
    );
};

export default SelectMultipleOptions;