import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import moment from 'jalali-moment';
import Link from 'next/link'


const MagSliderCard = (props) => {
    const {data} = props
    return (
        <div className='bg-[#EAEAEA80] rounded-[1rem] overflow-hidden px-[0.25rem] size411:px-[10px] py-[1rem] shadow-[0_0_5px_rgba(0,0,0,0.5)]'>
            <Image src={process.env.BASE_API + '/web/file/' + data.image_id} alt='' width={373} height={225} className='w-full h-[225px] rounded-[0.5rem]'/>
            <div >
            <h6 className='mt-[0.75rem] mb-[0.5rem] font-bold line-clamp-1'> {data.title}</h6>
            <p className='text-[#303030] text-14 w-[95%] h-[42px] mb-[0.75rem] line-clamp-2'>{data.description}</p>
            </div>
            <div className='w-full flex items-center justify-between'>
            <p className='text-[#6878CA] text-12'>{moment.unix(data.created_at).locale('fa').fromNow()}</p>

            <Button class_name='text-12 size752:text-14 text-[#354597]'>
                <Link href={`/mags/${data.mag_category_id}/${data.slug}`}>    بیشتر بدانید</Link>
            </Button>
            </div>
        </div>
    );
};

export default MagSliderCard;