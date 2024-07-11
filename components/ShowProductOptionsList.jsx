import React from 'react';

const ShowProductOptionsList = (props) => {
    const data = props.data
    const title = props.title
    return (
        <div>
            <h2 className='font-bold py-[0.5rem]'>{title}</h2>
            <ul className='marker:text-red_shop list-disc flex flex-col gap-[0.35rem] p-[0.25rem] mr-[1rem]'>
{data.map((item,index)=> <li key={index} className='text-[14px] text-gray_nav'>{item.content}</li>) }
            </ul>
        </div>
    );
};

export default ShowProductOptionsList;