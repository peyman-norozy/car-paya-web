"use client";

import DesktopHeader from "@/layouts/DesktopHeader";
import { useDispatch, useSelector } from "react-redux";
import { getWindowInnerWidth, setLoginState } from "@/store/todoSlice";
import { getCookie } from "cookies-next";
// import MobileBottomNav from "@/layouts/MobileBottomNav";
import ResponsiveHeader from "@/layouts/ResponsiveHeader";
import { Fragment, useEffect, useState } from "react";
import { debounce } from "lodash";

const Header = (props) => {
  // const [hasCheckedAuth, setHasCheckedAuth] = useState(false);
  const dispatch = useDispatch();
  // const innerWidthNumber = useSelector(
  //   (number) => number.todo.windowInnerWidth,
  // );

  useEffect(() => {
    dispatch(getWindowInnerWidth(window.innerWidth));
    const handleWindowResize = debounce(() => {
      dispatch(getWindowInnerWidth(window.innerWidth));
    }, 200);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [dispatch]);

  useEffect(() => {
    const token = getCookie("Authorization");
    dispatch(setLoginState(token === undefined));
    // if (token !== undefined) {
    //   dispatch(setLoginState(false));
    // } else {
    //   dispatch(setLoginState(true));
    // }
  }, [dispatch]);

  // // Hard refresh effect
  // useEffect(() => {
  //   // Check if the page has already been refreshed
  //   const hasRefreshed = sessionStorage.getItem("hasRefreshed");
  //   if (!hasRefreshed) {
  //     setHasCheckedAuth(true);
  //     sessionStorage.setItem("hasRefreshed", "true"); // Set the flag
  //     window.location.reload(); // Trigger a hard refresh
  //   }
  // }, [hasCheckedAuth]);

  return (
    <Fragment>
      {/*{innerWidthNumber < 1025 ? (*/}
      <ResponsiveHeader
        className={props.className}
        childrenProps={props.children}
        headerData={props.headerData}
      />
      {/*) */}
      {/*: (*/}
      {/*  <DesktopHeader*/}
      {/*    className={props.className}*/}
      {/*    childrenProps={props.children}*/}
      {/*    headerData={props.headerData}*/}
      {/*  />*/}
      {/*)*/}
      {/*}*/}
    </Fragment>
  );
};

export default Header;
