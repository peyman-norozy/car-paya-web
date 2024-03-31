import Image from 'next/image';
import React from 'react';
import phone from '@/public/assets/icons/phone.svg'

const CallAndConsult = () => {
    return (
        <div className='bg-[#f6f6f6] w-full py-[1.5rem] '>
          <div className='flex flex-col items-center gap-[1.5rem] w-max m-auto'>
          <h1 className='text-[22px] text-[#2C5D83]'>مشاوره و ثبت تماس تلفنی</h1>
          <div className='flex items-center justify-center gap-[0.5rem]'>
            <Image src={phone} alt='' height={20} width={20} />
            <p className='text-text_gray'>02188109524</p>

          </div>
          <p className='text-14'>ساعت کاری 8:00 - 21:00</p>
          </div>
            
        </div>
    );
};

export default CallAndConsult;