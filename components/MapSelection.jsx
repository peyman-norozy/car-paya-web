import { useMemo } from "react";
import dynamic from "next/dynamic";
export default function MapSelection(props) {
  const zoom = 13;

  let position;
  if (props.location) {
    position = props.location.split(",");
    console.log("hi");
  } else {
    position = [35.699686, 51.338071];
  }
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );

  return (
    <div className="h-full w-full">
      <Map
        draggable={props.draggable}
        dragging={props.dragging}
        center={position}
        zoom={zoom}
        position={position}
        search={props.search}
        setLocation={props.setLocation}
        location={props.location}
      />
    </div>
  );
}
