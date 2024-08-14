import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_PATHS } from "@/configs/routes.config";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import { setLoginState } from "@/store/todoSlice";
import { loginUser } from "@/store/loginCheckerSlice";
import { getData } from "@/utils/api-function-utils";

export default function EnterPasswordLogin(props) {
  const [passwordEyesState, setPasswordEyesState] = useState(false);
  const [sliderShowState, setSliderShowState] = useState(false);
  const [forgotButtonState, setForgotButtonState] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const params = {...props.searchParams};
  const baseUrl = params.backurl;
  delete params.backurl;
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = `${baseUrl}&${queryString}`;
  const router = useRouter();
  const dispatch = useDispatch();
  const phoneData = useSelector((item) => item.todo.loginOtpData);
  const PasswordClickHnadler = () => {
    setPasswordEyesState((prev) => !prev);
  };

  const forgotPasswordHandler = () => {
    let fd = new FormData();
    fd.append("mobile", phoneData.mobile);
    fd.append("login_token", phoneData.login_token);
    setForgotButtonState(true);
    axios
      .post(process.env.BASE_API + API_PATHS.RESENDOTP, fd)
      .then((res) => {
        if (res.status === 200) {
          props.setLoginState("otp_number");
          setForgotButtonState(false);
        }
      })
      .catch((e) => {
        setForgotButtonState(false);
        console.log(e);
      });
  };

  const setPasswordClickHandler = (event) => {
    if (event.code === "Enter" || event.type === "click") {
      let fd = new FormData();
      fd.append("mobile", phoneData.mobile);
      fd.append("login_token", phoneData.login_token);
      fd.append("password", passwordValue);
      setSliderShowState(true);
      axios
        .post(process.env.BASE_API + API_PATHS.LOGINPASSWord, fd)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            let now = new Date();
            let time = now.getTime();
            let expireTime = time + res.data.expires_at;
            console.log(expireTime);
            now.setTime(expireTime);
            console.log(now.toUTCString());
            if (res.data.token !== undefined) {
              document.cookie = `Authorization=${
                res.data.token
              };expires=${now.toUTCString()};path=/`;
              dispatch(loginUser()).then((res) => console.log(res));
              (async () => {
                const getProfileData = await getData(
                  API_PATHS.DASHBOARDPROFILE,
                );
                console.log(getProfileData);
                if (getProfileData.status === "success") {
                  localStorage.setItem(
                    "profileData",
                    JSON.stringify(getProfileData.data),
                  );
                  if(props.searchParams.backurl){
                    router.push(fullUrl)
                  }else{
                    router.push("/");
                  }
                }
              })();
            } else {
              // error(res.data.errors);
              setPasswordError(res.data.errors);
              setTimeout(() => {
                setPasswordError("");
              }, 5000);
            }
            setSliderShowState(false);
            dispatch(setLoginState(false));
          }
        })
        .catch((e) => {
          console.log(e);
          setSliderShowState(false);
          if (e.response.status === 422) {
            // error(e.response.data.errors.mobile[0]);
            setPasswordError(e.response.data.errors.mobile[0]);
            setTimeout(() => {
              setPasswordError("");
            }, 5000);
          }
        });
    }
  };

  const passwordChangeHandler = (event) => {
    setPasswordValue(event.target.value);
  };

  return (
    <div className="max-w-md m-auto my-[80px] w-[600px]">
      <div className="overflow-hidden rounded-2xl bg-[#383838A3]">
        <div className="h-full w-full flex flex-col size974:justify-center size974:items-end items-center text-center gap-8 px-4 my-8">
          <div className="flex flex-col gap-2 w-full">
            <p className="size460:text-[16px] text-[12px] font-bold text-[#FEFEFE]">
             رمز عبور خود را وارد کنید.
            </p>
          </div>
          <div className="flex flex-col size460:items-center items-stretch gap-2 relative mx-0 w-full">
            <Label
              htmlFor="setPassword"
              styling="text-right text-[14px] w-full text-[#FEFEFE]"
              text="رمز عبور:"
            />
            <Input
              type={passwordEyesState ? "text" : "password"}
              icon={
                <Image
                  className="w-[20px] h-[20px] absolute top-[40px] left-[7px] cursor-pointer"
                  onClick={PasswordClickHnadler}
                  src={`/assets/icons/${
                    passwordEyesState ? "eyesOpen.svg" : "eyesClose.svg"
                  }`}
                  alt="eyes icon"
                  width={20}
                  height={20}
                />
              }
              className="outline-none text-[14px] py-2 pr-1 rounded-lg border border-[#913A49] w-full"
              on_change={passwordChangeHandler}
              onKeyDown={setPasswordClickHandler}
            />
            <div className="w-full flex justify-start mt-[10px]">
              <Button
                type={"button"}
                disabled_btn={sliderShowState || forgotButtonState}
                class_name={"text-[#852536] text-[12px]"}
                on_click={forgotPasswordHandler}
              >
                <div className={"relative"}>
                  <span className="text-[#F66B34] font-medium">فراموشی رمز عبور</span>
                  {forgotButtonState && (
                    <div
                      className={
                        "flex justify-center items-center h-[20px] absolute right-[100px] top-0"
                      }
                    >
                      <Spinner width={"w-[24px]"} height={"h-[24px]"} />
                    </div>
                  )}
                </div>
              </Button>
            </div>
          </div>
          {passwordError.length > 0 && (
            <p className={"text-12 text-red-500 text-center w-full"}>
              {passwordError}
            </p>
          )}
          <div className="w-full">
            <Button
              type={"button"}
              disabled_btn={sliderShowState || forgotButtonState}
              class_name={
                "w-[220px] h-[40px] bg-[#F66B34] text-white rounded-5 size460:text-[14px] text-[12px]"
              }
              on_click={setPasswordClickHandler}
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
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
}
