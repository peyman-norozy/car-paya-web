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
    console.log(data);
    if(data === 500) {
        router.push( '/not-found')
    }
    useEffect(() => {
        axios.get(process.env.BASE_API + "/web" + API_PATHS.MAGS +
        "/" + props.slug).then(res => console.log(res)).catch(err => console.log(err))
    } , [])
    return (
        <div className='grid grid-cols-4 gap-x-[1rem] gap-y-[1.25rem]'>
            {/* {data.data.map((item,index) => <MagSliderCard data)} */}
            hi
        </div>
    );
};

export default MagCategoryItems;