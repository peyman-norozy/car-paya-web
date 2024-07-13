import React from 'react';
import Image from "next/image";
import Link from "next/link";

const ShareMedia = () => {
    return (
        <div className='flex items-center gap-[1rem]'>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.twitter.com/share?url=" + window.location.href}
            >
                <Image src='/assets/icons/Vector (1).png' alt='' width={20} height={20} className='cursor-pointer'/>

            </Link>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.facebook.com/sharer/sharer.php?u=" + window.location.href}
            >
                <Image src='/assets/icons/Vector (2).png' alt='' width={12} height={12} className='cursor-pointer'/>

            </Link>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://wa.me/?text=" + window.location.href}
            >
                <Image src='/assets/icons/Vector (3).png' alt='' width={20} height={20} className='cursor-pointer'/>

            </Link>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://t.me/share/url?url=" + window.location.href}
            >
                <Image src='/assets/icons/Vector (4).png' alt='' width={20} height={20} className='cursor-pointer'/>

            </Link>
        </div>
    );
};

export default ShareMedia;