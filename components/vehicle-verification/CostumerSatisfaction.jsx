import React from 'react';
import Image from "next/image";

const CostumerSatisfaction = () => {
    return (
        <div className={'flex flex-col items-center size800:flex-row gap-0 size800:items-end justify-center size800:gap-5'}>
            <div className={'bg-[#B1B9FC2B] w-full flex justify-center size800:w-fit size800:bg-white'}>
                <Image src={'/assets/images/costumersatisfaction.svg'} alt={''} width={257} height={184}/>
            </div>

            <div className={'bg-[#B1B9FC2B] px-[36px] size411:px-[50px] size516:px-[100px] w-full rounded-none size800:rounded-2xl flex items-center justify-between py-2 pb-[2.5rem] size800:py-[42px]'}>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'font-bold text-20 size690:text-[22px]'}>۴/۵</p>
                    <p>رضایت مشتریان</p>
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'font-bold text-20 size690:text-[22px]'}>+۱۰۰٫۰۰۰</p>
                    <p>خودروی کارشناسی شده</p>
                </div>

            </div>
        </div>
    );
};

export default CostumerSatisfaction;