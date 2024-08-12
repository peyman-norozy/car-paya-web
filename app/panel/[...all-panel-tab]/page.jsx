"use client";
import {
  notFound,
  useRouter,
  useSearchParams,
  usePathname,
} from "next/navigation";
import TitleDescription from "@/components/TitleDescription";
import React, { Fragment, useEffect, useState } from "react";
import LogoutModal from "@/components/modal/LogoutModal";
import { getWindowInnerWidth } from "@/store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import UserSpecifications from "@/components/UserSpecifications";
import UserTabsCard from "@/components/cards/UserTabsCard";
import Image from "next/image";
import CarDevice from "@/components/CarDevice";
import CreateMyMotor from "@/components/CreateMyMotor";
import CreateMyCar from "@/components/CreateMyCar";
import ProductAddress from "@/components/ProductAddress/ProductAddress";
import PersonalInformation from "@/components/PersonalInformation";
import MotorDevice from "@/components/MotorDevice";
import CreateMyHeavyCar from "@/components/CreateMyHeavyCar";
import HeavyCarDevice from "@/components/HeavyCarDevice";
import History from "@/components/History";
import HistoryCreate from "@/components/HistoryCreate";
import { panelTabData } from "@/staticData/data";
import Discount from "@/components/Discount/Discount";
import Verification from "@/components/vehicle-verification/Verification";

const AllPanelTab = (props) => {
  const [logoutModalState, setLogoutModalState] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const pathName = usePathname();
  const query = useSearchParams();
  const showHeaderState = useSelector((state) => state.todo.showHeader);
  
  const allUrl = query.get("status")
    ? pathName + "?" + "status=" + query.get("status")
    : pathName;

  const backClickHandler = () => {
    router.push("/panel");
  };

  useEffect(() => {
    if (props.params["all-panel-tab"] === "logout") {
      router.push("my-vehicle", undefined, { scroll: false });
    }
  }, [router, props.params]);

  useEffect(() => {
    dispatch(getWindowInnerWidth(window.innerWidth));
    const handleWindowResize = () => {
      dispatch(getWindowInnerWidth(window.innerWidth));
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [dispatch]);

  console.log("allUrl");

  return (
    <>
      <div className="mt-[50px] mb-[24px]">
        <div className="flex items-center gap-4 mb-[30px] mt-[100px]">
          <Image
            src={"/assets/icons/back.svg"}
            className={"size1000:hidden block cursor-pointer"}
            onClick={backClickHandler}
            alt="back icon"
            width={34}
            height={34}
          />
          {/* {
            {
              profile: <TitleDescription>اطلاعات شخصی من</TitleDescription>,
              "my-vehicle/my-car": (
                <TitleDescription>شناسنامه و سوابق خودرو</TitleDescription>
              ),
              "my-vehicle/my-motorcycle": (
                <TitleDescription>شناسنامه و سوابق موتور</TitleDescription>
              ),
              destination: <TitleDescription>تاریخچه سفارشات</TitleDescription>,
              productAddress: (
                <TitleDescription>آدرس های تحویل کالا</TitleDescription>
              ),
              "loyalty-card": (
                <TitleDescription>بن ها و امتیازات تخفیف</TitleDescription>
              ),
            }[
              props.params["all-panel-tab"] &&
                props.params["all-panel-tab"].join("/")
            ]
          } */}
        </div>
        <div className="flex gap-4 size1000:flex-row flex-col">
          <div className={`bg-[#383838] w-[260px] flex-col justify-start ${showHeaderState?"top-32 h-[calc(100vh-156px)]":"top-6 h-[calc(100vh-52px)]"} gap-4 items-center pt-2 size1180:flex hidden rounded-[10px] sticky transition-all duration-100 overflow-y-scroll`}>
            <UserSpecifications
              style={"flex-col justify-center items-center gap-2"}
            />
            <UserTabsCard
              data={panelTabData}
              setLogoutModalState={setLogoutModalState}
            />
          </div>
          {(() => {
            if (
              props.params["all-panel-tab"].length >= 5 &&
              props.params["all-panel-tab"][4] !== "history"
            ) {
              return notFound();
            }
            if (
              props.params["all-panel-tab"].length === 6 &&
              props.params["all-panel-tab"][5] !== "create"
            ) {
              return notFound();
            }
            if (
              props.params["all-panel-tab"].length === 5 &&
              props.params["all-panel-tab"][4] === "history"
            ) {
              return <History params={props.params["all-panel-tab"]} />;
            } else if (
              props.params["all-panel-tab"].length === 6 &&
              props.params["all-panel-tab"][5] === "create"
            ) {
              return <HistoryCreate params={props.params["all-panel-tab"]} />;
            }
            switch (allUrl) {
              case "/panel/my-vehicle/my-car":
                return <CreateMyCar />;
              case "/panel/my-vehicle/my-car/create":
                return <CarDevice pageType={"create"} />;
              case "/panel/my-vehicle/my-car/edit":
                return <CarDevice pageType={"edit"} />;
              // case "/panel/my-vehicle/my-motorcycle":
              //   return <CreateMyMotor />;
              // case "/panel/my-vehicle/my-motorcycle/create":
              //   return <MotorDevice pageType={"create"} />;
              // case "/panel/my-vehicle/my-motorcycle/edit":
              //   return <MotorDevice pageType={"edit"} />;
              // case "/panel/my-vehicle/my-heavy-car":
              //   return <CreateMyHeavyCar />;
              // case "/panel/my-vehicle/my-heavy-car/create":
              //   return <HeavyCarDevice pageType={"create"} />;
              // case "/panel/my-vehicle/my-heavy-car/edit":
              //   return <HeavyCarDevice pageType={"edit"} />;
              case "/panel/productAddress":
                return <ProductAddress />;
              case "/panel/history-orders/buys":
                return <div>buys</div>;
              case "/panel/history-orders/verification?status=CURRENT":
                return <Verification params={props} />;
              case "/panel/history-orders/verification?status=DELIVERED":
                return <Verification params={props} />;
              case "/panel/history-orders/verification?status=REFUSE":
                return <Verification params={props} />;
              case "/panel/history-orders/Detail":
                return <div>Detail</div>;
              case "/panel/profile":
                return <PersonalInformation />;
              case "/panel/discount":
                return <Discount />;
              default:
                if (allUrl === "/panel/history-orders/verification") {
                  router.push(
                    "/panel/history-orders/verification?status=CURRENT",
                  );
                } else {
                  return notFound();
                }
            }
          })()}
        </div>
      </div>
      {logoutModalState && (
        <LogoutModal setLogoutModalState={setLogoutModalState} />
      )}
    </>
  );
};

export default AllPanelTab;
