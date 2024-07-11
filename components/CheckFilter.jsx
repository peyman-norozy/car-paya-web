import React, { useState } from 'react';
import CheckInput from './CheckInput';
import GreenCheckInput from './GreenCheckInput';

const CheckFilter = (props) => {
    const [isSelected,setIsSelected] = useState()
    const {item} = props

    const selectItemHandler = () => {
        setIsSelected(prevState => !prevState)
    }
    return (
        <div onClick={selectItemHandler} className='flex items-center gap-[0.25rem] rounded-5 shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] border border-[#dedede] py-[0.35rem] px-[1rem] hover:shadow-xl  cursor-pointer'>
            <GreenCheckInput isSelected={isSelected}/>
            <span className='text-[13px] text-text_gray'>{item}</span>
        </div>
    );
};

export default CheckFilter;