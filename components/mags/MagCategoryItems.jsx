'use client'
import React from 'react';
import MagSliderCard from './MagSliderCard';

const MagCategoryItems = (props) => {
    const {data} = props
    console.log(data);
    return (
        <div className='grid grid-cols-4 gap-x-[1rem] gap-y-[1.25rem]'>
            {/* {data.data.map((item,index) => <MagSliderCard data)} */}
            hi
        </div>
    );
};

export default MagCategoryItems;