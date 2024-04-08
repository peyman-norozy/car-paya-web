'use client'
import React, { useEffect } from 'react';
import Image from "next/image";
import axios from "axios";
import { API_PATHS } from '@/configs/routes.config';
import { persianDateCovertor } from '@/utils/function-utils';


const MagShowPage = (props) => {
    const {data} = props
    console.log(data)
    // useEffect(() => {
    //     axios.get(process.env.BASE_API + "/web" + API_PATHS.MAGS + '-' + props.slug).then(res => console.log(res)).catch(err => console.log(err))
    // },[])
    return (
        <div>
            <h2 className='text-[2rem] font-bold'>{data.title}</h2>
            <div className='mt-[1rem] flex items-center justify-between text-BLUE_500'>
              <div className='flex items-center gap-[0.25rem] mb-[0.75rem]'>
                <Image src='/assets/icons/calendar.svg' alt='' width={24} height={24}/>
                <p>آخرین به‌روزرسانی: <span>{persianDateCovertor(data.created_at)}</span></p>
              </div>
              <div className='flex items-center gap-[0.25rem]'>
                <Image src='/assets/icons/bookmark.svg' alt='' width={16} height={16}/>
                <p>سیو کردن مطالب</p>
              </div>
              
            </div>
            <Image src={process.env.BASE_API + '/web/file/' + data.image_id} alt='' width={787} height={285} className='rounded-[1rem]'/>
            <div className='flex items-center gap-[0.25rem] my-[1rem]'>
            <Image src='/assets/icons/calendar.svg' alt='' width={16} height={16}/>
            <p className='text-BLUE_500'>زمان مطالعه {data.read_time} دقیقه</p>
            </div>
            <p>{data.description}</p>
            <div className='mt-[1rem] flex items-center justify-between text-BLUE_500'>
              <div className='flex items-center gap-[0.25rem] mb-[0.75rem]'>
                <Image src='/assets/icons/user-edit.png' alt='' width={24} height={24}/>
                <p>نویسنده مطلب : <span>{!data.author && 'ایمان کرامتی'}</span></p>
              </div>
              <div className='flex items-center gap-[0.25rem]'>
                <Image src='/assets/icons/share.png' alt='' width={16} height={16}/>
                <p>اشتراک گذاری</p>
              </div>
              
            </div>
        </div>
    );
};

export default MagShowPage;