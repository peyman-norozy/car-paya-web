import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useMemo, useState } from "react";
import DisplayPosition from "@/components/DisplayPosition";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// تعریف آیکون سفارشی
const customIcon = new L.Icon({
  iconUrl: "/custom-icon.png", // مسیر تصویر آیکون
  iconSize: [32, 32], // اندازه آیکون
  iconAnchor: [16, 32], // نقطه لنگر
  popupAnchor: [0, -32], // نقطه لنگر پاپ‌آپ
});

const LeafletMarker = (props) => {
  const [map, setMap] = useState(null);
  const position = [35.699738185272885, 51.33763714865729];

  const displayMap = useMemo(
    () => (
      <div
        className={`${
          props.justShowPosition && props.status === "FIXED"
            ? "h-[300px]"
            : "h-[200px]"
        } w-full relative`}
      >
        <MapContainer
          center={position}
          zoom={13}
          className={props.justShowPosition ? "w-full h-full" : ""}
          scrollWheelZoom={true}
          ref={setMap}
          dragging={props.dragging}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}.webp"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>Selected Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    ),
    [props.justShowPosition, props.status, props.dragging, position]
  );

  return (
    <div>
      {map && (
        <DisplayPosition
          map={map}
          setItarateMapData={props.setItarateMapData}
          setMapPosition={props.setMapPosition}
        />
      )}
      {displayMap}
    </div>
  );
};

export default LeafletMarker;
