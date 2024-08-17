import SelectProduct from "@/components/serviceSelectionComponents/SelectProduct";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
const ProductSelection = async (props) => {
    const data = await getDataWithFullErrorRes(`/web/service-periodical?step=step-3&type=${props.searchParams.type}&city_id=${props.searchParams.city_id}&vehicle_tip_id=${props.searchParams.vehicle_tip_id}&service_location_id=${props.searchParams.service_location_id}&package_id=${props.searchParams.package_id}`);
    if (!data.success) {
        console.error("Error fetching data:", data.error);
        if (data.error.status === 422) {
          return (
            <div className={"mt-[140px] mr-[420px] min-h-[calc(100vh-300px)]"}>
              {data.error.data.message}
            </div>
          );
        }else if(data.error.status === 400){
          return <div className="mt-[140px] mr-[420px] min-h-[calc(100vh-300px)]">پکیج یافت نشد</div>;
        }else {
          return <div className="mt-[140px] mr-[420px] min-h-[calc(100vh-300px)]">you have error {data.error.status}</div>;
        }
      }
    return ( 
        <div className="flex gap-4 xl:gap-10 max-w-[1676px] w-full m-auto mb-10 mt-5 lg:mt-28 px-4">
            <SelectProduct data={data.data}/>
        </div>
     );
}
 
export default ProductSelection;