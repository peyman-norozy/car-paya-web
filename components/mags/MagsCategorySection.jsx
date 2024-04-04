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
        <div className='bg-[#e73c33] flex items-center justify-center  '>
            <span className='text-white font-bold text-18 ml-[0.5rem]'>دسته بندی‌ها</span>
            {magcategory.map((item,index) => <div key={index} className='text-white text-14 cursor-pointer py-[0.75rem] px-[0.75rem] hover:bg-[#e5574f]' >{item.title}</div>)}
        </div>
    );
};

export default MagsCategorySection;