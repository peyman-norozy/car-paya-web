import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useMemo, useState } from "react";
import Image from "next/image";
import DisplayPosition from "@/components/DisplayPosition";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { getData } from "@/utils/api-function-utils";
import { API_PATHS } from "@/configs/routes.config";
import { useRouter } from "next/navigation";

("23.234234,54.6456456");
const MapDirection = (props) => {
  const [map, setMap] = useState(null);
  const position = props.editData
    ? props.editData.split(",").map((item) => +item)
    : [35.676376622245996, 51.38242904089495];
  const router = useRouter();

  const mapSearchHandler = async () => {
    console.log("/search/map?text=dsf&lat=32234&lon=234324234");
    const addressData = await getData(API_PATHS.SEARCHMAP);
    if (addressData.status === "success") {
      console.log(addressData);
    } else if (addressData.status === 404) {
      console.log(addressData);
    } else if (addressData.status === 401) {
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
        </MapContainer>
      </div>
    ),
    [props.status],
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
