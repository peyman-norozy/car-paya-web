"use client"
import {useParams, useRouter} from "next/navigation";
import TitleDescription from "@/components/TitleDescription";
import React, {Fragment, useEffect, useState} from "react";
import LogoutModal from "@/components/modal/LogoutModal";
import {getWindowInnerWidth} from "@/store/todoSlice";
import {useDispatch, useSelector} from "react-redux";
import UserSpecifications from "@/components/UserSpecifications";
import UserTabsCard from "@/components/cards/UserTabsCard";
import Image from "next/image";
import CarDevice from "@/components/CarDevice";
import CreateMyMotor from "@/components/CreateMyMotor";
import CreateMyCar from "@/components/CreateMyCar";
import RecordModal from "@/components/modal/RecordModal";
import RecordModalCreate from "@/components/modal/RecordModalCreate";
import ProductAddress from "@/components/ProductAddress/ProductAddress";
import PersonalInformation from "@/components/PersonalInformation";
import MotorDevice from "@/components/MotorDevice";

const panelTabData = [
  {
    imgSrc: "/assets/icons/PersonalIcon.svg",
    title: "داشبورد",
    alt: "user profile icon",
    id: "panel",
  },
  {
    imgSrc: "/assets/icons/PersonalIcon.svg",
    title: "اطلاعات شخصی من",
    alt: "profile icon",
    id: "profile",
  },
  {
    imgSrc: "/assets/icons/Group.svg",
    title: "شناسنامه و سوابق وسیله نقلیه",
    alt: "my car icon",
    id: "my-vehicle",
    children: [
      { title: "خودرو", id: "my-vehicle/my-car" },
      { title: "موتور سیکلت", id: "my-vehicle/my-motorcycle" },
    ],
  },
  {
    imgSrc: "/assets/icons/Vehicle.svg",
    title: "تاریخچه سفارشات",
    alt: "destination icon",
    id: "destination",
  },
  {
    imgSrc: "/assets/icons/location.svg",
    title: "آدرس های تحویل کالا",
    alt: "personal file icon",
    id: "productAddress",
  },
  {
    imgSrc: "/assets/icons/discount-shape.svg",
    title: "بن ها و امتیازات تخفیف",
    alt: "loyalty card icon",
    id: "loyalty-card",
  },
];

const AllPanelTab = () => {
  const [logoutModalState, setLogoutModalState] = useState(false);
  const router = useRouter();
  const params = useParams()
  const dispatch = useDispatch();
  const RecordModalState = useSelector((state) => state.todo.modalState);
  const RecordModalCreateState = useSelector(
    (state) => state.todo.recordModalCreateState,
  );

  const backClickHandler = () => {
      router.push("/panel");
  };

  useEffect(() => {
    if (params["all-panel-tab"] === "logout") {
      router.push("my-vehicle", undefined, { scroll: false });
    }
  }, [router, params]);

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
              "profile":(
                  <TitleDescription>اطلاعات شخصی من</TitleDescription>
              ),
              "my-vehicle/my-car": (
                <TitleDescription>شناسنامه و سوابق خودرو</TitleDescription>
              ),
              "my-vehicle/my-motorcycle": (
                <TitleDescription>شناسنامه و سوابق موتور</TitleDescription>
              ),
              destination: <TitleDescription>تاریخچه سفارشات</TitleDescription>,
              "productAddress": (
                <TitleDescription>آدرس های تحویل کالا</TitleDescription>
              ),
              "loyalty-card": (
                <TitleDescription>بن ها و امتیازات تخفیف</TitleDescription>
              ),
            }[
              params["all-panel-tab"] &&
                params["all-panel-tab"].join("/")
            ]
          }
        </div>
        <div className="flex gap-4 size1000:flex-row flex-col items-start">
          <div className="shadow-[0_0_6px_0_rgba(180,180,180,0.3)] w-[342px] flex-col justify-center gap-4 items-center pt-2 size1180:flex hidden rounded-[10px]">
            <UserSpecifications
              style={"flex-col justify-center items-center gap-2"}
            />
            <UserTabsCard
              data={panelTabData}
              setLogoutModalState={setLogoutModalState}
            />
          </div>
          {
            {
              "profile":<PersonalInformation/>,
              "my-vehicle/my-car": <CreateMyCar />,
              "my-vehicle/my-car/create": <CarDevice pageType={"create"} />,
              "my-vehicle/my-car/edit": <CarDevice pageType={"edit"} />,
              "my-vehicle/my-motorcycle": <CreateMyMotor />,
              "my-vehicle/my-motorcycle/create":<MotorDevice pageType={"create"}/>,
              "my-vehicle/my-motorcycle/edit":<MotorDevice pageType={"edit"}/>,
              destination: <div>asdfs</div>,
              "productAddress": <ProductAddress/>,
              "user-profile": <div>user-profile</div>,
              "loyalty-card": <div>loyalty-card</div>,
            }[
              params["all-panel-tab"] &&
                params["all-panel-tab"].join("/")
            ]
          }
        </div>
        {RecordModalState && <RecordModal />}
        {RecordModalCreateState && <RecordModalCreate />}
      </div>
      {logoutModalState && (
        <LogoutModal setLogoutModalState={setLogoutModalState} />
      )}
    </Fragment>
  );
};

export default AllPanelTab;
