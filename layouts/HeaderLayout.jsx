"use client"

import DesktopHeader from "@/layouts/DesktopHeader";
import {useDispatch, useSelector} from "react-redux";
import {getWindowInnerWidth,setLoginState} from "@/store/todoSlice";
import {getCookie} from "cookies-next";
// import MobileBottomNav from "@/layouts/MobileBottomNav";
import ResponsiveHeader from "@/layouts/ResponsiveHeader";
import {Fragment, useEffect} from "react";

const Header = (props) => {

    const dispatch = useDispatch();
    const innerWidthNumber = useSelector(
        (number) => number.todo.windowInnerWidth,
    );

    useEffect(() => {
        dispatch(getWindowInnerWidth(window.innerWidth));
        const handleWindowResize = () => {
            dispatch(getWindowInnerWidth(window.innerWidth));
        };
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [dispatch]);

    useEffect(() => {
        const token = getCookie("Authorization");
        if (token !== undefined) {
            dispatch(setLoginState(false));
        } else {
            dispatch(setLoginState(true));
        }
    });

    return (
        <Fragment>
            {innerWidthNumber < 1000 ? (
                <ResponsiveHeader className={props.className} childrenProps={props.children}/>
            ) : (
                <DesktopHeader className={props.className} childrenProps={props.children}/>
            )}
        </Fragment>
    );
};

export default Header;
