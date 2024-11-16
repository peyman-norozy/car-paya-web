"use client";
import Link from "next/link";
import { useState } from "react";

const tabs = [
  {
    title: "پروفایل",
    link: "/panel/profile",
  },
  {
    title: "وسیله من",
    link: "/panel/my_vehicle",
    underline: true,
  },
  {
    title: "تاریخچه سفارشات",
    underline: true,
    children: [
      {
        title: "کارشناسی",
        link: "/panel/history/inspection",
      },
      {
        title: "سرویس دوره ای",
        link: "/panel/history/periodic_service",
      },
      {
        title: "باتری",
        link: "/panel/history/battery",
      },
      {
        title: "دیتیلینگ",
        link: "/panel/history/ditaling",
      },
    ],
  },
  {
    title: "کیف پول",
    link: "/panel/wallet",
  },
  {
    title: "ادرس ها",
    link: "/panel/address",
  },
  {
    title: "تخفیفات و امتیازات",
    link: "/panel/cupon",
    underline: true,
  },
];

const PanelContainer = ({ children }) => {
  const [openOptionsState, setOpenOptionsState] = useState(false);
  return (
    <div className="flex gap-8 my-6">
      <div className="w-[263px] h-full bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-40 hidden lg:flex flex-col gap-4 px-4 py-7">
        <div className="flex flex-col gap-4 self-center">
          <div className="rounded-full bg-stone-500 size-[100px] flex items-center justify-center"></div>
          <span className="text-[#0F0F0F] font-medium text-lg">محمد محمدی</span>
        </div>
        <div className="flex flex-col gap-2">
          {tabs.map((item) => (
            <>
              {item.children ? (
                <div
                  className={`flex flex-col gap-2 overflow-hidden ${openOptionsState ? "h-auto" : "h-[44px]"} ${item.underline ? "border-b border-[#bbbbbb]" : ""}`}
                  onClick={() => {
                    setOpenOptionsState(!openOptionsState);
                  }}
                >
                  <div className="flex items-center justify-between py-3 px-2 cursor-pointer hover:bg-gray-100">
                    <span className="font-medium text-sm text-[#0f0f0f]">
                      {item.title}
                    </span>
                    <i className="cc-arrow-down text-lg leading-3" />
                  </div>
                  {item.children.map((item2) => (
                    <Link
                      href={item2.link}
                      className={`py-3 pr-5 pl-2 text-sm text-[#0f0f0f] cursor-pointer hover:bg-gray-100`}
                    >
                      {item2.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href={item.link}
                  className={`py-3 px-2 font-medium text-sm text-[#0f0f0f] cursor-pointer hover:bg-gray-100 ${item.underline ? "border-b border-[#bbbbbb]" : ""}`}
                >
                  {item.title}
                </Link>
              )}
            </>
          ))}
          <div
            className={`py-3 px-2 font-medium text-sm text-[#0f0f0f] cursor-pointer hover:bg-gray-100 flex items-center justify-start gap-1`}
          >
            <i className="cc-login text-lg leading-3" />
            خروج از پروفایل
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default PanelContainer;
