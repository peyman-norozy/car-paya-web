import SelectProduct from "@/components/serviceSelectionComponents/SelectProduct";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
const ProductSelection = async (props) => {
    const data = await getDataWithFullErrorRes(`/web/service-periodical?step=step-3&type=${props.searchParams.type}&city_id=${props.searchParams.city_id}&vehicle_tip_id=${props.searchParams.vehicle_tip_id}&service_location_id=${props.searchParams.service_location_id}&package_id=${props.searchParams.package_id}`);
    return ( 
        <div className="flex gap-4 xl:gap-10 max-w-[1676px] w-full m-auto mb-10 mt-5 lg:mt-28 px-4">
            <SelectProduct data={data.data}/>
        </div>
     );
}
 
export default ProductSelection;