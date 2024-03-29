import {Fragment} from "react";
// import Header from "@/layouts/HeaderLayout";
// import ResponsiveHeader from "@/layouts/ResponsiveHeader";
// import Footer from "@/layouts/FooterLayout";
import localFont from "next/font/local";
// import {useDispatch, useSelector} from "react-redux";
// import {getWindowInnerWidth, setLoginState} from "@/store/HandleSlice";
// import {getCookie} from "cookies-next";
// import MobileBottomNav from "@/layouts/MobileBottomNav";

const YekanBakhFaNum = localFont({
    src: [
        {
            path: "../public/assets/fonts/YekanBakhFaNum-Regular.ttf",
        },
        {
            path: "../public/assets/fonts/YekanBakhFaNum-Bold.ttf",
            weight: "900",
        },
        {
            path: "../public/assets/fonts/YekanBakhFaNum-SemiBold.ttf",
            weight: "400",
        },
        {
            path: "../public/assets/fonts/YekanBakhFaNum-Light.ttf",
            weight: "300",
        },
        {
            path: "../public/assets/fonts/YekanBakhFaNum-Thin.ttf",
            weight: "100",
        },
    ],
});
const MainLayout = (props) => {
    // const dispatch = useDispatch();
    // const innerWidthNumber = useSelector(
    //     (number) => number.todo.windowInnerWidth,
    // );
    //
    // useEffect(() => {
    //     dispatch(getWindowInnerWidth(window.innerWidth));
    //     const handleWindowResize = () => {
    //         dispatch(getWindowInnerWidth(window.innerWidth));
    //     };
    //     window.addEventListener("resize", handleWindowResize);
    //     return () => {
    //         window.removeEventListener("resize", handleWindowResize);
    //     };
    // }, [dispatch]);
    //
    // useEffect(() => {
    //     const token = getCookie("Authorization");
    //     if (token !== undefined) {
    //         dispatch(setLoginState(false));
    //     } else {
    //         dispatch(setLoginState(true));
    //     }
    // });

    return (
        <Fragment>
            {/*{innerWidthNumber < 1000 ? (*/}
            {/*    <ResponsiveHeader className={YekanBakhFaNum.className}/>*/}
            {/*) : (*/}
            {/*    <Header className={YekanBakhFaNum.className}/>*/}
            {/*)}*/}
            <main className={`${YekanBakhFaNum.className} size1000:mt-[75px]`}>{props.children}</main>
            {/*<Footer className={YekanBakhFaNum.className}/>*/}
            {/*{innerWidthNumber < 1000 && <MobileBottomNav/>}*/}
        </Fragment>
    );
};
export default MainLayout;
