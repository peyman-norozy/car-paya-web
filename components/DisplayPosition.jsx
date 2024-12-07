import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { getData } from "@/utils/api-function-utils";
import { API_PATHS } from "@/configs/routes.config";
function DisplayPosition(props) {
  const { map } = props;
  // const [position, setPosition] = useState(() => map.getCenter());

  const onMove = useCallback(async () => {
    const newPosition = map.getCenter();
    // setPosition(newPosition);
    let mapLocation = `${newPosition.lat.toFixed(6)},${newPosition.lng.toFixed(6)}`;
    const lat = mapLocation.split(",")[0];
    const lon = mapLocation.split(",")[1];
    const fetchData3 = await getData(`/web${API_PATHS.ADDRESS}`, {
      lat: lat,
      lon: lon,
    });
    props.setItarateMapData && props.setItarateMapData(fetchData3.data);
    props.setMapPosition && props.setMapPosition(mapLocation);
  }, [props, map]);

  useEffect(() => {
    map.invalidateSize(true);
    map.on("moveend", onMove);
    return () => {
      map.off("moveend", onMove);
    };
  }, [map, onMove]);
}

export default DisplayPosition;
