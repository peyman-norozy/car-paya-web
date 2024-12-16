// "use client";
// import dynamic from "next/dynamic";
// import TitleDescription from "@/components/TitleDescription";
// import { useEffect, useState } from "react";
// import PersonalFile from "@/components/PersonalFile";
// import { useDispatch, useSelector } from "react-redux";
// import UserSpecifications from "@/components/UserSpecifications";
// import UserTabsCard from "@/components/cards/UserTabsCard";
// import LogoutModal from "@/components/modal/LogoutModal";
// import { panelTabData } from "@/staticData/data";
// import { useRouter } from "next/navigation";
// import { getCookie } from "cookies-next";
// import nProgress from "nprogress";
// import { setLoginState } from "@/store/todoSlice";
// const PrivateRoute = dynamic(() => import("@/routes/private-route"), {
//   ssr: false,
// });
// const UserPanel = () => {
//   const [logoutModalState, setLogoutModalState] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const showHeaderState = useSelector((state) => state.todo.showHeader);
//   const innerWidthNumber = useSelector(
//     (number) => number.todo.windowInnerWidth,
//   );

//   const router = useRouter();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const authCookie = getCookie("Authorization");
//     if (!authCookie) {
//       nProgress.start();
//       router.push("/");
//       dispatch(setLoginState(true));
//     } else {
//       setIsAuthenticated(true);
//     }
//   }, [dispatch, router]);

//   if (!isAuthenticated) {
//     return <div>... loading</div>;
//   }

//   return (
//     <div className="mt-[50px] mb-[24px]">
//       {/* <div className="mb-[30px] mt-[100px]">
//           <TitleDescription>داشبورد</TitleDescription>
//         </div> */}
//       {innerWidthNumber > 1000 ? (
//         <div className="flex gap-4 items-start">
//           <div
//             className={`bg-[#383838] w-[260px] flex-col justify-start ${showHeaderState ? "top-32 h-[calc(100vh-156px)]" : "top-6 h-[calc(100vh-52px)]"} gap-4 items-center pt-2 size1180:flex hidden rounded-[10px] sticky transition-all duration-100 overflow-y-scroll`}
//           >
//             <UserSpecifications
//               style={"flex-col justify-center items-center gap-2"}
//             />
//             <UserTabsCard
//               data={panelTabData}
//               setLogoutModalState={setLogoutModalState}
//             />
//           </div>
//           <PrivateRoute>
//             <PersonalFile />
//           </PrivateRoute>
//           {/*<div role="status" className="animate-pulse flex flex-col gap-8 flex-1">*/}
//           {/*  <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400 mb-2.5"></div>*/}
//           {/*  <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400 mb-2.5"></div>*/}
//           {/*  <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400 mb-2.5"></div>*/}
//           {/*  <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400 mb-2.5"></div>*/}
//           {/*  <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400 mb-2.5"></div>*/}
//           {/*  <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400"></div>*/}
//           {/*</div>*/}
//         </div>
//       ) : (
//         <div className="flex flex-col gap-6">
//           <UserSpecifications style={"flex-row items-center justify-between"} />
//           <hr />
//           <PrivateRoute>
//             <PersonalFile />
//           </PrivateRoute>
//           <UserTabsCard
//             data={panelTabData}
//             setLogoutModalState={setLogoutModalState}
//           />
//         </div>
//       )}
//       {logoutModalState && (
//         <LogoutModal setLogoutModalState={setLogoutModalState} />
//       )}
//     </div>
//   );
// };

// export default UserPanel;
"use client";
import { tabsData } from "@/staticData/data";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import nProgress from "nprogress";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import businessman from "@/public/assets/images/businessman.png";
const UserPanel = () => {
  const pathName = usePathname();

  const router = useRouter();
  const [openOptionsState, setOpenOptionsState] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    if (window.innerWidth > 1024) {
      nProgress.start();
      router.push("/panel/profile");
    } else {
      getData();
    }
  }, []);

  async function getData() {
    const res = await getDataWithFullErrorRes("user/profile");
    console.log(res.data);
    setData(res.data);
  }

  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-[600px] h-full bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-40 flex flex-col gap-4 px-4 py-7">
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
            <>
              {item.children ? (
                <div
                  className={`flex flex-col gap-2 overflow-hidden ${openOptionsState ? "h-auto" : "h-[44px]"} ${item.underline ? "border-b border-[#bbbbbb]" : ""}`}
                  onClick={() => {
                    setOpenOptionsState(!openOptionsState);
                  }}
                >
                  <div className="flex items-center justify-between py-3 px-2 cursor-pointer lg:hover:bg-gray-100">
                    <span className="font-medium text-sm text-[#0f0f0f]">
                      {item.title}
                    </span>
                    <i className="cc-arrow-down text-lg leading-3" />
                  </div>
                  {item.children.map((item2, index) => (
                    <Link
                      href={item2.link}
                      className={`py-3 pr-5 pl-2 text-sm text-[#0f0f0f] cursor-pointer lg:hover:bg-gray-100`}
                      key={index}
                    >
                      {item2.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href={item.link}
                  className={`py-3 px-2 font-medium text-sm text-[#0f0f0f] cursor-pointer lg:hover:bg-gray-100 ${item.underline ? "border-b border-[#bbbbbb]" : ""}`}
                >
                  {item.title}
                </Link>
              )}
            </>
          ))}
          <div
            className={`py-3 px-2 font-medium text-sm text-[#0f0f0f] cursor-pointer lg:hover:bg-gray-100 flex items-center justify-start gap-1`}
          >
            <i className="cc-login text-lg leading-3" />
            خروج از پروفایل
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
