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
  const [phoneState, setPhoneState] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const loginState = useSelector((state) => state.todo.loginState);
  const hambergerRef = useRef();
  const asideHambergerMenuRef = useRef();
  const asideCategoryMenuRef = useRef();
  const dispatch = useDispatch();
  const cityModalState = useSelector((state) => state.todo.cityModalState);

  const toggleModal = () => {
    dispatch(setCityModalState(!cityModalState));
  };

  const asideMenuCloseHandler = () => {
    setNewMenueState((prev) => !prev);
  };

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down
        setPhoneState(false);
      } else {
        // if scroll up
        setPhoneState(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`${
          props.className
        } font-light flex justify-between items-center px-[30px] py-[15px] sticky top-0 right-0 left-0 w-[100wh] bg-[#FEFEFE] z-[1599] h-[74px] drop-shadow-[0_1px_5px_rgba(0,0,0,0.08)] ${
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
          className={`cursor-pointer transition-all flex items-center justify-start ${
            newMenueState ? "rotate-0" : "rotate-[-90deg]"
          }`}
          onClick={asideMenuCloseHandler}
        >
          <i
            className={"cc-menu text-[28px] text-[#5D5D5D]"}
            ref={hambergerRef}
          />
        </div>
        <HeaderLogo />
        <div
          className={
            "py-[6px] px-3 cursor-pointer flex items-center justify-between gap-1 bg-white border-[1px] border-[#5D5D5D] text-[#5D5D5D] rounded-lg"
          }
          onClick={toggleModal}
        >
          <span className={"inline-block w-fit text-14 font-semibold"}>
            تهران
          </span>
          <i className={"cc-location text-18"} />
        </div>
        {/* <i className="cc-search text-[#fefefe] text-2xl"/> */}
        <ResponsiveMenu
          newMenueState={newMenueState}
          setNewMenueState={setNewMenueState}
          loginState={loginState}
          ref={asideHambergerMenuRef}
          refCategory={asideCategoryMenuRef}
          childrenProps={props.childrenProps}
        />
      </header>
          <div className={`bg-[#FDFDFD] text-sm flex items-center justify-between text-[#F58052] font-medium px-4 py-2 rounded-b-lg fixed ${phoneState?"top-[74px]":"top-[38px]"} transition-all right-0 w-full duration-700 z-[1598] drop-shadow-[0_3px_10px_rgba(0,0,0,0.1)]`}>
          <div className="flex items-center gap-1">
              <span>58919</span>
              <i className="cc-calling"/>
            </div>
            <div className="flex items-center gap-1">
              <span>کیف پول</span>
              <i className="cc-wallet"/>
            </div>
          </div>
      <CityModal isOpen={cityModalState} onClose={toggleModal} />
    </>
  );
};

export default ResponsiveHeader;
