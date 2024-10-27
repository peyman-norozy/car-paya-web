"use client";
import Navlink from "@/components/Navlink";
import UserPanelAttribute from "@/components/UserPanelAttribute";
import CategoryModal from "@/components/CategoryModal";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const navBarItems = [
  { title: "دسته بندی", href: "", id: "category" },
  { title: "خانه", href: "/", id: "home" },
  { title: "خدمات", href: "/services", id: "services" },
  { title: "درباره ما", href: "/about-us", id: "about_us" },
  { title: "تماس با ما", href: "/contact-us", id: "contact_us" },
  { title: "مقالات", href: "/mags", id: "mags" },
];
const navBarItemsResponsive = [
  { title: "کیف پول", href: "/", id: "home", icon: "cc-wallet" },
  { title: "خدمات", id: "category", icon: "cc-vector-stroke" },
  { title: "پروفایل", href: "/services", id: "services", icon: "cc-sms" },
  {
    title: "مجله ها",
    href: "/mags",
    id: "mags",
    icon: "cc-document-align-right",
  },
  {
    title: "تماس با ما",
    href: "/contact-us",
    id: "contact_us",
    icon: "cc-calling",
  },
  {
    title: "درباره ی ما",
    href: "/about-us",
    id: "about_us",
    icon: "cc-discount-shape-o",
  },
];

const NavigationBar = React.forwardRef((props, ref) => {
  const [newShowModalState, setNewShowModalState] = useState(false);
  const categoryOptionRef = useRef();
  const [newCategoryHeight, setNewCategoryHeight] = useState(0);
  const [newCategoryHeightState, setNewCategoryHeightState] = useState(true);
  const innerWidthNumber = useSelector(
    (number) => number.todo.windowInnerWidth,
  );

  const categoryPoppupDisplay = () => {
    setNewShowModalState(true);
  };
  const categoryPoppupHidden = () => {
    setNewShowModalState(false);
  };

  const categoryDisplayHandler = () => {
    setNewCategoryHeightState((prev) => !prev);
  };

  useEffect(() => {
    if (innerWidthNumber < 1000) {
      setNewCategoryHeight(categoryOptionRef.current.scrollHeight);
    }
  }, [innerWidthNumber]);

  return (
    <nav className="relative">
      <ul className={`${props.class_name} size868:text-14 text-12 mt-4`}>
        {(innerWidthNumber >= 1000 ? navBarItems : navBarItemsResponsive).map(
          (item, index) =>
            item.href && item.href.length > 0 ? (
              <li
                key={item.id + index}
                className="cursor-pointer text-[#0F0F0F] font-medium text-14 py-[10px]"
              >
                <Navlink href={item.href} styleState={props.styleState}>
                  <div className={"flex items-center gap-1"}>
                    <i className={`${item.icon} text-24`} />
                    <span> {item.title}</span>
                  </div>
                </Navlink>
              </li>
            ) : (
              <>
                {innerWidthNumber >= 1000 ? (
                  <li
                    key={item.id + index}
                    className="cursor-pointer text-[#0F0F0F] font-medium text-14"
                    onMouseEnter={categoryPoppupDisplay}
                    onMouseLeave={categoryPoppupHidden}
                  >
                    {item.title}
                  </li>
                ) : (
                  <li ref={ref}>
                    <div
                      className={`flex justify-between items-center py-[8px] pr-[8px] cursor-pointer`}
                      ref={ref}
                      onClick={categoryDisplayHandler}
                    >
                      <div
                        ref={ref}
                        className={"text-[#0F0F0F] font-medium text-14"}
                      >
                        <div className={"flex items-center gap-1"}>
                          <i className={`${item.icon} text-24`} />
                          <span> {item.title}</span>
                        </div>
                      </div>
                      <Image
                        src="/assets/icons/angle-left.svg"
                        alt={"left icon"}
                        className={`${
                          newCategoryHeightState
                            ? "rotate-0"
                            : "rotate-[-90deg]"
                        } transition-all duration-700`}
                        ref={ref}
                        width={20}
                        height={20}
                      />
                    </div>
                    <ul
                      className={`transition-all duration-700 overflow-hidden pr-[20px]`}
                      style={
                        newCategoryHeightState
                          ? { height: "0px" }
                          : { height: `${newCategoryHeight}px` }
                      }
                      ref={categoryOptionRef}
                    >
                      {props.childrenProps}
                    </ul>
                  </li>
                )}
              </>
            ),
        )}
        {!props.loginState && props.styleState === "habmergerMenue" && (
          <li>
            <UserPanelAttribute />
          </li>
        )}
      </ul>
      {newShowModalState && (
        <CategoryModal
          onMouseEnter={categoryPoppupDisplay}
          onMouseLeave={categoryPoppupHidden}
          childrenProps={props.childrenProps}
        />
      )}
    </nav>
  );
});

NavigationBar.displayName = "NavigationBar";

export default NavigationBar;
