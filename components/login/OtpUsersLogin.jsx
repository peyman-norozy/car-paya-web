import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import Button from "@/components/Button";
import OTPInput from "react-otp-input";
import { API_PATHS } from "@/configs/routes.config";
import { ToastContainer } from "react-toastify";
import Spinner from "@/components/Spinner";
import { loginUser } from "@/store/loginCheckerSlice";
import { getData } from "@/utils/api-function-utils";
import otpImage from "@/public/assets/images/otp.png";
import Image from "next/image";
import nProgress from "nprogress";

export default function OtpUsersLogin(props) {
  const [otp, setOtp] = useState("");
  const [sliderShowState, setSliderShowState] = useState(false);
  const [newErrorText, setNewErrorText] = useState("");
  const otpData = useSelector((data) => data.todo.loginOtpData);
  const router = useRouter();
  const dispatch = useDispatch();

  const postOtp = () => {
    let fd = new FormData();
    fd.append("login_token", otpData.login_token);
    fd.append("mobile", otpData.mobile);
    fd.append("otp", otp);
    setSliderShowState(true);
    otpData.loginOtpState
      ? axios
          .post(process.env.BASE_API + API_PATHS.LOGINOTP, fd)
          .then((res) => {
            if (res.status === 200) {
              let now = new Date();
              let time = now.getTime();
              let expireTime = time + res.data.expires_at;
              console.log(expireTime);
              now.setTime(expireTime);
              console.log(now.toUTCString());
              document.cookie = `Authorization = ${
                res.data.token
              };expires=${now.toUTCString()};path=/`;
              setSliderShowState(false);
            }
          })
          .then(() => {
            nProgress.start();
            router.push("/");
            dispatch(loginUser()).then((res) => console.log(res));
            (async () => {
              const getProfileData = await getData(API_PATHS.DASHBOARDPROFILE);
              console.log(getProfileData);
              if (getProfileData.status === "success") {
                localStorage.setItem(
                  "profileData",
                  JSON.stringify(getProfileData.data),
                );
              }
            })();
          })
          .catch((e) => {
            setSliderShowState(false);
            if (e.response.status === 422) {
              setNewErrorText(e.response.data.errors.otp[0]);
              setTimeout(() => {
                setNewErrorText("");
              }, 5000);
            }
            console.log(e);
          })
      : axios
          .post(process.env.BASE_API + API_PATHS.CHECKOTP, fd)
          .then((res) => {
            if (res.data.data.status.step === "register_user") {
              props.setLoginState("register_user");
              setSliderShowState(false);
            }
          })
          .catch((e) => {
            setSliderShowState(false);
            if (e.response.status === 422) {
              // error(e.response.data.errors.otp[0]);
              setNewErrorText(e.response.data.errors.otp[0]);
              setTimeout(() => {
                setNewErrorText("");
              }, 5000);
            }
          });
  };

  const sendOtpClickHandler = () => {
    postOtp();
  };
  const otpSubmitHandler = (event) => {
    if (event.key === "Enter") {
      postOtp();
    }
  };

  return (
    <div className="max-w-[660px] m-auto my-[80px] w-full">
      <div className="bg-[#383838ad] overflow-hidden rounded-2xl p-4 flex flex-col items-center gap-6">
        <Image
          src={otpImage}
          className="w-[360px] aspect-auto"
          width={360}
          height={244}
        />
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-2">
          <div className="flex flex-col gap-2 items-start">
            <h2 className="size460:text-[18px] text-[12px] font-bold text-[#FEFEFE]">
              کد ارسال شده را وارد کنید:
            </h2>
          </div>
          <form
            onKeyDown={otpSubmitHandler}
            className="flex flex-col items-center gap-6"
          >
            <div className="OTP_Input">
              <OTPInput
                value={otp}
                onChange={setOtp}
                inputType={"number"}
                shouldAutoFocus={true}
                numInputs={4}
                renderSeparator={false}
                renderInput={(props) => <input {...props} />}
                containerStyle={{
                  width: "250px",
                  height: "50px",
                  direction: "ltr",
                  marginLeft: "10px",
                  gap: "10px",
                }}
                inputStyle={
                  "flex-1 h-full bg-[#00000000] outline-none border-b border-[#fefefe] text-[#FEFEFE] text-xl font-medium"
                }
              />
            </div>
            {newErrorText.length > 0 && (
              <p className={"text-12 text-red-500"}>{newErrorText}</p>
            )}
            <Button
              type={"button"}
              disabled_btn={sliderShowState}
              on_click={sendOtpClickHandler}
              class_name={
                "w-full h-[40px] bg-[#F66B34] text-white rounded-5 size460:text-[14px] text-[12px] size460:ml-[20px] ml-0"
              }
            >
              <div className={"relative"}>
                <span>ارسال</span>
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
          </form>
        </div>
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
}
