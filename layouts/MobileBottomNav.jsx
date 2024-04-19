import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import VehicleRegistration from "@/components/VehicleRegistration";
import battery from "@/public/assets/images/battery-product.svg";
import cluch from "@/public/assets/images/cluch-bumpers.png";
import insurance from "@/public/assets/images/insurance.png";
import service from "@/public/assets/images/periodic-service.png";
import car_bg from "@/public/assets/images/car-background.png";
import verification from "@/public/assets/images/vehicle-verification.png";
import SelectedVehicleVerificationBox from "@/components/SelectedVehicleVerificationBox";

function MobileBottomNav(props) {
  const router = useRouter();
  const [modalIsOpen,setModalIsOpen] = useState(false)
  const [serviceModalIsOpen,setServiceModalIsOpen] = useState(false)
  const [selectedTab,setSelectedTab] = useState(router.pathname)
  const modalRef = useRef(null)
  const selectVehicleRef = useRef(null)
  const startY = useRef(null);
  const verificationTab = [
    { title: "فروشگاه باتری", src: battery, href: "/batteries" },
    {
      title: "کارشناسی خودرو",
      src: verification,
      href: "/vehicle-verification",
    },
    { title: "فیلتر و روغن", src: cluch, href: "/products" },
    { title: "سرویس دوره ای", src: service, href: "/periodic-service" },
    { title: "شناسنامه و سوابق خودرو", src: car_bg, href: "#" },
    { title: "بیمه", src: insurance, href: "#" },
  ];
  const mobileNavData = [
    { name: "icon-Vector",title : 'صفحه نخست' ,class : 'right-[5%]' },
    { name: "icon-Vector-1",title : 'خدمات' ,class : 'right-[26.5%]' },
    { name: "icon-Group",title : 'انتخاب خودرو' ,class : 'right-[50%] translate-x-[50%]' },
    { name: "icon-Vector-2",title : 'جستجو' ,class : 'left-[26.5%]' },
    { name: "icon-Vector-3",title : 'حساب کاربری' ,class : 'left-[5%]'},
    
  ];
  

  const [isClicked, setIsClicked] = useState();
  const navClickHandler = (event , index) => {
    if(index === 0 ) {
      router.push('/')
    }else if(index === 4) {
      router.push('/login')
    }else if (index === 1) {
      setServiceModalIsOpen(prevState => !prevState)
    }else if(index === 2) {
      setModalIsOpen(prevState => !prevState)
    }
    setIsClicked(index);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false)
    setServiceModalIsOpen(false)
    setIsClicked(null)
  }
  const selectTabHandler = (event) => {
    setSelectedTab(event.currentTarget.getAttribute('href'));
    setServiceModalIsOpen(false)
  };

  const touchStartHandler = (event) => {
    startY.current = event.touches[0].clientY
  }

  const slideDownHandler = (event) => {
    const currentY = event.touches[0].clientY;
    const deltaY = currentY - startY.current;

    // If the user swipes down, close the modal
    if (deltaY > 50) {
      setServiceModalIsOpen(false)
      setIsClicked(null)
    }
  }

  const slideDownvehicleHandler = (event) => {
    const currentY = event.touches[0].clientY;
    const deltaY = currentY - startY.current;

    // If the user swipes down, close the modal
    if (deltaY > 50) {
      setModalIsOpen(false)
      setIsClicked(null)
    }
  }

  return (
    <div className="fixed bottom-0 z-[99999999] px-[1rem] pt-[5px] pb-[0.75rem] bg-white flex items-center justify-between w-full h-[70px] shadow-[0_0_5px_0_rgba(0,0,0,0.54)]">
      {<div ref={selectVehicleRef} onTouchStart={touchStartHandler} onTouchMove={slideDownvehicleHandler} className={`fixed  right-0 left-0 w-full  bg-[#fff] z-[999999992] shadow-[0_0_10px_0_rgba(0,0,0,0.4)] rounded-t-[40px] transition-all duration-1000  ${modalIsOpen ? 'h-[100vh] top-[20%] bottom-0' : 'h-0 bottom-0 top-[100%]'}`}>
      <div className="h-[5px] w-[6rem] rounded-[20px] bg-[#333] absolute top-[2.5%] left-[50%] translate-x-[-50%]"></div>
        <div className="z-[999999992] absolute top-[10%] right-[2%] size378:right-[6%] size411:right-[10%] size460:right-[15%] size516:right-[18%] size560:right-[22%] size617:right-[25%] size720:right-[28%] md:right-[32%]"><VehicleRegistration /></div>
        </div>}
      {modalIsOpen && <div onClick={closeModalHandler} className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-[0.8] z-[999999991] h-[100vh] w-full"></div>}

      {<div ref={modalRef} onTouchStart={touchStartHandler} onTouchMove={slideDownHandler} className={`fixed  right-0 left-0 w-full  bg-[#fff] z-[999999992] shadow-[0_0_10px_0_rgba(0,0,0,0.4)] rounded-t-[40px] transition-all duration-1000  ${serviceModalIsOpen ? 'h-[100vh] top-[20%] bottom-0' : 'h-0 bottom-0 top-[100%]'}`}>
        <div className="h-[5px] w-[6rem] rounded-[20px] bg-[#333] absolute top-[2.5%] left-[50%] translate-x-[-50%]"></div>
      <div className="absolute top-[10%] right-[2%] left-[2%] grid grid-cols-3 gap-[1rem]">
          {verificationTab.map((item, index) => (
            <SelectedVehicleVerificationBox
              href={item.href}
              isClicked={selectedTab}
              onClick={selectTabHandler}
              index={item.href}
              key={index}
              title={item.title}
              src={item.src}
              width={60}
              height={60}
            />
          ))}
        </div></div>}
      {serviceModalIsOpen && <div onClick={closeModalHandler} className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-[0.8] z-[999999991] h-[100vh] w-full"></div>}
      {mobileNavData.map((item, index) => (
        <div
          key={index}
          id={index}
          onClick={(event) => navClickHandler(event,index)}
          className={`${item.class} absolute flex flex-col justify-center items-center  gap-[0.25rem]  rounded-[50%] transition-all duration-500 ease-out ${
            isClicked === index ? `bg-red_shop shadow-[0_0_5px_0_rgba(0,0,0,0.54)] top-[-25%] w-[70px] h-[70px] ${index === 1 && 'right-[19%] size360:right-[21%] size460:right-[23%]'} ${index === 3 && 'left-[19%] size360:left-[21%] size460:left-[23%]'}` : ''
          }`}
        >
          <i className={`${item.name} ${isClicked === index ? 'text-white' : 'text-black'} text-[1.25rem]`} />
          <p className={`text-[9px] ${isClicked === index && 'text-white'}`}>{item.title}</p>
        </div>
      ))}
      
    </div>
  );
}

export default MobileBottomNav;
