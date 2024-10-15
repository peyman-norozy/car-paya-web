import { Fragment } from "react";
import Header from "@/layouts/HeaderLayout";
import Footer from "@/layouts/FooterLayout";
import localFont from "next/font/local";
import ServicesLayout from "@/layouts/ServicesLayout";
import { headerNavData } from "@/staticData/data";

const muckUpData = [1, 2, 3, 4];

// const YekanBakhFaNum = localFont({
//     src: [
//         {
//             path: "../public/assets/fonts/YekanBakhFaNum-Regular.ttf",
//         },
//         {
//             path: "../public/assets/fonts/YekanBakhFaNum-Bold.ttf",
//             weight: "900",
//         },
//         {
//             path: "../public/assets/fonts/YekanBakhFaNum-SemiBold.ttf",
//             weight: "400",
//         },
//         {
//             path: "../public/assets/fonts/YekanBakhFaNum-Light.ttf",
//             weight: "300",
//         },
//         {
//             path: "../public/assets/fonts/YekanBakhFaNum-Thin.ttf",
//             weight: "100",
//         },
//     ],
// });
const MainLayout = (props) => {
  return (
    <Fragment>
      <Header headerData={headerNavData}>
        {muckUpData.map((item, index) => (
          <li key={index}>ahmad</li>
        ))}
      </Header>
      <ServicesLayout>{props.children}</ServicesLayout>
      <Footer />
    </Fragment>
  );
};
export default MainLayout;
