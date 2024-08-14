import React from "react";
import { getCurrentData } from "@/utils/api-function-utils";
import DetailingSelectService from "@/components/DetailingSelectService/DetailingSelectService";
import { redirect } from "next/dist/server/api-utils";

const Page = async (props) => {
  const response = await getCurrentData(
    `/web/detailing?step=step-2&type=${props.searchParams.type}&city_id=${props.searchParams.city_id}&vehicle_tip_id=${props.searchParams.selectTipState.split(",")[1]}&service_location_id=${props.searchParams.service_location_id}`,
  );

  if (!response.success) {
    console.error("Error fetching data:", response.error);
    if (response.error.status === 422) {
      return (
        <div className={"mt-[140px] mr-[420px]"}>
          {response.error.data.message}
        </div>
      );
    } else {
      return <div>you have error</div>;
    }
  }

  const data = response.data.data;

  return (
    <div className="flex gap-10 max-w-[1676px] w-full px-2 sm:px-4 m-auto mb-10 mt-5 lg:mt-28 min-h-screen">
      <DetailingSelectService data={data} />
    </div>
  );
};

export default Page;
