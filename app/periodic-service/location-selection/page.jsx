'use client'
import AddressSelection from "@/components/AddressSelection/AddressSelection";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import { useCallback, useEffect, useState } from "react";

const Dealership = (props) => {
  // const [data , setData] = useState()
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const a = await getData(`/web/service-periodical?step=step-1&type=${props.searchParams.type}&city_id=${props.searchParams.city_id}&vehicle_tip_id=${props.searchParams.vehicle_tip_id}`)
  //     setData(a)
  //   }
  //   fetchData();
  // },[])
  const [myLocationData, setMyLocationData] = useState([]);
  const [carCheckLocations, setCarCheckLocations] = useState([]);

  const timeData = useCallback(() => {
    (async () => {
      const fetchTimeData = await getDataWithFullErrorRes(`/web/service-periodical?step=step-1&type=${props.searchParams.type}&city_id=${props.searchParams.city_id}&vehicle_tip_id=${props.searchParams.vehicle_tip_id}`);
      if (props.searchParams.type === "FIXED") {
        setCarCheckLocations(fetchTimeData.data);
      } else if (props.searchParams.type === "MOVING") {
        console.log(fetchTimeData);
        setMyLocationData(fetchTimeData.data);
      }
    })();
  }, [
    props.searchParams.type,
    props.searchParams.privience_city_id,
    props.searchParams.time_id,
  ]);

  useEffect(() => {
    timeData();
  }, [props.searchParams.type]);
    return ( 
        <div className="lg:flex items-start gap-8 mt-1 lg:mt-[108px] max-w-[1772px] m-auto py-4 relative">
          <div className={"w-full lg:w-[calc(100%-424px)] md:gap-10 mr-auto flex flex-col gap-6"}>
            {
              {
                MOVING: (
                  <AddressSelection
                    setMyLocationData={setMyLocationData}
                    timeData={timeData}
                    myLocationData={myLocationData}
                    status={"MOVING"}
                  />
                ),
                FIXED: (
                  <AddressSelection
                    carCheckLocations={carCheckLocations}
                    status={"FIXED"}
                    timeData={timeData}
                  />
                ),
              }[props.searchParams.type]
            }
          </div>
      </div>
     );
}
 
export default Dealership;
