import SelectService from "@/components/serviceSelectionComponents/SelectService";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
const serviceSelection = async (props) => {
    const data = await getDataWithFullErrorRes(`/web/service-periodical?step=step-2&type=${props.searchParams.type}&city_id=${props.searchParams.city_id}&vehicle_tip_id=${props.searchParams.vehicle_tip_id}&service_location_id=${props.searchParams.service_location_id}`);
    return ( 
        <div className="flex gap-10 max-w-[1676px] w-full px-2 sm:px-4 m-auto mb-10 mt-5 lg:mt-28 min-h-screen">
            {(data.response.status === 200 ||data.response.status === 201)?<SelectService data={data}/>:
            <div className="flex flex-col gap-6 mx-auto mt-4 items-center">
                <span className="text-2xl font-bold">error {data.response.status}</span>
                <span className="text-xl font-medium">{data.response.data.message}</span>
            </div>
            }
        </div>
     );
}
 
export default serviceSelection;