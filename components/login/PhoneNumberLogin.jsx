import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/Input";
import { API_PATHS } from "@/configs/routes.config";
import Button from "@/components/Button";
import { error, forceOnlyNumberInput } from "@/utils/function-utils";
import { getLoginOtpData } from "@/store/todoSlice";
import Spinner from "@/components/Spinner";
import { postData } from "@/utils/client-api-function-utils";
import Image from "next/image";
import loginImage from "@/public/assets/images/login.png";
export default function PhoneNumberLogin(props) {
  const [telPhoneValueNumber, setTelPhoneValueNumber] = useState("");
  const [sliderShowState, setSliderShowState] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const dispatch = useDispatch();

  const telPhoneNumberChangeHandler = (event) => {
    forceOnlyNumberInput(event);
    setTelPhoneValueNumber(event.target.value);
  };

  const clickTelNumberBtn = async (event) => {
    if (event.code === "Enter" || event.type === "click") {
      if (telPhoneValueNumber.length < 11) {
        setPhoneNumberError("شماره تلفن باید ۱۱ رقم باشد");
        setTimeout(() => {
          setPhoneNumberError("");
        }, 5000);
        return null;
      }
      let fd = new FormData();
      fd.append("mobile", telPhoneValueNumber);
      setSliderShowState(true);
      const response = await postData(API_PATHS.GETOTP, fd);
      if (response.status === 200) {
        props.setLoginState("otp_number");
        setSliderShowState(false);
        dispatch(
          getLoginOtpData({
            mobile: telPhoneValueNumber,
            loginOtpState: true,
          })
        );

        // if (response.data.data.status.login === "exists") {
        //   dispatch(
        //     getLoginOtpData({
        //       login_token: response.data.data.login_token,
        //       mobile: telPhoneValueNumber,
        //       loginOtpState: true,
        //     }),
        //   );
        //   if (response.data.data.status.step === "register_user") {
        //     props.setLoginState("register_user");
        //   } else {
        //     props.setLoginState("user_passwordNumber");
        //   }
        //   setSliderShowState(false);
        // } else if (response.data.data.status.login === "new") {
        //   dispatch(
        //     getLoginOtpData({
        //       login_token: response.data.data.login_token,
        //       mobile: telPhoneValueNumber,
        //     }),
        //   );
        //   props.setLoginState("otp_number");
        //   setSliderShowState(false);
        // }
      } else {
        setSliderShowState(false);
        if (response.response.status === 422) {
          error(response.response.data.message);
        } else if (response.response.status === 404) {
          console.log(404);
        }
      }
    }
  };

  return (
    <div className="max-w-[660px] m-auto my-[80px] mt-40">
      <div className="bg-[#383838ad] overflow-hidden rounded-2xl p-6 flex flex-col items-center gap-8">
        <span className="text-2xl font-medium text-center text-[#FEFEFE]">
          ورود به کارچک
        </span>
        <Image
          src={loginImage}
          className="w-[360px] aspect-auto"
          width={360}
          height={244}
          alt=""
        />
        <div className="flex flex-col items-start gap-2 w-full max-w-[360px]">
          <h1 className="font-bold text-[#FEFEFE]">شماره موبایل:</h1>
          <Input
            type={"tel"}
            placeholder={"09129273836"}
            className={"bg-[#FEFEFE] rounded-lg w-full p-3 text-right"}
            maxlength="11"
            on_change={telPhoneNumberChangeHandler}
            onKeyDown={clickTelNumberBtn}
          />
          <p className={"text-12 text-red-500 mb-[10px] mr-[20px]"}>
            {phoneNumberError}
          </p>
          <Button
            type={"button"}
            disabled_btn={sliderShowState}
            class_name={
              "w-[360px] h-[40px] bg-[#F66B34] text-white rounded-5 cursor-pointer"
            }
            on_click={clickTelNumberBtn}
          >
            <div className={"relative"}>
              <span>ورود</span>
              {sliderShowState && (
                <div
                  className={
                    "flex justify-center items-center h-[20px] absolute left-4 top-[2px]"
                  }
                >
                  <Spinner width={"w-[24px]"} height={"h-[24px]"} />
                </div>
              )}
            </div>
          </Button>
        </div>
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
}
