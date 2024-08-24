import { useDispatch, useSelector } from "react-redux";
import HeaderLogo from "@/components/HeaderLogo";
import LoginLink from "@/components/LoginLink";
import BasketLink from "@/components/BasketLink";
import { usePathname, useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ResponsiveMenu from "@/components/ResponsiveMenu";
import CardPay from "@/components/CardPay";
import CityModal from "@/components/CityModal/CityModal";
import { setCityModalState } from "@/store/todoSlice";

const ResponsiveHeader = (props) => {
  const params = useParams();
  const pathName = usePathname().split("/")[1];
  const [newMenueState, setNewMenueState] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const loginState = useSelector((state) => state.todo.loginState);
  const hambergerRef = useRef();
  const asideHambergerMenuRef = useRef();
  const asideCategoryMenuRef = useRef();
  const dispatch = useDispatch();
  const cityModalState = useSelector((state) => state.todo.cityModalState);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleModal = () => {
    dispatch(setCityModalState(!cityModalState));
  };

  const asideMenuCloseHandler = () => {
    setNewMenueState((prev) => !prev);
  };

  return (
    <>
      <header
        className={`${
          props.className
        } font-light flex justify-between items-center px-[30px] py-[15px] sticky top-0 right-0 left-0 w-[100wh] bg-[#383838] z-[1599] drop-shadow-[0_3px_10px_rgba(0,0,0,.1)] h-[74px] ${
          pathName === "panel" && params["all-panel-tab"] ? "hidden" : ""
        }`}
        onClick={(event) => {
          event.target !== hambergerRef.current && setNewMenueState(true);
          asideHambergerMenuRef.current === event.target &&
            setNewMenueState(false);
          asideCategoryMenuRef.current === event.target &&
            setNewMenueState(false);
          asideCategoryMenuRef.current.children[0] === event.target &&
            setNewMenueState(false);
          asideCategoryMenuRef.current.children[0].children[0] ===
            event.target && setNewMenueState(false);
          asideCategoryMenuRef.current.children[0].children[1] ===
            event.target && setNewMenueState(false);
        }}
      >
        <div
          className={`cursor-pointer transition-all flex items-center ${
            newMenueState ? "rotate-0" : "rotate-[-90deg]"
          }`}
          onClick={asideMenuCloseHandler}
        >
          <i
            className={"cc-menu text-[34px] text-[#FEFEFE]"}
            ref={hambergerRef}
          />
        </div>
        <HeaderLogo />
        <div
          className={
            "py-2 px-2 rounded-5 cursor-pointer flex items-center justify-between gap-2 bg-white"
          }
          onClick={toggleModal}
        >
          <span className={"inline-block w-fit text-16 font-semibold"}>
            تهران
          </span>
          <i className={"cc-arrow-down"} />
        </div>
        {/*<i className="cc-search text-[#fefefe] text-2xl"/>*/}
        <ResponsiveMenu
          newMenueState={newMenueState}
          setNewMenueState={setNewMenueState}
          loginState={loginState}
          ref={asideHambergerMenuRef}
          refCategory={asideCategoryMenuRef}
          childrenProps={props.childrenProps}
        />
      </header>
      <CityModal isOpen={cityModalState} onClose={toggleModal} />
    </>
  );
};

export default ResponsiveHeader;
