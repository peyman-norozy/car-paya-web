'use client'

import React, {useEffect} from 'react';
import MagShowCommentsCard from './MagShowCommentsCard';
import axios from "axios";

const MagShowComments = () => {
    useEffect(() => {
        axios.get(process.env.BASE_API + '/web/mag-comments?mag_id=n7g0yr06' ).then(res => console.log(res)).catch(err => console.log(err))
    }, []);
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