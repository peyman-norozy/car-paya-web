import React from 'react';
import MagShowCommentsCard from './MagShowCommentsCard';

const MagShowComments = () => {
    return (
        <div>
            <div className='flex items-center justify-between ml-[2rem] '>
                <h3 className='text-20'>نظرات</h3>
                <span className='text-[#5E5E5E] text-14'>3 دیدگاه</span>
            </div>
            <MagShowCommentsCard />
        </div>
    );
};

export default MagShowComments;