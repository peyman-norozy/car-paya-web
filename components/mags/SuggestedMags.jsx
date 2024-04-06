import React from 'react';
import SuggestedMagCard from './SuggestedMagCard';

const SuggestedMags = (props) => {
    const { title , data} = props
    console.log(data);
    return (
        <div className='mt-[2rem]'>
            <h2 className="font-bold text-[22px] text-[#212B5E] px-[0.5rem] border-r-[3px] border-r-RED_500 mb-[1.5rem]">{title}</h2>
            <div className='grid grid-cols-2 gap-x-[1.25rem] gap-y-[1.5rem]'>
                {data.map((item,index) => <SuggestedMagCard key={index} data={item}/>)}
            </div>
        </div>
    );
};

export default SuggestedMags;