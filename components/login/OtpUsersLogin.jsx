import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
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
import { setLoginState } from "@/store/todoSlice";
import { setCookie } from "cookies-next";
import Link from "next/link";

export default function OtpUsersLogin(props) {
  const [otp, setOtp] = useState("");
  const [sliderShowState, setSliderShowState] = useState(false);
  const [newErrorText, setNewErrorText] = useState("");
  const [countdown, setCountdown] = useState(120);
  const otpData = useSelector((data) => data.todo.loginOtpData);
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    startCountdown();
  }, []);

  function resendOtpHandler() {
    axios
      .post(process.env.BASE_API + "/admin/get-otp", {
        mobile: props.phoneNumber,
      })
      .then((res) => {
        startCountdown();
      })
      .catch((err) => {
        if (err?.response?.status) {
          setNewErrorText(err?.response?.data?.message);
        }
      });
  }

  function startCountdown() {
    setCountdown(120);
    let interval = setInterval(function () {
      setCountdown((previous) => {
        if (previous <= 0) {
          clearInterval(interval);
          return 0;
        }
        return previous - 1;
      });
    }, 1000);
  }

  const postOtp = () => {
    let fd = new FormData();
    // fd.append("login_token", otpData.login_token);
    fd.append("mobile", otpData.mobile);
    fd.append("otp", otp);
    setSliderShowState(true);
    axios
      .post(process.env.BASE_API + "/admin/check-otp", {
        mobile: props.phoneNumber,
        otp: otp,
      })
      .then((res) => {
        localStorage.setItem("user-profile", JSON.stringify(res.data.user));
        setCookie("Authorization", res.data.token);
      })
      .then(() => {
        nProgress.start();
        router.push(searchParams.get("url"));
        dispatch(setLoginState(false));
        // dispatch(loginUser()).then((res) => console.log(res));
        // (async () => {
        //   const getProfileData = await getData(API_PATHS.DASHBOARDPROFILE);
        //   console.log(getProfileData);
        //   if (getProfileData.status === "success") {
        //     localStorage.setItem(
        //       "profileData",
        //       JSON.stringify(getProfileData.data),
        //     );
        //   }
        // })();
      })
      .catch((e) => {
        setSliderShowState(false);
        if (e.response?.status === 422) {
          setNewErrorText(e.response.data.errors.otp[0]);
          setTimeout(() => {
            setNewErrorText("");
          }, 5000);
        }
        console.log(e);
      });
  };
  //   otpData.loginOtpState
  //     ? axios
  //         .post(process.env.BASE_API + API_PATHS.LOGINOTP, fd)
  //         .then((res) => {
  //           if (res.status === 200) {
  //             let now = new Date();
  //             let time = now.getTime();
  //             let expireTime = time + res.data.expires_at;
  //             console.log(expireTime);
  //             now.setTime(expireTime);
  //             console.log(now.toUTCString());
  //             document.cookie = `Authorization = ${
  //               res.data.token
  //             };expires=${now.toUTCString()};path=/`;
  //             setSliderShowState(false);
  //           }
  //         })
  //         .then(() => {
  //           nProgress.start();
  //           router.push("/");
  //           dispatch(loginUser()).then((res) => console.log(res));
  //           (async () => {
  //             const getProfileData = await getData(API_PATHS.DASHBOARDPROFILE);
  //             console.log(getProfileData);
  //             if (getProfileData.status === "success") {
  //               localStorage.setItem(
  //                 "profileData",
  //                 JSON.stringify(getProfileData.data),
  //               );
  //             }
  //           })();
  //         })
  //         .catch((e) => {
  //           setSliderShowState(false);
  //           if (e.response.status === 422) {
  //             setNewErrorText(e.response.data.errors.otp[0]);
  //             setTimeout(() => {
  //               setNewErrorText("");
  //             }, 5000);
  //           }
  //           console.log(e);
  //         })
  //     : axios
  //         .post(process.env.BASE_API + API_PATHS.CHECKOTP, fd)
  //         .then((res) => {
  //           if (res.data.data.status.step === "register_user") {
  //             props.setLoginState("register_user");
  //             setSliderShowState(false);
  //           }
  //         })
  //         .catch((e) => {
  //           setSliderShowState(false);
  //           if (e.response.status === 422) {
  //             // error(e.response.data.errors.otp[0]);
  //             setNewErrorText(e.response.data.errors.otp[0]);
  //             setTimeout(() => {
  //               setNewErrorText("");
  //             }, 5000);
  //           }
  //         });
  // };

  const sendOtpClickHandler = () => {
    postOtp();
  };
  const otpSubmitHandler = (event) => {
    if (event.key === "Enter") {
      postOtp();
    }
  };

  return (
    <div className="max-w-[660px] m-auto w-full">
      <div className="bg-white overflow-hidden rounded-2xl p-8 flex flex-col items-center gap-6 shadow-[0_0_6px_0_rgba(125,125,125,0.5)]">
        {/* <Image
          src={otpImage}
          className="w-[360px] aspect-auto"
          width={360}
          height={244}
          alt=""
        /> */}
        <span className="text-2xl text-[#F66B34] font-black">CAR PAYA</span>
        <span className="text-lg font-medium text-center text-[#0F0F0F]">
          ورود به کارپایا
        </span>
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-2">
          <div className="flex flex-col gap-2 items-start">
            <span className="text-xs font-medium w-full text-start">
              کد تایید برای شماره {props.phoneNumber} پیامک شد
            </span>
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
                    width: "300px",
                    height: "50px",
                    direction: "ltr",
                    gap: "24px",
                  }}
                  inputStyle={
                    "flex-1 h-full bg-[#00000000] outline-none border border-[#B0B0B0] text-[#3C3C3C] text-14 font-medium rounded-[4px]"
                  }
                />
              </div>
              {newErrorText.length > 0 && (
                <p className={"text-12 text-red-500"}>{newErrorText}</p>
              )}
              <div className="flex justify-between w-full">
                <span className="font-medium text-xs">
                  <span className="text-[#F66B34] w-7 inline-block text-end">
                    {parseInt(countdown / 60)
                      .toString()
                      .padStart(2, "0") +
                      ":" +
                      (countdown % 60).toString().padStart(2, "0")}
                  </span>{" "}
                  مانده تا دریافت مجدد کد
                </span>
                <button
                  className={`flex items-center gap-1 ${countdown ? "text-[#888888] cursor-not-allowed" : "text-[#1E67BF] cursor-pointer"}`}
                  disabled={countdown}
                  onClick={resendOtpHandler}
                >
                  <i className="cc-undo" />
                  <span className="font-medium text-xs">ارسال مجدد کد</span>
                </button>
              </div>
              <Button
                type={"button"}
                disabled_btn={sliderShowState}
                on_click={sendOtpClickHandler}
                class_name={
                  "w-full h-[40px] bg-[#F66B34] text-white rounded-5 size460:text-[14px] text-[12px]"
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
              <span className="text-10 sm:text-12 flex gap-[2px]">
                ورود شما به معنای پذیرش
                <Link href={"/rules"} className="text-[#1E67BF]">
                  قوانین کار پایا
                </Link>
                و
                <Link href={"/privacy"} className="text-[#1E67BF]">
                  حریم خصوصی
                </Link>
                است
              </span>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
}
