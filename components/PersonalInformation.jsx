import React from "react";
import ProfileEditeInput from "@/components/ProfileEditeInput/ProfileEditeInput";
import PrivateRoute from "@/routes/private-route";

const PersonalInformation = () => {
  const profileData = JSON.parse(localStorage.getItem("profileData"));

  const changeNameHandler = (e) => {
    console.log(e);
    console.log(e);
    console.log(e);
    console.log(e);
    console.log(e);
    console.log(e);
    console.log(e);
  };

  return (
    <PrivateRoute>
      <div
        className={
          "bg-white w-full flex-1 rounded-[15px] size460:py-8 size460:px-16 px-8 py-4 shadow-[0_0_6px_0_rgba(177,177,177,1)]"
        }
      >
        <form className={"flex flex-col gap-[43px]"}>
          <h1 className={"text-center font-bold"}>اطلاعات حساب</h1>
          <div className={"grid size617:grid-cols-2 grid-cols-1 gap-[58px]"}>
            <ProfileEditeInput
              icon={"dt-user-o"}
              className={"pr-[4px]"}
              title={"نام"}
              value={profileData.name}
              onChange={changeNameHandler}
            />
            <ProfileEditeInput
              icon={"dt-user-o"}
              className={"pr-[4px]"}
              title={"نام خانوادگی"}
              value={""}
            />
            <ProfileEditeInput
              icon={"dt-call-calling-o"}
              className={"pr-[4px]"}
              title={"موبایل"}
              value={profileData.mobile}
            />
            <ProfileEditeInput
              icon={"dt-call-calling-o"}
              className={"pr-[4px]"}
              title={"کد ملی"}
              value={""}
            />
            <ProfileEditeInput
              icon={"dt-mail"}
              className={"pr-[4px]"}
              title={"ایمیل"}
              value={""}
            />
            <ProfileEditeInput
              icon={"dt-gender"}
              className={"pr-[4px]"}
              title={"جنسیت"}
              value={""}
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
