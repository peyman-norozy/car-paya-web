import React from 'react';
import Image from "next/image";

const AddressModal = () => {
    return (
        <div className={"shadow-[0_0_6px_0_rgba(200,200,200,1)] absolute top-[35px] left-[40px] bg-[#fff] rounded-5 flex flex-col justify-center text-14"}>
            <section className={"flex items-center gap-2 cursor-pointer hover:bg-stone-200 h-[40px] px-[8px]"}>
                <Image src={"/assets/icons/Edit 2.svg"} alt={"icon"} width={22} height={22}/>
                <span>ویرایش آدرس</span>
            </section>
            <section className={"flex items-center gap-2 cursor-pointer hover:bg-stone-200 h-[40px] px-[8px]"}>
                <Image src={"/assets/icons/Delete 2.svg"} alt={"icon"} width={22} height={22}/>
                <span className={"text-[#E73C33]"}>حذف آدرس</span>
            </section>
        </div>
    );
};

export default AddressModal;