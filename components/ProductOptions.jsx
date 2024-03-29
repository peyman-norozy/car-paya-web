import React from 'react';

const ProductOptions = () => {
    const optionData = [
        {type : 'برند', value : 'بوش'},
        {type : 'نوع', value : 'نیمه سینتینتیک'},
        {type : 'کیفیت', value : 'SN'},
        {type : 'درجه گرانروی', value : '10w-40'},
        {type : 'حجم', value : '5 لیتر'},
  
    ]
    return (
        <div>
            <h2 className='text-[14px]'>ویژگی ها</h2>
            <ul className='flex flex-col gap-[0.25rem] mt-[0.75rem]'>
                {optionData.map((item,index) => <li className='grid grid-cols-2 items-center justify-start px-[1rem] py-[0.5rem] bg-[#dcdcdc] rounded-[0.75rem] text-[12px]' key={index}>
                    <p className='text-red_shop'>{item.type}</p>
                    <p className='text-[#333]'>{item.value}</p>
                </li>)}
            </ul>
        </div>
    );
};

export default ProductOptions;