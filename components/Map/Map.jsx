import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import React, { Fragment } from "react";

export default function Map(props) {
  const { position, zoom } = props;
  console.log(position);
  return (
    <Fragment>
      <MapContainer
        dragging={props.dragging}
        clickable={true}
        center={position}
        zoom={zoom}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        {props.search}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} draggable={props.draggable}></Marker>
      </MapContainer>
    </Fragment>
  );
}
