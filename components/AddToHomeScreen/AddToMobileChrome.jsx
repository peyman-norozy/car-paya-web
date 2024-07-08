import React from 'react'

import { FaTimes } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import { MdAddToHomeScreen } from 'react-icons/md'
import { ImArrowUp } from 'react-icons/im'
import {TbShare2} from "react-icons/tb";
import {AiOutlinePlusSquare} from "react-icons/ai";

export default function AddToMobileChrome(props) {
    const { closePrompt, doNotShowAgain } = props;

    return (
        <div className="fixed top-0 left-0 right-0 h-[60%] z-50 pt-12 px-4 text-white">
            <ImArrowUp className="text-4xl text-red-500 absolute top-[10px] right-[10px] z-10 animate-bounce" />
            <div className="relative bg-primary p-4 h-full rounded-xl flex flex-col justify-around items-center text-center">
                <button className="absolute top-0 right-0 p-3" onClick={closePrompt}>
                    <FaTimes className="text-2xl" />
                </button>
                <p className="text-lg font-sans">برای بهترین تجربه، توصیه می کنیم برنامه car check را در صفحه اصلی خود نصب کنید!</p>
                <div className="flex gap-2 items-center text-lg">
                    <p>روی آیکون</p>
                    <HiDotsVertical className="text-4xl" />
                    <p>کلیک کنید</p>
                </div>
                <div className="flex flex-col gap-3 items-center text-lg w-full px-4">
                    <p>به سمت پایین اسکرول کنید و سپس بر روی</p>
                    <div className="bg-zinc-800 flex justify-between items-center w-full px-4 py-2 rounded-lg">
                        <p>Add to Home Screen</p>
                        <MdAddToHomeScreen className="text-2xl" />
                    </div>
                    <p>کلیک کنید</p>
                </div>
                <button className="border-2 p-1" onClick={doNotShowAgain}>دیگر نمایش نده!</button>
            </div>
        </div>
    )
}