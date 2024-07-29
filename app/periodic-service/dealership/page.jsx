import DealershipCard from "@/components/Dealership/DealershipCard";
import { getData } from "@/utils/api-function-utils";

const Dealership = async (props) => {
    const data = await getData(`/web/service-periodical?step=step-1&type=${props.searchParams.type}&city_id=${props.searchParams.city_id}&vehicle_tip_id=${props.searchParams.vehicle_tip_id}`);
    return ( 
        <div className="lg:flex items-start gap-8 mt-1 lg:mt-[108px] max-w-[1772px] m-auto py-4 relative">
          <div className={"w-full lg:w-[calc(100%-424px)] md:gap-10 mr-auto flex flex-col gap-6"}>
            {data.data.map((item) =>(<DealershipCard data={item} params={props}/>))}
          </div>
      </div>
     );
}
 
export default Dealership;