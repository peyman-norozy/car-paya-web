import React from 'react';
import TimeLine from './TimeLine';

const SelectReserveTimeAndDate = (props) => {
    const {day} = props
    const timeData = [
        {time : '12:00 - 10:00'},
        {time : '12:00 - 10:00'},
        {time : '12:00 - 10:00'},
        {time : '12:00 - 10:00'},
        {time : '12:00 - 10:00'},
    ]
    return (
        <div className='bg-[#f6f6f6] rounded-[0.5rem] shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] p-[1rem] flex items-center gap-[5rem] size690:gap-0 size690:justify-between'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-bold text-16'>1403/01/01</p>
                <p className='text-[13px]'>{day}</p>
            </div>
            <div className='flex items-center gap-[1.5rem]'>
                {timeData.map((item,index) => <TimeLine key={index} time={item.time} />)}
            </div>
        </div>
    );
};

export default SelectReserveTimeAndDate;