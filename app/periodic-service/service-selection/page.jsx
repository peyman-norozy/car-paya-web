import SelectService from "@/components/serviceSelectionComponents/SelectService";
import { getCurrentData } from "@/utils/api-function-utils";
const serviceSelection = async (props) => {
  const data = await getCurrentData(
    `/web/service-periodical?step=step-2&type=${props.searchParams.type}&city_id=${props.searchParams.city_id}&vehicle_tip_id=${props.searchParams.selectTipState.split(",")[1]}&service_location_id=${props.searchParams.service_location_id}`,
  );

  if (!data.success) {
    console.error("Error fetching data:", data.error);
    if (data.error.status === 422) {
      return (
        <div className={"mt-[140px] mr-[420px] min-h-[calc(100vh-300px)]"}>
          {data.error.data.message}
        </div>
      );
    } else if (data.error.status === 400) {
      return (
        <div className="mt-[140px] w-full text-center min-h-[calc(100vh-300px)]">
          پکیج یافت نشد
        </div>
      );
    } else {
      return (
        <div className="mt-[140px] w-full text-center min-h-[calc(100vh-300px)]">
          you have error {data.error.status}
        </div>
      );
    }
  }

  return (
    <div className="flex gap-10 max-w-[1676px] w-full px-2 sm:px-4 m-auto mb-10 mt-4 min-h-screen">
      <SelectService data={data.data} params={props.searchParams}/>
    </div>
  );
};

export default serviceSelection;
