import { Fragment } from "react";
import Header from "@/layouts/HeaderLayout";
import Footer from "@/layouts/FooterLayout";
import ServicesLayout from "@/layouts/ServicesLayout";
import { headerNavData, serviceData } from "@/staticData/data";
import Link from "next/link";
import ServicesList from "@/components/ServicesList";

const MainLayout = (props) => {
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
};
export default MainLayout;
