"use client";
import AddressSelection from "@/components/AddressSelection/AddressSelection";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const Dealership = (props) => {
  const [myLocationData, setMyLocationData] = useState([]);
  const [carCheckLocations, setCarCheckLocations] = useState([]);
  const [filter, setFilter] = useState([]);
  const searchParams = useSearchParams();
  const timeData = useCallback(
    (query) => {
      (async () => {
        const fetchTimeData = await getDataWithFullErrorRes(
          `/web/service-periodical?step=step-1`,
          {
            city_id: JSON.parse(localStorage.getItem("city"))?.cityId,
            type: searchParams.get("type"),
            vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))
              ?.id,
          },
        );

        if (searchParams.get("type") === "FIXED") {
          setFilter(fetchTimeData.filter);
          console.log(fetchTimeData);
          setCarCheckLocations(fetchTimeData.data);
        } else if (searchParams.get("type") === "MOVING") {
          setMyLocationData(fetchTimeData.data);
        }
      })();
    },
    [
      searchParams.get("type"),
      searchParams.get("city_id"),
      searchParams.get("time_id"),
    ],
  );

  useEffect(() => {
    timeData();
  }, [searchParams.get("type")]);

  console.log(carCheckLocations);
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
          }[searchParams.get("type")]
        }
      </div>
    </div>
  );
};

export default Dealership;
