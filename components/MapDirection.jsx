import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import DisplayPosition from "@/components/DisplayPosition";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { getData } from "@/utils/api-function-utils";
import { API_PATHS } from "@/configs/routes.config";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";

("23.234234,54.6456456");

const LocateButton = () => {
  const map = useMap();

  const handleLocate = () => {
    map.locate({ setView: true, maxZoom: 16 });

    map.on("locationerror", () => {
      alert("Unable to retrieve your location");
    });
  };

  return (
    <button
      onClick={handleLocate}
      className="i-location absolute bottom-[10px] right-[10px] z-[1000] size-8 flex items-center justify-center rounded-[4px] border cursor-pointer bg-white text-xl"
    ></button>
  );
};

const MapDirection = (props) => {
  const [map, setMap] = useState(null);
  const position = props.editData
    ? props.editData.split(",").map((item) => +item)
    : [35.676376622245996, 51.38242904089495];
  const router = useRouter();

  const mapSearchHandler = async () => {
    const addressData = await getData(API_PATHS.SEARCHMAP);
    if (addressData.status === "success") {
      console.log(addressData);
    } else if (addressData.status === 404) {
      console.log(addressData);
    } else if (addressData.status === 401) {
      nProgress.start();
      router.push("login");
    }
  };

  const displayMap = useMemo(
    () => (
      <div
        className={`${props.justShowPosition && props.status === "FIXED" ? "h-[300px]" : "h-[200px]"} w-full relative`}
      >
        <div
          className={"absolute m-auto right-0 left-0 top-1 z-[999] w-fit h-fit"}
        >
          {!props.justShowPosition && (
            <input
              type={"text"}
              className={
                "border bg-white outline-0 w-[300px] h-[36px] text-[14px] rounded-lg pr-1"
              }
              placeholder={"جستوجو..."}
              onChange={mapSearchHandler}
            />
          )}
        </div>
        {!props.justShowPosition && (
          <Image
            src={"/assets/icons/pin.png"}
            alt={"pin icon"}
            width={12}
            height={22}
            className="absolute top-[calc(50%-22px)] left-[calc(50%-12px)] translate-x-1/2 translate-y-1/2 z-[999]"
          />
        )}
        <MapContainer
          center={position}
          zoom={13}
          className={`${props.justShowPosition ? "w-full h-full" : ""}`}
          scrollWheelZoom={true}
          ref={setMap}
          dragging={props.dragging}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}.webp"
          />
          <TileLayer url="https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}.webp" />
          {/*<TileLayer*/}
          {/*    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/}
          {/*    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
          {/*/>*/}
          {/*<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
          {/*<SetViewOnClick animateRef={animateRef} />*/}
          {props.justShowPosition && (
            <Marker position={position}>
              <Popup>{/*<span>This is marker 2!</span>*/}</Popup>
            </Marker>
          )}
          <LocateButton />
        </MapContainer>
      </div>
    ),
    [props.status]
  );

  return (
    <div>
      {map ? (
        <DisplayPosition
          map={map}
          setItarateMapData={props.setItarateMapData}
          setMapPosition={props.setMapPosition}
        />
      ) : null}
      {displayMap}
    </div>
  );
};

export default MapDirection;
