import React from "react";
import BatteriesAssisantPage from "@/components/BatteriesAssisantPage/BatteriesAssisantPage";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";

const Page = async (props) => {
  const fetchState = props.searchParams.selectTipState?.split(",")[1];
  const assistantData = await getDataWithFullErrorRes(`/web/batteries`, {
    tip_id: fetchState,
  });
  return <BatteriesAssisantPage data={assistantData} />;
};

export default Page;
