import Image from 'next/image';
import React from 'react';
import Button from '../Button';

const MagSliderCard = () => {
    return (
        <div className='bg-[#EAEAEA80] rounded-[1rem] overflow-hidden px-[10px] py-[1rem] shadow-[0_0_5px_rgba(0,0,0,0.5)]'>
            <Image src='/assets/images/article.png' alt='' width={373} height={225} className='w-full rounded-[0.5rem]'/>
            <div >
            <h6 className='mt-[0.75rem] mb-[0.5rem] font-bold'> بیمه شخص ثالث خودرو چیست؟</h6>
            <p className='text-[#303030] text-14 w-[95%] mb-[0.75rem] line-clamp-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            </div>
            <div className='w-full flex items-center justify-between'>
            <p className='text-[#6878CA] text-12'>7روز پیش</p>

            <Button class_name=' text-14 text-[#354597]'>
                <p>    بیشتر بدانید</p>
            </Button>
            </div>
        </div>
    );
};

export default MagSliderCard;