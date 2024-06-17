"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "@/components/Input";
import Link from "next/link";
import Button from "@/components/Button";
import { error, forceOnlyNumberInput } from "@/utils/function-utils";
import { toast, ToastContainer } from "react-toastify";
import OTPInput from "react-otp-input";
import Timer from "@/components/vehicle-verification/Timer";
import axios from "axios";
import useSetQuery from "@/hook/useSetQuery";
import { useSearchParams } from "next/navigation";
import { setCookie } from "cookies-next";

const VerificationLogin = () => {
  const [nameValue, setNameValue] = useState("");
  const [mobileValue, setMobileValue] = useState("");
  const [rulesState, setRulesState] = useState(false);
  const [loginState, setLoginState] = useState("name");
  const [otp, setOtp] = useState("");
  const setQuery = useSetQuery();
  const searchParams = useSearchParams();
  const city_id = searchParams.get("city_id");
  const selectedItem = searchParams.get("vehicle_tip");
  const time_id = searchParams.get("time_id");
  const package_id = searchParams.get("package_id");

  console.log(otp);

  const nameChangeHandler = (event) => {
    setNameValue(event.target.value);
  };
  const mobileChangeHandler = (event) => {
    if (event.target.value.trim().length < 12) {
      forceOnlyNumberInput(event);
      setMobileValue(event.target.value.trim());
    }
  };
  const rulesChangeHandler = (event) => {
    setRulesState(event.target.checked);
  };
  const otpSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .get(
        process.env.BASE_API +
          "/web/expert/reservation?step=step-4&otp=" +
          otp +
          "&mobile=" +
          mobileValue,
      )
      .then((res) => {
        setCookie("Authorization", res.data.token);
        setQuery.setMultiQuery([
          { key: "city_id", value: city_id },
          {
            key: "vehicle_tip",
            value: selectedItem,
          },
          { key: "step", value: "step-4" },
          { key: "package_id", value: package_id },
          { key: "time_id", value: time_id },
        ]);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 422) {
          error(err.response.data.errors.otp[0]);
        }
      });
  };
  const nameAndMobileSubmitHandler = (event) => {
    event.preventDefault();
    if (rulesState) {
      axios
        .get(
          process.env.BASE_API +
            "/web/expert/reservation?step=step-3&name=" +
            nameValue +
            "&mobile=" +
            mobileValue,
        )
        .then((res) => {
          setLoginState("otp");
        })
        .catch((err) => {
          if (err.response.status === 422) {
            error(err.response.data.message[0]);
          }
        });
    } else {
      error("پذیرفتن قوانين كارچك و سياست نامه حريم خصوصی الزامیست");
    }
  };

  return (
    <div className="flex items-center justify-center lg:justify-between w-[95%] size1180:w-[90%] size1275:w-[80%] m-auto py-[4rem]">
      {(() => {
        switch (loginState) {
          case "name":
            return (
              <form
                onSubmit={nameAndMobileSubmitHandler}
                className="flex flex-col"
              >
                <h2 className={"text-18 font-medium mb-[1.5rem]"}>
                  {" "}
                  برای ادامه اطلاعات فردی خود را وارد کنید
                </h2>
                <div
                  className={
                    "rounded-lg border border-[#B0B0B0] h-[2.5rem] flex items-center relative px-3 mb-[2rem]"
                  }
                >
                  <i className="cc-user border-l-[2px] border-l-[#B0B0B0] pl-2 text-[#3D3D3D] text-[20px]" />
                  <Input
                    value={nameValue}
                    on_change={nameChangeHandler}
                    autoFocus
                    type={"text"}
                    foc
                    className={
                      "w-full h-full rounded-lg outline-none pr-1 text-[#3D3D3D]"
                    }
                    id={"name"}
                  />
                  <label
                    htmlFor={"name"}
                    className="absolute top-[-40%] bg-white right-[3%] px-1 text-[#454545]"
                  >
                    نام و نام خانوادگی<span className={"text-red-500"}>*</span>
                  </label>
                </div>
                <div
                  className={
                    "rounded-lg border border-[#B0B0B0] h-[2.5rem] flex items-center relative px-3 mb-[1rem]"
                  }
                >
                  <i className="cc-calling border-l-[2px] border-l-[#B0B0B0] pl-2 text-[#3D3D3D] text-[20px]" />
                  <Input
                    value={mobileValue}
                    on_change={mobileChangeHandler}
                    type={"tel"}
                    maxlength={11}
                    className={
                      "w-full h-full rounded-lg outline-none pr-1 text-[#3D3D3D]"
                    }
                    id={"mobile"}
                  />
                  <label
                    htmlFor={"mobile"}
                    className="absolute top-[-40%] bg-white right-[3%] px-1 text-[#454545]"
                  >
                    شماره موبایل<span className={"text-red-500"}>*</span>
                  </label>
                </div>
                <div className={"flex items-center gap-1 mb-[1rem]"}>
                  <Input
                    on_change={rulesChangeHandler}
                    type={"checkbox"}
                    className={"h-[22px] w-[22px]"}
                  />
                  <p className={"text-14"}>
                    <Link href="#" className={"text-RED_400"}>
                      قوانین کارچک
                    </Link>{" "}
                    و{" "}
                    <Link href="#" className={"text-BLUE_600"}>
                      {" "}
                      سياست نامه حريم خصوصی
                    </Link>
                    . را میپذیرم.
                  </p>
                </div>
                <Button
                  class_name={
                    "bg-BLUE_600 py-[10px] px-3 rounded-lg flex items-center gap-1 text-white w-fit self-end"
                  }
                >
                  <p className={"text-14"}>تایید و ادامه</p>
                  <i className={"cc-left text-[24px]"} />
                </Button>
              </form>
            );
          case "otp":
            return (
              <form onSubmit={otpSubmitHandler} className={"flex flex-col"}>
                <h2 className={"text-18 font-medium mb-[1.5rem]"}>
                  {" "}
                  برای ادامه اطلاعات فردی خود را وارد کنید
                </h2>
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  inputType={"tel"}
                  containerStyle={{
                    width: "100%",
                    gap: "16px",
                    direction: "ltr",
                  }}
                  inputStyle="border border-[#D1D1D1] w-[56px] h-[56px] rounded-[4px] outline-none text-center flex-1"
                  shouldAutoFocus={true}
                  numInputs={4}
                  renderInput={(props) => <input {...props} />}
                />
                <div
                  className={
                    "my-[1rem] text-12 flex items-center justify-between"
                  }
                >
                  <div className={"flex items-center"}>
                    <Timer />
                    <p>مانده تا دریافت مجدد کد</p>
                  </div>
                  <p
                    className={"text-RED_400 cursor-pointer"}
                    onClick={() => setLoginState("name")}
                  >
                    ویرایش شماره موبایل
                  </p>
                </div>
                <button
                  type={"submit"}
                  className={
                    "bg-BLUE_600 py-[10px] px-3 rounded-lg flex items-center gap-1 text-white w-fit self-end"
                  }
                >
                  <p className={"text-14"}>تایید و ادامه</p>
                  <i className={"cc-left text-[24px]"} />
                </button>
              </form>
            );
        }
      })()}
      <Image
        src="/assets/images/LoginImage.svg"
        alt="login image"
        width={702}
        height={462}
        className={"hidden lg:block"}
      />
      <ToastContainer />
    </div>
  );
};

export default VerificationLogin;
