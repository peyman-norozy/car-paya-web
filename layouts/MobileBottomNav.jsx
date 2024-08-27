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
  const renderSetCarState = useSelector(
    (state) => state.todo.renderSetCarState
  );
  const modalRef = useRef(null);
  const selectVehicleRef = useRef(null);
  const startY = useRef(null);

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
    <div className="fixed bottom-1 right-2 z-[2000] flex items-center w-[calc(100vw-16px)] h-[60px] rounded-3xl shadow-[0_4px_4px_0_rgba(160,160,160,0.20)]">
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
          className={`fixed right-0 left-0 w-full  bg-[#fff] z-[2001] shadow-[0_0_10px_0_rgba(0,0,0,0.4)] rounded-t-[40px] transition-all duration-1000 ${
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
      <div
        onClick={(event) => navClickHandler(event, 0)}
        className={`flex flex-col justify-center items-center bg-[#FEFEFE] w-[calc((100%-70px)/4)] h-full rounded-r-2xl shadow-[4px_0_4px_0_rgba(190,190,190,0.20)] overflow-hidden`}
      >
        <i
          className={`icon-Vector-4 ${
            isClicked === 0 ? "text-[#F58052]" : "text-[#6D6D6D]"
          } text-2xl`}
        />
        <p
          className={`text-xs font-medium  ${isClicked === 0 ? "text-[#F58052]" : "text-[#6D6D6D]"} mt-1`}
        >
          صفحه نخست
        </p>
        {isClicked === 0&&<div className="w-[70px] h-[2px] bg-[#F58052]"></div>}
      </div>
      <div
        onClick={(event) => navClickHandler(event, 1)}
        className={`flex flex-col justify-center items-center bg-[#FEFEFE] w-[calc((100%-70px)/4)] h-full shadow-[0_-2px_4px_0_rgba(210,210,210,0.20)]`}
        style={{borderRadius: "5% 0% 0% 0% / 10% 0% 0% 0%"}}
      >
        <i
          className={`icon-Vector-1 ${
            isClicked === 1 ? "text-[#F58052]" : "text-[#6D6D6D]"
          } text-2xl`}
        />
        <p
          className={`text-xs font-medium  ${isClicked === 1 ? "text-[#F58052]" : "text-[#6D6D6D]"} mt-1`}
        >
          خدمات
        </p>
        {isClicked === 1&&<div className="w-[70px] h-[2px] bg-[#F58052]"></div>}
      </div>
      <div className="w-[70px]"></div>
      <div
        onClick={(event) => navClickHandler(event, 2)}
        className={`flex flex-col items-center absolute w-[70px] right-[calc(50%-35px)] h-[90px] bottom-0 overflow-hidden gap-[3px]`}
      >
        {selectedCarData?<>
        <div className="p-2 rounded-b-full w-full mt-[-5px]" style={{boxShadow: "0 75px 0 50px white"}}>
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
            className="rounded-full w-full max-w-[70px] aspect-square bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.4)]"
          />
        </div>
        <p className={`text-[12px] font-medium text-center line-clamp-1 text-[#6D6D6D]`}>
          {selectedCarData.title}
        </p></>:
        <>       
        <i
        className={`icon-Vector-5 ${
          isClicked === 2 ? "text-[#F58052]" : "text-[#6D6D6D]"
        } text-2xl`}
      />
      <p
        className={`text-xs font-medium  ${isClicked === 2 ? "text-[#F58052]" : "text-[#6D6D6D]"} mt-1`}
      >
        انتخاب خودرو
      </p>
      </>}
      </div>
      <div
        onClick={(event) => navClickHandler(event, 3)}
        className={`flex flex-col justify-center items-center bg-[#FEFEFE] w-[calc((100%-70px)/4)] h-full shadow-[0_-2px_4px_0_rgba(210,210,210,0.20)]`}
        style={{borderRadius: "0% 5% 0% 0% / 0% 10% 0% 0%"}}
      >
        <i
          className={`cc-document-align-right ${
            isClicked === 3 ? "text-[#F58052]" : "text-[#6D6D6D]"
          } text-2xl`}
        />
        <p
          className={`text-xs font-medium  ${isClicked === 3 ? "text-[#F58052]" : "text-[#6D6D6D]"} mt-1`}
        >
          خدمات
        </p>
        {isClicked === 3&&<div className="w-[70px] h-[2px] bg-[#F58052]"></div>}
      </div>
      <div
        onClick={(event) => navClickHandler(event, 4)}
        className={`flex flex-col justify-center items-center bg-[#FEFEFE] w-[calc((100%-70px)/4)] h-full rounded-l-2xl shadow-[-4px_0_4px_0_rgba(190,190,190,0.20)]`}
      >
        <i
          className={`icon-Vector-3 ${
            isClicked === 4 ? "text-[#F58052]" : "text-[#6D6D6D]"
          } text-2xl`}
        />
        <p
          className={`text-xs font-medium ${isClicked === 4 ? "text-[#F58052]" : "text-[#6D6D6D]"} mt-1`}
        >
          خدمات
        </p>
        {isClicked === 4&&<div className="w-[70px] h-[2px] bg-[#F58052]"></div>}
      </div>
    </div>
  );
}

export default MobileBottomNav;
