"use client"
import {useRouter,useParams} from "next/navigation";
import TitleDescription from "@/components/TitleDescription";
import { Fragment, useEffect, useState } from "react";
import LogoutModal from "@/components/modal/LogoutModal";
import {getWindowInnerWidth} from "@/store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import PersonalFile from "@/components/PersonalFile";
import UserSpecifications from "@/components/UserSpecifications";
import UserTabsCard from "@/components/cards/UserTabsCard";
import Image from "next/image";
import CarDevice from "@/components/CarDevice";
import MotorDevice from "@/components/MotorDevice";
import CreateMyCar from "@/components/CreateMyCar";
import RecordModal from "@/components/modal/RecordModal";
import RecordModalCreate from "@/components/modal/RecordModalCreate";

const panelTabData = [
  {
    imgSrc: "/assets/icons/user-profile.svg",
    title: "اطلاعات شخصی من",
    alt: "user profile icon",
    id: "profile",
  },
  {
    imgSrc: "/assets/icons/camera-recorder.svg",
    title: "شناسنامه و سوابق وسیله نقلیه",
    alt: "my car icon",
    id: "my-vehicle",
    children: [
      { title: "خودرو", id: "my-vehicle/my-car" },
      { title: "موتور سیکلت", id: "my-vehicle/my-motorcycle" },
    ],
  },
  {
    imgSrc: "/assets/icons/destination.svg",
    title: "تاریخچه سفارشات",
    alt: "destination icon",
    id: "destination",
  },
  {
    imgSrc: "/assets/icons/file.svg",
    title: "آدرس های تحویل کالا",
    alt: "personal file icon",
    id: "personal-file",
  },
  {
    imgSrc: "/assets/icons/loyalty-card.svg",
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
    console.log(router);
    console.log(params)
    if (params) {
      router.back();
    } else {
      router.push("/profile");
    }
    // router.back()
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

  console.log(RecordModalCreateState);

  return (
    <Fragment>
      <div className="mt-[50px] mb-[100px] mx-[50px]">
        <div className="flex items-center gap-4 mb-[30px]">
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
              "my-vehicle/my-car": (
                <TitleDescription>شناسنامه و سوابق خودرو</TitleDescription>
              ),
              "my-vehicle/my-motorcycle": (
                <TitleDescription>شناسنامه و سوابق موتور</TitleDescription>
              ),
              destination: <TitleDescription>تاریخچه سفارشات</TitleDescription>,
              "personal-file": (
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
          <div className="shadow-[0_0_6px_0_rgba(177,177,177,1)] w-[300px] flex-col justify-center gap-4 items-center pt-2 size1000:flex hidden rounded-[10px]">
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
              "my-vehicle/my-car": <CreateMyCar />,
              "my-vehicle/my-car/create": <CarDevice pageType={"create"} />,
              "my-vehicle/my-car/edit": <CarDevice pageType={"edit"} />,
              "my-vehicle/my-motorcycle": <MotorDevice />,
              destination: <div>destination</div>,
              "personal-file": <PersonalFile />,
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
