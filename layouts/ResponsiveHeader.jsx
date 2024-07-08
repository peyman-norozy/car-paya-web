import { useSelector } from "react-redux";
import HeaderLogo from "@/components/HeaderLogo";
import LoginLink from "@/components/LoginLink";
import BasketLink from "@/components/BasketLink";
import { usePathname, useParams } from "next/navigation";
import { useRef, useState } from "react";
import ResponsiveMenu from "@/components/ResponsiveMenu";
import CardPay from "@/components/CardPay";

const ResponsiveHeader = (props) => {
  const params = useParams();
  const pathName = usePathname().split("/")[1];
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
      } font-light flex justify-between items-center px-[30px] py-[15px] sticky top-0 right-0 left-0 w-[100wh] bg-white z-[1599] drop-shadow-[0_3px_10px_rgba(0,0,0,.1)] h-[74px] ${
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
        asideCategoryMenuRef.current.children[0].children[0] === event.target &&
          setNewMenueState(false);
        asideCategoryMenuRef.current.children[0].children[1] === event.target &&
          setNewMenueState(false);
      }}
    >
      <div className="flex justify-center items-center gap-4">
        <HeaderLogo />
      </div>
      <div className="flex items-center gap-[10px]">
        <CardPay />
        <BasketLink />
        <div
          className={`cursor-pointer transition-all flex items-center ${
            newMenueState ? "rotate-0" : "rotate-[-90deg]"
          }`}
          onClick={asideMenuCloseHandler}
        >
          <i className={"cc-menu text-[34px]"} ref={hambergerRef} />
        </div>
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
