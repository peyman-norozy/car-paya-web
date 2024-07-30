import LoginLink from "@/components/LoginLink";
import HeaderLogo from "@/components/HeaderLogo";
import BasketLink from "@/components/BasketLink";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import useClickOutside from "@/hook/useClickOutside";
import NavigationBar from "@/components/NavigationBar";
import UserPanelAttribute from "@/components/UserPanelAttribute";
import { setShowHeader } from "@/store/todoSlice";
import CardPay from "@/components/CardPay";
import Image from "next/image";
import CityModal from "@/components/CityModal/CityModal";
const DesktopHeader = (props) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const loginState = useSelector((state) => state.todo.loginState);
  const showHeaderData = useSelector((state) => state.todo.showHeader);
  const [newLoginState, setNewLoginState] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const accontRef = useRef();
  const close = useCallback(() => setNewLoginState(false), []);
  useClickOutside(accontRef, close);
  const accountClickHandler = () => {
    setNewLoginState((prevState) => !prevState);
  };

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down
        dispatch(setShowHeader(false));
      } else {
        // if scroll up
        dispatch(setShowHeader(true));
      }
      setLastScrollY(window.scrollY);
    }
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
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

  useEffect(() => {
    setNewLoginState(false);
  }, [router]);

  return (
    <header
      className={`${props.className} flex justify-between items-center fixed top-0 right-0 left-0 w-[100wh] z-[1599] pt-[10px] px-12 bg-[#d1d1d1] transition-all ${showHeaderData ? "translate-y-0" : "translate-y-[-100%]"}`}
    >
      <div
        className={`font-light flex justify-between items-center w-full max-w-[1676px] m-auto bg-[#383838] z-[10000] h-[88px] rounded-2xl py-6 px-8`}
      >
        <div className="flex items-center gap-[32px]">
          <i className="cc-menu text-2xl text-[#FEFEFE]" />
          <HeaderLogo />
          {/* <NavigationBar class_name={"flex gap-[20px]"} childrenProps={props.childrenProps}/> */}
        </div>
        <div className="bg-[#B0B0B01F] flex items-center gap-2 px-3 py-[6px] text-[#B0B0B0] rounded-lg w-1/3">
          <i className="cc-search text-2xl" />
          <input
            className="w-full bg-[#ffffff01] outline-none"
            placeholder="جستجو..."
          />
        </div>
        <div className="flex items-center gap-6">
          <div
            className={
              "bg-[#d1d5db] py-2 px-2 rounded-5 cursor-pointer flex items-center justify-between gap-2"
            }
            onClick={toggleModal}
          >
            <span className={"inline-block w-fit text-14"}>تهران</span>
            <i className={"cc-arrow-down"} />
          </div>
          <i className="cc-wallet text-2xl text-[#FEFEFE]" />
          <div className="bg-[#F66B3429] flex items-center px-4 py-2 gap-2 rounded-[4px]">
            <i className="cc-wallet text-2xl text-[#F66B34]" />
            <span className="text-14 font-medium text-[#F66B34]">کیف پول</span>
          </div>
          <div className="bg-[#5D697A] w-px h-10"></div>
          {loginState ? (
            <LoginLink />
          ) : (
            <div className="relative">
              <span
                className="bg-gray-300 py-1 px-4 rounded-lg cursor-pointer text-14"
                onClick={accountClickHandler}
                ref={accontRef}
              >
                حساب کاربری
              </span>
              {newLoginState && (
                <div className="absolute bottom-[-88px] bg-stone-200 w-full rounded-lg flex flex-col overflow-hidden">
                  <UserPanelAttribute />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <CityModal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
};

export default DesktopHeader;
