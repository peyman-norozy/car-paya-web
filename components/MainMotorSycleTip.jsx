import React, {Fragment, useState} from 'react';
import Image from "next/image";
import Input from "@/components/Input";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {API_PATHS} from "@/configs/routes.config";
import {getCookie} from "cookies-next";
import Button from "@/components/Button";
import OTPInput from "react-otp-input";
import {useRouter} from "next/router";
import axios from "axios";
import {error, forceOnlyNumberInput, success} from "@/utils/function-utils";

const MainMotorSycleTip = (props) => {
    const [newTipId, setNewTipId] = useState(null)
    const [setPhoneNumberState, setSetPhoneNumberState] = useState(false)
    const [newOtpState, setNewOtpState] = useState(false)
    const [otp, setOtp] = useState("");
    const [setLoginToken, setSetLoginToken] = useState("")
    const [newPhoneNumber, setNewPhoneNumber] = useState("")

    const router = useRouter()
    const backClickHandler = () => {
        props.setMainMotorTipDisplay(false);
        props.setMainMotorModelDisplay(true);
    };

    const clickTipHandler = (id) => {
        setNewTipId(id)
        setSetPhoneNumberState(true)
    }

    const sendCarTipHandler = () => {
        const formData = new FormData()
        formData.set("car_tip_id", newTipId)
        axios
            .post(process.env.BASE_API + "/web" + API_PATHS.ADDCAR, formData)
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    success("ارسال موفقیت آمیز بود")
                    setNewTipId(null)
                    props.setMainMotorTipDisplay(false);
                    props.setMainMotorBrandModalDisplay(true)
                }
            })
            .catch((e) => {
                console.log(e)
            });
    }

    const phoneNumberHandler = (event) => {
        forceOnlyNumberInput(event);
    }

    const sendPhoneNumberHandler = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.set("mobile", event.target.phone_number.value)
        setNewPhoneNumber(event.target.phone_number.value)
        axios
            .post(process.env.BASE_API + "/web" + API_PATHS.GETCODECAR, formData)
            .then((res) => {
                if (res.status === 200) {
                    setSetLoginToken(res.data.data.login_token)
                    setNewOtpState(true)
                    setSetPhoneNumberState(false)
                }
            })
            .catch((e) => {
                console.log(e)
                if (e.response.status === 422) {
                    error(e.response.data.message);
                }
            });
    }

    const postOtp = () => {
        let fd = new FormData();
        fd.set("login_token", setLoginToken);
        fd.set("mobile", newPhoneNumber);
        fd.set("otp", otp);
        fd.set("car_tip_id", newTipId)

        axios
            .post(process.env.BASE_API + "/web" + API_PATHS.ADDCARLOGIN, fd)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    let now = new Date();
                    let time = now.getTime();
                    let expireTime = time + res.data.data.expires_at;
                    console.log(expireTime);
                    now.setTime(expireTime);
                    console.log(now.toUTCString());
                    document.cookie = `Authorization = ${
                        res.data.data.token
                    };expires=${now.toUTCString()};path=/`;
                }
            }).then(() => {
            setNewOtpState(false)
            props.setMainMotorTipDisplay(false);
            props.setMainMotorBrandModalDisplay(true)
            router.push('/')
        })
            .catch((e) => console.log(e))
    }

    const sendOtpClickHandler = () => {
        postOtp();
    };
    const otpSubmitHandler = (event) => {
        if (event.key === "Enter") {
            postOtp();
        }
    };


    return (
        <Fragment>
            <div className="flex flex-col gap-4 mt-4 w-full">
                <div className="flex justify-end">
                    <span className="flex-1 text-center">انتخاب تیپ</span>
                    <Image
                        src={"/assets/icons/Arrow-Left 1.svg"}
                        alt={"icon"}
                        className="cursor-pointer"
                        onClick={backClickHandler}
                        width={24}
                        height={24}
                    />
                </div>
                <div>
                    <Input
                        type={"text"}
                        placeholder={"جستجو تیپ"}
                        className={
                            "border placeholder:text-12 text-14 outline-none pr-1 py-1 rounded-sm w-full"
                        }
                    />
                </div>

                <div className="border max-h-[180px] w-full overflow-y-scroll grid grid-cols-3 gap-4 py-4">
                    {props.mainMotorTipsData.map((item, index) => (
                        <div key={index}
                             className={`flex flex-col items-center gap-2 ${newTipId === item.id ? "bg-stone-200 pt-2 mx-2 rounded-5" : ""}`}
                             onClick={() => clickTipHandler(item.id)}>
                            <div className="w-[50px] h-[50px] cursor-pointer" value={item.id}>
                                <Image
                                    src={
                                        item.image === null
                                            ? "/assets/icons/photo.svg"
                                            : process.env.BASE_API +
                                            "/web" +
                                            API_PATHS.FILE +
                                            "/" +
                                            item.image
                                    }
                                    alt={"nissan"}
                                    width={487}
                                    height={487}
                                    className={"rounded-10 w-[50px] h-[50px]"}
                                />
                            </div>
                            <span className="text-12">{item.title}</span>
                        </div>
                    ))}
                </div>
                <div>
                    {
                        getCookie("Authorization") && newTipId ?
                            <Button type={"button"}
                                    class_name={"bg-[#3AAB38] text-white py-2 px-4 rounded-5"}
                                    on_click={sendCarTipHandler}>ارسال</Button>
                            :
                            setPhoneNumberState ?
                                <form className={"flex justify-between gap-4 size1000:flex-row flex-col"}
                                      onSubmit={sendPhoneNumberHandler}>
                                    <Input type={"text"} className={"border rounded-5 text-14 outline-none flex-1 pr-2"}
                                           placeholder={"شماره موبایل خود را وارد کنید"} on_change={phoneNumberHandler}
                                           maxlength={11} name={"phone_number"}/>
                                    <Button type={"submit"}
                                            class_name={"bg-[#3AAB38] text-white py-2 px-4 rounded-5"}>ثبت</Button>
                                </form> : null
                    }
                    {
                        newOtpState &&
                        <form
                            onKeyDown={otpSubmitHandler}
                            className="flex items-center justify-between gap-4 size1000:flex-row flex-col"
                        >
                            <div className="OTP_Input flex-1">
                                <OTPInput
                                    value={otp}
                                    onChange={setOtp}
                                    inputType={"number"}
                                    shouldAutoFocus={true}
                                    numInputs={4}
                                    renderSeparator={false}
                                    renderInput={(props) => <input {...props} />}
                                    containerStyle={{
                                        width: "200px",
                                        height: "50px",
                                        direction: "ltr",
                                        marginLeft: "10px",
                                        gap: "10px",
                                    }}
                                    inputStyle={
                                        "flex-1 h-full border border-red-600 rounded-5 outline-none"
                                    }
                                />
                            </div>
                            <Button
                                type={"button"}
                                on_click={sendOtpClickHandler}
                                class_name={"bg-[#3AAB38] text-white py-2 px-4 rounded-5"}
                                text={"ارسال"}
                            />
                        </form>
                    }
                </div>

            </div>
        </Fragment>

    );
};

export default MainMotorSycleTip;