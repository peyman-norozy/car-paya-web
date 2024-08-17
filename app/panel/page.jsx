"use client";
import dynamic from "next/dynamic";
import TitleDescription from "@/components/TitleDescription";
import { useEffect, useState } from "react";
import PersonalFile from "@/components/PersonalFile";
import { useSelector } from "react-redux";
import UserSpecifications from "@/components/UserSpecifications";
import UserTabsCard from "@/components/cards/UserTabsCard";
import LogoutModal from "@/components/modal/LogoutModal";
import { panelTabData } from "@/staticData/data";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import nProgress from "nprogress";
const PrivateRoute = dynamic(() => import("@/routes/private-route"), {
  ssr: false,
});
const UserPanel = () => {
  const [logoutModalState, setLogoutModalState] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const showHeaderState = useSelector((state) => state.todo.showHeader);
  const innerWidthNumber = useSelector(
    (number) => number.todo.windowInnerWidth,
  );

  const router = useRouter();

  useEffect(() => {
    const authCookie = getCookie("Authorization");
    if (!authCookie) {
      nProgress.start();
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return <div>... loading</div>;
  }

  return (
    <div className="mt-[50px] mb-[24px]">
      {/* <div className="mb-[30px] mt-[100px]">
          <TitleDescription>داشبورد</TitleDescription>
        </div> */}
      {innerWidthNumber > 1000 ? (
        <div className="flex gap-4 items-start">
          <div
            className={`bg-[#383838] w-[260px] flex-col justify-start ${showHeaderState ? "top-32 h-[calc(100vh-156px)]" : "top-6 h-[calc(100vh-52px)]"} gap-4 items-center pt-2 size1180:flex hidden rounded-[10px] sticky transition-all duration-100 overflow-y-scroll`}
          >
            <UserSpecifications
              style={"flex-col justify-center items-center gap-2"}
            />
            <UserTabsCard
              data={panelTabData}
              setLogoutModalState={setLogoutModalState}
            />
          </div>
          <PrivateRoute>
            <PersonalFile />
          </PrivateRoute>
          {/*<div role="status" className="animate-pulse flex flex-col gap-8 flex-1">*/}
          {/*  <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400 mb-2.5"></div>*/}
          {/*  <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400 mb-2.5"></div>*/}
          {/*  <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400 mb-2.5"></div>*/}
          {/*  <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400 mb-2.5"></div>*/}
          {/*  <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400 mb-2.5"></div>*/}
          {/*  <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400"></div>*/}
          {/*</div>*/}
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <UserSpecifications style={"flex-row items-center justify-between"} />
          <hr />
          <PrivateRoute>
            <PersonalFile />
          </PrivateRoute>
          <UserTabsCard
            data={panelTabData}
            setLogoutModalState={setLogoutModalState}
          />
        </div>
      )}
      {logoutModalState && (
        <LogoutModal setLogoutModalState={setLogoutModalState} />
      )}
    </div>
  );
};

export default UserPanel;
