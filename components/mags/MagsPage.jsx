'use client'
import React, { useEffect } from 'react';
import MagsCategorySection from './MagsCategorySection';
import axios from 'axios';
import { API_PATHS } from '@/configs/routes.config';
import RecentMags from './RecentMags';

const MagsPage = () => {

    useEffect(() => {
axios.get(process.env.BASE_API + '/web' + API_PATHS.MAGS).then(res => {
    console.log(res)
}).catch(err => console.log(err))
    },[])
    return (
        <div>
           <MagsCategorySection /> 
           <h1 className='font-bold text-[22px] text-center mb-[1.5rem] mt-[1.85rem]'>جدیدترین مقالات</h1>
           <article className='w-[85%] m-auto'>
           <RecentMags />
           </article>
        </div>
    );
};

export default MagsPage;