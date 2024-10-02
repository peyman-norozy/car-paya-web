"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import Portal from "@/components/Portal/Portal";
import { useDispatch, useSelector } from "react-redux";
import { setLoginModal, setLoginState } from "@/store/todoSlice";
import { setCookie } from "cookies-next";
import TextInput from "../public/TextInput";

const LoginModal = () => {
  const [phone, setPhone] = useState("");
  const [loginToken, setLoginToken] = useState("");
  const [step, setStep] = useState(0);
  const [otp, setOtp] = useState("");
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.todo.LoginModalState);
  const [phoneValidation, setPhoneValidation] = useState(null);
  const [otpValidation, setOtpValidation] = useState(null);
  const [countdown, setCountdown] = useState(120);
  useEffect(() => {
    setIsClient(true);
  }, []);

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

  function closeModal() {
    dispatch(setLoginModal(false));
  }

  function getOtpHandler() {
    axios
      .post(process.env.BASE_API + "/admin/get-otp", { mobile: phone })
      .then((res) => {
        setLoginToken(res.data.data.login_token);
        setStep(1);
        startCountdown();
      })
      .catch((err) => {
        if (err?.response?.status) {
          setPhoneValidation(err?.response?.data?.message);
        }
      });
  }
  function sendOtpHandler() {
    axios
      .post(process.env.BASE_API + "/admin/check-otp", {
        mobile: phone,
        login_token: loginToken,
        otp: otp,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user-profile", JSON.stringify(res.data.user));
        dispatch(setLoginState(false));
        setCookie("Authorization", res.data.token);
        setStep(0);
        setOtp("");
        setLoginToken("");
        setPhone("");
        closeModal();
      })
      .catch((err) => {
        if (err?.response?.status) {
          setOtpValidation(err?.response?.data?.message);
        }
      });
  }

  function resendOtpHandler() {
    axios
      .post(process.env.BASE_API + "/admin/get-otp", {
        mobile: phone,
        login_token: loginToken,
      })
      .then((res) => {
        startCountdown();
      })
      .catch((err) => {
        if (err?.response?.status) {
          setOtpValidation(err?.response?.data?.message);
        }
      });
  }

  if (!isClient) return null;

  const modalContainer = document.getElementById("modal-root");

  if (!modalContainer) return null;

  return (
    <Portal container={modalContainer}>
      <div
        className={`${!isOpen ? "hidden" : "fixed"} w-screen h-screen top-0 right-0 z-[3000] bg-[#000000B2]`}
        onClick={() => closeModal()}
      >
        {step === 0 ? (
          <div
            className="absolute bottom-0 right-0 sm:inset-0 sm:m-auto h-fit sm:max-w-[560px] sm:rounded-2xl w-screen p-7 flex flex-col items-center gap-10 z-[3001] bg-white shadow-[0_0_8px_0_rgba(175,175,175,0.25)] rounded-t-3xl pb-16 sm:p-10"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <span className="text-2xl text-[#F66B34] font-black">CAR PAYA</span>
            <i
              className="cc-add text-2xl rotate-45 absolute top-5 left-5"
              onClick={closeModal}
            />
            <span className="font-medium">ورود/ ثبت نام</span>
            <div className="flex flex-col items-center gap-6 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <span className="font-medium text-xs mr-4 w-full">
                  لطفا شماره موبایل خود را وارد کنید
                </span>
                <TextInput
                  label="شماره تماس"
                  value={phone}
                  icon={"cc-user"}
                  disabled={false}
                  validation={phoneValidation}
                  placeholder={""}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 w-full items-center">
                <button
                  className="bg-[#F66B34] text-[#FEFEFE] font-medium text-sm items-center justify-center rounded-lg py-2 w-[calc(100%-40px)] max-w-[280px]"
                  onClick={getOtpHandler}
                >
                  تایید ادامه
                </button>
                <span className="text-10 sm:text-12 flex gap-[2px]">
                  ورود شما به معنای پذیرش
                  <span className="text-[#1E67BF]">شرایط کار پایا</span>و
                  <span className="text-[#1E67BF]">قوانین حریم خصوصی</span>است
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="absolute bottom-0 right-0 sm:inset-0 sm:m-auto h-fit sm:max-w-[560px] sm:rounded-2xl w-screen p-7 flex flex-col items-center gap-10 z-[3001] bg-white shadow-[0_0_8px_0_rgba(175,175,175,0.25)] rounded-t-3xl pb-16 sm:p-10"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <span className="text-2xl text-[#F66B34] font-black">CAR PAYA</span>
            <i
              className="cc-add text-2xl rotate-45 absolute top-5 left-5"
              onClick={closeModal}
            />
            <span className="font-medium">ورود/ ثبت نام</span>
            <div className="flex flex-col items-center gap-4 w-full rounded">
              <div className="flex items-center flex-col w-fit gap-2">
                <span className="text-xs font-medium w-full text-start">
                  کد تایید برای شماره {phone} پیامک شد
                </span>
                <div className="m-auto flex flex-col w-fit items-start gap-2">
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    inputType={"number"}
                    shouldAutoFocus={true}
                    numInputs={4}
                    renderSeparator={false}
                    renderInput={(props) => <input {...props} />}
                    containerStyle={{
                      width: "284px",
                      height: "50px",
                      direction: "ltr",
                      gap: "24px",
                    }}
                    inputStyle={`flex-1 h-full bg-[#00000000] outline-none border ${otpValidation ? "border-[#FF0031]" : "border-[#B0B0B0]"} text-[#3C3C3C] text-14 font-medium rounded-[4px]`}
                  />
                  <span className="text-[#FF0031] px-1 text-12 h-[18px]">
                    {otpValidation}
                  </span>
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
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full items-center">
                <button
                  className="bg-[#F66B34] text-[#FEFEFE] font-medium text-sm items-center justify-center rounded-lg py-2 w-[300px]"
                  onClick={sendOtpHandler}
                >
                  تایید
                </button>
                <span className="text-10 sm:text-12 flex gap-[2px]">
                  ورود شما به معنای پذیرش
                  <span className="text-[#1E67BF]">شرایط کار پایا</span>و
                  <span className="text-[#1E67BF]">قوانین حریم خصوصی</span>است
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Portal>
  );
};

export default LoginModal;
