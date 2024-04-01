"use client"
import Image from "next/image";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";
import {error, forceOnlyNumberInput, success} from "@/utils/function-utils";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {API_PATHS} from "@/configs/routes.config";
import {ToastContainer} from "react-toastify";

const ContactUs = () => {
    const sendFormDataHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const telephone = event.target.telephone.value;
        const messageText = event.target.messageText.value;
        formData.append("name", fullName);
        formData.append("email", email);
        formData.append("mobile", telephone);
        formData.append("description", messageText);

        axios
            .post(process.env.BASE_API + "/web" + API_PATHS.CONTACTUS, formData)
            .then((res) => {
                success(res.data.data["msg"]);
            })
            .catch((e) => {
                if (e.response.status === 422) {
                    for (let key in e.response.data.errors) {
                        error(e.response.data.errors[key][0]);
                    }
                }
            });
    };

    const telPhoneNumberChangeHandler = (event) => {
        forceOnlyNumberInput(event);
    };

    return (
        <div className={"mt-40"}>
            <div className="mt-[80px] w-full">
                <div className="flex justify-center items-center gap-8 w-full">
                    <form
                        className="font-light flex flex-col gap-8 w-[50%]"
                        onSubmit={sendFormDataHandler}
                    >
                        <h1 className="font-bold text-24">تماس با ما</h1>
                        <div className="flex flex-col gap-2">
                            <Label
                                htmlFor="fullName"
                                text={"نام و نام خانوادگی"}
                                styling="text-14"
                            />
                            <Input
                                type="text"
                                className={
                                    "border border-red-500 outline-red-600 rounded w-full px-3 h-[40px]"
                                }
                                id="fullName"
                                name="fullName"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email" text={"ایمیل"}/>
                            <Input
                                type="email"
                                className={
                                    "border border-red-500 outline-red-600 rounded w-full px-3 h-[40px]"
                                }
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="telephone" text={"موبایل"}/>
                            <Input
                                type={"tel"}
                                placeholder={"09129273836"}
                                className={
                                    "border border-red-500 outline-red-600 rounded w-full px-3 h-[40px]"
                                }
                                maxlength="11"
                                id="telephone"
                                name="telephone"
                                on_change={telPhoneNumberChangeHandler}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="messageText" text={"متن پیام"}/>
                            <textarea
                                rows={10}
                                className={
                                    "border border-red-500 outline-red-600 rounded w-full p-3"
                                }
                                id="messageText"
                                name="messageText"
                            ></textarea>
                        </div>
                        <Button
                            type={"submit"}
                            class_name="bg-red-500 text-white w-[50%] m-[auto] py-2 rounded-5"
                        >
                            ارسال
                        </Button>
                    </form>

                    <Image
                        src="/assets/icons/car_repair.svg"
                        alt="car_repair"
                        className="w-[40%]"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className="flex justify-center gap-8 my-[80px]">
                <Image
                    src="/assets/icons/facebook.svg"
                    alt="facebook"
                    width={40}
                    height={40}
                />
                <Image
                    src="/assets/icons/instagram.svg"
                    alt="instagram"
                    width={40}
                    height={40}
                />
                <Image
                    src="/assets/icons/telegram.svg"
                    alt="telegram"
                    width={40}
                    height={40}
                />
                <Image
                    src="/assets/icons/twitter.svg"
                    alt="twitter"
                    width={40}
                    height={40}
                />
                <ToastContainer rtl={true}/>
            </div>
        </div>
    );
};

export default ContactUs;
