import React, { useState } from 'react';
import down_white from '@/public/assets/icons/Arrow-Down-white.svg'
import Image from 'next/image';
import PreviousMap from 'postcss/lib/previous-map';

const SelectCityInput = (props) => {
    const {id,name ,data,setProvinceName,setCityName,setSelectedProvince,setSelectedCity} = props

    const [isSelected,setIsSelected] = useState(false)


    const toggleHandler = () => {
        setIsSelected(prevState => !prevState)
    }

    const selectProvinceHandler = (event) => {
       setIsSelected(null)
       if(id === 'province') {
        setSelectedProvince(event.currentTarget.getAttribute('id'))
        setProvinceName(event.currentTarget.getAttribute('title'))
       }
       if(id === 'city') {
        setSelectedCity(event.currentTarget.getAttribute('id'))
        setCityName(event.currentTarget.getAttribute('title'))
       }
       
       setSelectedCity
    }
    return (
        <div className='relative'>
           <div className={`w-max border-[1px] border-white rounded-[0.5rem] py-[0.35rem] text-white px-[0.35rem] flex items-center gap-[0.25rem] text-[11px]  cursor-pointer hover:shadow-lg size1228:text-[13px] size1090:px-[1rem]`} onClick={toggleHandler}>
            
            <p>{name}</p>
            <Image src={down_white} alt='' height={15} width={15} className={isSelected ? 'rotate-180' : ''}/>
        </div>
        <ul className={`absolute right-0 left-0 shadow-[0px_5px_15px_0px_rgba(0,0,0,0.5)] top-[2.2rem] border-white rounded-[0.5rem] overflow-y-scroll bg-RED_500 transition-all duration-500 ${isSelected ? 'max-h-[10rem] p-[0.5rem] border-[1px]' : 'max-h-0'}`}>
            {data.map((item,index) => <li id={item.id} title={item.title} onClick={selectProvinceHandler} key={index} className='cursor-pointer text-12 hover:bg-white hover:text-RED_500 rounded-5 p-[0.25rem]'>{item.title}</li>)}
            </ul>
        </div>
    );
};

export default SelectCityInput;