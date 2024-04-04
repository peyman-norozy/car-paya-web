import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Index from "@/pages/test";
import ResponsiveVehicleRegistration from "@/components/cards/ResponsiveVehicleRegistration";
import VehicleRegistration from "@/components/VehicleRegistration";

function MobileBottomNav(props) {
  const [modalIsOpen,setModalIsOpen] = useState(false)
  const mobileNavData = [
    { name: "icon-Vector",title : 'صفحه نخست' ,class : 'right-[5%]' },
    { name: "icon-Vector-1",title : 'خدمات' ,class : 'right-[26.5%]' },
    { name: "icon-Group",title : 'انتخاب خودرو' ,class : 'right-[50%] translate-x-[50%]' },
    { name: "icon-Vector-2",title : 'جستجو' ,class : 'left-[26.5%]' },
    { name: "icon-Vector-3",title : 'حساب کاربری' ,class : 'left-[5%]'},
    
  ];

  const router = useRouter();

  const [isClicked, setIsClicked] = useState();
  const navClickHandler = (event , index) => {
    if(index === 0 ) {
      router.push('/')
    }else if(index === 4) {
      router.push('/login')
    }else if(index === 2) {
      setModalIsOpen(prevState => !prevState)
    }
    setIsClicked(index);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="fixed bottom-0 z-[99999999] px-[1rem] pt-[5px] pb-[0.75rem] bg-white flex items-center justify-between w-full h-[70px] shadow-[0_0_5px_0_rgba(0,0,0,0.54)]">
      {modalIsOpen && <div className="z-[999999992] fixed top-0 right-[2%] size378:right-[6%] size411:right-[10%] size460:right-[15%] size516:right-[18%] size560:right-[22%] size617:right-[25%] size720:right-[28%] md:right-[32%]"><VehicleRegistration /></div>}
      {modalIsOpen && <div onClick={closeModalHandler} className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-[0.8] z-[999999991] h-[100vh] w-full"></div>}
      {mobileNavData.map((item, index) => (
        <div
          key={index}
          id={index}
          onClick={(event) => navClickHandler(event,index)}
          className={`${item.class} absolute flex flex-col justify-center items-center  gap-[0.25rem]  rounded-[50%] transition-all duration-500 ease-out ${
            isClicked === index ? `bg-red_shop shadow-[0_0_5px_0_rgba(0,0,0,0.54)] top-[-25%] w-[70px] h-[70px] ${index === 1 && 'right-[21%] size460:right-[23%]'} ${index === 3 && 'left-[21%] size460:left-[23%]'}` : ''
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
