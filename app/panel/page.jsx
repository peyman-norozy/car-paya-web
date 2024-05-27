"use client";
import { useRouter } from "next/navigation";
import TitleDescription from "@/components/TitleDescription";
import { useState } from "react";
import PersonalFile from "@/components/PersonalFile";
import { useDispatch, useSelector } from "react-redux";
import UserSpecifications from "@/components/UserSpecifications";
import UserTabsCard from "@/components/cards/UserTabsCard";
import LogoutModal from "@/components/modal/LogoutModal";
import { setTriangleState } from "@/store/todoSlice";

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
      { title: "وسیله سنگین", id: "my-vehicle/my-heavy-car" },
    ],
  },
  {
    imgSrc: "/assets/icons/Vehicle.svg",
    title: "تاریخچه سفارشات",
    alt: "destination icon",
    id: "destination",
    children: [
      { title: "خریدها", id: "my-vehicle/my-car" },
      { title: "کارشناسی", id: "my-vehicle/my-motorcycle" },
      { title: "سرویس دوره ای", id: "my-vehicle/my-heavy-car" },
    ],
  },
  {
    imgSrc: "/assets/icons/location.svg",
    title: "آدرس های تحویل کالا",
    alt: "product address file icon",
    id: "productAddress",
  },
  {
    imgSrc: "/assets/icons/discount-shape.svg",
    title: "بن ها و امتیازات تخفیف",
    alt: "loyalty card icon",
    id: "loyalty-card",
  },
];

const UserPanel = () => {
  const [logoutModalState, setLogoutModalState] = useState(false);

  const dispatch = useDispatch();

  const innerWidthNumber = useSelector(
    (number) => number.todo.windowInnerWidth,
  );

  const triangleState = useSelector((state) => state.todo.triangleState);
  const router = useRouter();

  const tabClickHandler = (event) => {
    const id = event.currentTarget.getAttribute("tab_id");

    if (id === "my-vehicle") {
      dispatch(setTriangleState(!triangleState));
    }

    if (id === "logout") {
      setLogoutModalState(true);
    } else if (id === "panel") {
      router.push("/" + id, undefined, { scroll: false });
    } else if (id !== "my-vehicle") {
      router.push("/panel" + "/" + id, undefined, { scroll: false });
    }
  };

  return (
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
              triangleState={triangleState}
              setLogoutModalState={setLogoutModalState}
              onclick={tabClickHandler}
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
          <UserSpecifications style={"flex-row items-center justify-between"} />
          <hr />
          <PersonalFile />
          <UserTabsCard
            data={panelTabData}
            triangleState={triangleState}
            setLogoutModalState={setLogoutModalState}
            onclick={tabClickHandler}
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
