"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import VehicleRegistration from "@/components/VehicleRegistration";
import SelectedVehicleVerificationBox from "@/components/SelectedVehicleVerificationBox";
import Image from "next/image";
import { API_PATHS } from "@/configs/routes.config";
import { serviceData } from "@/staticData/data";
import CarSelectComponent from "@/components/public/CarSelectComponent";
import nProgress from "nprogress";
import { useSelector } from "react-redux";

function MobileBottomNav(props) {
  const router = useRouter();
  const pathname = usePathname();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [serviceModalIsOpen, setServiceModalIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(pathname);
  const [selectedCarData, setSelectedCarData] = useState(null);
  const [isClicked, setIsClicked] = useState();
  const renderSetCarState = useSelector((state) => state.todo.renderSetCarState);
  const modalRef = useRef(null);
  const selectVehicleRef = useRef(null);
  const startY = useRef(null);
  const mobileNavData = [
    { name: "icon-Vector-4", title: "صفحه نخست", class: "right-[5%]" },
    { name: "icon-Vector-1", title: "خدمات", class: "right-[26.5%]" },
    {
      name: "icon-Vector-5",
      title: "انتخاب خودرو",
      class: "right-[50%] translate-x-[50%] size-24 bottom-1",
    },
    {
      name: "cc-document-align-right",
      title: "سفارش ها",
      class: "left-[26.5%]",
    },
    { name: "icon-Vector-3", title: "حساب کاربری", class: "left-[5%]" },
  ];

  useEffect(() => {
    console.log(renderSetCarState);
    
    setSelectedCarData(JSON.parse(localStorage.getItem("selectedVehicle")));
  }, [renderSetCarState]);

  const navClickHandler = (event, index) => {
    if (index === 0) {
      nProgress.start();
      router.push("/");
    } else if (index === 4) {
      nProgress.start();
      router.push("/login");
    } else if (index === 1) {
      setServiceModalIsOpen((prevState) => !prevState);
    } else if (index === 2) {
      setModalIsOpen((prevState) => !prevState);
    }
    setIsClicked(index);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
    setServiceModalIsOpen(false);
    // setIsClicked(null);
  };
  const selectTabHandler = (event) => {
    setSelectedTab(event.currentTarget.getAttribute("href"));
    setServiceModalIsOpen(false);
  };

  const touchStartHandler = (event) => {
    startY.current = event.touches[0].clientY;
  };

  const slideDownHandler = (event) => {
    const currentY = event.touches[0].clientY;
    const deltaY = currentY - startY.current;

    // If the user swipes down, close the modal
    if (deltaY > 50) {
      setServiceModalIsOpen(false);
      // setIsClicked(null);
    }
  };

  const slideDownvehicleHandler = (event) => {
    const currentY = event.touches[0].clientY;
    const deltaY = currentY - startY.current;

    // If the user swipes down, close the modal
    if (deltaY > 50) {
      setModalIsOpen(false);
      // setIsClicked(null);
    }
  };


  return (
    <div className="fixed bottom-0 right-0 z-[2000] px-[1rem] pt-[5px] pb-[0.75rem] bg-[#383838] flex items-center justify-between w-full h-[70px] shadow-[0_0_5px_0_rgba(0,0,0,0.54)]">
      {
        <div
          ref={selectVehicleRef}
          onTouchStart={touchStartHandler}
          onTouchMove={slideDownvehicleHandler}
          className={`fixed right-0 left-0 w-full bg-[#fff] z-[2002] shadow-[0_0_10px_0_rgba(0,0,0,0.4)] rounded-t-2xl transition-all duration-1000  ${
            modalIsOpen
              ? "h-[100vh] top-[calc(100vh-670px)] bottom-0"
              : "h-0 bottom-0 top-[100%]"
          }`}
        >
          <div className="h-[5px] w-[6rem] rounded-[20px] bg-[#333] absolute top-[2.5%] left-[50%] translate-x-[-50%]"></div>
          <div className="z-[2003] absolute top-10 right-[calc((100vw-400px)/2)]">
            {/* <VehicleRegistration /> */}
            <CarSelectComponent isMobile={true} />
          </div>
        </div>
      }
      {modalIsOpen && (
        <div
          onClick={closeModalHandler}
          className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-[0.8] z-[2001] h-[100vh] w-full"
        ></div>
      )}

      {
        <div
          ref={modalRef}
          onTouchStart={touchStartHandler}
          onTouchMove={slideDownHandler}
          className={`fixed  right-0 left-0 w-full  bg-[#fff] z-[2001] shadow-[0_0_10px_0_rgba(0,0,0,0.4)] rounded-t-[40px] transition-all duration-1000  ${
            serviceModalIsOpen
              ? "h-[100vh] top-[20%] bottom-0"
              : "h-0 bottom-0 top-[100%]"
          }`}
        >
          <div className="h-[5px] w-[6rem] rounded-[20px] bg-[#333] absolute top-[2.5%] left-[50%] translate-x-[-50%]"></div>
          <div className="absolute top-[10%] right-[2%] left-[2%] grid grid-cols-3 gap-[1rem]">
            {serviceData.map((item, index) => (
              <SelectedVehicleVerificationBox
                href={item.href}
                isClicked={selectedTab}
                onClick={selectTabHandler}
                index={item.href}
                key={index}
                title={item.title}
                src={item.icon}
                width={60}
                height={60}
              />
            ))}
          </div>
        </div>
      }
      {serviceModalIsOpen && (
        <div
          onClick={closeModalHandler}
          className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-[0.8] z-[2000] h-[100vh] w-full"
        ></div>
      )}
      {mobileNavData.map((item, index) => (
        <div
          key={index}
          id={index}
          onClick={(event) => navClickHandler(event, index)}
          className={`${item.class} ${index === 2 && "bg-[#383838] p-3"} absolute flex flex-col justify-center items-center rounded-full`}
        >
          {selectedCarData && index === 2 ? (
            <div className="w-[60px] h-auto">
              <Image
                width={60}
                height={54}
                alt=""
                src={
                  process.env.BASE_API +
                  "/web" +
                  API_PATHS.FILE +
                  "/" +
                  selectedCarData.image
                }
                className="rounded-[50%] w-full h-full"
              />
            </div>
          ) : (
            <i
              className={`${item.name} ${
                isClicked === index ? "text-[#F66B34]" : "text-[#fefefe]"
              } text-[1.25rem]`}
            />
          )}
          {selectedCarData && index === 2 ? (
            <p
              className={`text-[12px] text-center line-clamp-1 text-[#fefefe]`}
            >
              {selectedCarData.title}
            </p>
          ) : (
            <p
              className={`text-[9px] ${isClicked === index ? "text-[#F66B34]" : "text-[#fefefe]"} mt-2`}
            >
              {item.title}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default MobileBottomNav;
