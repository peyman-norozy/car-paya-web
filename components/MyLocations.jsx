import React from 'react';
import Button from './Button';
import refresh from '@/public/assets/icons/refresh.svg'
import cross from '@/public/assets/icons/cross.svg'
import Image from 'next/image';
import GreenCheckInput from './GreenCheckInput';
import Map from './Map';
import MapSelection from './MapSelection';

const MyLocations = (props) => {
    const {isSelected,on_click , id , title , province , city , neighborhood} = props
    return (
        <div className={`p-[0.75rem] size411:p-[1rem] flex flex-col gap-[1.25rem] size900:gap-0 size900:flex-row justify-between rounded-10 shadow-[0_0_7px_0_rgba(0,0,0,0.5)] border cursor-pointer ${isSelected === id && 'border-green-500'}`} onClick={on_click}>
           <div>
           <div className='flex items-center gap-[0.25rem] mb-[0.63rem]'>
            <GreenCheckInput isSelected={isSelected === id} class_name='rounded-[50%] w-[1.35rem] h-[1.35rem]'/>
            <h2 className='text-18'>{title}</h2>
            </div>
            <ul className='flex items-center gap-[0.75rem] size525:gap-[3rem] text-14 mb-[2rem]'>
                <li><span className='font-bold'>استان :</span> {province}</li>
                <li><span className='font-bold'>شهر :</span> {city}</li>
                <li><span className='font-bold'>محله :</span> {neighborhood}</li>
            </ul>
            <div className='flex items-center gap-[1.5rem]'>
                <Button class_name='flex items-center gap-[0.25rem] rounded-[0.5rem] py-[0.5rem] px-[1.5rem] text-white bg-BLUE_500 text-14' >
                    <Image src={refresh} alt='' width={10} height={10} />
                    <p>ویرایش</p>
                </Button>
                <Button class_name='flex items-center rounded-[0.5rem] py-[0.5rem] px-[1.5rem] text-white bg-RED_500 text-14' >
                    <Image src={cross} alt='' width={20} height={20} />
                    <p>حذف</p>
                </Button>
            </div>
           </div>
            <div className='h-[150px] w-full size900:w-[360px] rounded-[0.5rem] overflow-hidden'>
            <div className="h-full w-full">
            <MapSelection setLocation={null} />
    </div>
            </div>
        </div>
    );
};

export default MyLocations;