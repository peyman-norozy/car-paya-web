import Image from 'next/image';
import React from 'react';

const ShowMyVehicles = (props) => {

    return (
        <div className="grid grid-cols-4 gap-[0.5rem] rounded-10 border-gray_light_border border-[1px] w-full h-[12rem] p-[1rem]">
            {props.data.map((item,index) => <div key={index} className='flex flex-col items-center h-[4rem] w-full'>
                <div className='h-[80%]'>
                <Image src={item.src} alt={item.name} width={100} height={100} className='w-full h-full'/>
                </div>
                <p>{item.name}</p>
            </div>)}
</div>
    );
};

export default ShowMyVehicles;