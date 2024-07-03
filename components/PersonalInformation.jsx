import React, { useEffect, useState } from "react";
import ProfileEditeInput from "@/components/ProfileEditeInput/ProfileEditeInput";
import PrivateRoute from "@/routes/private-route";
import ProfileEditeSelectInput from "@/components/ProfileEditeSelectInput";
import SelectOption from "@/components/SelectOption/SelectOption";
import { postData, putData } from "@/utils/client-api-function-utils";
import { API_PATHS } from "@/configs/routes.config";
import { getData } from "@/utils/api-function-utils";
import { ToastContainer } from "react-toastify";
import { success } from "@/utils/function-utils";

const genderData = [
  { title: "آقا", value: "MALE" },
  { title: "خانم", value: "FEMALE" },
];

const PersonalInformation = () => {
  const profileData = JSON.parse(localStorage.getItem("profileData"));
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(profileData);

  useEffect(() => {
    setName(profileData.name);
    setMobile(profileData.mobile);
    setEmail(profileData.email);
  }, []);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.mobile.value);
    console.log(event.target.nationalCode.value);
    console.log(event.target.email.value);
    console.log(event.target.gender.value);
    const fd = new FormData();
    fd.set("mobile", event.target.mobile.value);
    fd.set("full_name", event.target.name.value);
    fd.set("national_code", event.target.nationalCode.value);
    fd.set("email", event.target.email.value);
    fd.set("gender", event.target.gender.value);
    fd.set("X-HTTP-Method-Override", "PUT");
    setLoading(true);
    const postProfileEdit = await putData(
      API_PATHS.USERPANEL + API_PATHS.PROFILE,
      fd,
    );

    const getProfileData = await getData(API_PATHS.DASHBOARDPROFILE);
    if (getProfileData.status === "success") {
      localStorage.setItem("profileData", JSON.stringify(getProfileData.data));
    }
    if (postProfileEdit.data.status === "success") {
      success(postProfileEdit.data.message);
    }
    setLoading(false);
  };

  return (
    <PrivateRoute>
      <div
        className={
          "bg-white w-full flex-1 rounded-[15px] size460:py-8 size460:px-16 px-8 py-4 shadow-[0_0_6px_0_rgba(177,177,177,1)]"
        }
      >
        <form
          className={"flex flex-col gap-[43px]"}
          onSubmit={formSubmitHandler}
        >
          <h1 className={"text-center font-bold"}>اطلاعات حساب</h1>
          <div className={"grid size617:grid-cols-2 grid-cols-1 gap-[58px]"}>
            <ProfileEditeInput
              icon={"dt-user-o"}
              className={"pr-[4px]"}
              title={"نام و نام خانوادگی"}
              value={name}
              name={"name"}
              id={"name"}
              onChange={(event) => setName(event.target.value)}
            />
            {/*<ProfileEditeInput*/}
            {/*  icon={"dt-user-o"}*/}
            {/*  className={"pr-[4px]"}*/}
            {/*  title={"نام خانوادگی"}*/}
            {/*  value={""}*/}
            {/*  name={"lastName"}*/}
            {/*  id={"lastName"}*/}
            {/*  // onChange={(event) => setMobile(event.target.value)}*/}
            {/*/>*/}
            <ProfileEditeInput
              icon={"dt-call-calling-o"}
              className={"pr-[4px]"}
              title={"موبایل"}
              value={mobile}
              name={"mobile"}
              id={"mobile"}
              disabled={true}
              onChange={(event) => setMobile(event.target.value)}
            />
            <ProfileEditeInput
              icon={"dt-call-calling-o"}
              className={"pr-[4px]"}
              title={"کد ملی"}
              value={""}
              name={"nationalCode"}
              id={"nationalCode"}
              // onChange={changeNameHandler}
            />
            <ProfileEditeInput
              icon={"dt-mail"}
              className={"pr-[4px]"}
              title={"ایمیل"}
              value={email}
              name={"email"}
              id={"email"}
              onChange={(event) => setEmail(event.target.value)}
            />
            <SelectOption
              title={"جنسیت"}
              data={genderData}
              name={"gender"}
              id={"gender"}
              className={"pr-[4px]"}
            />
            {/*<ProfileEditeInput*/}
            {/*  icon={"dt-gender"}*/}
            {/*  className={"pr-[4px]"}*/}
            {/*  title={"جنسیت"}*/}
            {/*  value={""}*/}
            {/*  name={"gender"}*/}
            {/*  id={"gender"}*/}
            {/*  // onChange={changeNameHandler}*/}
            {/*/>*/}
          </div>
          <button
            type={"submit"}
            disabled={loading}
            className={
              "bg-[#354597] w-[150px] h-[40px] size460:self-end self-center mt-[50px] text-[#F6F6F6] rounded-[10px] hover:bg-[#354960]"
            }
          >
            {loading ? "در حال ثبت" : "ثبت تغییرات"}
          </button>
        </form>
      </div>
      <ToastContainer rtl={true} />
    </PrivateRoute>
  );
};

export default PersonalInformation;
