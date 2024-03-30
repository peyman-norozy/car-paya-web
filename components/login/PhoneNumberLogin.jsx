import React, {useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/Input";
import {API_PATHS} from "@/configs/routes.config";
import Button from "@/components/Button";
import {error, forceOnlyNumberInput} from "@/utils/function-utils";
import {getLoginOtpData} from "@/store/todoSlice";
import Spinner from "@/components/Spinner";

export default function PhoneNumberLogin(props) {
    const [telPhoneValueNumber, setTelPhoneValueNumber] = useState("");
    const [sliderShowState, setSliderShowState] = useState(false)
    const [phoneNumberError, setPhoneNumberError] = useState("")

    const dispatch = useDispatch();

    const telPhoneNumberChangeHandler = (event) => {
        forceOnlyNumberInput(event);
        setTelPhoneValueNumber(event.target.value);
    };

    const clickTelNumberBtn = (event) => {
        if (event.code === "Enter" || event.type === "click") {
            if (telPhoneValueNumber.length < 11) {
                setPhoneNumberError("شماره تلفن باید ۱۱ رقم باشد")
                setTimeout(() => {
                    setPhoneNumberError("")
                }, 5000)
                return null
            }
            let fd = new FormData();
            fd.append("mobile", telPhoneValueNumber);
            setSliderShowState(true)
            axios
                .post(process.env.BASE_API + API_PATHS.GETOTP, fd)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.data.status.login === "exists") {
                        dispatch(
                            getLoginOtpData({
                                login_token: res.data.data.login_token,
                                mobile: telPhoneValueNumber,
                                loginOtpState: true,
                            }),
                        );
                        if (res.data.data.status.step === "register_user") {
                            props.setLoginState("register_user");
                        } else {
                            props.setLoginState("user_passwordNumber");
                        }
                        setSliderShowState(false)
                    } else if (res.data.data.status === "new") {
                        dispatch(
                            getLoginOtpData({
                                login_token: res.data.data.login_token,
                                mobile: telPhoneValueNumber,
                            }),
                        );
                        props.setLoginState("otp_number");
                        setSliderShowState(false)
                    }
                })
                .catch((e) => {
                    if (e.response.status === 422) {
                        error(e.response.data.message);
                    }
                });
        }
    };

    return (
        <div className="max-w-md m-auto my-[80px]">
            <div className="border-t-4 border-red-500 overflow-hidden rounded shadow-lg">
                <h3 className="text-xl text-center mt-8 mb-8">خوش آمدید!</h3>
                <div className="px-4 mb-4">
                    <div className="text-center">
                        <h1 className="font-bold">شماره موبایل خود را وارد کنید:</h1>
                        <h2 className="text-14 mt-2">
                            اگر ثبت نام کرده اید، با شماره خود وارد شوید.
                        </h2>
                    </div>
                    <Input
                        type={"tel"}
                        placeholder={"09129273836"}
                        className={
                            "border border-red-500 outline-red-600 rounded w-full p-3 mt-8"
                        }
                        maxlength="11"
                        on_change={telPhoneNumberChangeHandler}
                        onKeyDown={clickTelNumberBtn}
                    />
                </div>
                <p className={"text-12 text-red-500 mb-[10px] mr-[20px]"}>{phoneNumberError}</p>
                <div className="px-4 mb-6 text-center">
                    <Button
                        type={"button"}
                        disabled_btn={sliderShowState}
                        class_name={"w-[220px] h-[40px] bg-red-600 text-white rounded-5 cursor-pointer"}
                        on_click={clickTelNumberBtn}
                    >
                        <div className={"relative"}>
                            <span>ورود</span>
                            {sliderShowState &&
                                <div className={"flex justify-center items-center h-[20px] absolute left-4 top-[2px]"}>
                                    <Spinner width={"w-[24px]"} height={"h-[24px]"}/>
                                </div>}
                        </div>
                    </Button>
                </div>
            </div>
            <ToastContainer rtl={true}/>
        </div>
    );
}
