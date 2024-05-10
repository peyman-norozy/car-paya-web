import React, {useEffect, useState} from "react";
import SelectProvinceAndCarBox from "./SelectProvinceAndCarBox";
import SelectVerificationType from "./cards/SelectVerificationType";
import arrowLeft from "@/public/assets/icons/Arrow-Left.svg";
import Button from "@/components/Button";
import Image from "next/image";
import Input from "./Input";
import PeriodicServiceCard from "./cards/PeriodicServiceCard";
import CustomSlider from "@/components/CustomSlider/CustomSlider";
import PeriodicServiceTabCard from "@/components/cards/PeriodicServiceTabCard";
import {serviceData} from "@/staticData/data";
import CarServicesSlider from "@/components/CarServicesSlider/CarServicesSlider";
import {getData} from "@/utils/api-function-utils";
import axios from "axios";

const VerificationFirstStep = (props) => {
    const {on_click, verificationData, setStep, step} = props;
    const [isClicked, setIsClicked] = useState(5);
    const [isSelected, setIsSelected] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null)
    const cityName = [
        {name: "تهران"},
        {name: "تهران"},
        {name: "تهران"},
        {name: "تهران"},
        {name: "تهران"},
        {name: "تهران"},
        {name: "تهران"},
        {name: "تهران"},
        {name: "تهران"},
        {name: "تهران"},
        {name: "تهران"},
        {name: "تهران"},
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
        setStep(2);
    };

    // useEffect(() => {
    //        axios.get(process.env.BASE_API + '/web/expert/reservation?step=step-1&vehicle_tip_id=15').then(res => console.log(res)).catch(err => console.log(err))
    //
    //
    // }, [selectedItem]);

    return (
        <div className="flex gap-[1rem] mb-[5rem]">

            <div className="w-full py-[1rem] flex gap-[2rem]">

                <div className="flex flex-col size1090:flex-row  gap-[1rem] w-full">
                    {step === 1 && (
                        <div
                            className="w-[350px] size411:w-[400px] self-center size1090:self-auto">
                            {/* <SelectVehicleBox myTehicleTab={3} tabTitle={tabTitle} title="انتخاب وسیله نقلیه" /> */}
                            <SelectProvinceAndCarBox setSelectedItem={setSelectedItem} tabTitle={tabTitle} title="انتخاب وسیله نقلیه" cityData={cityName}/>
                        </div>
                    )}
                    {step === 4 && (
                        <div
                            className="w-[400px] p-4 flex flex-col self-center size1090:self-auto gap-4 shadow-[0_0_6px_0_rgba(177,177,177,1)] rounded-10">
                            <span>فاکتور فروش</span>
                            <section className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <Image
                                            src={"/assets/images/brand-7-model.jpg"}
                                            alt={"icon"}
                                            width={60}
                                            height={60}
                                        />
                                    </div>
                                    <span>هیوندای i8</span>
                                </div>
                                <div>
                                    <Button
                                        type={"button"}
                                        class_name={
                                            "text-12 shadow-[0_0_6px_0_rgba(177,177,177,1)] py-1 px-4 rounded-5 hover:bg-stone-200"
                                        }
                                    >
                                        تغییر خودرو
                                    </Button>
                                </div>
                            </section>
                            <section>
                                <ul className="flex flex-col gap-4">
                                    {workData.map((item) => (
                                        <PeriodicServiceCard key={item.has_come} item={item}/>
                                    ))}
                                </ul>
                            </section>
                            <section className="text-14 flex justify-between items-center mt-4 gap-4">
                                <span>کد تخفیف</span>
                                <Input
                                    type={"text"}
                                    placeholder={"کد تخفیف خود را وارد کنید..."}
                                    className={
                                        "outline-none placeholder:text-12 border flex-1 py-2 px-1 rounded-5"
                                    }
                                />
                            </section>
                            <section
                                className="flex justify-between lg:gap-[1rem] lg:items-start lg:flex-col-reverse items-center text-14">
                                <Button
                                    type={"button"}
                                    class_name={"bg-red-500 text-white rounded-5 py-2 px-4"}
                                >
                                    پرداخت نهایی
                                </Button>
                                <div className="flex gap-2">
                                    <span>مبلغ نهایی:</span>
                                    <span>6.000.000 تومان</span>
                                </div>
                            </section>
                        </div>
                    )}

                    <div className="w-full size1000:w-[calc(100%-300px)] size1180:w-[calc(100%-400px)] flex flex-col gap-[1.5rem]">
                            <div className='hidden size1000:flex'>
                                <CarServicesSlider data={serviceData}/>
                            </div>
                        <div className="flex flex-col size830:flex-row gap-[0.5rem] size1160:gap-[1rem]">
                            {verificationTitle.map((item, index) => (
                                <SelectVerificationType
                                    isSelected={isSelected}
                                    id={index}
                                    onClick={() => selectTypeHandler(index)}
                                    price={6000000}
                                    key={index}
                                    data={verificationData}
                                    title={item.name}
                                />
                            ))}
                        </div>
                        {step === 1 && <Button
                            on_click={continueVerificationHandler}
                            class_name="text-white rounded-[8px] bg-[#3AAB38] py-[0.5rem] w-[50%] size460:w-[40%] size830:w-[22%] size1228:w-[18%] flex gap-[0.5rem] items-center justify-center"
                        >
                            <p className="text-[13px] size1106:text-[15px] size12">
                                تایید و ادامه
                            </p>
                            <Image src={arrowLeft} alt="" height={20} width={20}/>
                        </Button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerificationFirstStep;
