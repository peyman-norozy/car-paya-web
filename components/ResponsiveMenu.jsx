import SupportContact from "@/components/SupportContact";
import NavigationBar from "@/components/NavigationBar";
import React from "react";

const ResponsiveMenu = React.forwardRef((props, ref) => {
  return (
    <div
      className={`bg-[#0002] fixed top-0 right-0 h-screen z-50 lg:hidden block ${
        props.newMenueState ? "w-0" : "w-full"
      }`}
    >
      <div
        className={`fixed top-0 right-0 flex flex-col justify-between w-full h-screen bg-white transition-all duration-500 p-8 ${
          props.newMenueState ? "translate-x-[1000px]" : "translate-x-0"
        }`}
        ref={ref}
      >
        <i
          className={
            "cc-close-circle text-[30px] absolute top-2 left-8 cursor-pointer"
          }
        />
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
