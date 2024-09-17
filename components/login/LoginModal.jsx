"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import Portal from "@/components/Portal/Portal";
import { useDispatch, useSelector } from "react-redux";
import { setLoginModal } from "@/store/todoSlice";
import { setCookie } from "cookies-next";
import TextInput from "../public/TextInput";

const LoginModal = () => {
  const [phone, setPhone] = useState("");
  const [loginToken, setLoginToken] = useState("");
  const [step, setStep] = useState(0);
  const [otp, setOtp] = useState("");
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch()
  const isOpen = useSelector((state) => state.todo.LoginModalState);
  const [validation , setValidation] = useState(null)
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
      }).catch((err)=>{
        if(err?.response?.status){
          setValidation(err?.response?.data?.message)
        }
      })
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
          <div className="absolute bottom-0 right-0 sm:inset-0 sm:m-auto h-fit sm:max-w-[560px] sm:rounded-2xl w-screen p-7 flex flex-col items-center gap-10 z-[3001] bg-white shadow-[0_0_8px_0_rgba(175,175,175,0.25)] rounded-t-3xl pb-32 sm:p-10" onClick={(event)=>{event.stopPropagation()}}>
            <span className="text-2xl text-[#F66B34] font-black">CAR PAYA</span>
            <i className="cc-add text-2xl rotate-45 absolute top-5 left-5" onClick={closeModal}/>
            <span className="font-medium">ورود/ ثبت نام</span>
            <div className="flex flex-col items-center gap-6 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <span className="font-medium text-xs mr-4 w-full">
                  لطفا شماره موبایل خود را وارد کنید
                </span>
                <TextInput label="شماره تماس" value={phone} icon={"cc-user"} disabled={false} validation={validation} placeholder={""} onChange={(e) => {
            setPhone(e.target.value);
          }} />
              </div>
              <div className="flex flex-col gap-2 w-full items-center">
                <button
                  className="bg-[#F66B34] text-[#FEFEFE] font-medium text-sm items-center justify-center rounded-lg py-2 w-[calc(100%-40px)]"
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
          <div className="absolute bottom-0 right-0 w-screen p-7 flex flex-col items-center gap-10 z-[3001] bg-white shadow-[0_0_8px_0_rgba(175,175,175,0.25)] rounded-t-3xl pb-32" onClick={(event)=>{event.stopPropagation()}}>
            <span className="text-2xl text-[#F66B34] font-black">CAR PAYA</span>
            <i className="cc-add text-2xl rotate-45 absolute top-5 left-5" onClick={closeModal}/>
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
