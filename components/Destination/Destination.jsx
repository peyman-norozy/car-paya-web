import React from 'react';
import Button from "@/components/Button";
import Image from "next/image";
import AddressesCard from "@/components/cards/AddressesCard";

const Destination = () => {
    const addressData = [1,2,3,4,5,6]
    return (
        <div
            className={"flex-1 flex flex-col gap-[40px] rounded-10 shadow-[0_0_6px_0_rgba(177,177,177,1)] py-[32px] px-[40px] min-h-[582px]"}>
            <div className={"flex justify-between items-center"}>
                <span className={"text-[#354597]"}>آدرس های من</span>
                <Button type={"button"}
                        class_name={"flex gap-2 border  border-[#354597] py-[13px] px-[15px] rounded-[8px]"}>
                    <Image src={"/assets/icons/location-add.svg"} alt={"icon"} width={20} height={20}/>
                    <span className={"text-[#354597] font-light"}>ثبت آدرس جدید</span>
                </Button>
            </div>
            {
                4 > 3
                    ?
                    <ul className={"flex flex-col gap-4"}>
                        {
                            addressData.map((item,index)=><AddressesCard key={index}/>)
                        }
                    </ul>
                    :
                    <div className={"flex-1 flex justify-center items-center"}>

                        <div className={"flex flex-col justify-center items-center gap-4"}>
                            <Image src={"/assets/icons/location-slash.svg"} alt={"icon"} width={135} height={135}/>
                            <p className={"text-[#A5A0A0]"}>شما تا به حال آدرسی ثبت نکرده اید.</p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Destination;