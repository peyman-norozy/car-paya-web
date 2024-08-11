import React from "react";
import { getData, getDataWithFullErrorRes } from "@/utils/api-function-utils";
import ServicesPage from "@/components/ServicesPage";

const Page = (props) => {
  console.log(props, "jjjjjjrrrrrrrrrr");

  const ServicesPageData = async () => {
    const fetchData = await getDataWithFullErrorRes(
      "/web/detailing?step=step-1",
      {
        city_id: props.searchParams.city_id,
        type: props.searchParams.type,
        vehicle_tip_id: props.searchParams.city_id,
      },
    );
    return <ServicesPage {...fetchData} />;
  };

  return <ServicesPageData />;
};

export default Page;
