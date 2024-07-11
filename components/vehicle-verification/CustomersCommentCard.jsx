import React from 'react';

const CustomersCommentCard = (props) => {
    const {data} = props
    return (

    <div className={'flex flex-col items-center gap-4 justify-center rounded-2xl shadow-[0_0_10px_rgba(33,83,141,0.1)] pb-[6px] px-[6px]'}>
         <div className={'mt-[1rem] flex gap-5 flex-col items-center w-[95%] size882:w-[80%] lg:w-[60%] m-auto'}>
             <div className='w-[70px] h-[70px] rounded-[50%] bg-[#EF7C76]'></div>
             <p className={'font-bold'}>{data.name}</p>
             <p className={'text-[#6D6E6D] text-12 size690:text-14 text-center line-clamp-3'}>{data.description}</p>
         </div>
         <div className={'self-end text-12 text-[#8A8A8A]'}>۲۱ / اردیبهشت / ۱۴۰۲</div>
        </div>
    );
};

export default CustomersCommentCard;