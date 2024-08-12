import SupportContact from "@/components/SupportContact";
import NavigationBar from "@/components/NavigationBar";
import React from "react";

const ResponsiveMenu = React.forwardRef((props, ref) => {
  return (
    <div
      className={`bg-[#0002] fixed top-[74px] right-0 h-screen z-50 ${
        props.newMenueState ? "w-0" : "w-full"
      }`}
    >
      <div
        className={`fixed top-[74px] right-0 flex flex-col justify-between w-[240px] h-[calc(100vh-74px)] bg-[#383838] transition-all ${
          props.newMenueState ? "translate-x-[250px]" : "translate-x-0"
        }`}
        ref={ref}
      >
        <NavigationBar
          class_name={"flex flex-col"}
          styleState={"habmergerMenue"}
          loginState={props.loginState}
          ref={props.refCategory}
          childrenProps={props.childrenProps}
        />
        <div className="flex gap-2 pb-4 pr-2">
          <SupportContact />
        </div>
      </div>
    </div>
  );
});

ResponsiveMenu.displayName = "ResponsiveMenu";

export default ResponsiveMenu;
