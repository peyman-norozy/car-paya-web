import Image from "next/image";
import {useSelector} from "react-redux"
import HeaderLogo from "@/components/HeaderLogo";
import LoginLink from "@/components/LoginLink";
import BasketLink from "@/components/BasketLink";
import {usePathname,useParams } from "next/navigation";
import { useRef, useState } from "react";
import ResponsiveMenu from "@/components/ResponsiveMenu";
import CardPay from "@/components/CardPay";

const ResponsiveHeader = (props) => {
  const params = useParams()
  const pathName = usePathname().split("/")[1]
  const [newMenueState, setNewMenueState] = useState(true);
  const loginState = useSelector((state) => state.todo.loginState);
  const hambergerRef = useRef();
  const asideHambergerMenuRef = useRef();
  const asideCategoryMenuRef = useRef();

  const asideMenuCloseHandler = () => {
    setNewMenueState((prev) => !prev);
  };

  return (
    <header
      className={`${
        props.className
      } font-light flex justify-between items-center px-[30px] py-[15px] sticky top-0 right-0 left-0 w-[100wh] bg-white z-[1599] drop-shadow-2xl h-[74px] ${
        pathName === "profile" && params["all-panel-tab"] ? "hidden" : ""
      }`}
      onClick={(event) => {
        event.target !== hambergerRef.current && setNewMenueState(true);
        asideHambergerMenuRef.current === event.target &&
          setNewMenueState(false);
        asideCategoryMenuRef.current === event.target &&
          setNewMenueState(false);
        asideCategoryMenuRef.current.children[0] === event.target &&
          setNewMenueState(false);
        asideCategoryMenuRef.current.children[0].children[0] === event.target &&
          setNewMenueState(false);
        asideCategoryMenuRef.current.children[0].children[1] === event.target &&
          setNewMenueState(false);
      }}
    >
      <div className="flex justify-center items-center gap-4">
        <div
          className={`cursor-pointer transition-all ${
            newMenueState ? "rotate-0" : "rotate-[-90deg]"
          }`}
          onClick={asideMenuCloseHandler}
        >
          <Image
            src="/assets/icons/menu.svg"
            alt="menue icon"
            ref={hambergerRef}
            width={24}
            height={24}
          />
        </div>
        <HeaderLogo />
      </div>
      <div className="flex items-center gap-[10px]">
        <CardPay />
        <BasketLink />
        {loginState && <LoginLink />}
      </div>
      {
        <ResponsiveMenu
          newMenueState={newMenueState}
          setNewMenueState={setNewMenueState}
          loginState={loginState}
          ref={asideHambergerMenuRef}
          refCategory={asideCategoryMenuRef}
          childrenProps={props.childrenProps}
        />
      }
    </header>
  );
};

export default ResponsiveHeader;
