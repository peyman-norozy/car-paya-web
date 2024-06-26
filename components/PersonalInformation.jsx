import React, { useEffect, useState } from "react";
import ProfileEditeInput from "@/components/ProfileEditeInput/ProfileEditeInput";
import PrivateRoute from "@/routes/private-route";

const PersonalInformation = () => {
  const profileData = JSON.parse(localStorage.getItem("profileData"));
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  console.log(profileData);

  useEffect(() => {
    setName(profileData.name);
    setMobile(profileData.mobile);
    setEmail(profileData.email);
  }, []);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.name);
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
              title={"نام"}
              value={name}
              name={"name"}
              id={"name"}
              onChange={(event) => setName(event.target.value)}
            />
            <ProfileEditeInput
              icon={"dt-user-o"}
              className={"pr-[4px]"}
              title={"نام خانوادگی"}
              value={""}
              name={"lastName"}
              id={"lastName"}
              // onChange={(event) => setMobile(event.target.value)}
            />
            <ProfileEditeInput
              icon={"dt-call-calling-o"}
              className={"pr-[4px]"}
              title={"موبایل"}
              value={mobile}
              name={"mobile"}
              id={"mobile"}
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
            <ProfileEditeInput
              icon={"dt-gender"}
              className={"pr-[4px]"}
              title={"جنسیت"}
              value={""}
              name={"gender"}
              id={"gender"}
              // onChange={changeNameHandler}
            />
          </div>
          <button
            type={"submit"}
            className={
              "bg-[#354597] w-[150px] h-[40px] size460:self-end self-center mt-[50px] text-[#F6F6F6] rounded-[10px] hover:bg-[#354960]"
            }
          >
            ثبت تغییرات
          </button>
        </form>
      </div>
    </PrivateRoute>
  );
};

export default PersonalInformation;
