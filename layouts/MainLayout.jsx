import {Fragment} from "react";
import Header from "@/layouts/HeaderLayout";
import Footer from "@/layouts/FooterLayout";
import localFont from "next/font/local";

const muckUpData=[1,2,3,4]

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
    return (
        <Fragment>
            <Header className={YekanBakhFaNum.className}>
                {
                    muckUpData.map((item,index)=><li key={index}>ahmad</li>)
                }
            </Header>
            <main className={`${YekanBakhFaNum.className} size1000:mt-[75px]`}>{props.children}</main>
            <Footer className={YekanBakhFaNum.className}/>
            
        </Fragment>
    );
};
export default MainLayout;
