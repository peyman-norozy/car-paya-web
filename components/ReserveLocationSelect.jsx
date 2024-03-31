import React from 'react';

const ReserveLocationSelect = (props) => {
    return (
        <div onClick={props.onClick} className={`border-[1px] border-gray_light_border rounded-[0.5rem] flex flex-col gap-[0.5rem] p-[0.5rem] w-full text-[13px] size516:text-[1rem] transition-colors duration-300 ease-in cursor-pointer size671:p-[1rem] ${props.optionIsClicked === props.id ? 'bg-red_shop text-white' : ''}`}>
        <p className='text-[14px] size671:text-[1rem]'>{props.option}</p>
        <p className={`text-[10px] size671:text-[12px] ${props.optionIsClicked === props.id ? 'text-white' :'text-gray_nav'}`}>{props.description}</p>
    </div>
    );
};

export default ReserveLocationSelect;