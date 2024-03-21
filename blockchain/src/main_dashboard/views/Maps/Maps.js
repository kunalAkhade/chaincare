import React, { useEffect, useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function Maps() {
  const [loc, setLoc] = useState({ lt: 19.076, lg: 72.8777 });
  const CustomSkinMap = withScriptjs(
    withGoogleMap(() => {
      return (
        <GoogleMap
          defaultZoom={13}
          defaultCenter={{ lat: loc.lt, lng: loc.lg }}
          defaultOptions={{
            scrollwheel: false,
            zoomControl: true,
            styles: [
              {
                featureType: "water",
                stylers: [
                  { saturation: 43 },
                  { lightness: -11 },
                  { hue: "#0088ff" },
                ],
              },
              {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [
                  { hue: "#ff0000" },
                  { saturation: -100 },
                  { lightness: 99 },
                ],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#808080" }, { lightness: 54 }],
              },
              {
                featureType: "landscape.man_made",
                elementType: "geometry.fill",
                stylers: [{ color: "#ece2d9" }],
              },
              {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{ color: "#ccdca1" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#767676" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#ffffff" }],
              },
              { featureType: "poi", stylers: [{ visibility: "off" }] },
              {
                featureType: "landscape.natural",
                elementType: "geometry.fill",
                stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
              },
              { featureType: "poi.park", stylers: [{ visibility: "on" }] },
              {
                featureType: "poi.sports_complex",
                stylers: [{ visibility: "on" }],
              },
              { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
              {
                featureType: "poi.business",
                stylers: [{ visibility: "simplified" }],
              },
            ],
          }}
        >
          <Marker position={{ lat: loc.lt, lng: loc.lg }} />
        </GoogleMap>
      );
    })
  );
  const options = ["Supplier", "Manufacturer", "Wholesaler"];
  const list = [
    ["Supplier", { lt: 19.076, lg: 72.8777 }],
    ["Manufacturer", { lt: 28.7041, lg: 77.1025 }],
    ["Wholesaler", { lt: 19.0074, lg: 73.0953 }],
  ];
  const [val, setVal] = useState(options[0]);
  return (
    <>
      <Dropdown
        options={options}
        onChange={(e) => {
          console.log(e.value);
          list.map((i) => {
            console.log(i);
            if (i[0] === e.value) {
              console.log(loc);
              setLoc({ lt: i[1].lt, lg: i[1].lg });
            }
          });
          setVal(e.value);
        }}
        value={val}
      />
      <CustomSkinMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6WqMeNU1cT5SdPi5MhmUrAqKTjUaZNGY"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </>
  );
}
