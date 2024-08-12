import React from "react";
import BatteriesAssisantPage from "@/components/BatteriesAssisantPage/BatteriesAssisantPage";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";

const Page = async (props) => {
  const fetchState = props.filter?.selectTipState?.split(",")[1];

  console.log(
    `/web/assistant_battery/${props.searchParams.selectTipState !== null ? props.searchParams.selectTipState.split(",")[1] : ""}`,
    "sjjsjjdjdjgjjgjghh",
  );
  const assistantData = await getDataWithFullErrorRes(`/web/batteries`, {
    tip_id: fetchState,
  });
  return <BatteriesAssisantPage data={assistantData} />;
};

export default Page;
