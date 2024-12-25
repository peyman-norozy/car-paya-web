import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useMemo, useState } from "react";
import DisplayPosition from "@/components/DisplayPosition";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import pin from "@/public/assets/icons/placeholder.svg";
import Image from "next/image";
import { functions } from "lodash";
import useSetQuery from "@/hook/useSetQuery";
// تعریف آیکون سفارشی
const customIcon = new L.Icon({
  iconUrl: "/assets/icons/placeholder.svg", // مسیر تصویر آیکون
  iconSize: [32, 32], // اندازه آیکون
  iconAnchor: [16, 32], // نقطه لنگر
  popupAnchor: [0, -32], // نقطه لنگر پاپ‌آپ
});

const LeafletMarker = (props) => {
  const [map, setMap] = useState(null);
  const setQuery = useSetQuery();
  const position = [35.699738185272885, 51.33763714865729];

  function agentClickHandler(id, address_id, title, name) {
    sessionStorage.setItem(
      "periodicCart",
      JSON.stringify({
        location_id: id,
        location_address_id: address_id,
        location_title: title,
        location_name: name,
      })
    );
    setQuery.updateQueryParams(
      { service_location_id: id, type: "FIXED" },
      "/periodic-service/service-selection"
    );
  }

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
          {props.agentData.map((item) => (
            <Marker position={item.map.split(",")} icon={customIcon}>
              <Popup>
                <div className="flex flex-col gap-2 items-center">
                  <span>{item.title}</span>
                  <button
                    className="text-[#F66B34] border border-[#F66B34] bg-transparent w-fit py-1 px-3 text-sm font-bold flex items-center justify-center rounded-lg "
                    onClick={() => {
                      agentClickHandler(
                        item.id,
                        item.address_id,
                        item.address,
                        item.title
                      );
                    }}
                  >
                    انتخاب
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
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
