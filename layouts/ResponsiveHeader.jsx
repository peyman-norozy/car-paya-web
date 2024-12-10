import { useDispatch, useSelector } from "react-redux";
import HeaderLogo from "@/components/HeaderLogo";
import LoginLink from "@/components/LoginLink";
import BasketLink from "@/components/BasketLink";
import { usePathname, useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import ResponsiveMenu from "@/components/ResponsiveMenu";
import CardPay from "@/components/CardPay";
import CityModal from "@/components/CityModal/CityModal";
import { setCityModalState, setLoginModal } from "@/store/todoSlice";
import NavbarAttribute from "@/components/NavbarAttribute/NavbarAttribute";
import UserPanelAttribute from "@/components/UserPanelAttribute";
import useClickOutside from "@/hook/useClickOutside";

const ResponsiveHeader = (props) => {
  const params = useParams();
  const pathName = usePathname().split("/")[1];
  const [newMenueState, setNewMenueState] = useState(true);
  const [phoneState, setPhoneState] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [newLoginState, setNewLoginState] = useState(false);
  const loginState = useSelector((state) => state.todo.loginState);
  const hambergerRef = useRef();
  const asideHambergerMenuRef = useRef();
  const asideCategoryMenuRef = useRef();
  const dispatch = useDispatch();
  const cityModalState = useSelector((state) => state.todo.cityModalState);
  const accontRef = useRef();
  const close = useCallback(() => setNewLoginState(false), []);
  const router = useRouter();
  useClickOutside(accontRef, close);
  const accountClickHandler = () => {
    setNewLoginState((prevState) => !prevState);
  };

  const toggleModal = () => {
    dispatch(setCityModalState(!cityModalState));
  };

  const loginModalHandler = () => {
    // dispatch(setLoginModal(true));
    router.push("/login?url=/panel/profile");
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

  const clickLoginHandler = () => {
    dispatch(setLoginModal(true));
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

  //${pathName === "panel" && params["all-panel-tab"] ? "hidden" : ""}
  return (
    <>
      <header
        className={`${props.className} font-light flex justify-between items-center px-[30px] py-[15px] sticky top-0 right-0 left-0 w-[100wh] bg-[#FEFEFE] z-[3000] h-[74px] drop-shadow-[0_3px_10px_rgba(0,0,0,0.1)] lg:shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-1px_rgba(255,255,255,0.06)] lg:pb-[26px] lg:pt-[34px] lg:rounded-b-3xl`}
        onClick={(event) => {
          if (event.target.getAttribute("slug") === "serviceSlug") {
            return null;
          }
          event.target !== hambergerRef.current && setNewMenueState(true);
          asideHambergerMenuRef?.current === event.target &&
            setNewMenueState(false);
          asideCategoryMenuRef?.current === event.target &&
            setNewMenueState(false);
          asideCategoryMenuRef?.current?.children[0] === event.target &&
            setNewMenueState(false);
          asideCategoryMenuRef?.current?.children[0]?.children[0] ===
            event.target && setNewMenueState(false);
          asideCategoryMenuRef?.current?.children[0]?.children[1] ===
            event.target && setNewMenueState(false);
        }}
      >
        <div className="flex items-center justify-between w-full max-w-[1676px] mx-auto">
          <div className="lg:gap-[32px] gap-2 flex items-center">
            <div
              className={`cursor-pointer transition-all lg:hidden flex items-center justify-start ${
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
            <ul
              className={
                "lg:flex hidden items-center gap-[24px] text-14 font-medium"
              }
            >
              {props.headerData.map((item, index) => (
                <NavbarAttribute key={index + item.title} data={item} />
              ))}
            </ul>
          </div>
          <div className="gap-4 flex items-center">
            <div
              className={
                "shadow-[0_0_4px_0_rgba(238,134,38,0.5)] p-2 flex justify-center items-center rounded-[4px] relative"
              }
            >
              <i
                className={"cc-wallet lg:text-[#2D264B] text-[#F58052] text-24"}
              />
              <span
                className={
                  "bg-[#F58052] w-[18px] h-[18px] text-white flex justify-center items-center text-12 font-medium rounded-full absolute -top-[10px] -right-[10px]"
                }
              >
                3
              </span>
            </div>
            {loginState ? (
              <div
                className={
                  "shadow-[0_0_4px_0_rgba(238,134,38,0.5)] p-2 lg:hidden flex justify-center items-center rounded-[4px] "
                }
                onClick={clickLoginHandler}
              >
                <i className={"cc-user text-[#F58052] text-24"} />
              </div>
            ) : (
              <div
                className={
                  "shadow-[0_0_4px_0_rgba(238,134,38,0.5)] p-2 lg:hidden flex justify-center items-center rounded-[4px] relative"
                }
              >
                <i className={"cc-user text-[#F58052] text-24"} />
                <i
                  className={
                    "cc-tick text-[#22A137] text-14 absolute right-[2px] bottom-[2px]"
                  }
                />
              </div>
            )}
            {loginState ? (
              <button
                className={
                  "lg:flex hidden items-center justify-center gap-2 bg-[#F66B34] text-[#FEFEFE] font-medium text-14 w-[146px] h-[40px] rounded-8"
                }
                onClick={loginModalHandler}
              >
                <i className={"cc-user text-20"} />
                <span>ورود و ثبت نام</span>
              </button>
            ) : (
              <div className="lg:block hidden relative">
                <button
                  className="bg-[#FEFEFE] text-[#F66B34] py-1 px-4 rounded-lg cursor-pointer text-14 flex items-center justify-between gap-1 border border-[#F66B34] h-[40px] w-[146px]"
                  onClick={accountClickHandler}
                  ref={accontRef}
                >
                  <span className={"text-14 font-medium"}> حساب کاربری</span>
                  <i className={"cc-arrow-down text-[#BBBBBB] text-18"} />
                </button>
                {newLoginState && (
                  <div className="absolute bottom-[-88px] bg-[#FFFFFF] w-full rounded-lg flex flex-col overflow-hidden">
                    <UserPanelAttribute />
                  </div>
                )}
              </div>
            )}

            {/*<div*/}
            {/*  className={*/}
            {/*    "py-[4px] px-2 cursor-pointer flex items-center justify-between gap-1 bg-white border-[1px] border-[#5D5D5D] text-[#5D5D5D] rounded-lg"*/}
            {/*  }*/}
            {/*  onClick={toggleModal}*/}
            {/*>*/}
            {/*  <span className={"inline-block w-fit text-12 font-medium"}>*/}
            {/*    تهران*/}
            {/*  </span>*/}
            {/*  <i className={"cc-location"} />*/}
            {/*</div>*/}
          </div>
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
      <div
        className={`bg-[#FDFDFD] gap-1 text-sm flex items-center justify-between text-[#F58052] font-medium px-2 py-1 rounded-b-lg fixed ${phoneState ? "top-[73px]" : "top-[44px]"} transition-all left-8 w-fit duration-700 z-[1598] drop-shadow-[0_1px_5px_rgba(0,0,0,0.08)]`}
      >
        <a href="tel:02158919">58919</a>
        <i className="cc-calling" />
      </div>

      <CityModal isOpen={cityModalState} onClose={toggleModal} />
    </>
  );
};

export default ResponsiveHeader;
