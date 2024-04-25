import React from 'react';
import Image from "next/image";

const AddressesCard = () => {
    return (
        <li className={"flex justify-between shadow-[0_0_6px_0_rgba(200,200,200,1)] p-[16px] rounded-10"}>
            <div>
                <ul className={"flex flex-col justify-between h-full gap-4 font-light"}>
                    <li className={"flex items-center gap-2"}>
                       <Image src={"/assets/icons/addressLocation.svg"} alt={"icon"} width={20} height={20}/>
                        <div>
                            <span className={"ml-1"}>آدرس گیرنده:</span>
                            <span>تهران-پاسداران خیابان پایدار فرد کوچه گلستان ۸</span>
                        </div>
                    </li>
                    <li className={"flex items-center gap-2"}>
                        <Image src={"/assets/icons/packet.svg"} alt={"icon"} width={20} height={20}/>
                        <div>
                            <span className={"ml-1"}>کد پستی:</span>
                            <span>۲۴۲۴۲۳۵۳۵</span>
                        </div>
                    </li>
                    <li className={"flex items-center gap-2"}>
                        <Image src={"/assets/icons/Calling 2.svg"} alt={"icon"} width={20} height={20}/>
                        <div>
                            <span className={"ml-1"}>شماره تماس:</span>
                            <span>۰۹۲۱۲۰۷۴۵۶۷</span>
                        </div>
                    </li>
                    <li className={"flex items-center gap-2"}>
                        <Image src={"/assets/icons/Profile 2.svg"} alt={"icon"} width={20} height={20}/>
                        <div>
                            <span className={"ml-1"}>گیرنده:</span>
                            <span>شیدا داوری</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={"flex flex-col justify-between"}>
                <Image src={"/assets/icons/Menu Kebab.svg"} alt={"icon"} width={24} height={24} className={"self-end"}/>
                <Image src={"/assets/images/image 22.png"} alt={"icon"} width={165} height={117} className={"ml-5"}/>
            </div>
        </li>
    );
};

export default AddressesCard;