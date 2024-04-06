'use client'
import React, { useEffect } from 'react';
import MagsCategorySection from './MagsCategorySection';
import axios from 'axios';
import { API_PATHS } from '@/configs/routes.config';
import RecentMags from './RecentMags';
import MagsSlider from './MagsSlider';

const MagsPage = () => {

    useEffect(() => {
axios.get(process.env.BASE_API + '/web' + API_PATHS.MAGCATEGORY).then(res => {
    console.log(res)
}).catch(err => console.log(err))
    },[])
    return (
        <div className='w-[90%] m-auto'>
            <div className='pt-[1rem] mb-[1.5rem] flex justify-between'>
                <h1 className='text-[32px] font-bold text-[#E73C33]'>   مجله <span className='text-[#212B5E]'>کار چک می</span></h1>
                <div>search</div>
            </div>
           <MagsCategorySection /> 
           <RecentMags />
           <MagsSlider title='خبر روز'/>
           <MagsSlider title='پربازدیدترین مجله ها'/>
        </div>
    );
};

export default MagsPage;