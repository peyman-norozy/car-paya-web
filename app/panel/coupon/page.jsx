'use client'
import PanelContainer from "@/layouts/PanelContainer";
import { success } from "@/utils/function-utils";
import Link from "next/link";

const Coupon = () => {
  return (
    <PanelContainer>
      <div className="bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-[500px] flex flex-col gap-4  p-4 lg:p-12">
        <div className="flex gap-2 items-center">
          <Link href={"/panel"} className="flex lg:hidden items-center">
            <i className="cc-arrow-right text-xl leading-3" />
          </Link>
          <span className="font-medium text-sm">تخفیفات و امتیازات</span>
        </div>
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-2 p-4 rounded-lg bg-white cursor-pointer shadow-[0_0_4px_0_rgba(207,207,207,0.7)]`}
        >
          <p className="font-medium text-xs sm:text-sm w-fit self-start">
            کارپایا در شب یلدا همراه شماست . با 60% تخفیف تا سقف 500 هزار تومان
          </p>
          <div className="flex items-center w-fit border border-slate-400 rounded-lg h-8 self-end">
            <span className="p-1 text-xs sm:text-sm">GX5W9H5F16E</span>
            <div className="h-full w-px bg-slate-400" />
            <i className="i-document p-1 px-2" onClick={() => { success("کد با موفقیت کپی شد") }} />
          </div>
        </div>
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-2 p-4 rounded-lg bg-white cursor-pointer shadow-[0_0_4px_0_rgba(207,207,207,0.7)]`}
        >
          <p className="font-medium text-xs sm:text-sm w-fit self-start">
            تا ۱ میلیون تخفیف بیشتر بلک‌فرایدی، در فروشگاه کارپایا  📱🔥
            به‌همراه شانس شرکت در قرعه‌کشی آیفون ۱۶ 🎁
          </p>
          <div className="flex items-center w-fit border border-slate-400 rounded-lg h-8 self-end">
            <span className="p-1 text-xs sm:text-sm">SDG5D9D5HD</span>
            <div className="h-full w-px bg-slate-400" />
            <i className="i-document p-1 px-2" onClick={() => { success("کد با موفقیت کپی شد") }} />
          </div>
        </div>
      </div>
    </PanelContainer>
  );
};

export default Coupon;
