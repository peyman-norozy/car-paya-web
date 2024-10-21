import React from "react";
import BatteriesAssisantPage from "@/components/BatteriesAssisantPage/BatteriesAssisantPage";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";

const Page = async (props) => {
  const fetchState = props.searchParams.selectTipState?.split(",")[1];

  const assistantData = await getDataWithFullErrorRes(`/web/batteries`, {
    tip_id: fetchState,
    attribute_slug: props.searchParams.attribute_slug,
    attribute_value: props.searchParams.attribute_value,
  });
  return <BatteriesAssisantPage data={assistantData} />;
};

export default Page;
