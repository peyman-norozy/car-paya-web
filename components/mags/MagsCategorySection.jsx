import React from 'react';

const MagsCategorySection = () => {
    const magcategory = [
        {title : 'کارشناسی خودرو'},
        {title : 'کارشناسی خودرو'},
        {title : 'کارشناسی خودرو'},
        {title : 'کارشناسی خودرو'},
        {title : 'کارشناسی خودرو'},
        {title : 'کارشناسی خودرو'},
        {title : 'کارشناسی خودرو'},
    ]
    return (
        <div className='flex items-center gap-[1rem] '>
            {magcategory.map((item,index) => <div key={index} className='text-[#212B5E] bg-[#ECEEF8] text-14 cursor-pointer py-[0.5rem] px-[1rem] rounded-5' >{item.title}</div>)}
        </div>
    );
};

export default MagsCategorySection;