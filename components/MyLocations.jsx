import React from 'react';
import Button from './Button';
import refresh from '@/public/assets/icons/refresh.svg'
import cross from '@/public/assets/icons/cross.svg'
import Image from 'next/image';
import GreenCheckInput from './GreenCheckInput';
import MapSelection from './MapSelection';

const MyLocations = (props) => {
    const {isSelected, on_click, id, title, province, city, neighborhood} = props
    return (
        <div
            className={`p-[0.75rem] size411:p-[1rem] flex flex-col gap-[1.25rem] size900:gap-0 size900:flex-row justify-between rounded-10 shadow-[0_0_7px_0_rgba(209,209,209,0.3)] border cursor-pointer ${isSelected === id && ''}`}
            onClick={on_click}>
            <div>
                <div className='flex items-center gap-[0.25rem] mb-[0.63rem]'>
                    <i className={'cc-location text-[24px]'} />
                    <h2 className='text-18'> آدرس : {title}</h2>
                </div>
                <ul className='flex flex-col items-start gap-[0.75rem] text-14 mb-[2rem]'>
                    <li><span className='font-bold'>استان :</span> {province}</li>
                    <li><span className='font-bold'>شهر :</span> {city}</li>
                </ul>

            </div>
            <div className='h-[150px] w-full flex gap-[1rem] size900:w-[360px] rounded-[0.5rem] overflow-hidden'>
                <div className="h-full w-full">
                    <MapSelection setLocation={null}/>

                </div>
                <i className={'cc-menu-kebab text-18'}/>

            </div>
        </div>
    );
};

export default MyLocations;