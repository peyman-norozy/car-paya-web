import React from 'react';

const MagsCategorySection = ({data}) => {
    return (
        <div className='flex items-center gap-[1rem] '>
            {data && data.map((item,index) => <div key={index} className='text-[#212B5E] bg-[#ECEEF8] text-14 cursor-pointer py-[0.5rem] px-[1rem] rounded-5 ' ><p className='line-clamp-1'>{item.title}</p></div>)}
        </div>
    );
};

export default MagsCategorySection;