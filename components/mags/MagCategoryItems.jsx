'use client'
import React, { useEffect } from 'react';
import MagSliderCard from './MagSliderCard';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import { API_PATHS } from '@/configs/routes.config';
import axios from "axios";


const MagCategoryItems = (props) => {
    const router = useRouter()
    const {data} = props
    const categoryData = data.data.mags.data
    if(data === 500) {
        router.push( '/not-found')
    }
    
    return (
        <>
        {categoryData.length > 0 ? <div className='mt-[2.5rem] grid grid-cols-4 gap-x-[1rem] gap-y-[1.25rem]'>
            {categoryData.map((item,index) => <MagSliderCard key={index} data={item} />)}
        </div> : <p className='text-center mt-[3rem]'>مجله ای برای این دسته بندی یافت نشد</p>}
        </>
    );
};

export default MagCategoryItems;