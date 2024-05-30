"use client";
import { notFound, useRouter } from "next/navigation";
import TitleDescription from "@/components/TitleDescription";
import React, { Fragment, useEffect, useState } from "react";
import LogoutModal from "@/components/modal/LogoutModal";
import { getWindowInnerWidth } from "@/store/todoSlice";
import { useDispatch } from "react-redux";
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

const AllPanelTab = (props) => {
  const [logoutModalState, setLogoutModalState] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

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

  return (
    <Fragment>
      <div className="mt-[50px] mb-[100px] size460:mx-[50px] mx-[30px]">
        <div className="flex items-center gap-4 mb-[30px] mt-[100px]">
          <Image
            src={"/assets/icons/back.svg"}
            className={"size1000:hidden block cursor-pointer"}
            onClick={backClickHandler}
            alt="back icon"
            width={34}
            height={34}
          />
          {
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
          }
        </div>
        <div className="flex gap-4 size1000:flex-row flex-col items-start">
          <div className="shadow-[0_0_6px_0_rgba(180,180,180,0.3)] w-[342px] flex-col justify-center gap-4 items-center pt-2 size1180:flex hidden rounded-[10px] sticky top-[81px]">
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
            switch (
              props.params["all-panel-tab"] &&
              props.params["all-panel-tab"].join("/")
            ) {
              case "my-vehicle/my-car":
                return <CreateMyCar />;
              case "my-vehicle/my-car/create":
                return <CarDevice pageType={"create"} />;
              case "my-vehicle/my-car/edit":
                return <CarDevice pageType={"edit"} />;
              case "my-vehicle/my-motorcycle":
                return <CreateMyMotor />;
              case "my-vehicle/my-motorcycle/create":
                return <MotorDevice pageType={"create"} />;
              case "my-vehicle/my-motorcycle/edit":
                return <MotorDevice pageType={"edit"} />;
              case "my-vehicle/my-heavy-car":
                return <CreateMyHeavyCar />;
              case "my-vehicle/my-heavy-car/create":
                return <HeavyCarDevice pageType={"create"} />;
              case "my-vehicle/my-heavy-car/edit":
                return <HeavyCarDevice pageType={"edit"} />;
              case "productAddress":
                return <ProductAddress />;
              case "history-orders/buys":
                return <div>buys</div>;
              case "history-orders/verification":
                return <div>verification</div>;
              case "history-orders/Detail":
                return <div>Detail</div>;
              case "profile":
                return <PersonalInformation />;
              case "discount":
                return <Discount />;
              default:
                notFound();
            }
          })()}
        </div>
      </div>
      {logoutModalState && (
        <LogoutModal setLogoutModalState={setLogoutModalState} />
      )}
    </Fragment>
  );
};

export default AllPanelTab;
