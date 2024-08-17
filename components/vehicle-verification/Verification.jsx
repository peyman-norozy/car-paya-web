import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Current from "@/components/Current";
import Delivered from "@/components/Delivered";
import Refuse from "@/components/Refuse";
import nProgress from "nprogress";

const ordersTab = [
  { title: "در حال ارسال", query: "CURRENT", id: "CURRENT" },
  {
    title: "تحویل داده شده",
    query: "DELIVERED",
    id: "DELIVERED",
  },
  {
    title: "لغو شده",
    query: "REFUSE",
    id: "REFUSE",
  },
];

const Verification = (props) => {
  const [dashboardOrderData, setDashboardOrderData] = useState([]);
  const [newpage, setNewPage] = useState(1);

  const router = useRouter();
  const pathName = usePathname();

  const clickTabHandler = (query) => {
    setNewPage(1);
    setDashboardOrderData([]);
    nProgress.start();
    router.push(`${pathName}?status=${query}`);
  };

  return (
    <div className="flex-1 size617:px-[40px] px-[17px] py-[32px] rounded-[10px] shadow-[0_0_6px_0_rgba(180,180,180,0.3)] flex flex-col gap-[35px]">
      <h1 className={"text-[#354597]"}>سفارش های من</h1>
      <div
        className={
          "flex size617:justify-around justify-between items-center size617:gap-4 gap-2 size617:px-2 px-0 size617:mx-4 mx-0 rounded-[10px]"
        }
      >
        {ordersTab.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex justify-center items-center gap-2 w-[140px] py-3 my-2 cursor-pointer  rounded-[10px] size820:text-[14px] text-[12px] ${props.params.searchParams.status === item.query ? "bg-[#354597] text-white border-none" : "text-[#8E9AD7] border border-[#354597]"}`}
              onClick={() => clickTabHandler(item.query)}
            >
              <i className={`size820:text-2xl text-[16px]`} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      {
        {
          CURRENT: <Current />,
          DELIVERED: <Delivered />,
          REFUSE: <Refuse />,
        }[props.params.searchParams.status]
      }
    </div>
  );
};

export default Verification;
