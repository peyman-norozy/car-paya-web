"use client";
import PrivateRoute from "@/routes/private-route";
import { tabsData } from "@/staticData/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import businessman from "@/public/assets/images/businessman.png";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import { ToastContainer } from "react-toastify";

const PanelContainer = ({ children }) => {
  const pathName = usePathname();
  const [data, setData] = useState();
  const [openOptionsState, setOpenOptionsState] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await getDataWithFullErrorRes("user/profile");
    console.log(res.data);
    setData(res.data);
  }

  return (
    <PrivateRoute>
      <div className="flex gap-8 my-6">
        <div className="w-[263px] h-full bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-40 hidden lg:flex flex-col gap-4 px-4 py-7">
          <div className="flex flex-col gap-4 self-center">
            <Image
              src={
                data?.image_id
                  ? process.env.BASE_API + "/web/file/" + data.image_id
                  : businessman
              }
              width={112}
              height={112}
              className="rounded-full size-[100px] flex items-center justify-center"
            />
            <span className="text-[#0F0F0F] font-medium text-lg">
              {data?.profile?.full_name}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {tabsData.map((item) => (
              <>
                {item.children ? (
                  <div
                    className={`flex flex-col gap-2 overflow-hidden ${openOptionsState ? "h-auto" : "h-[44px]"} ${item.underline ? "border-b border-[#bbbbbb]" : ""} `}
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
                    className={`py-3 px-2 font-medium text-sm text-[#0f0f0f] cursor-pointer hover:bg-gray-100 ${pathName === item.link ? "bg-[#fce6dd] border-r-2 border-[#F66B34] text-[#F66B34]" : "bg-inherit text-[#0f0f0f]"}`}
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
        <ToastContainer rtl={true} />
      </div>
    </PrivateRoute>
  );
};

export default PanelContainer;
