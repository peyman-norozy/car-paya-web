import React, {Fragment, useEffect, useState} from "react";
import SelectProvinceAndCarBox from "./SelectProvinceAndCarBox";
import Image from "next/image";
import {serviceData} from "@/staticData/data";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import axios from "axios";
import useSetQuery from "@/hook/useSetQuery";
import CallAndConsult from "@/components/CallAndConsult";
import CostumerSatisfaction from "@/components/vehicle-verification/CostumerSatisfaction";
import FrequentQuestions from "@/components/vehicle-verification/FrequentQuestions";
import CustomersComment from "@/components/vehicle-verification/CustomersComment";

const VerificationFirstStep = (props) => {
    const {on_click, verificationData, setStep, step} = props;
    const [isClicked, setIsClicked] = useState(5);
    const [isSelected, setIsSelected] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null)
    const [city_id, setCity_id] = useState()
    const [message, setMessage] = useState('')
    const [data, setData] = useState([])
    const setQuery = useSetQuery()
    const cityName = [
        {name: "تهران"},

    ];
    const tabTitle = [
        {name: "خودرو"},
        {name: "موتور سیکلت"},
        {name: "وسیله من"},
    ];

    const verificationTitle = [
        {name: "کارشناسی اقتصادی"},
        {name: "کارشناسی استاندارد"},
        {name: "کارشناسی حرفه ای"},
    ];
    const workData = [
        {
            title: "تعویض روغن",
            price: 3000000,
            has_come: 1608663149,
        },
        {
            title: "تعویض روغن",
            price: 3000000,
            has_come: 1708863149,
        },
    ];

    const selectTabHandler = (index) => {
        setIsClicked(index);
    };

    const selectTypeHandler = (index) => {
        setIsSelected(index);
    };

    const continueVerificationHandler = () => {
        setQuery.setMultiQuery([{key: 'city_id', value: city_id}, {key: 'vehicle_tip', value: selectedItem}])
        // setStep(2);

    };

    useEffect(() => {
        const city = city_id === undefined ? '' : '&city_id=' + city_id
        const vehicle_tip = selectedItem === null ? '' : '&vehicle_tip_id=' + selectedItem
        axios.get(process.env.BASE_API + '/web/expert/reservation?step=step-1' + vehicle_tip + city).then(res => {

            console.log(res)
            setData(res.data.data)
        }).catch(err => {
            setMessage(err.response.data.message)
            console.log(err)
        })


    }, [selectedItem, city_id]);


    const active = data.length > 0


    return (
        <Fragment>
            <div className="flex gap-[1rem] mb-[5rem] w-[98%]  m-auto size1160:w-[95%]">

                <div className="w-full py-[1rem] flex gap-[2rem]">

                    <div className="flex flex-col size1090:flex-row  gap-[1rem] w-full">
                        <div
                            className="hidden lg:block w-[350px] size411:w-[400px] self-center size1090:self-auto">
                            <SelectProvinceAndCarBox setCity_id={setCity_id} setSelectedItem={setSelectedItem}
                                                     tabTitle={tabTitle} title="انتخاب وسیله نقلیه"
                                                     cityData={cityName}/>
                        </div>

                        <div
                            className="w-full size1090:w-[calc(100%-400px)] flex flex-col gap-[1.5rem]">
                            <div className='hidden size1000:flex'>
                                <CarServicesSlider data={serviceData}/>
                            </div>
                            <div className={'relative'}>
                                <Image src={'/assets/images/mainPicVerification.png'} alt={''} width={824} height={377}
                                       className={'w-full min-h-[200px] lg:h-[377px]'}/>
                                <div className={'absolute right-[4%] top-[10%] size690:top-[20%] flex flex-col gap-2'}>
                                    <h1 className={'text-14 size582:text-[24px] text-BLUE_500'}>کــارشــنــاســی خــودرو</h1>
                                    <h1 className={'text-12 size582:text-[22px]'}>با کارشناس های ما مطمعن خرید کنید</h1>
                                    <h1 className={'text-12 size582:text-[22px] text-RED_400'}>کار چک می کنار شماست</h1>
                                    <button className={'bg-BLUE_700 mt-1 size690:mt-3 lg:hidden w-fit text-12 size690:text-[16px] p-[8px] text-white rounded-[4px]'}> درخواست کارشناسی</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <CustomersComment/>
            </div>
            <div className={'mb-[2rem] size1275:mb-[4rem]'}>
                <CallAndConsult/>
            </div>
            <div className='w-full size882:w-[80%] size1136:w-[60%] size1275:w-[70%] m-auto'>
                <CostumerSatisfaction/>
                <FrequentQuestions/>
            </div>
        </Fragment>
    );
};

export default VerificationFirstStep;
