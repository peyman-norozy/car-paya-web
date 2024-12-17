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
import axios from "axios";
import { API_PATHS } from "@/configs/routes.config";
import { deleteCookie, getCookie } from "cookies-next";
import nProgress from "nprogress";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setLoginState } from "@/store/todoSlice";

const PanelContainer = ({ children }) => {
  const pathName = usePathname();
  const [data, setData] = useState();
  const [openOptionsState, setOpenOptionsState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await getDataWithFullErrorRes("user/profile");
    console.log(res.data);
    setData(res.data);
  }

  const exitLogin = () => {
    axios
      .post(
        process.env.BASE_API + "/admin" + API_PATHS.LOGOUT,
        {},
        {
          headers: {
            Authorization: "Bearer " + getCookie("Authorization"),
          },
        },
      )
      .then(() => {
        deleteCookie("Authorization");
        localStorage.removeItem("profileData");
        dispatch(setLoginState(true));
        nProgress.start();
        router.push("/");
      });
  };

  return (
    <PrivateRoute>
      <div className="flex lg:gap-8 my-6">
        <div className="w-[263px] h-full bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-40 hidden lg:flex flex-col gap-4 px-4 py-7">
          <div className="flex flex-col gap-4 self-center items-center">
            <Image
              src={
                data?.image_id
                  ? process.env.BASE_API + "/web/file/" + data.image_id
                  : businessman
              }
              width={112}
              height={112}
              className="rounded-full size-[100px] flex items-center justify-center self-center"
            />
            <span className="text-[#0F0F0F] font-medium text-lg">
              {data?.profile?.full_name}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {tabsData.map((item) => (
              <div key={item.title}>
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
                        key={item2.link}
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
              </div>
            ))}
            <div
              className={`py-3 px-2 font-medium text-sm text-[#0f0f0f] cursor-pointer hover:bg-gray-100 flex items-center justify-start gap-1`}
              onClick={() => setIsOpen(true)}
            >
              <i className="cc-login text-lg leading-3" />
              خروج از پروفایل
            </div>
          </div>
        </div>
        <main className="flex-1">{children}</main>
        <ToastContainer rtl={true} />
        <div
          className={`${!isOpen ? "hidden" : "fixed"} fixed top-0 right-0 w-screen h-screen bg-[#72727227] z-[3000] pb-10`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute bg-white bottom-0 right-0 sm:inset-0 sm:m-auto w-full rounded-t-3xl sm:rounded-3xl py-16 flex flex-col items-center gap-10 px-9 sm:max-w-[560px] h-fit"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <span className="text-sm sm:text-base font-medium">
              آیا می خواهید از حساب خود خارج شوید
            </span>
            <div className="flex items-center gap-9 w-full justify-center">
              <button
                className="text-[#FEFEFE] text-sm font-medium flex items-center justify-center bg-[#F66B34] rounded-lg py-3 w-32"
                onClick={() => setIsOpen(false)}
              >
                انصراف
              </button>
              <button
                className="text-[#F58052] text-sm font-medium flex items-center justify-center border border-[#F66B34] rounded-lg py-3 w-32"
                onClick={exitLogin}
              >
                تایید
              </button>
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default PanelContainer;
