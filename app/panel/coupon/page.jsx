"use client";
import PanelContainer from "@/layouts/PanelContainer";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import { persianDateCovertor, success } from "@/utils/function-utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const Coupon = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCuponData();
  }, []);

  async function getCuponData() {
    const res = await getDataWithFullErrorRes("user/coupons");
    setData(res.data);
  }
  return (
    <PanelContainer>
      <div className="bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-[500px] flex flex-col gap-4  p-4 lg:p-12">
        <div className="flex gap-2 items-center">
          <Link href={"/panel"} className="flex lg:hidden items-center">
            <i className="cc-arrow-right text-xl leading-3" />
          </Link>
          <span className="font-medium text-sm">تخفیفات و امتیازات</span>
        </div>
        {data.map((item) => (
          <div
            className={`flex flex-col items-center justify-between gap-2 p-4 rounded-lg bg-white cursor-pointer shadow-[0_0_4px_0_rgba(207,207,207,0.7)]`}
          >
            <p className="font-medium text-xs sm:text-sm w-fit self-start">
              {item.description}
            </p>
            <div className="flex justify-between items-center w-full">
              <span className="text-xs sm:text-sm text-[#4e4e4e]">
                {persianDateCovertor(item.expired_at, "dddd")}
              </span>
              <div className="flex items-center w-fit border border-slate-400 rounded-lg h-8 self-end">
                <span className="p-1 text-xs sm:text-sm min-w-32 text-center">
                  {item.code}
                </span>
                <div className="h-full w-px bg-slate-400" />
                <i
                  className="i-document-copy p-1 px-2 text-lg"
                  onClick={() => {
                    navigator.clipboard.writeText(item.code);
                    success("کد با موفقیت کپی شد");
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </PanelContainer>
  );
};

export default Coupon;
