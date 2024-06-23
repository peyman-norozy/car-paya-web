import React from "react";
import ProfileEditeInput from "@/components/ProfileEditeInput/ProfileEditeInput";
import PrivateRoute from "@/routes/private-route";

const PersonalInformation = () => {
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
            <ProfileEditeInput icon={"dt-user-o"} title={"نام"} />
            <ProfileEditeInput icon={"dt-user-o"} title={"نام خانوادگی"} />
            <ProfileEditeInput icon={"dt-call-calling-o"} title={"موبایل"} />
            <ProfileEditeInput icon={"dt-call-calling-o"} title={"کد ملی"} />
            <ProfileEditeInput icon={"dt-mail"} title={"ایمیل"} />
            <ProfileEditeInput icon={"dt-gender"} title={"جنسیت"} />
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
