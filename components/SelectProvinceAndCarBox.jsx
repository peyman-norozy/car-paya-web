import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {API_PATHS} from "@/configs/routes.config";
import Input from "@/components/Input";
import ShowMyVehicles from "@/components/ShowMyVehicles";
import Spinner from "@/components/Spinner";

const SelectProvinceAndCarBox = (props) => {
    const {cityData} = props
    const [province, setProvince] = useState([]);
    const [city, setCity] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null)
    const [selectedCity, setSelectedCity] = useState(null)
    const [provinceName, setProvinceName] = useState(null)
    const [cityName, setCityName] = useState(null)
    const [isClicked, setIsClicked] = useState(0);
    const [isSelected,setIsSelected] = useState(false)
    const [carBrands, setCarBrands] = useState([]);
    const [motorBrands, setMotorBrands] = useState([]);
    const [carModel, setCarModel] = useState([]);
    const [motorModel, setMotorModel] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [step, setStep] = useState("car-brands");
    const [motorStep, setMotorStep] = useState("motor-brands");
    const [isLoading, setIsLoading] = useState(false);

    const cityRef = useRef()

    const myVehicleData = [];

    const backStepHandler = () => {
        if (step === "car-models") {
            setStep("car-brands");
        } else if (step === "car-tips") {
            setStep("car-models");
            setSelectedItem(carModel);
        }
        if (motorStep === "motor-models") {
            setMotorStep("motor-brands");
        } else if (motorStep === "motor-tips") {
            setMotorStep("motor-models");
            setSelectedItem(motorModel);
        }
    };

    const citySearchHandler = () => {
        setIsSelected(true)
    }

    const selectTabHandler = (index) => {
        setIsClicked(index)
        setMotorStep('motor-brands')
        setStep('car-brands')
    }

    useEffect(() => {
        setIsLoading(true);
        if (step === "car-brands") {
            axios
                .get(process.env.BASE_API + "/web" + "/car-brands")
                .then((res) => {
                    setIsLoading(false);
                    setCarBrands(res.data.data);
                })
                .catch((err) => console.log(err));
        } else if (step === "car-models") {
            axios
                .get(process.env.BASE_API + "/web" + "/car-models/" + selectedItem)
                .then((res) => {
                    setCarBrands(res.data.data);
                    setCarModel(selectedItem);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        } else if (step === "car-tips") {
            axios
                .get(process.env.BASE_API + "/web" + "/car-tips/" + selectedItem)
                .then((res) => {
                    setCarBrands(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        }
        if (motorStep === "motor-brands") {
            axios
                .get(process.env.BASE_API + "/web" + "/motor-brands")
                .then((res) => {
                    setMotorBrands(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        } else if (motorStep === "motor-models") {
            axios
                .get(process.env.BASE_API + "/web" + "/motor-models/" + selectedItem)
                .then((res) => {
                    setMotorBrands(res.data.data);
                    setMotorModel(selectedItem);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        } else if (motorStep === "motor-tips") {
            axios
                .get(process.env.BASE_API + "/web" + "/motor-tips/" + selectedItem)
                .then((res) => {
                    setMotorBrands(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        }
    }, [step, motorStep, isClicked]);

    const tabTitle = [
        {name: "خودرو"},
        {name: "موتور سیکلت"},
        {name: "ماشین سنگین"},

    ];

    const provinceData = [{name: "انتخاب استان"}, {name: "انتخاب شهر "}];

    useEffect(() => {
        axios
            .get(process.env.BASE_API + "/web" + API_PATHS.GEOPROVINCES)
            .then((res) => {
                const tehran = res.data.data.filter(item => item.title === 'تهران')
                setProvince(tehran);
            })
            .catch((err) => console.log(err));
        axios
            .get(process.env.BASE_API + "/web" + API_PATHS.GEOCITIES + '/' + selectedProvince)
            .then((res) => {
                const tehran = res.data.data.filter(item => item.title === 'تهران')

                setCity(tehran);
                props.setCity_id(tehran[0].id)
            })
            .catch((err) => console.log(err));
    }, [selectedProvince]);


    return (
        // <div className="w-full border-[1px]  rounded-10 shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] overflow-hidden">
        //   <div className="py-[1rem] bg-RED_500 text-white">
        //     <h1 className="text-center mb-[0.75rem]">انتخاب شهر و استان</h1>
        //     <div className="flex items-center justify-center gap-[0.5rem]">
        //       <SelectCityInput setProvinceName={setProvinceName} setSelectedProvince={setSelectedProvince}
        //                        name={provinceName === null ? "انتخاب استان" : provinceName} data={province}
        //                        id="province"/>
        //       <SelectCityInput setCityName={setCityName} setSelectedCity={setSelectedCity}
        //                        name={cityName === null ? 'انتخاب شهر' : cityName} data={city} id="city"/>
        //     </div>
        //   </div>
        //   <div className="shadow-[0_0_6px_0_rgba(177,177,177,1)] rounded-b-10">
        //     <div className="w-[95%] m-auto py-[1rem]">
        //       <h1 className="text-text_gray w-full text-center mb-[0.5rem]">
        //         {props.title}
        //       </h1>
        //       <div className="mb-[1.5rem]">
        //         <SelectVehicleTab
        //             className="flex items-center justify-center gap-[0.5rem]"
        //             tabTitle={props.tabTitle}
        //             setIsClicked={setIsClicked}
        //             isClicked={isClicked}
        //             setMotorStep={setMotorStep}
        //             setStep={setStep}
        //
        //         />
        //       </div>
        //       <div className="flex items-start justify-between">
        //         <Image
        //             src="/assets/icons/Arrow-Left 1.svg"
        //             alt=""
        //             width={20}
        //             height={20}
        //             className={`${step === "car-brands" ? "hidden" : "rotate-180"} `}
        //             onClick={backStepHandler}
        //         />
        //         <h1 className="text-text_gray w-full self-center text-center mb-[1.25rem]">
        //           {step === "car-brands" || motorStep === "motor-brands"
        //               ? "انتخاب برند"
        //               : step === "car-models" || motorStep === "motor-models"
        //                   ? "انتخاب مدل"
        //                   : "انتخاب وسیله نقلیه"}
        //         </h1>
        //       </div>
        //       <div className="mb-[1.5rem]">
        //         <SearchInput placeholder="جستجو برند، مدل، تیپ"/>
        //       </div>
        //       {isLoading ? (
        //           <div className={"flex justify-center items-center h-[100px]"}>
        //             <Spinner width={"w-[44px]"} height={"h-[44px]"}/>
        //           </div>
        //       ) : (
        //           <ShowMyVehicles
        //               setSelectedVehicle={props.setSelectedItem}
        //               setSelectedItem={setSelectedItem}
        //               setStep={setStep}
        //               step={step}
        //               motorStep={motorStep}
        //               setMotorStep={setMotorStep}
        //               data={
        //                 isClicked === 0
        //                     ? carBrands
        //                     : isClicked === 1
        //                         ? motorBrands
        //                         : myVehicleData
        //               }
        //           />
        //       )}
        //     </div>
        //   </div>
        // </div>box-shadow: 0px 0px 8px 0px rgba(226, 226, 226, 0.5);
        <div className={'rounded-2xl shadow-[0_0_8px_rgba(226,226,226,0.5)] px-[26px] pt-5 pb-2'}>
            <h2 className={'text-14 font-medium mb-5'}>برای ثبت کارشناسی استان و شهر خود را انتخاب کنید</h2>
            <div
                className={'rounded-lg flex items-center border border-[#B0B0B0] p-[10px] text-[#3D3D3D] h-[2.5rem] mb-[1rem] relative'}>
                <input id={'city'} type={'text'} className={'w-full h-full outline-none text-[#3D3D3D]'} onClick={citySearchHandler}/>
                <i className={'cc-arrow-down'}/>
                <label htmlFor={'city'}
                       className={'text-[#454545] text-14 absolute top-[-30%] bg-white right-[5%] px-1'}> استان/شهر <span
                    className={'text-RED_400'}> * </span></label>
                {/*<ul ref={cityRef} className={`${isSelected ? cityRef.current.scrollHeight + 'px' : 'h-0'} bg-white absolute bottom-[-50px] right-0 w-full px-[12px] py-2 overflow-scroll max-h-[10rem]`}>*/}
                {/*    {cityData.map((item, index) => <li className={'py-[6px] pr-[12px] hover:bg-BLUE_100 rounded-lg'} key={index}>{item.name}</li>)}*/}
                {/*</ul>*/}
            </div>
            <h3 className={'text-14 mb-2 font-medium'}>انتخاب وسیله نقلیه</h3>
            <div className={'flex items-center gap-4 mb-2'}>
                {tabTitle.map((item, i) => <div onClick={() => selectTabHandler(i)}
                    className={'bg-[#F9FAFF99] text-BLUE_800 text-14 py-[10px] text-center w-full shadow-[0_0_4px_rgba(180,180,180,0.25)] cursor-pointer'}
                    key={i}>
                    {item.name}
                </div>)}
            </div>
            <div className={'flex items-center gap-2 mb-4'}>
                <p className={'text-14 font-medium'}>کارشناسی وسیله من</p>
                <Input type={'checkbox'}
                       className={'h-[22px] w-[22px]'}/>
            </div>
            <h4 className={'text-14 font-medium mb-5'}>{step === "car-brands" || motorStep === "motor-brands"
                              ? "انتخاب برند"
                              : step === "car-models" || motorStep === "motor-models"
                                  ? "انتخاب مدل"
                                  : ""}</h4>
            <div
                className={'rounded-lg flex items-center border border-[#B0B0B0] p-[10px] text-[#3D3D3D] relative h-[2.5rem] mb-2'}>
                <input id={'brand'} type={'text'} className={'w-full h-full outline-none text-[#3D3D3D]'}/>
                <i className={'cc-arrow-down'}/>
                <label htmlFor={'brand'}
                       className={'text-[#454545] text-14 absolute top-[-30%] bg-white right-[5%] px-1'}> برند<span
                    className={'text-RED_400'}> * </span></label>
            </div>
            {isLoading ? (
                          <div className={"flex justify-center items-center h-[100px]"}>
                            <Spinner width={"w-[44px]"} height={"h-[44px]"}/>
                          </div>
                      ) : (
                          <ShowMyVehicles
                              setSelectedVehicle={props.setSelectedItem}
                              setSelectedItem={setSelectedItem}
                              setStep={setStep}
                              step={step}
                              motorStep={motorStep}
                              setMotorStep={setMotorStep}
                              data={
                                isClicked === 0
                                    ? carBrands
                                    : isClicked === 1
                                        ? motorBrands
                                        : myVehicleData
                              }
                          />
                      )}

        </div>
    );

};

export default SelectProvinceAndCarBox;
