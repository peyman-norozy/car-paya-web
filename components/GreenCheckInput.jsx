import React from 'react';
import check from '@/public/assets/icons/green-check.svg'
import Image from 'next/image';

const GreenCheckInput = (props) => {
    const {isSelected, class_name , on_click} = props
    return (
            <div className={`w-[1rem] h-[1rem] border-[1px] border-[#C0C0C0] relative ${class_name}`} onClick={on_click}>
         {isSelected && <Image src={check} alt='' height={20} width={20} className='absolute bottom-[15%] left-[13%]'/>}
        </div>
    );
};

export default GreenCheckInput;