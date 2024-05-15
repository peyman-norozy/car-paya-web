import React from 'react';
import Image from "next/image";
import Input from "@/components/Input";
import Link from "next/link";
import Button from "@/components/Button";

const VerificationLogin = () => {
    return (
        <div className='flex items-center justify-between w-[95%] size1180:w-[90%] size1275:w-[80%] m-auto py-[4rem]'>
            <form className='flex flex-col'>
                <h2 className={'text-18 font-medium mb-[1.5rem]'}> برای ادامه اطلاعات فردی خود را وارد کنید</h2>
                <div
                    className={'rounded-lg border border-[#B0B0B0] h-[2.5rem] flex items-center relative px-3 mb-[2rem]'}>
                    <i className='cc-user border-l-[2px] border-l-[#B0B0B0] pl-2 text-[#3D3D3D] text-[20px]'/>
                    <Input autoFocus type={'text'} foc className={'w-full h-full rounded-lg outline-none pr-1 text-[#3D3D3D]'}
                           id={'name'}/>
                    <label htmlFor={'name'} className='absolute top-[-40%] bg-white right-[3%] px-1 text-[#454545]'>نام
                        و
                        نام
                        خانوادگی<span className={'text-red-500'}>*</span></label>

                </div>
                <div
                    className={'rounded-lg border border-[#B0B0B0] h-[2.5rem] flex items-center relative px-3 mb-[1rem]'}>
                    <i className='cc-calling border-l-[2px] border-l-[#B0B0B0] pl-2 text-[#3D3D3D] text-[20px]'/>
                    <Input type={'tel'} className={'w-full h-full rounded-lg outline-none pr-1 text-[#3D3D3D]'}
                           id={'mobile'}/>
                    <label htmlFor={'mobile'} className='absolute top-[-40%] bg-white right-[3%] px-1 text-[#454545]'>شماره
                        موبایل<span className={'text-red-500'}>*</span></label>

                </div>
                <div className={'flex items-center gap-1 mb-[1rem]'}>
                    <Input type={'checkbox'} className={'h-[22px] w-[22px]'}/>
                    <p className={'text-14'}><Link href='#' className={'text-RED_400'}>قوانین کارچک</Link> و <Link
                        href='#' className={'text-BLUE_600'}> سياست نامه حريم خصوصی</Link>. را میپذیرم.</p>
                </div>
                <Button class_name={'bg-BLUE_600 py-[10px] px-3 rounded-lg flex items-center gap-1 text-white w-fit self-end'}>
                    <p className={'text-14'}>تایید و ادامه</p>
                    <i className={'cc-left text-[24px]'}/>
                </Button>
            </form>
            <Image src='/assets/images/LoginImage.svg' alt='login image' width={702} height={462}/>

        </div>
    );
};

export default VerificationLogin;