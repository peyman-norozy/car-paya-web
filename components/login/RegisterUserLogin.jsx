import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { API_PATHS } from "@/configs/routes.config";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import { setLoginState } from "@/store/todoSlice";
import { postData } from "@/utils/client-api-function-utils";
import { error } from "@/utils/function-utils";
import { loginUser } from "@/store/loginCheckerSlice";

export default function RegisterUserLogin() {
  const [passwordEyesState, setPasswordEyesState] = useState({
    passwordState: false,
    repeatPasswordState: false,
  });
  const [sliderShowState, setSliderShowState] = useState(false);
  const [newErrorRegister, setNewErrorRegister] = useState({});

  const [genderValidate, setGenderValidate] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const fd = new FormData();

  const refreshFormData = () => {
    fd.delete("gender");
    fd.delete("login_token");
    fd.delete("mobile");
    fd.delete("first_name");
    fd.delete("last_name");
    fd.delete("email");
    fd.delete("password");
  };

  const ReduxFormData = useSelector((data) => data.todo.loginOtpData);
  console.log(ReduxFormData);

  const passwordClickHnadler = () => {
    passwordEyesState.passwordState
      ? setPasswordEyesState((prev) => ({
          passwordState: !prev.passwordState,
          repeatPasswordState: prev.repeatPasswordState,
        }))
      : setPasswordEyesState((prev) => ({
          passwordState: !prev.passwordState,
          repeatPasswordState: prev.repeatPasswordState,
        }));
  };

  const repeatPasswordClickHnadler = () => {
    passwordEyesState.repeatPasswordState
      ? setPasswordEyesState((prev) => ({
          passwordState: prev.passwordState,
          repeatPasswordState: !prev.repeatPasswordState,
        }))
      : setPasswordEyesState((prev) => ({
          passwordState: prev.passwordState,
          repeatPasswordState: !prev.repeatPasswordState,
        }));
  };

  const genderChooseHandler = (event) => {
    console.log(event.target.value);
    setGenderValidate(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(event);

    fd.append("login_token", ReduxFormData.login_token);
    fd.append("mobile", ReduxFormData.mobile);
    fd.append("gender", genderValidate);

    for (let item of event.target) {
      const id = item.id;
      console.log(item.value);
      switch (id) {
        case "register_name":
          fd.set("first_name", item.value);
          break;
        case "register_lastName":
          fd.set("last_name", item.value);
          break;
        case "register_email":
          fd.set("email", item.value);
          break;
        case "register_password":
          fd.set("password", item.value);
          break;
        default:
          "";
      }
    }
    setSliderShowState(true);
    const response = await postData(API_PATHS.REGISTER, fd);
    if (response.status === 200) {
      let now = new Date();
      let time = now.getTime();
      let expireTime = time + res.data.expires_at;
      console.log(expireTime);
      now.setTime(expireTime);
      console.log(now.toUTCString());
      document.cookie = `Authorization = ${
        response.data.token
      };expires=${now.toUTCString()};path=/`;
      router.push("/");
      dispatch(loginUser()).then((res) => console.log(res));
      setSliderShowState(false);
      dispatch(setLoginState(false));
      refreshFormData();
    } else {
      setSliderShowState(false);
      if (response.response.status === 422) {
        // error(response.response.data.errors);
        console.log(response.response.data.errors);
        setNewErrorRegister(response.response.data.errors);
        setTimeout(() => {
          setNewErrorRegister({});
        }, 5000);
      } else if (response.response.status === 404) {
        console.log(404);
      }
      refreshFormData();
    }
  };

  return (
    <form className="max-w-md m-auto my-[80px]  " onSubmit={formSubmitHandler}>
      <div className="border-t-4 border-red-500 overflow-hidden rounded shadow-lg">
        <h1 className="font-bold m-4">مشخصات خود را وارد کنید:</h1>
        <div className="flex flex-col gap-2 m-3">
          <Label
            text="نام:"
            htmlFor="register_name"
            styling="text-right text-[14px] w-full"
          />
          <Input
            id="register_name"
            type="text"
            className="border border-red-500 outline-red-600 rounded w-full p-3"
          />
        </div>
        <p className={"text-12 text-red-500 pr-4"}>
          {newErrorRegister["first_name"] && newErrorRegister["first_name"][0]}
        </p>
        <div className="flex flex-col gap-2 m-3">
          <Label
            text="نام خانوادگی:"
            htmlFor="register_lastName"
            styling="text-right text-[14px] w-full"
          />
          <Input
            id="register_lastName"
            type="text"
            className="border border-red-500 outline-red-600 rounded w-full p-3"
          />
        </div>
        <p className={"text-12 text-red-500 pr-4"}>
          {newErrorRegister["last_name"] && newErrorRegister["last_name"][0]}
        </p>
        <div className="flex flex-col gap-2 m-3">
          <Label
            text="ایمیل:"
            htmlFor="register_email"
            styling="text-right text-[14px] w-full"
          />
          <Input
            id="register_email"
            type="text"
            className="border border-red-500 outline-red-600 rounded w-full p-3"
          />
        </div>
        <p className={"text-12 text-red-500 pr-4"}>
          {newErrorRegister.email && newErrorRegister.email[0]}
        </p>
        <div className="flex flex-col gap-2 m-3 relative">
          <Label
            text="رمز عبور:"
            htmlFor="register_password"
            styling="text-right text-[14px] w-full"
          />
          <Input
            id="register_password"
            type={passwordEyesState.passwordState ? "text" : "password"}
            className="border border-red-500 outline-red-600 rounded w-full p-3"
            icon={
              <Image
                className="w-[20px] h-[20px] absolute top-[46px] left-[8px] cursor-pointer"
                onClick={passwordClickHnadler}
                src={`/assets/icons/${
                  passwordEyesState.passwordState
                    ? "eyesOpen.svg"
                    : "eyesClose.svg"
                }`}
                alt="eyes icon"
                width={20}
                height={20}
              />
            }
          />
        </div>
        <p className={"text-12 text-red-500 pr-4"}>
          {newErrorRegister.password && newErrorRegister.password[0]}
        </p>
        <div className="flex flex-col gap-2 m-3">
          <Label
            text="جنسیت:"
            htmlFor="gender"
            styling="text-right text-[14px] w-full"
          />
          <select
            className="border border-red-500 rounded w-full p-3"
            onChange={genderChooseHandler}
          >
            <option selected={true} value="chosen">
              انتخاب کنید
            </option>
            <option value="MALE">مرد</option>
            <option value="FEMALE">زن</option>
          </select>
        </div>
        <p
          className={`text-12 text-red-500 pr-4 ${newErrorRegister.gender ? "pb-4" : "pb-0"}`}
        >
          {newErrorRegister.gender && newErrorRegister.gender[0]}
        </p>
        <div className="px-4 mb-6 text-center">
          <Button
            type={"submit"}
            disabled_btn={sliderShowState}
            class_name={"w-[220px] h-[40px] bg-red-600 text-white rounded-5"}
            // on_click={clickTelNumberBtn}
          >
            <div className={"relative"}>
              <span>ثبت نام</span>
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
    </form>
  );
}
