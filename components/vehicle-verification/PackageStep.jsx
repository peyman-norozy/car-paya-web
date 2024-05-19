import React, {useEffect, useState} from 'react';
import Image from "next/image";
import PackageCard from "@/components/vehicle-verification/PackageCard";
import useSetQuery from "@/hook/useSetQuery";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import axios from "axios";

const PackageStep = () => {
    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [data, setData] = useState([])
    const [message, setMessage] = useState('')

    // const data = [
    //     {title : 'کارشناسی اقتصادی'},
    //     {title : 'کارشناسی استاندارد'},
    //     {title : 'کارشناسی ویزه'},
    // ]

    const backStepHandler = () => {
        router.replace(pathname);
    }

    useEffect(() => {
        const city_id = searchParams.get('city_id')
        const selectedItem = searchParams.get('vehicle_tip')
        const city = city_id === undefined ? '' : '&city_id=' + city_id
        const vehicle_tip = selectedItem === null ? '' : '&vehicle_tip_id=' + selectedItem
        axios.get(process.env.BASE_API + '/web/expert/reservation?step=step-1' + vehicle_tip + city).then(res => {

            console.log(res)
            setData(res.data.data)
        }).catch(err => {
            setMessage(err.response.data.message)
            console.log(err)
        })


    }, [searchParams]);
    return (
        <div className={'flex items-center  justify-between pt-[28px] w-[95%] size1136:w-[85%] m-auto'}>
            <div className={'w-full size1000:w-[50%] flex flex-col'}>
                <div className={'flex items-center gap-2 size752:gap-[16px] text-BLUE_600 w-full mb-4'}>
                    <i className={'cc-arrow-right text-24 cursor-pointer'} onClick={backStepHandler}/>
                    <p className={'p-[6px] text-14 size752:text-16 w-full border-b border-BLUE_600'}>سرویس مد نظر خود را انتخاب کنید</p>
                </div>
                {/*<ul className={'pr-[36px] size752:pr-[40px] flex flex-col gap-[14px] mb-[2.5rem]'}>*/}
                {/*    {data.map((item, index) => <li key={index}><PackageCard title={item.title}/></li>)}*/}
                {/*</ul>*/}
                <button
                        className={'bg-BLUE_700 self-end flex items-center gap-2 mt-1 size690:mt-3 w-fit text-12 size690:text-[16px] p-[8px] text-white rounded-[4px]'}>
                    <p>تایید و ادامه</p>
                    <i className={'cc-left text-[20px]'} />
                </button>
            </div>
            <Image src={'assets/images/packagePic.svg'} alt={''} width={544} height={544} className={'hidden size1000:block'}/>
        </div>
    );
};

export default PackageStep;