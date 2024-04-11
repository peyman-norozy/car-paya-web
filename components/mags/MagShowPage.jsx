'use client'
import React, { useEffect } from 'react';
import Image from "next/image";
import axios from "axios";
import { API_PATHS } from '@/configs/routes.config';
import { persianDateCovertor } from '@/utils/function-utils';
import MagsSlider from './MagsSlider';


const MagShowPage = (props) => {
    const {data} = props
    const magsData= data.mag
    // useEffect(() => {
    //     axios.get(process.env.BASE_API + "/web" + API_PATHS.MAGS + '-' + props.slug).then(res => console.log(res)).catch(err => console.log(err))
    // },[])
    return (
        <div>
            <h2 className='text-[2rem] font-bold'>{magsData && magsData.title}</h2>
            <div className='mt-[1rem] flex items-center justify-between text-BLUE_500'>
              <div className='flex items-center gap-[0.25rem] mb-[0.75rem]'>
                <Image src='/assets/icons/calendar.svg' alt='' width={24} height={24}/>
                {magsData && <p>آخرین به‌روزرسانی: <span>{persianDateCovertor(magsData.created_at)}</span></p>}
              </div>
              <div className='flex items-center gap-[0.25rem]'>
                <Image src='/assets/icons/bookmark.svg' alt='' width={16} height={16}/>
                <p>سیو کردن مطالب</p>
              </div>
              
            </div>
            <Image src={magsData && process.env.BASE_API + '/web/file/' + magsData.image_id} alt='' width={787} height={285} className='rounded-[1rem]'/>
            <div className='flex items-center gap-[0.25rem] my-[1rem]'>
            <Image src='/assets/icons/calendar.svg' alt='' width={16} height={16}/>
            <p className='text-BLUE_500'>زمان مطالعه {magsData && magsData.read_time} دقیقه</p>
            </div>
            <p>{magsData && magsData.description}</p>
            <div className='mt-[1rem] flex items-center justify-between text-BLUE_500'>
              <div className='flex items-center gap-[0.25rem] mb-[0.75rem]'>
                <Image src='/assets/icons/user-edit.png' alt='' width={24} height={24}/>
                <p>نویسنده مطلب : <span>{magsData && !magsData.author && 'ایمان کرامتی'}</span></p>
              </div>
              <div className='flex items-center gap-[0.25rem]'>
                <Image src='/assets/icons/share.png' alt='' width={16} height={16}/>
                <p>اشتراک گذاری</p>
              </div>
              
            </div>
            <div>
          <MagsSlider data={data.similarMags
} title='مجله های مرتبط با این مطلب'/>
        </div>
        </div>
    );
};

export default MagShowPage;