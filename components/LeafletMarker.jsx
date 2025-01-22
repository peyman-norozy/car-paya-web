"use client";
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
          {props.agentData.map((item, index) => (
            <Marker
              position={item.map.split(",")}
              icon={customIcon}
              key={item.title + index}
            >
              <Popup>
                <div className="flex flex-col gap-4 items-center w-[200px] sm:w-[280px]">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-semibold text-[#0F0F0F]">
                      {item.title}
                    </span>
                    <div className="flex gap-1 items-center">
                      <span className="text-sm font-semibold">۴.۲</span>
                      <i className="cc-star text-base text-[#FDB022]" />
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-full gap-1">
                    <i className="i-location text-lg" />
                    <span className=" font-semibold text-xs text-[#0f0f0f]">
                      آدرس: {item.address}
                    </span>
                  </div>
                  <button
                    className="text-[#F66B34] border border-[#F66B34] bg-transparent w-fit py-2 px-8 text-sm font-bold flex items-center justify-center rounded-lg "
                    onClick={() => {
                      props.agentClickHandler(item);
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
