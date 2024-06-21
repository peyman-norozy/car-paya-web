"use client";
import dynamic from "next/dynamic";
import TitleDescription from "@/components/TitleDescription";
import { useState } from "react";
import PersonalFile from "@/components/PersonalFile";
import { useSelector } from "react-redux";
import UserSpecifications from "@/components/UserSpecifications";
import UserTabsCard from "@/components/cards/UserTabsCard";
import LogoutModal from "@/components/modal/LogoutModal";
import { panelTabData } from "@/staticData/data";
const PrivateRoute = dynamic(() => import("@/routes/private-route"), {
  ssr: false,
});
const UserPanel = () => {
  const [logoutModalState, setLogoutModalState] = useState(false);
  const innerWidthNumber = useSelector(
    (number) => number.todo.windowInnerWidth,
  );

  return (
    <PrivateRoute>
      <div className="mt-[50px] mb-[100px] mx-[50px]">
        <div className="mb-[30px] mt-[100px]">
          <TitleDescription>داشبورد</TitleDescription>
        </div>
        {innerWidthNumber > 1000 ? (
          <div className="flex gap-4 items-start">
            <div className="shadow-[0_0_6px_0_rgba(180,180,180,0.3)] w-[342px] flex flex-col justify-center gap-4 items-center pt-2 rounded-[10px] sticky top-[81px]">
              <UserSpecifications
                style={"flex-col justify-center items-center gap-2"}
              />
              <UserTabsCard
                data={panelTabData}
                setLogoutModalState={setLogoutModalState}
              />
            </div>
            <PersonalFile />
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
            <UserSpecifications
              style={"flex-row items-center justify-between"}
            />
            <hr />
            <PersonalFile />
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
    </PrivateRoute>
  );
};

export default UserPanel;
