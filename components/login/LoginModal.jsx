const LoginModal = () => {
  return (
    <div className="fixed w-screen h-screen top-0 right-0 z-[3000] bg-[#000000B2]">
      <div className="absolute bottom-0 right-0 w-screen p-7 flex flex-col items-center gap-10 z-[3001] bg-white shadow-[0_0_8px_0_rgba(175,175,175,0.25)] rounded-t-3xl pb-32">
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
              />
              <i className="cc-twitter text-xl " />
              <span className="text-xs text-[#454545] bg-white w-max absolute -top-[10px] right-[10px] px-[6px]">
                شماره تماس
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full items-center">
            <button className="bg-[#F66B34] text-[#FEFEFE] font-medium text-sm items-center justify-center rounded-lg py-2 w-[calc(100%-40px)]">
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
    </div>
  );
};

export default LoginModal;
