import React, {useState} from 'react';
import TimeLine from './TimeLine';
import {persianDateCovertor, timestampToPersianDate, timeStampToTime} from "@/utils/function-utils";

const SelectReserveTimeAndDate = (props) => {
    const {day  ,data, setIsSelected , isSelected} = props

    console.log(data)
    return (
        <div className='bg-[#f6f6f6] rounded-[0.5rem] shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] p-[1rem] flex items-center gap-[5rem] size690:gap-0 size690:justify-between'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-bold text-16'>{persianDateCovertor(day)}</p>
                <p className='text-[13px]'>day</p>
            </div>
            <div className='flex items-center gap-[1.5rem]'>
                {data.map((item,index) => <TimeLine isSelected={item.id === isSelected} onclick={() => setIsSelected(item.id)} key={index} time={item} setIsSelected={setIsSelected} />)}
            </div>
        </div>
    );
};

export default SelectReserveTimeAndDate;