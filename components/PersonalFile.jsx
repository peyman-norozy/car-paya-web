import ProfileEditeInput from "@/components/ProfileEditeInput/ProfileEditeInput";

const PersonalFile = () => {
  return (
      <div className={"bg-white flex-1 rounded-[15px] py-8 px-16 shadow-[0_0_6px_0_rgba(177,177,177,1)]"}>
          <form className={"flex flex-col gap-[43px]"}>
              <h1 className={"text-center font-bold"}>اطلاعات حساب</h1>
              <div className={"grid grid-cols-2 gap-[58px]"}>
                  <ProfileEditeInput icon={"dt-user-o"} title={"نام"}/>
                  <ProfileEditeInput icon={"dt-user-o"} title={"نام خانوادگی"}/>
                  <ProfileEditeInput icon={"dt-call-calling-o"} title={"موبایل"}/>
                  <ProfileEditeInput icon={"dt-call-calling-o"} title={"کد ملی"}/>
                  <ProfileEditeInput icon={"dt-mail"} title={"ایمیل"}/>
                  <ProfileEditeInput icon={"dt-gender"} title={"جنسیت"}/>
              </div>
              <button type={"submit"} className={"bg-[#354597] w-[150px] h-[40px] self-end mt-[50px] text-[#F6F6F6] rounded-[10px] hover:bg-[#354960]"}>ثبت تغییرات</button>
          </form>
      </div>
  );
};

export default PersonalFile;
