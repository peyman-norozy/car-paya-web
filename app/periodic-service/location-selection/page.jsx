"use client";
import AddressSelection from "@/components/AddressSelection/AddressSelection";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import { useCallback, useEffect, useState } from "react";

const Dealership = (props) => {
  const [myLocationData, setMyLocationData] = useState([]);
  const [carCheckLocations, setCarCheckLocations] = useState([]);
  const [filter , setFilter] = useState([])
  const timeData = useCallback((query) => {
    (async () => {
      const fetchTimeData = await getDataWithFullErrorRes(
        `/web/service-periodical?step=step-1&type=${props.searchParams.type}&city_id=${props.searchParams.city_id}&vehicle_tip_id=${props.searchParams.vehicle_tip_id}${query?query:""}`,
      );
      if (props.searchParams.type === "FIXED") {
        setFilter(fetchTimeData.filter)
        setCarCheckLocations(fetchTimeData.data);
      } else if (props.searchParams.type === "MOVING") {
        setMyLocationData(fetchTimeData.data);
      }
    })();
  }, [
    props.searchParams.type,
    props.searchParams.city_id,
    props.searchParams.time_id,
  ]);

  useEffect(() => {
    timeData();
  }, [props.searchParams.type]);
  return (
    <div className="lg:flex items-start gap-8 mt-1 lg:mt-[108px] max-w-[1772px] m-auto py-4 relative">
      <div
        className={
          "w-full lg:w-[calc(100%-424px)] md:gap-10 mr-auto flex flex-col gap-6"
        }
      >
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
                filter={filter}
                status={"FIXED"}
                timeData={timeData}
              />
            ),
          }[props.searchParams.type]
        }
      </div>
    </div>
  );
};

export default Dealership;
