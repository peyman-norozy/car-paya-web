import Image from 'next/image';
import React from 'react';
import Button from '../Button';

const MagSliderCard = () => {
    return (
        <div className='bg-white rounded-10 overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.5)]'>
            <Image src='/assets/images/article.png' alt='' width={373} height={225} className='w-full'/>
            <div className='px-[1rem]'>
            <h6 className='mt-[0.75rem] mb-[1.5rem] font-bold text-20'> بیمه شخص ثالث خودرو چیست؟</h6>
            <p className='text-[#303030] text-14 text-center w-[95%] mb-[1.5rem]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            </div>
            <div className='w-full flex items-center justify-center'>
            <Button class_name='bg-[#EAEAEA] px-[1.5rem] py-[0.75rem]  m-auto text-[#303030] rounded-5 hover:shadow-[0_0_5px_rgba(0,0,0,0.225)] mb-[1.5rem]'>
                <p>بیشتر بدانید</p>
            </Button>
            </div>
        </div>
    );
};

export default MagSliderCard;