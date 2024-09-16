"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import Portal from "@/components/Portal/Portal";
import { useDispatch, useSelector } from "react-redux";
import { setLoginModal } from "@/store/todoSlice";
import { setCookie } from "cookies-next";

const LoginModal = () => {
  const [phone, setPhone] = useState("");
  const [loginToken, setLoginToken] = useState("");
  const [step, setStep] = useState(0);
  const [otp, setOtp] = useState("");
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch()
  const isOpen = useSelector((state) => state.todo.LoginModalState);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function closeModal() {
    dispatch(setLoginModal(false));
  }

  function getOtpHandler() {
    axios
      .post(process.env.BASE_API + "/force/get-otp", { mobile: phone })
      .then((res) => {
        setLoginToken(res.data.data.login_token);
        setStep(1);
      });
  }
  function sendOtpHandler() {
    axios
      .post(process.env.BASE_API + "/force/check-otp", {
        mobile: phone,
        login_token: loginToken,
        otp: otp,
      })
      .then((res) => {
        console.log(res.data.token);
        setCookie("Authorization", res.data.token);
        setStep(0);
        setOtp("");
        setLoginToken("");
        setPhone("");
        closeModal()
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
          <div className="absolute bottom-0 right-0 w-screen p-7 flex flex-col items-center gap-10 z-[3001] bg-white shadow-[0_0_8px_0_rgba(175,175,175,0.25)] rounded-t-3xl pb-32" onClick={(event)=>{event.stopPropagation()}}>
            <span className="text-2xl text-[#F66B34] font-black">CAR PAYA</span>
            <span className="font-medium">ورود/ ثبت نام</span>
            <div className="flex flex-col items-center gap-6 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <span className="font-medium text-xs mr-4 w-full">
                  لطفا شماره موبایل خود را وارد کنید
                </span>
                <div className="relative w-full flex items-center border border-[#B0B0B0] px-3 py-2 rounded-lg gap-3">
                  <i className="cc-user text-xl " />
                  <div className="h-4 w-px bg-black"></div>
                  <input
                    className="outline-none text-[#3D3D3D] text-sm placeholder:text-[#D1D1D1] w-full"
                    placeholder="090722961"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={phone}
                  />
                  <i className="cc-twitter text-xl " />
                  <span className="text-xs text-[#454545] bg-white w-max absolute -top-[10px] right-[10px] px-[6px]">
                    شماره تماس
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full items-center">
                <button
                  className="bg-[#F66B34] text-[#FEFEFE] font-medium text-sm items-center justify-center rounded-lg py-2 w-[calc(100%-40px)]"
                  onClick={getOtpHandler}
                >
                  تایید ادامه
                </button>
                <span className="text-10 flex gap-[2px]">
                  ورود شما به معنای پذیرش
                  <span className="text-[#1E67BF]">شرایط کار پایا</span>و
                  <span className="text-[#1E67BF]">قوانین حریم خصوصی</span>است
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute bottom-0 right-0 w-screen p-7 flex flex-col items-center gap-10 z-[3001] bg-white shadow-[0_0_8px_0_rgba(175,175,175,0.25)] rounded-t-3xl pb-32" onClick={(event)=>{event.stopPropagation()}}>
            <span className="text-2xl text-[#F66B34] font-black">CAR PAYA</span>
            <span className="font-medium">ورود/ ثبت نام</span>
            <div className="flex flex-col items-center gap-6 w-full rounded">
              <div className="flex items-center flex-col w-full gap-2">
                <span className="text-xs font-medium">
                  کد تایید برای شماره {phone} پیامک شد
                </span>
                <div className="m-auto">
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
                      "flex-1 h-full bg-[#00000000] outline-none border border-[#B0B0B0] text-14 font-medium rounded-[4px]"
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full items-center">
                <button
                  className="bg-[#F66B34] text-[#FEFEFE] font-medium text-sm items-center justify-center rounded-lg py-2 w-[calc(100%-40px)]"
                  onClick={sendOtpHandler}
                >
                  تایید
                </button>
                <span className="text-10 flex gap-[2px]">
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
