import React from 'react';
import Image from "next/image";

const CostumerSatisfaction = () => {
    return (
        <div className={'flex flex-col items-center size800:flex-row gap-0 size800:items-end justify-center size800:gap-5 max-w-[1000px] self-center w-full'}>
            <Image src={'/assets/images/car9.png'} alt={''} width={257} height={184}/>
            <div className={'bg-[#383838A3] w-full rounded-none size800:rounded-2xl flex items-center justify-around py-2 size800:py-10 text-[#FEFEFE]'}>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'font-bold text-20 size690:text-[22px]'}>۴/۵</p>
                    <p className='font-medium'>رضایت مشتریان</p>
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'font-bold text-20 size690:text-[22px]'}>+۱۰۰٫۰۰۰</p>
                    <p className='font-medium'>خودروی کارشناسی شده</p>
                </div>

            </div>
        </div>
    );
};

export default CostumerSatisfaction;