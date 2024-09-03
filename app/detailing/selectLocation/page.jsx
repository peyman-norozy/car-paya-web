"use client";
import AddressSelection from "@/components/AddressSelection/AddressSelection";
import { getDataWithFullErrorRes } from "@/utils/api-function-utils";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Dealership = () => {
  const [myLocationData, setMyLocationData] = useState([]);
  const [carCheckLocations, setCarCheckLocations] = useState([]);
  const [filter, setFilter] = useState([]);
  const searchParams = useSearchParams();

  const timeData = useCallback(
    (query) => {
      (async () => {
        const fetchTimeData = await getDataWithFullErrorRes(
          "/web/detailing?step=step-1",
          {
            city_id: JSON.parse(localStorage.getItem("city"))?.cityId,
            type: searchParams.get("type"),
            vehicle_tip_id: JSON.parse(localStorage.getItem("selectedVehicle"))
              ?.id,
            ...query,
          },
        );
        if (searchParams.get("type") === "FIXED") {
          setFilter(fetchTimeData.filter);
          setCarCheckLocations(fetchTimeData.data);
        } else if (searchParams.get("type") === "MOVING") {
          console.log(fetchTimeData);
          setMyLocationData(fetchTimeData.data);
        }
      })();
    },
    [searchParams],
  );

  useEffect(() => {
    timeData();
  }, [timeData]);

  console.log(carCheckLocations);
  return (
    <div className="lg:flex items-start gap-8 mt-3 max-w-[1772px] m-auto py-4 relative">
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
                status={"FIXED"}
                filter={filter}
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
