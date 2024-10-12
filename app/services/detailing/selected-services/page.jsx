import React from "react";
import { getCurrentData } from "@/utils/api-function-utils";
import DetailingSelectService from "@/components/DetailingSelectService/DetailingSelectService";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";

const Page = async (props) => {
  const response = await getCurrentData(
    `/web/detailing?step=step-2&type=${props.searchParams.type}&city_id=${props.searchParams.city_id}&vehicle_tip_id=${props.searchParams.selectTipState.split(",")[1]}&service_location_id=${props.searchParams.service_location_id}`,
  );
  if (!response.success) {
    console.error("Error fetching data:", response.error);
    if (response.error.status === 422) {
      return (
        <div className={"flex flex-col items-center mb-10"}>
          <div
            className={
              "flex items-center gap-2 size752:gap-[16px] text-[#0E0E0E] w-full mt-4"
            }
          >
            <Link
              href={`/services/detailing/selectLocation?type=${props.searchParams.type}&&selectTipState=${props.searchParams.selectTipState}&city_id=${props.searchParams.city_id}`}
              className={"flex items-center gap-1"}
            >
              <i className={"cc-arrow-right text-24 cursor-pointer"} />
              <p className={"text-14 size752:text-16 w-full font-medium"}>
                انتخاب سرویس
              </p>
            </Link>
          </div>
          <div className={"w-[226px] h-[190px]"}>
            <Image
              src={"/assets/icons/empty.svg"}
              alt={"basket icon"}
              width={226}
              height={190}
            />
          </div>
          <p>{response.error.data.message}</p>
        </div>
      );
    } else {
      return <div>you have error</div>;
    }
  }

  const data = response.data.data;

  return (
    <div className="flex gap-10 max-w-[1676px] w-full px-2 sm:px-4 m-auto mb-10 mt-4 min-h-screen">
      <DetailingSelectService data={data} />
    </div>
  );
};

export default Page;
