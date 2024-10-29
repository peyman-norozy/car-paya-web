import NavigationBar from "@/components/NavigationBar";
import React from "react";
import HeaderLogo from "@/components/HeaderLogo";

const ResponsiveMenu = React.forwardRef((props, ref) => {
  return (
    <div
      className={`bg-[#0002] fixed top-0 right-0 h-screen z-50 lg:hidden block ${
        props.newMenueState ? "w-0" : "w-full"
      }`}
    >
      <div
        className={`fixed top-0 right-0 flex flex-col w-full h-screen bg-white transition-all duration-500 p-8 ${
          props.newMenueState ? "translate-x-[1000px]" : "translate-x-0"
        }`}
        ref={ref}
      >
        <div className={"flex items-center justify-between"}>
          <HeaderLogo />
          <i className={"cc-close-circle text-[30px] cursor-pointer"} />
        </div>
        <NavigationBar
          class_name={"flex flex-col"}
          styleState={"habmergerMenue"}
          loginState={props.loginState}
          ref={props.refCategory}
          childrenProps={props.childrenProps}
        />
      </div>
    </div>
  );
});

ResponsiveMenu.displayName = "ResponsiveMenu";

export default ResponsiveMenu;
