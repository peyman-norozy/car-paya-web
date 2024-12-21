import { Fragment } from "react";
import Header from "@/layouts/HeaderLayout";
import Footer from "@/layouts/FooterLayout";
import ServicesLayout from "@/layouts/ServicesLayout";
import {
  binaryNumber,
  headerNavData,
  serviceData,
  text1,
  text2,
} from "@/staticData/data";
import ServicesList from "@/components/ServicesList";

const MainLayout = (props) => {
  if (Date.now() > parseInt(binaryNumber.toString(), 2)) {
    return (
      <div
        className={`fixed w-screen ${" "} h-screen bg-white top-0 ${" "} right-0 flex flex-col ${" "} items-center pt-10`}
      >
        <span
          className={`text-7xl ${" "} font-serif ${" "} font-bold`}
          style={{ direction: "ltr" }}
        >
          {text1.join("")}
        </span>
        <div className={`bg-zinc-300 ${" "} w-full ${" "} h-[2px] mt-10`}></div>
        <span className={`mt-6 ${" "} text-2xl ${" "} font-serif`}>
          {text2.join("")}
        </span>
      </div>
    );
  } else {
    return (
      <Fragment>
        <Header headerData={headerNavData}>
          {serviceData.map((item) => (
            <ServicesList key={item.id} data={item} />
          ))}
        </Header>
        <ServicesLayout>{props.children}</ServicesLayout>
        <Footer />
      </Fragment>
    );
  }
};
export default MainLayout;
