'use client'
import React from 'react';
import Input from '../Input';
import Image from "next/image";


const SearchMags = () => {
    return (
        <div className='border border-[#D9DDF2] rounded-[0.5rem] p-[1rem] flex items-center justify-between gap-[0.5rem] bg-white min-w-[200px] size360:min-w-[300px]'>
            <Input className='outline-none bg-white placeholder:text-RED_500' type='search' placeholder='جستجو' />
            <Image src='/assets/icons/search-normal.svg' alt='' width={20} height={20} />
        </div>
    );
};

export default SearchMags;