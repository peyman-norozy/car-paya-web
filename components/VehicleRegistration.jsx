import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {API_PATHS} from "@/configs/routes.config";
import {error} from "@/utils/function-utils";
import MainCarBrand from "@/components/MainCarBrand";
import MainMotorSycleBrand from "@/components/MainMotorSycleBrand";
import MainCarModel from "@/components/MainCarModel";
import MainCarTip from "@/components/MainCarTip";
import MainMotorSycleModel from "@/components/MainMotorSycleModel";
import MainMotorSycleTip from "@/components/MainMotorSycleTip";
import {ToastContainer} from "react-toastify";
import Spinner from "@/components/Spinner";

const tabData = [
    {title: "خودرو", id: "car"},
    {title: "موتورسیکلت", id: "motorSycle"},
];

const VehicleRegistration = (props) => {
    const [mainBrandModalDisplay, setMainBrandModalDisplay] = useState(true);
    const [mainModelDisplay, setMainModelDisplay] = useState(false);
    const [mainTipDisplay, setMainTipDisplay] = useState(false);
    const [mainCarModelData, setMainCarModelData] = useState([]);
    const [mainCarTipsData, setMainCarTipsData] = useState([]);
    const [mainMotorBrandModalDisplay, setMainMotorBrandModalDisplay] = useState(true);
    const [mainMotorModelDisplay, setMainMotorModelDisplay] = useState(false);
    const [mainMotorTipDisplay, setMainMotorTipDisplay] = useState(false);
    const [sliderShowState, setSliderShowState] = useState(false)
    const [mainMotorModelData, setMainMotorModelData] = useState([]);
    const [mainMotorTipsData, setMainMotorTipsData] = useState([]);
    const [newTabId, setNewTabId] = useState("car");
    const clickTabHandler = (event) => {
        setNewTabId(event.currentTarget.id);
    };

    const clickbrandHandler = (event, value) => {
        const id = event.currentTarget.getAttribute("id");
        let models = ""
        id === "car_brand" ? models = API_PATHS.MODELS : id === "motor_brand" ? models = API_PATHS.MOTORMODELS : null
        setSliderShowState(true)
        axios
            .get(process.env.BASE_API + "/web" + models + "/" + value)
            .then((res) => {
                if (id === "car_brand") {
                    setMainCarModelData(res.data.data);
                    setMainBrandModalDisplay(false);
                    setMainModelDisplay(true);
                } else if (id === "motor_brand") {
                    setMainMotorModelData(res.data.data)
                    setMainMotorBrandModalDisplay(false)
                    setMainMotorModelDisplay(true)
                }
            }).then(() => {
            setSliderShowState(false)
        })
            .catch((e) => {
                if (e.response.status === 422) {
                    for (let key in e.response.data.errors) {
                        error(e.response.data.errors[key][0]);
                    }
                }
            });
    };

    const clickTipHandler = (event, value, image) => {
        const id = event.currentTarget.getAttribute("id");
        let tip = ""
        id === "car_model" ? tip = API_PATHS.TIPS : id === "motor_model" ? tip = API_PATHS.MOTORTIPS : null
        setSliderShowState(true)
        axios
            .get(process.env.BASE_API + "/web" + tip + "/" + value)
            .then((res) => {
                if (id === "car_model") {
                    res.data.data.filter((item) => {
                        if (item.id === value) {
                            return (item.image = image);
                        }
                    });
                    setMainCarTipsData(res.data.data);
                    setMainTipDisplay(true);
                    // setMainBrandModalDisplay(false);
                    setMainModelDisplay(false);
                    setSliderShowState(false)
                } else if (id === "motor_model") {
                    res.data.data.filter((item) => {
                        if (item.id === value) {
                            return (item.image = image);
                        }
                    });
                    setMainMotorTipsData(res.data.data)
                    setMainMotorTipDisplay(true)
                    setMainMotorModelDisplay(false)
                    setSliderShowState(false)
                }
            })
            .catch((e) => {
                if (e.response.status === 422) {
                    for (let key in e.response.data.errors) {
                        error(e.response.data.errors[key][0]);
                    }
                }
            });
    };

    return (
        <Fragment>
            <div
                className={`absolute top-[10px]  ${
                    props.style ? props.style : "w-[340px]"
                } z-50 bg-white font-light px-4 py-4 rounded-lg`}
            >
                <div className="flex flex-col items-center">
                    <span className="text-16">ثبت وسیله نقلیه</span>
                    <ul className="flex justify-center gap-2 text-12 mt-4">
                        {tabData.map((item) => (
                            <li
                                key={item.id}
                                id={item.id}
                                className={`border px-3 py-1 rounded-[5px] cursor-pointer flex gap-2 ${
                                    item.id === newTabId ? "bg-red-500 text-white" : ""
                                }`}
                                onClick={clickTabHandler}
                            >
                                {item.id === newTabId ? <span>s</span> : ""}
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {
                    {
                        car: (
                            sliderShowState ?
                                <div className={"flex justify-center items-center h-[100px]"}>
                                    <Spinner width={"w-[44px]"} height={"h-[44px]"}/>
                                </div>
                                :
                                mainBrandModalDisplay ? <MainCarBrand
                                        clickbrandHandler={clickbrandHandler}
                                        setSliderShowState={setSliderShowState}
                                    /> :
                                    mainModelDisplay ?
                                        <MainCarModel
                                            mainCarModelData={mainCarModelData}
                                            setMainBrandModalDisplay={setMainBrandModalDisplay}
                                            setMainModelDisplay={setMainModelDisplay}
                                            clickTipHandler={clickTipHandler}
                                        /> :
                                        mainTipDisplay ?
                                            <MainCarTip
                                                mainCarTipsData={mainCarTipsData}
                                                setMainTipDisplay={setMainTipDisplay}
                                                setMainModelDisplay={setMainModelDisplay}
                                                sliderShowState={sliderShowState}
                                                setMainBrandModalDisplay={setMainBrandModalDisplay}
                                            /> : null
                        ),
                        motorSycle: (
                            sliderShowState ?
                                <div className={"flex justify-center items-center h-[100px]"}>
                                    <Spinner width={"w-[44px]"} height={"h-[44px]"}/>
                                </div>
                                :
                                mainMotorBrandModalDisplay ?
                                    <MainMotorSycleBrand
                                        clickbrandHandler={clickbrandHandler}
                                        setSliderShowState={setSliderShowState}
                                    /> :
                                    mainMotorModelDisplay ?
                                        <MainMotorSycleModel
                                            mainMotorModelData={mainMotorModelData}
                                            setMainMotorBrandModalDisplay={setMainMotorBrandModalDisplay}
                                            setMainMotorModelDisplay={setMainMotorModelDisplay}
                                            clickTipHandler={clickTipHandler}
                                        />
                                        : mainMotorTipDisplay ?
                                            <MainMotorSycleTip
                                                mainMotorTipsData={mainMotorTipsData}
                                                setMainMotorTipDisplay={setMainMotorTipDisplay}
                                                setMainMotorModelDisplay={setMainMotorModelDisplay}
                                                setMainMotorBrandModalDisplay={setMainMotorBrandModalDisplay}
                                            />
                                            : null
                        ),
                    }[newTabId]
                }
            </div>
            <ToastContainer rtl={true}/>
        </Fragment>
    );
};

export default VehicleRegistration;
