import Image from 'next/image';
import React from 'react';
import phone from '@/public/assets/icons/phone.svg'
import Button from "@/components/Button";

const CallAndConsult = () => {
    return (

    <div className='flex flex-col gap-4 size690:gap-0 size690:flex-row items-center justify-between w-[95%] size690:w-[80%] m-auto pr-0 lg:pr-[30px]  size1228:pr-[70px] py-4 size690:py-[4rem] lg:w-full shadow-[0_0_8px_rgba(239,239,239,0.5)]'>
             <div className={'flex flex-col justify-center items-center size690:items-start gap-3 w-full size690:w-[50%] lg:w-[28%]'}>
                 <h3 className={'text-[16px] size800:text-[20px] pb-2 size690:pb-0 border-b-[2px] border-BLUE_600 size690:border-none'}><span className={'text-BLUE_600'}>کارشناسی خودرو </span> لازمه چون </h3>
                 <p className={'text-[#303030] text-14 size800:text-16'}>تیم <span className={'text-red-500 text-18'}> چــک کــار مـــی</span> بهترین مجموعه کارشناسی خودرو حضوری
                     در خدمت مشتریان بوده کارشناسان کادر ما آموزش دیده
                     و با تجربه آماده ارائه خدمات رسانی به شما هستند .</p>
             </div>
            <div className={'flex flex-col gap-4 justify-center items-center'}>
<p>مشاور و ثبت درخواست تلفنی</p>
                <Button class_name={'text-RED_400 flex items-center justify-center w-fit gap-2 px-4 py-2 border rounded-lg border-RED_400'}>
                    <p>۰۲۱-۸۸۱۰۹۵۲۴</p>
                    <i className={'cc-calling'} />
                </Button>
            </div>
        <Image src={'/assets/images/lambo.png'} alt={''} width={400} height={200} className={'hidden lg:block'}/>
        </div>
    );
};

export default CallAndConsult;